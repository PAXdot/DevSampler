"use client";

import { useState } from "react";
import {
  tokens,
  motion,
  useThemeContext,
  usePal,
} from "@/components/ui/table-utils/halaska-shared";

function Table({ columns, rows, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const [hoverRow, setHoverRow] = useState(-1);
  return (
    <div
      style={{
        width: "100%",
        overflow: "auto",
        borderRadius: tokens.radius.md,
        border: `1px solid ${pal.borderSubtle}`,
        transition: `border-color ${motion.smooth} ${motion.easeInOut}`,
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontFamily: tokens.font.sans,
        }}
      >
        <thead>
          <tr style={{ borderBottom: `1px solid ${pal.borderSubtle}` }}>
            {columns.map((col, i) => (
              <th
                key={i}
                scope="col"
                style={{
                  ...tokens.type.xs,
                  fontWeight: tokens.weight.semibold,
                  color: pal.textTertiary,
                  textAlign: "left",
                  padding: "10px 14px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  transition: `color ${motion.smooth} ${motion.easeInOut}`,
                }}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              onMouseEnter={() => setHoverRow(ri)}
              onMouseLeave={() => setHoverRow(-1)}
              style={{
                borderBottom:
                  ri < rows.length - 1
                    ? `1px solid ${pal.borderSubtle}`
                    : "none",
                background: hoverRow === ri ? pal.bgSubtle : "transparent",
                transition: `background ${motion.normal} ${motion.easeInOut}`,
              }}
            >
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  style={{
                    ...tokens.type.sm,
                    color: pal.text,
                    padding: "10px 14px",
                    transition: `color ${motion.smooth} ${motion.easeInOut}`,
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
