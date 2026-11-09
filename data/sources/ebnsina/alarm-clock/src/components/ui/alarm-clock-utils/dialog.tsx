import { useEffect, useId, useRef } from 'react';
import type { ReactNode } from 'react';
import { Cancel01Icon } from '@hugeicons/core-free-icons';
import Icon from './icon';
import { useScrollEdges } from './use-scroll-edges';

interface DialogProps {
	open?: boolean;
	title: string;
	description?: string;
	closeLabel?: string;
	side?: 'center' | 'start' | 'end';
	dismissible?: boolean;
	children?: ReactNode;
	footer?: ReactNode;
	className?: string;
	onClose?: () => void;
}

export default function Dialog({
	open = false,
	title,
	description,
	closeLabel = 'Close',
	side = 'center',
	dismissible = true,
	children,
	footer,
	className,
	onClose
}: DialogProps) {
	const id = useId();
	const dialogRef = useScrollEdges<HTMLDialogElement>();
	const pressedBackdrop = useRef(false);

	useEffect(() => {
		const dialog = dialogRef.current;
		if (!dialog) return;
		if (open && !dialog.open) {
			dialog.showModal();
			if (!dialog.querySelector('[autofocus]')) dialog.focus();
		} else if (!open && dialog.open) {
			dialog.close();
		}
	}, [open]);

	useEffect(() => {
		const dialog = dialogRef.current;
		if (!dialog) return;
		const handleClose = () => onClose?.();
		dialog.addEventListener('close', handleClose);
		return () => dialog.removeEventListener('close', handleClose);
	}, [onClose]);

	return (
		<dialog
			ref={dialogRef}
			tabIndex={-1}
			className={['dialog', side !== 'center' && 'sheet', side === 'end' && 'end', className]
				.filter(Boolean)
				.join(' ')}
			aria-labelledby={`${id}-title`}
			aria-describedby={description ? `${id}-desc` : undefined}
			data-fade-over=""
			onPointerDown={(e) => (pressedBackdrop.current = e.target === dialogRef.current)}
			onClick={(e) => {
				if (dismissible && pressedBackdrop.current && e.target === dialogRef.current) {
					dialogRef.current?.close();
				}
			}}
		>
			<div className="body">
				<header>
					<h2 id={`${id}-title`}>{title}</h2>
					{dismissible && (
						<button
							type="button"
							className="close"
							aria-label={closeLabel}
							onClick={() => dialogRef.current?.close()}
						>
							<Icon icon={Cancel01Icon} />
						</button>
					)}
				</header>
				{description && (
					<p id={`${id}-desc`} className="desc">
						{description}
					</p>
				)}
				{children}
				{footer && <footer>{footer}</footer>}
			</div>
		</dialog>
	);
}
