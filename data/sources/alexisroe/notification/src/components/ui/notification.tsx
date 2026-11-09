/**
 * Adapted from e-ink-ui-lib (https://github.com/AlexisRoe/e-ink-ui-lib)
 * Original component: src/components/notification/notification.component.tsx
 *
 * MIT License
 * Copyright (c) 2026 Alexis Roe
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import {
  NotificationItem,
  type NotificationVariant,
} from "./notification-utils/notification.component";

interface NotificationData {
  id: number;
  title: string;
  description?: string;
  variant: NotificationVariant;
}

interface NotificationContextValue {
  /** Fires a notification with the given `title`, optional `description`, and `variant` (defaults to `"info"`). */
  notify: (
    title: string,
    description?: string,
    variant?: NotificationVariant,
  ) => void;
}

const NotificationContext = createContext<NotificationContextValue | null>(
  null,
);

let nextNotificationId = 0;

/**
 * Fires notifications rendered by the nearest ancestor
 * {@link NotificationProvider}. Calling `notify` without an ancestor
 * `NotificationProvider` is a no-op.
 *
 * @example
 * ```tsx
 * const { notify } = useNotifications();
 * notify("Saved", "Your changes have been saved.");
 * ```
 */
export function useNotifications(): NotificationContextValue {
  const context = useContext(NotificationContext);
  return context ?? { notify: () => {} };
}

/** Props accepted by {@link NotificationProvider}. */
export interface NotificationProviderProps {
  /** How long, in milliseconds, notifications stay visible before being dismissed. */
  duration: number;
  children: ReactNode;
}

/**
 * Renders notifications fired via {@link useNotifications} at the top
 * center of the page, stacked with a slight offset when more than one is
 * visible at a time.
 *
 * All currently visible notifications share a single dismiss timer: firing a
 * new notification while others are still visible resets that timer, so
 * when it elapses every visible notification is dismissed together.
 *
 * @example
 * ```tsx
 * <NotificationProvider duration={4000}>
 *   <App />
 * </NotificationProvider>
 * ```
 */
export function NotificationProvider({
  duration,
  children,
}: NotificationProviderProps) {
  const [notifications, setNotifications] = useState<NotificationData[]>([]);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const notify = useCallback(
    (
      title: string,
      description?: string,
      variant: NotificationVariant = "info",
    ) => {
      setNotifications((current) => [
        ...current,
        { id: nextNotificationId++, title, description, variant },
      ]);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setNotifications([]);
        timeoutRef.current = null;
      }, duration);
    },
    [duration],
  );

  return (
    <NotificationContext.Provider value={{ notify }}>
      {children}
      {notifications.length > 0 &&
        createPortal(
          <div className="eink-notification-container">
            {notifications.map((notification, index) => (
              <NotificationItem
                key={notification.id}
                title={notification.title}
                description={notification.description}
                variant={notification.variant}
                offset={index}
              />
            ))}
          </div>,
          document.body,
        )}
    </NotificationContext.Provider>
  );
}

export default NotificationProvider;
