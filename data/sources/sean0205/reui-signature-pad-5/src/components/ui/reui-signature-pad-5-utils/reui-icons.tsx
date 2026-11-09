"use client";
import type {SVGProps} from "react";
import { BrushCleaningIcon, Redo2Icon, SaveIcon, SquareIcon, Undo2Icon } from "lucide-react";
const sourceIcons={BrushCleaningIcon, Redo2Icon, SaveIcon, SquareIcon, Undo2Icon};
/** Source registry icon selector, using its Lucide preset and original SVG props. */
export function IconPlaceholder({lucide,tabler,hugeicons,phosphor,remixicon,...props}:SVGProps<SVGSVGElement>&{lucide:string;tabler?:string;hugeicons?:string;phosphor?:string;remixicon?:string}){const Icon=sourceIcons[lucide as keyof typeof sourceIcons];return Icon?<Icon {...props}/>:null}
