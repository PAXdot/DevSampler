/*
Copyright Adobe. Licensed under the Apache License, Version 2.0. https://github.com/adobe/react-spectrum/blob/main/LICENSE
*/
'use client';
import "./aria-css-colorarea-utils/review-theme.css";

import {ColorArea as AriaColorArea, type ColorAreaProps} from 'react-aria-components/ColorArea';
import {ColorThumb} from "./aria-css-colorarea-utils/components-ui-ColorThumb";
import "./aria-css-colorarea-utils/components-ui-ColorArea.css";

export function ColorArea(props: ColorAreaProps) {
  return (
    <AriaColorArea {...props}>
      <ColorThumb />
    </AriaColorArea>
  );
}

export default ColorArea;
