// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "ui/cursor",
  "tags": [
    "cursor",
    "cursor style",
    "halo",
    "glow",
    "spotlight cursor",
    "dashboard",
    "analytics",
    "kpi",
    "guide the eye",
    "click"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 110,
      "min": 70,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 86,
      "out": 0
    },
    "markers": {
      "settled": 86,
      "scan": 26,
      "hover": 48,
      "click": 54
    },
    "beats": [
      0,
      26,
      48,
      54
    ],
    "loop": false
  },
  "layout": {
    "aspects": [
      "16:9",
      "9:16",
      "1:1"
    ],
    "mode": "responsive",
    "fill": "frame",
    "safeArea": "action",
    "transparent": true,
    "backdrop": [
      "background"
    ]
  },
  "slots": [
    {
      "key": "title",
      "type": "text",
      "maxChars": 22,
      "lines": 1,
      "role": "headline"
    },
    {
      "key": "range",
      "type": "text",
      "maxChars": 14,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "metrics",
      "type": "list",
      "maxChars": 12,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "values",
      "type": "list",
      "maxChars": 8,
      "lines": 1,
      "role": "value"
    },
    {
      "key": "deltas",
      "type": "list",
      "maxChars": 6,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "detailsLabel",
      "type": "text",
      "maxChars": 10,
      "lines": 1,
      "role": "cta"
    }
  ],
  "brand": {
    "color": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "surfaceColor": "colors.background",
    "background": "colors.background",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "tiles",
      "prop": "rise",
      "settledBy": 18,
      "easing": "ease"
    },
    {
      "target": "values",
      "prop": "count",
      "settledBy": 32,
      "easing": "ease"
    },
    {
      "target": "cursor",
      "prop": "path",
      "from": "bottom",
      "settledBy": 72,
      "easing": "ease"
    },
    {
      "target": "halo",
      "prop": "scale",
      "settledBy": 80,
      "easing": "ease"
    },
    {
      "target": "tiles",
      "prop": "focus",
      "settledBy": 72,
      "easing": "ease"
    }
  ],
  "render": {
    "deterministic": true,
    "clientRenderable": true,
    "webgl": false,
    "requiresGpu": false
  },
  "preview": {
    "poster": {
      "marker": "settled"
    },
    "hover": [
      0,
      110
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (halo cursor guides the eye across a KPI dashboard and opens one tile, 2026-10-07)"
  },
  "job": "cursors",
  "language": "aura",
  "mechanic": [
    "guide"
  ],
  "energy": "calm",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "title": "Growth overview",
    "range": "Last 30 days",
    "metrics": [
      "Revenue",
      "Active users",
      "Conversion",
      "Churn",
      "Signups",
      "Avg. order",
      "Sessions",
      "NPS"
    ],
    "values": [
      "$48.2k",
      "12,840",
      "4.8%",
      "2.1%",
      "1,204",
      "$62.40",
      "86.4k",
      "71"
    ],
    "deltas": [
      "+12%",
      "+8%",
      "+0.6%",
      "-0.4%",
      "+21%",
      "+3%",
      "+15%",
      "+4"
    ],
    "focus": 2,
    "detailsLabel": "Details",
    "color": "#F4F4F5",
    "accent": "#3D63FF",
    "secondary": "#34D399",
    "surfaceColor": "#111114",
    "background": "#09090B",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 22,
      "role": "headline"
    },
    {
      "key": "range",
      "label": "Range",
      "type": "text",
      "max": 14,
      "role": "label"
    },
    {
      "key": "metrics",
      "label": "Metrics",
      "type": "list",
      "max": 8,
      "role": "label"
    },
    {
      "key": "values",
      "label": "Values",
      "type": "list",
      "max": 8,
      "role": "value"
    },
    {
      "key": "deltas",
      "label": "Deltas",
      "type": "list",
      "max": 8,
      "role": "label"
    },
    {
      "key": "focus",
      "label": "Focus",
      "type": "number",
      "step": 1,
      "min": 0,
      "max": 7
    },
    {
      "key": "detailsLabel",
      "label": "Details label",
      "type": "text",
      "max": 10,
      "role": "cta"
    },
    {
      "key": "color",
      "label": "Color",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "accent",
      "label": "Accent",
      "type": "color",
      "brand": "colors.primary"
    },
    {
      "key": "secondary",
      "label": "Secondary",
      "type": "color",
      "brand": "colors.secondary"
    },
    {
      "key": "surfaceColor",
      "label": "Surface color",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "background",
      "label": "Background",
      "type": "color",
      "brand": "colors.background",
      "backdrop": true
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    }
  ],
  "name": "Halo Cursor",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "cursor-halo",
    "bundleSha256": "e5e05291e511e4864b7d85c6fbc7acf3b072d0fbd7a676649d44a893cf53b4b8",
    "sourceSnapshot": {
      "sha256": "e88d3310904f310f1bb8a580317c917e90c868c8a36f0a88fbdd522ee35c5077",
      "files": 1558
    },
    "renderedAt": "2026-10-07T23:46:25.057Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-halo/16x9-paper.png",
        "sha256": "f6902d6d7219640575fdcaacb5ade6e2b7f282763077bb379ae8aa54e588ee06"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-halo/16x9-night.png",
        "sha256": "f2fac200b2378637c29294a692d18e62bf2a6483840b12ae5660e40e7ccac6a2"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-halo/16x9-color.png",
        "sha256": "e141bc4291d4136002045883622a90199234242e180a2c4320c3a277265faab7"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-halo/9x16-paper.png",
        "sha256": "d60f2ad16d8c6070a71b4896e2768811ac1a143e0729a9b0c563d916f52db6f1"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-halo/9x16-night.png",
        "sha256": "51b54041be1f28c9ca8ef74050c4b4566dd02dcf08a061af6a9cf31864be55af"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-halo/9x16-color.png",
        "sha256": "6e7ff3452dcbd480e70c07a2e804f2c481a19969ef5fd27a6592bd238af94dcd"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-halo/1x1-paper.png",
        "sha256": "ccd0fb010cefdd6a0256ea597ccd285dfdb8db3c39064163d84f0d18fa68758f"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-halo/1x1-night.png",
        "sha256": "fe01fd005afed7955f1bb77ca80047bb698292e2e17af15669d83e5f097c528b"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-halo/1x1-color.png",
        "sha256": "463fee09152d80dc70eb057f9400fdd5f4594a92f6fc6a73e702b9aa2688a7ba"
      }
    ],
    "gates": {
      "contract": {
        "pass": true,
        "errors": [],
        "transparency": [
          {
            "aspect": "16:9",
            "brand": "paper",
            "corners": [
              0,
              0,
              0,
              0
            ],
            "pass": true
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "corners": [
              0,
              0,
              0,
              0
            ],
            "pass": true
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "corners": [
              0,
              0,
              0,
              0
            ],
            "pass": true
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "corners": [
              0,
              0,
              0,
              0
            ],
            "pass": true
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "corners": [
              0,
              0,
              0,
              0
            ],
            "pass": true
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "corners": [
              0,
              0,
              0,
              0
            ],
            "pass": true
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "corners": [
              0,
              0,
              0,
              0
            ],
            "pass": true
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "corners": [
              0,
              0,
              0,
              0
            ],
            "pass": true
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "corners": [
              0,
              0,
              0,
              0
            ],
            "pass": true
          }
        ]
      },
      "formats": {
        "pass": true,
        "rendered": [
          "cursor-halo--16x9",
          "cursor-halo--9x16",
          "cursor-halo--1x1"
        ]
      },
      "brand": {
        "pass": true,
        "sourcePaintLiterals": [],
        "sourceFontLiterals": [],
        "samples": [
          {
            "aspect": "16:9",
            "pass": true,
            "paperNight": 121.18853081597223,
            "paperColor": 15.323594835069445,
            "region": {
              "left": 83,
              "top": 85,
              "width": 1754,
              "height": 966
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 108.269287109375,
            "paperColor": 17.38129340277778,
            "region": {
              "left": 0,
              "top": 227,
              "width": 1080,
              "height": 1645
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 114.14287651909723,
            "paperColor": 16.895589192708332,
            "region": {
              "left": 14,
              "top": 53,
              "width": 1052,
              "height": 1027
            },
            "canvas": {
              "width": 1080,
              "height": 1080
            }
          }
        ],
        "note": "Measured three rebrands over their actual subject union; contract checks color bindings. Visual brand adherence needs semantic review."
      },
      "readability": {
        "pass": true,
        "probes": [
          {
            "aspect": "16:9",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0727123925701971,
            "bad": [],
            "measured": 27
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1580389293062907,
            "bad": [],
            "measured": 27
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0727123925701971,
            "bad": [],
            "measured": 27
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1360067432322727,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2142443783068786,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1360067432322727,
            "bad": [],
            "measured": 10
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2003909931599528,
            "bad": [],
            "measured": 27
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3127441763170749,
            "bad": [],
            "measured": 27
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2003909931599528,
            "bad": [],
            "measured": 27
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 5.989149305555555,
        "frames": [
          12,
          86,
          109
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 70,
            "averageChannelDifference": 6.017252604166667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-halo/16x9-duration-70-frame-8.png",
                "sha256": "1a3a27f5239d7b3ee8ff35273fb328d5ce732b4ee29e71b6a210dc5aa5273f34",
                "alphaMass": 587520
              },
              {
                "frame": 69,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-halo/16x9-duration-70-frame-69.png",
                "sha256": "566774fce84293ccd873e87948ffcc72c40522f64492a8ca814a95b569c3cba2",
                "alphaMass": 587520
              },
              {
                "frame": 61,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-halo/16x9-duration-70-frame-61.png",
                "sha256": "566774fce84293ccd873e87948ffcc72c40522f64492a8ca814a95b569c3cba2",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 5.989149305555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-halo/16x9-duration-600-frame-12.png",
                "sha256": "687441c00e6c7de2b51b15ca03aaf6c0ddb57c4c121696a928b8cc6b52351908",
                "alphaMass": 587520
              },
              {
                "frame": 86,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-halo/16x9-duration-600-frame-86.png",
                "sha256": "566774fce84293ccd873e87948ffcc72c40522f64492a8ca814a95b569c3cba2",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-halo/16x9-duration-600-frame-528.png",
                "sha256": "566774fce84293ccd873e87948ffcc72c40522f64492a8ca814a95b569c3cba2",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-halo/16x9-duration-600-frame-599.png",
                "sha256": "566774fce84293ccd873e87948ffcc72c40522f64492a8ca814a95b569c3cba2",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 70,
            "averageChannelDifference": 9.862196180555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-halo/9x16-duration-70-frame-8.png",
                "sha256": "9590dec3b90892362ca6d6b40d9596322ae71b93910f2550de5d61b42fdaa2e2",
                "alphaMass": 587520
              },
              {
                "frame": 69,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-halo/9x16-duration-70-frame-69.png",
                "sha256": "d3345566eac84ba73551533c9a88a9eeca065b57097056e7401f74230e82928c",
                "alphaMass": 587520
              },
              {
                "frame": 61,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-halo/9x16-duration-70-frame-61.png",
                "sha256": "d3345566eac84ba73551533c9a88a9eeca065b57097056e7401f74230e82928c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 9.70095486111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-halo/9x16-duration-600-frame-12.png",
                "sha256": "d1db016a84e5d01f061fbbc29dde5a114c21fdd7c3b23f5e989cef620ad59372",
                "alphaMass": 587520
              },
              {
                "frame": 86,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-halo/9x16-duration-600-frame-86.png",
                "sha256": "d3345566eac84ba73551533c9a88a9eeca065b57097056e7401f74230e82928c",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-halo/9x16-duration-600-frame-528.png",
                "sha256": "d3345566eac84ba73551533c9a88a9eeca065b57097056e7401f74230e82928c",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-halo/9x16-duration-600-frame-599.png",
                "sha256": "d3345566eac84ba73551533c9a88a9eeca065b57097056e7401f74230e82928c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 70,
            "averageChannelDifference": 7.839301215277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-halo/1x1-duration-70-frame-8.png",
                "sha256": "ca5d6b3bf52915ae2b518ad098e7c5646a262226e7951dc8e1578f7e798a3113",
                "alphaMass": 587520
              },
              {
                "frame": 69,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-halo/1x1-duration-70-frame-69.png",
                "sha256": "63398ffeb9e7381581f06ba42fdbeec06f58087ab5b4faa7d1027087b34a3094",
                "alphaMass": 587520
              },
              {
                "frame": 61,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-halo/1x1-duration-70-frame-61.png",
                "sha256": "63398ffeb9e7381581f06ba42fdbeec06f58087ab5b4faa7d1027087b34a3094",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 7.748589409722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 12,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-halo/1x1-duration-600-frame-12.png",
                "sha256": "9917269427d522256cbe0c59fd9e66efea0b82e6cd7c0e86a56b7d94a1bb1584",
                "alphaMass": 587520
              },
              {
                "frame": 86,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-halo/1x1-duration-600-frame-86.png",
                "sha256": "63398ffeb9e7381581f06ba42fdbeec06f58087ab5b4faa7d1027087b34a3094",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-halo/1x1-duration-600-frame-528.png",
                "sha256": "63398ffeb9e7381581f06ba42fdbeec06f58087ab5b4faa7d1027087b34a3094",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-b/cursor-halo/1x1-duration-600-frame-599.png",
                "sha256": "63398ffeb9e7381581f06ba42fdbeec06f58087ab5b4faa7d1027087b34a3094",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "cursors",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "A small cursor in a soft pool of light guides the eye across a KPI dashboard to Details."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 24,
        "compared": 24,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "e5e05291e511e4864b7d85c6fbc7acf3b072d0fbd7a676649d44a893cf53b4b8",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-07",
      "at": "2026-10-07T23:49:44.290Z",
      "basis": "Cursor blocks: 10 interactions and 12 cursor styles, approved by the owner from the prototypes"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-halo/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-halo/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-halo/16x9/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 86,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 110,
      "sha256": {
        "poster": "3e24acd4652f1041dc6ff784fcd7d0dbb504e8318c455c861153459ad0ab219f",
        "loop": "4c6a2e0033004c43b2f71d3e298190c548874daef91210ba9a3f1a3f9ee6ed1e",
        "detail": "757dfcde6f7104bb960e79d54d2610843af5425e03b8b49b89efd126ed8dabd8"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-halo/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-halo/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-halo/9x16/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 86,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 110,
      "sha256": {
        "poster": "0fd6cd88243c33ed7cdac777b3bbc05b64acfa15959fe7381ef3dce293a26330",
        "loop": "82a5dbdc01d1b613fe28e69159bde622deb54b7fc81c8445fd2c641984bbea1a",
        "detail": "c727108e48f97843203724273e8c4a8cdeb57d4c6b08125eeab5d6aff3391261"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-halo/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-halo/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-halo/1x1/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 86,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 110,
      "sha256": {
        "poster": "f034b3158c7c1b0e39dd99b75397eff6a3d49082eac43b23749514653c2434bd",
        "loop": "ee7d90546612c272533f83a25b6a988dfe0fa5dca0ebfac155df85eeed864bb9",
        "detail": "b773886bd4ee5d626da249d73bf100c48ffeadb3768411a5d3a1fba2ecf65b0b"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/e5e05291e511e4864b7d85c6fbc7acf3b072d0fbd7a676649d44a893cf53b4b8/index.mjs",
    "sha256": "e5e05291e511e4864b7d85c6fbc7acf3b072d0fbd7a676649d44a893cf53b4b8",
    "bytes": 173635,
    "externals": [
      "react",
      "react/jsx-runtime",
      "remotion",
      "remotion/no-react",
      "zod"
    ],
    "versions": {
      "kit": "0.1.0",
      "remotion": "4.0.533",
      "react": "19.2.1"
    }
  },
  "gates": {
    "16:9": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "overflow": true
    },
    "9:16": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "overflow": true
    },
    "1:1": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "overflow": true
    }
  },
  "intake": {
    "at": "2026-10-08T00:07:04.569Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
