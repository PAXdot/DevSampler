// Built with Remotion - https://remotion.pro/license
// Pure structural descriptions, schemas and source IDs; no visual imports.
import type { PatternSpec } from "../contract";

export const SPECS: PatternSpec[] = [
  {
    "id": "loupe-inspection",
    "name": "Circular moving crop lens",
    "description": "A second copy of user screen content is magnified inside a traveling circular crop; a ring and pointer preserve the full context.",
    "category": "ui/product",
    "tags": [
      "product-proof",
      "loupe-inspection",
      "interface"
    ],
    "sourceIds": [
      "2105647829846806896"
    ],
    "relationship": "direct-pattern",
    "defaults": {
      "title": "The detail tells the story",
      "subtitle": "A moving lens keeps the whole interface in view.",
      "labels": [
        "Overview",
        "Inspect detail",
        "Verified"
      ],
      "image": ""
    }
  },
  {
    "id": "scroll-to-highlight",
    "name": "Scrollable evidence anchor",
    "description": "A masked document scrolls to a marked result, then the line highlight draws in while the scroll track moves.",
    "category": "ui/product",
    "tags": [
      "product-proof",
      "scroll-to-highlight",
      "interface"
    ],
    "sourceIds": [
      "2075686268113916023"
    ],
    "relationship": "adaptation",
    "defaults": {
      "title": "Find the part that matters",
      "subtitle": "Move through the document and anchor the evidence.",
      "labels": [
        "Project overview",
        "Working notes",
        "The key result",
        "Next steps"
      ]
    }
  },
  {
    "id": "inspector-parameter-edit",
    "name": "Inspector control drives geometry",
    "description": "An inspector slider moves and a selected canvas card changes corner radius and width, with live handles.",
    "category": "ui/product",
    "tags": [
      "product-proof",
      "inspector-parameter-edit",
      "interface"
    ],
    "sourceIds": [
      "2081771600924287251"
    ],
    "relationship": "direct-pattern",
    "defaults": {
      "title": "Shape it while you see it",
      "subtitle": "An editable control changes the object on the canvas.",
      "labels": [
        "Selected card",
        "Corner radius",
        "Width",
        "Applied"
      ],
      "value": 48,
      "suffix": "px"
    }
  },
  {
    "id": "desktop-window-orbit",
    "name": "Orbiting application windows",
    "description": "Four original app windows orbit through distinct depth planes, then settle into a 2x2 wall.",
    "category": "ui/product",
    "tags": [
      "product-proof",
      "desktop-window-orbit",
      "interface"
    ],
    "sourceIds": [
      "2106308982918750435"
    ],
    "relationship": "adaptation",
    "defaults": {
      "title": "Every workspace, one view",
      "subtitle": "Four independent surfaces settle into a clear window wall.",
      "labels": [
        "Planning",
        "Design",
        "Build",
        "Review"
      ],
      "image": "",
      "secondaryImage": ""
    }
  },
  {
    "id": "device-handoff",
    "name": "Phone-to-tablet continuity",
    "description": "A selected task chip travels from a phone into a tablet while the tablet expands from a narrow center seam.",
    "category": "ui/product",
    "tags": [
      "product-proof",
      "device-handoff",
      "device"
    ],
    "sourceIds": [
      "2082532273421955513"
    ],
    "relationship": "adaptation",
    "defaults": {
      "title": "Pick up where you left off",
      "subtitle": "Carry the same task from a phone to a wider screen.",
      "labels": [
        "Phone",
        "Tablet",
        "Continue task",
        "In sync"
      ],
      "image": "",
      "secondaryImage": ""
    }
  },
  {
    "id": "responsive-viewport-resize",
    "name": "Desktop-to-mobile viewport proof",
    "description": "One live viewport narrows in steps and content columns become a vertical stack, accompanied by width labels.",
    "category": "ui/product",
    "tags": [
      "product-proof",
      "responsive-viewport-resize",
      "interface"
    ],
    "sourceIds": [
      "2081771600924287251"
    ],
    "relationship": "adaptation",
    "defaults": {
      "title": "One interface. Every width.",
      "subtitle": "Watch the layout change as the viewport gets smaller.",
      "labels": [
        "Desktop",
        "Tablet",
        "Phone",
        "Responsive"
      ],
      "image": ""
    }
  },
  {
    "id": "contextual-toolbar-anchor",
    "name": "Selection-anchored tools",
    "description": "The selected phrase moves inside a page, and its toolbar follows the selection with an anchored connector before applying an action.",
    "category": "ui/product",
    "tags": [
      "product-proof",
      "contextual-toolbar-anchor",
      "interface"
    ],
    "sourceIds": [
      "1953140612083138910"
    ],
    "relationship": "direct-pattern",
    "defaults": {
      "title": "Tools follow the context",
      "subtitle": "Select a phrase and keep the action next to it.",
      "labels": [
        "Select a passage",
        "Refine",
        "Comment",
        "Applied"
      ]
    }
  },
  {
    "id": "cursor-path-proof",
    "name": "Three-click path demonstration",
    "description": "A cursor traces a precise three-stop path over an owned interface; each click reveals a state and an expanding ring.",
    "category": "ui/product",
    "tags": [
      "product-proof",
      "cursor-path-proof",
      "interface"
    ],
    "sourceIds": [
      "2093364921073549667"
    ],
    "relationship": "adaptation",
    "defaults": {
      "title": "A clear path to the result",
      "subtitle": "Three purposeful actions reveal the complete workflow.",
      "labels": [
        "Create a project",
        "Choose a service",
        "Open the result",
        "Complete"
      ],
      "image": ""
    }
  },
  {
    "id": "two-window-deep-focus",
    "name": "Window-to-window focus rack",
    "description": "Two offset windows trade depth, sharpness and scale while the active window reveals a detail callout.",
    "category": "ui/product",
    "tags": [
      "product-proof",
      "two-window-deep-focus",
      "interface"
    ],
    "sourceIds": [
      "2100619682718118397"
    ],
    "relationship": "adaptation",
    "defaults": {
      "title": "Keep the right window in focus",
      "subtitle": "Trade focus between the source and its working result.",
      "labels": [
        "Source workspace",
        "Focused result",
        "Detail preserved"
      ],
      "image": "",
      "secondaryImage": ""
    }
  },
  {
    "id": "terminal-browser-proof",
    "name": "Command deploys browser result",
    "description": "Terminal lines type, a command result becomes a browser URL tab, and the terminal compresses while the browser expands.",
    "category": "data/code",
    "tags": [
      "product-proof",
      "terminal-browser-proof",
      "interface"
    ],
    "sourceIds": [
      "2080331924732850687"
    ],
    "relationship": "adaptation",
    "defaults": {
      "title": "From command to working page",
      "subtitle": "Follow the command through to its visible browser result.",
      "labels": [
        "$ build --preview",
        "Preview is ready",
        "Open local preview",
        "Build complete"
      ],
      "image": ""
    }
  },
  {
    "id": "code-diff-review",
    "name": "Review line and merge proof",
    "description": "An inline diff expands removed/added lines, a review badge follows the changed range, and a merge confirmation completes the beat.",
    "category": "data/code",
    "tags": [
      "product-proof",
      "code-diff-review",
      "interface"
    ],
    "sourceIds": [
      "2060048202796040655"
    ],
    "relationship": "direct-pattern",
    "defaults": {
      "title": "Review the change in context",
      "subtitle": "A focused diff makes the edit and its approval visible.",
      "labels": [
        "mode: \"manual\",",
        "mode: \"assisted\",",
        "Review the change",
        "Merged"
      ]
    }
  },
  {
    "id": "model-picker-stack",
    "name": "Model menu selects working mode",
    "description": "An anchored layered model menu fans open; a selection cursor highlights a row and collapses the menu into a model chip.",
    "category": "data/code",
    "tags": [
      "product-proof",
      "model-picker-stack",
      "interface"
    ],
    "sourceIds": [
      "2039768512894505086"
    ],
    "relationship": "direct-pattern",
    "defaults": {
      "title": "Choose the mode for the task",
      "subtitle": "An anchored model menu opens, selects, and closes.",
      "labels": [
        "Balanced",
        "Precise",
        "Fast",
        "Selected mode"
      ]
    }
  },
  {
    "id": "multi-agent-parallel-windows",
    "name": "Parallel windows converge",
    "description": "Three independently progressing app windows show named tasks and separate meters before converging into one result window.",
    "category": "data/code",
    "tags": [
      "product-proof",
      "multi-agent-parallel-windows",
      "interface"
    ],
    "sourceIds": [
      "2053891504989753817"
    ],
    "relationship": "direct-pattern",
    "defaults": {
      "title": "Three tasks move in parallel",
      "subtitle": "Independent work converges into one shared result.",
      "labels": [
        "Design the page",
        "Build the flow",
        "Review the output",
        "Combined result"
      ],
      "image": "",
      "secondaryImage": ""
    }
  },
  {
    "id": "phone-notification-capture",
    "name": "Notification expands into task",
    "description": "A phone lock surface receives a notification; the notification expands into a task sheet inside the device with a result preview.",
    "category": "ui/product",
    "tags": [
      "product-proof",
      "phone-notification-capture",
      "device"
    ],
    "sourceIds": [
      "2071641103191998810"
    ],
    "relationship": "adaptation",
    "defaults": {
      "title": "The result arrives with you",
      "subtitle": "A compact notification opens into the complete task.",
      "labels": [
        "Task complete",
        "Your update is ready",
        "Open result",
        "Review complete"
      ],
      "image": ""
    }
  },
  {
    "id": "device-exploded-ui-layers",
    "name": "Exploded interface plane proof",
    "description": "A neutral device separates frame, content, overlay and controls into four labeled depth planes, then reassembles.",
    "category": "ui/product",
    "tags": [
      "product-proof",
      "device-exploded-ui-layers",
      "device"
    ],
    "sourceIds": [
      "2106308982918750435"
    ],
    "relationship": "adaptation",
    "defaults": {
      "title": "See how the interface fits",
      "subtitle": "Separate the frame, content, overlay, and controls.",
      "labels": [
        "Device frame",
        "Content layer",
        "Overlay",
        "Controls"
      ],
      "image": ""
    }
  },
  {
    "id": "panel-document-export",
    "name": "Panel becomes portable document",
    "description": "A document panel extracts into a floating page, folds into a compact file card and lands in an export tray while a toast confirms.",
    "category": "ui/product",
    "tags": [
      "product-proof",
      "panel-document-export",
      "interface"
    ],
    "sourceIds": [
      "2090500028393726026"
    ],
    "relationship": "adaptation",
    "defaults": {
      "title": "Turn the work into a portable page",
      "subtitle": "A panel becomes a document and lands in the export tray.",
      "labels": [
        "Working panel",
        "Portable document",
        "Export tray",
        "Saved"
      ],
      "image": ""
    }
  }
];
