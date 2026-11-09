import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Ported from the SolidJS "Backdrop" component in rocksolidjs
 * (https://github.com/darshan-rajadhyaksha/rocksolid), MIT License.
 * Copyright (c) 2026 Darshan Rajadhyaksha
 *
 * MIT License
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

export type BackdropProps = {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  children?: React.ReactNode;
} & Omit<React.ComponentProps<"div">, "onClick" | "className">;

const Backdrop = ({ className, children, ...rest }: BackdropProps) => {
  return (
    <div
      {...rest}
      className={cn(
        "fixed inset-0 w-full h-full z-50",
        "flex justify-center items-center",
        "bg-black/50 backdrop-blur-sm",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Backdrop;
