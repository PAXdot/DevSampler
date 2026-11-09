"use client";
import type {SVGProps} from "react";
import { ArrowLeftRightIcon, ChevronRightIcon, CircleAlertIcon, FileSpreadsheetIcon, SquareIcon, UsersIcon } from "lucide-react";
const sourceIcons={ArrowLeftRightIcon, ChevronRightIcon, CircleAlertIcon, FileSpreadsheetIcon, SquareIcon, UsersIcon};
/** Source registry icon selector, using its Lucide preset and original SVG props. */
export function IconPlaceholder({lucide,tabler,hugeicons,phosphor,remixicon,...props}:SVGProps<SVGSVGElement>&{lucide:string;tabler?:string;hugeicons?:string;phosphor?:string;remixicon?:string}){const Icon=sourceIcons[lucide as keyof typeof sourceIcons];return Icon?<Icon {...props}/>:null}
