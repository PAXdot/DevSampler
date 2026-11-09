"use client";
import type {SVGProps} from "react";
import { CarIcon, CheckIcon, ChevronRightIcon, ClockIcon, CoffeeIcon, FlagIcon, HeartIcon, LeafIcon, LightbulbIcon, SearchIcon, SmileIcon, SmilePlusIcon, SparklesIcon, SquareIcon, UserRoundIcon, VolleyballIcon, XIcon } from "lucide-react";
const sourceIcons={CarIcon, CheckIcon, ChevronRightIcon, ClockIcon, CoffeeIcon, FlagIcon, HeartIcon, LeafIcon, LightbulbIcon, SearchIcon, SmileIcon, SmilePlusIcon, SparklesIcon, SquareIcon, UserRoundIcon, VolleyballIcon, XIcon};
/** Source registry icon selector, using its Lucide preset and original SVG props. */
export function IconPlaceholder({lucide,tabler,hugeicons,phosphor,remixicon,...props}:SVGProps<SVGSVGElement>&{lucide:string;tabler?:string;hugeicons?:string;phosphor?:string;remixicon?:string}){const Icon=sourceIcons[lucide as keyof typeof sourceIcons];return Icon?<Icon {...props}/>:null}
