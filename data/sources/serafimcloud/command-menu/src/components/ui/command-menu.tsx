'use client';

/**
 * CommandMenu — a pill that grows into a command panel on hover, tap or ⌘K.
 *
 * It carries a rotating status line (role, availability, local time, whatever you
 * pass), keyboard navigation with arrows or j/k, Escape and click-outside to
 * close, and an optional theme row. Sections are yours: pass anything selectable.
 *
 * It does not position itself. Wrap it in your own container, e.g.
 * `<div className="fixed top-8 z-50 flex w-full justify-center">`.
 */

import { type ReactNode, useEffect, useLayoutEffect, useRef, useState } from 'react';

export type CommandMenuItem = {
	name: string;
	icon?: ReactNode;
	/** Draws an outline, for things like the current theme. */
	active?: boolean;
	/** Centers the label, used by grid sections. */
	centered?: boolean;
	onSelect(): void;
};

export type CommandMenuSection = {
	label: string;
	/** Lays the items out in three columns instead of a list. */
	grid?: boolean;
	items: CommandMenuItem[];
};

export type ThemeValue = 'light' | 'dark' | 'system';

type Props = {
	title: ReactNode;
	avatar?: ReactNode;
	/** Cycles through these one at a time, pausing while the menu is open. */
	status?: ReactNode[];
	statusInterval?: number;
	sections?: CommandMenuSection[];
	/** Adds a theme row with sun / moon / system icons. */
	theme?: ThemeValue;
	onThemeChange?: (theme: ThemeValue) => void;
	labels?: { theme?: string; light?: string; dark?: string; system?: string };
	/** Combined with ⌘ on Apple platforms and Ctrl elsewhere. */
	shortcutKey?: string;
	id?: string;
	className?: string;
};

const TRANSITION = 400;

const KEYFRAMES = `
@keyframes cm-fly-in {
	from { opacity: 0; transform: translateY(8px); filter: blur(2px); }
}`;

export default function CommandMenu({
	title,
	avatar,
	status = [],
	statusInterval = 4000,
	sections = [],
	theme,
	onThemeChange,
	labels,
	shortcutKey = 'k',
	id = 'command-menu',
	className = '',
}: Props) {
	const [isApple, setIsApple] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [selected, setSelected] = useState(0);
	const [statusIndex, setStatusIndex] = useState(0);
	const isTransitioning = useRef(false);

	const allSections: CommandMenuSection[] = [...sections];
	if (onThemeChange) {
		allSections.push({
			label: labels?.theme ?? 'Theme',
			grid: true,
			items: (['light', 'dark', 'system'] as const).map((value) => ({
				name: labels?.[value] ?? value[0].toUpperCase() + value.slice(1),
				icon: { light: <SunIcon />, dark: <MoonIcon />, system: <SystemIcon /> }[value],
				centered: true,
				active: theme === value,
				onSelect: () => onThemeChange(value),
			})),
		});
	}
	const items = allSections.flatMap((section) => section.items);

	// The keyboard handlers read items and selection through refs. Depending on
	// `items` re-ran the effect on every render, and its "start at the first item"
	// line then fought every hover, snapping the selection back to the top.
	const itemsRef = useRef(items);
	itemsRef.current = items;
	const selectedRef = useRef(selected);
	selectedRef.current = selected;

	/** Geometry of the highlight that slides between items, in panel coordinates. */
	const [highlight, setHighlight] = useState<{
		top: number;
		left: number;
		width: number;
		height: number;
	}>();
	/** The first highlight appears in place; later ones travel. */
	const [highlightMoves, setHighlightMoves] = useState(false);
	const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

	// Offsets are read against the panel, which is the offsetParent of both the
	// list items and the theme grid, so one element can travel between the two.
	useLayoutEffect(() => {
		if (!isOpen || selected < 0) {
			setHighlightMoves(false);
			return;
		}
		const element = itemRefs.current[selected];
		if (!element) return;
		setHighlight((previous) => {
			setHighlightMoves(previous !== undefined);
			return {
				top: element.offsetTop,
				left: element.offsetLeft,
				width: element.offsetWidth,
				height: element.offsetHeight,
			};
		});
	}, [isOpen, selected]);

	useEffect(() => {
		setIsApple(/Mac|iPhone|iPad|iPod/.test(navigator.platform));
	}, []);

	// Rotating status line, paused while open or while the tab is hidden.
	useEffect(() => {
		if (isOpen || status.length < 2) return;
		const interval = setInterval(() => {
			if (!document.hidden) setStatusIndex((value) => (value + 1) % status.length);
		}, statusInterval);
		return () => clearInterval(interval);
	}, [isOpen, status.length, statusInterval]);

	// The shortcut toggles the menu; the flag keeps hover from fighting it.
	useEffect(() => {
		let timeout: ReturnType<typeof setTimeout>;

		function onKeyDown(event: KeyboardEvent) {
			if (event.key !== shortcutKey || !(isApple ? event.metaKey : event.ctrlKey)) return;
			event.preventDefault();
			setIsOpen((value) => !value);
			isTransitioning.current = true;
			clearTimeout(timeout);
			timeout = setTimeout(() => (isTransitioning.current = false), TRANSITION);
		}

		window.addEventListener('keydown', onKeyDown);
		return () => {
			clearTimeout(timeout);
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [isApple, shortcutKey]);

	useEffect(() => {
		if (!isOpen) return;
		setSelected(window.innerWidth < 480 ? -1 : 0);

		function onKeyDown(event: KeyboardEvent) {
			const count = itemsRef.current.length;
			const move = (delta: number) => setSelected((value) => (value + delta + count) % count);

			switch (event.key) {
				case 'ArrowUp':
				case 'k':
					event.preventDefault();
					move(-1);
					break;
				case 'ArrowDown':
				case 'j':
					event.preventDefault();
					move(1);
					break;
				case 'Enter':
					event.preventDefault();
					itemsRef.current[selectedRef.current]?.onSelect();
					break;
				case 'Escape':
					event.preventDefault();
					setIsOpen(false);
					break;
			}
		}

		function onClick(event: MouseEvent) {
			if (!(event.target as HTMLElement).closest(`#${id}`)) setIsOpen(false);
		}

		window.addEventListener('keydown', onKeyDown);
		window.addEventListener('click', onClick);
		return () => {
			window.removeEventListener('keydown', onKeyDown);
			window.removeEventListener('click', onClick);
		};
	}, [isOpen, id]);

	return (
		<div
			id={id}
			role="presentation"
			onMouseEnter={() => !isTransitioning.current && setIsOpen(true)}
			onMouseLeave={() => !isTransitioning.current && setIsOpen(false)}
			onTouchEnd={(event) => {
				event.preventDefault();
				if (!isTransitioning.current) setIsOpen((value) => !value);
			}}
			className={`w-full rounded-[1.6rem] bg-white/90 text-zinc-800 ring ring-zinc-900/10 backdrop-blur-sm transition-all duration-400 ease-out dark:bg-zinc-800/90 dark:text-zinc-100 dark:ring-zinc-100/10 ${
				isOpen
					? 'max-w-[min(400px,calc(100vw-4rem))] rounded-b-xl shadow-2xl'
					: 'max-w-xs shadow-lg'
			} ${className}`}
		>
			<style>{KEYFRAMES}</style>

			<div className="flex items-center overflow-hidden p-1.5">
				{avatar}
				<div className="flex w-full items-center justify-between pr-1.5 pl-2 whitespace-nowrap">
					<div className="flex w-full flex-col leading-5">
						<span className="font-medium">{title}</span>
						{status.length > 0 && (
							<span className="relative w-full text-sm text-zinc-500 dark:text-zinc-400">
								<span className="opacity-0" aria-hidden="true">
									_
								</span>
								<span
									key={statusIndex}
									style={{ animation: 'cm-fly-in 0.5s ease-out backwards' }}
									className="absolute inset-0 flex items-center gap-1"
								>
									{status[statusIndex]}
								</span>
							</span>
						)}
					</div>
					<kbd className="ml-auto flex items-center gap-0.5 rounded-md bg-zinc-900/5 p-1 font-sans text-sm text-zinc-500 dark:bg-zinc-100/10 dark:text-zinc-400">
						<span className={isApple ? 'text-base leading-none' : 'leading-none'}>
							{isApple ? '⌘' : 'Ctrl'}
						</span>
						{shortcutKey.toUpperCase()}
					</kbd>
				</div>
			</div>

			<div
				className={`grid transition-all duration-400 ease-out ${
					isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
				}`}
			>
				<div className="overflow-hidden">
					<div className="relative flex flex-col gap-1.5 p-1.5 pt-0">
						{/* One highlight for the whole panel: it slides between the section
						    items and even diagonally into the theme row. */}
						{highlight && (
							<div
								aria-hidden="true"
								style={{
									transform: `translate3d(${highlight.left}px, ${highlight.top}px, 0)`,
									width: highlight.width,
									height: highlight.height,
								}}
								className={`pointer-events-none absolute top-0 left-0 rounded-lg bg-zinc-900/6 dark:bg-zinc-100/10 ${
									highlightMoves
										? 'transition-[transform,width,height,opacity] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]'
										: 'transition-opacity duration-150'
								} ${isOpen && selected >= 0 ? 'opacity-100' : 'opacity-0'}`}
							/>
						)}
						{allSections.map((section) => (
							<div key={section.label} className="contents">
								<hr className="-mx-1.5 border-zinc-900/10 dark:border-zinc-100/10" />
								<span className="pt-1 pl-2 text-sm text-zinc-500 dark:text-zinc-400">
									{section.label}
								</span>
								<div className={section.grid ? 'grid grid-cols-3 gap-1.5' : 'contents'}>
									{section.items.map((item) => {
										const index = items.indexOf(item);
										return (
											<button
												key={item.name}
												ref={(node) => {
													itemRefs.current[index] = node;
												}}
												type="button"
												onMouseEnter={() => setSelected(index)}
												onClick={item.onSelect}
												className={`relative z-10 flex cursor-pointer items-center gap-2 rounded-lg p-2 ${
													item.centered ? 'justify-center' : ''
												} ${
													item.active ? 'outline outline-zinc-900/10 dark:outline-zinc-100/20' : ''
												}`}
											>
												{item.icon}
												{item.name}
											</button>
										);
									})}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

function SunIcon() {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5">
			<circle cx="12" cy="12" r="4" />
			<path
				strokeLinecap="round"
				d="M12 3v2m0 14v2M3 12h2m14 0h2M5.6 5.6 7 7m10 10 1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4"
			/>
		</svg>
	);
}

function MoonIcon() {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5">
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M21 13.2A8.5 8.5 0 1 1 10.8 3a7 7 0 0 0 10.2 10.2Z"
			/>
		</svg>
	);
}

function SystemIcon() {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5">
			<rect x="3" y="4" width="18" height="12" rx="2" />
			<path strokeLinecap="round" d="M9 20h6m-3-4v4" />
		</svg>
	);
}
