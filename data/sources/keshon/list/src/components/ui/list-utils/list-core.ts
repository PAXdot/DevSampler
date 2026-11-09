import type { Dict, Normalizer } from './types'
import { createAnatomy } from './types'

/**
 * A list of things, each a row: something at the start (an avatar, an icon),
 * a title and a line under it, what is known about it at the end (a badge, a
 * time), and its actions. A heading over the rows, and a footer under them
 * that can load more.
 *
 * A row that goes somewhere is one target: its title is the link or the
 * button (`target`), stretched over the whole row, so the row is pressed
 * anywhere and read by its title; the actions stand above the stretch and
 * stay targets of their own.
 */
export const listAnatomy = createAnatomy('list', [
  'root',
  'header',
  'title',
  'count',
  'items',
  'item',
  'leading',
  'body',
  'target',
  'item-title',
  'description',
  'meta',
  'actions',
  'footer',
  'more',
  'more-error',
] as const)
export type ListPart = (typeof listAnatomy.parts)[number]
const anatomy = listAnatomy

/**
 * How the rows are held together. `divided`: on the page itself, a hairline
 * between them. `bordered`: one surface, a header strip and a footer, the
 * rows split by hairlines. `cards`: each row its own card, a gap between.
 */
export type ListVariant = 'divided' | 'bordered' | 'cards'

export interface ListProps {
  /** Default `divided`. */
  variant?: ListVariant
  /** The list's heading, and its accessible name. Without one, name it with `aria-label`. */
  label?: string
  /** Beside the heading, quieter: "4 of 16". */
  count?: string
  /** Its accessible name when there is no `label`. */
  ariaLabel?: string
}

export interface ListItemProps {
  /** The row's name: what a link or press on it is called. */
  title: string
  /** A line under the title, cut to one line. It describes the row's link or press. */
  description?: string
  /** The whole row is a link to it. */
  href?: string
  /** The whole row is a press. Ignored with `href`. */
  onSelect?: () => void
  /** The row that is open, or the page that is shown: `true`, or `'page'` for a link to the page itself. */
  current?: boolean | 'page'
  disabled?: boolean
}

/** Whether "Show more" is idle, waiting for its answer, or failed. */
export type ListMoreState = 'idle' | 'loading' | 'failed'

export interface ListWords {
  /** The footer's button. Default "Show more"; say how many: "Show 12 more". */
  more?: string
  /** While more are loading. Default "Loading…". */
  loading?: string
  /** When loading more failed. Default "Couldn't load more". */
  failed?: string
  /** The button after a failure. Default "Try again". */
  retry?: string
}

export interface ListConnectOptions {
  /** More can be loaded: the footer offers it. */
  hasMore?: boolean
  /** Where "Show more" stands. */
  more?: ListMoreState
  onLoadMore?: () => void
  words?: ListWords
}

export const listIds = (id: string) => ({
  title: `${id}-title`,
  moreError: `${id}-more-error`,
})

/**
 * The list is a `ul` with the list role said out loud — Safari drops a list's
 * role once its bullets are gone — named by its heading. "Show more" stays
 * focusable while it loads (`aria-disabled`, not `disabled`), so the focus is
 * not dropped to the page under a keyboard user's feet; a failure is said
 * where the button is, and the button offers to try again.
 */
export function connectList<T = Dict>(props: ListProps & { id: string }, normalize: Normalizer<T>, options: ListConnectOptions = {}) {
  const { variant = 'divided', label, count, ariaLabel } = props
  const { hasMore = false, more = 'idle', onLoadMore, words = {} } = options
  const ids = listIds(props.id)
  const loading = more === 'loading'
  const failed = more === 'failed'

  return {
    ids,
    variant,
    showHeader: Boolean(label || count),
    showMore: hasMore && Boolean(onLoadMore),
    moreText: loading ? (words.loading ?? 'Loading…') : failed ? (words.retry ?? 'Try again') : (words.more ?? 'Show more'),
    moreErrorText: words.failed ?? "Couldn't load more",
    failed,
    rootProps: normalize({ ...anatomy.attrs('root'), id: props.id, 'data-variant': variant }),
    headerProps: normalize({ ...anatomy.attrs('header'), 'data-variant': variant }),
    titleProps: normalize({ ...anatomy.attrs('title'), id: ids.title }),
    countProps: normalize({ ...anatomy.attrs('count') }),
    itemsProps: normalize({
      ...anatomy.attrs('items'),
      role: 'list',
      'aria-labelledby': label ? ids.title : undefined,
      'aria-label': label ? undefined : ariaLabel,
      'data-variant': variant,
    }),
    footerProps: normalize({ ...anatomy.attrs('footer'), 'data-variant': variant }),
    moreProps: normalize({
      ...anatomy.attrs('more'),
      type: 'button',
      'aria-disabled': loading ? 'true' : undefined,
      'aria-describedby': failed ? ids.moreError : undefined,
      'data-state': more,
      onClick: () => {
        if (!loading) onLoadMore?.()
      },
    }),
    moreErrorProps: normalize({ ...anatomy.attrs('more-error'), id: ids.moreError, role: 'status' }),
  }
}

/**
 * A row. Given `href` it is a link, given `onSelect` a button; either way the
 * title is the target and is stretched over the row, and the line under the
 * title describes it. A disabled link has no `href` left, so it goes nowhere
 * and says so. The row itself can take the focus from script (`tabIndex=-1`),
 * which is where "Show more" puts it when a plain row is the first new one.
 */
export function connectListItem<T = Dict>(props: ListItemProps & { id: string }, normalize: Normalizer<T>) {
  const { title, description, href, onSelect, current, disabled } = props
  const kind = href !== undefined ? ('link' as const) : onSelect ? ('button' as const) : null
  const describedBy = description ? `${props.id}-description` : undefined
  const state = {
    'data-current': current ? '' : undefined,
    'data-disabled': disabled ? '' : undefined,
  }

  return {
    title,
    description,
    /** What the title is: a link, a button, or plain text. */
    kind,
    itemProps: normalize({ ...anatomy.attrs('item'), id: props.id, tabIndex: -1, 'data-interactive': kind ? '' : undefined, ...state }),
    leadingProps: normalize({ ...anatomy.attrs('leading') }),
    bodyProps: normalize({ ...anatomy.attrs('body') }),
    targetProps: normalize(
      kind === 'link'
        ? {
            ...anatomy.attrs('target'),
            href: disabled ? undefined : href,
            role: disabled ? 'link' : undefined,
            'aria-disabled': disabled ? 'true' : undefined,
            'aria-current': current ? (current === 'page' ? 'page' : 'true') : undefined,
            'aria-describedby': describedBy,
            ...state,
          }
        : {
            ...anatomy.attrs('target'),
            type: 'button',
            disabled: disabled || undefined,
            'aria-current': current ? (current === 'page' ? 'page' : 'true') : undefined,
            'aria-describedby': describedBy,
            onClick: () => onSelect?.(),
            ...state,
          }
    ),
    itemTitleProps: normalize({ ...anatomy.attrs('item-title'), ...state }),
    descriptionProps: normalize({ ...anatomy.attrs('description'), id: describedBy }),
    metaProps: normalize({ ...anatomy.attrs('meta') }),
    actionsProps: normalize({ ...anatomy.attrs('actions') }),
  }
}

/**
 * Puts the focus on the row at `index` of a list — on its link or button when
 * it has one, on the row itself when not: after "Show more", on the first row
 * that came, so the keyboard carries on where the new rows begin.
 */
export function focusListItem(items: Element | null, index: number): boolean {
  const item = items?.querySelectorAll<HTMLElement>(":scope > [data-scope='list'][data-part='item']")[index]
  if (!item) return false
  const target = item.querySelector<HTMLElement>("[data-scope='list'][data-part='target']")
  ;(target && !target.hasAttribute('disabled') ? target : item).focus()
  return true
}
