import classnames from 'classnames';

export function classes(...args: Parameters<typeof classnames>) {
    return classnames(...args);
}

export function noop(..._args: unknown[]): void {
    // intentionally empty
}
