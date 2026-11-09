// Built with Remotion - https://remotion.pro/license
// The brand mark of the logo blocks: the uploaded logo when there is one, otherwise a
// typographic fallback built from the brand name. Never ships a real company's logo.
import React from "react";
import { Img } from "remotion";
import { inkOn, withAlpha } from "../../../kit/index";
import { monogram } from "./motion";

/** Logo image, or a monogram tile in the accent (first letter of the name). */
export const MarkTile: React.FC<{
  logo: string;
  name: string;
  size: number;
  accent: string;
  secondary?: string;
  font: string;
  style?: React.CSSProperties;
}> = ({ logo, name, size, accent, secondary, font, style }) => {
  if (logo) return <Img src={logo} style={{ height: size, maxWidth: size * 3, objectFit: "contain", display: "block", ...style }} />;
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.27,
        background: `linear-gradient(145deg, ${accent}, ${secondary ?? withAlpha(accent, 0.72)})`,
        boxShadow: `inset 0 0 0 ${Math.max(1, size * 0.012)}px ${withAlpha("#ffffff", 0.2)}, inset 0 ${size * 0.04}px ${size * 0.08}px ${withAlpha("#ffffff", 0.18)}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: font,
        fontWeight: 700,
        fontSize: size * 0.54,
        letterSpacing: "-0.05em",
        lineHeight: 1,
        color: inkOn(accent),
        ...style,
      }}
    >
      {monogram(name) || "•"}
    </div>
  );
};
