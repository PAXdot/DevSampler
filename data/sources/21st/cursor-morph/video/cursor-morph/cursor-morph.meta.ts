// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "ui/cursor",
  "tags": [
    "cursor",
    "pointer",
    "hover",
    "i-beam",
    "crosshair",
    "link",
    "button",
    "canvas",
    "states",
    "interaction"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 96,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 144,
      "out": 0
    },
    "markers": {
      "settled": 144,
      "link": 20,
      "text": 54,
      "button": 90,
      "canvas": 124
    },
    "beats": [
      0,
      20,
      54,
      90,
      124
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
      "key": "linkLabel",
      "type": "text",
      "maxChars": 24,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "paragraph",
      "type": "text",
      "maxChars": 64,
      "lines": 3,
      "role": "body"
    },
    {
      "key": "buttonLabel",
      "type": "text",
      "maxChars": 16,
      "lines": 1,
      "role": "label"
    },
    {
      "key": "cursorNames",
      "type": "list",
      "role": "label"
    }
  ],
  "brand": {
    "color": "colors.text",
    "accent": "colors.primary",
    "surfaceColor": "colors.background",
    "background": "colors.background",
    "fontFamily": "fonts.heading",
    "monoFontFamily": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "cursor",
      "prop": "path",
      "from": "left",
      "settledBy": 141,
      "easing": "ease"
    },
    {
      "target": "cursor",
      "prop": "shape",
      "from": "arrow",
      "settledBy": 128,
      "easing": "linear"
    },
    {
      "target": "link",
      "prop": "underline",
      "settledBy": 32,
      "easing": "ease"
    },
    {
      "target": "button",
      "prop": "fill",
      "settledBy": 100,
      "easing": "ease"
    },
    {
      "target": "canvas",
      "prop": "frame",
      "settledBy": 143,
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
      180
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (one cursor turns into a hand, I-beam and crosshair as it crosses a page, 2026-10-07)"
  },
  "job": "cursors",
  "language": "product-ui",
  "mechanic": [
    "shape-morph"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "linkLabel": "Read the docs",
    "paragraph": "Blocks render frame by frame, so the preview is the video.",
    "buttonLabel": "Deploy",
    "cursorNames": [
      "default",
      "pointer",
      "text",
      "crosshair"
    ],
    "color": "#F4F4F5",
    "accent": "#3D63FF",
    "surfaceColor": "#09090B",
    "background": "#09090B",
    "fontFamily": "Geist",
    "monoFontFamily": "Geist Mono"
  },
  "fields": [
    {
      "key": "linkLabel",
      "label": "Link label",
      "type": "text",
      "max": 24,
      "role": "label"
    },
    {
      "key": "paragraph",
      "label": "Paragraph",
      "type": "text",
      "max": 64,
      "role": "body"
    },
    {
      "key": "buttonLabel",
      "label": "Button label",
      "type": "text",
      "max": 16,
      "role": "label"
    },
    {
      "key": "cursorNames",
      "label": "Cursor names",
      "type": "list",
      "max": 4,
      "role": "label"
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
    },
    {
      "key": "monoFontFamily",
      "label": "Mono font family",
      "type": "font",
      "brand": "fonts.mono"
    }
  ],
  "name": "Cursor Changes Shape",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "cursor-morph",
    "bundleSha256": "98abb89e9ccf0bf118836f7f91b492184c82816b87397af7d8cac46c87f9d986",
    "sourceSnapshot": {
      "sha256": "e88d3310904f310f1bb8a580317c917e90c868c8a36f0a88fbdd522ee35c5077",
      "files": 1558
    },
    "renderedAt": "2026-10-07T23:46:25.057Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-morph/16x9-paper.png",
        "sha256": "8332337bc3b6df069007ccf1c558d46247ab68fd9d05c903dafecf72e7801482"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-morph/16x9-night.png",
        "sha256": "7ebef128688c658bd9c29a9781e1d2d64f8bd4cfd63a45766b8eec68645bde1f"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-morph/16x9-color.png",
        "sha256": "6bd242bb3934013ec7b1da6adc8c52ca0c8c898d1a46ae4d4e2ce06f89978f58"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-morph/9x16-paper.png",
        "sha256": "3a83c2441a558cea64848155bbaecfaf719be9a9c54611d366aed44f27819eca"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-morph/9x16-night.png",
        "sha256": "25983f972dfd7557eaf259f5c5676848db645726cc9ca2257eed7bca8c777075"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-morph/9x16-color.png",
        "sha256": "8e6de9be9037a7407865ea6f4caa3510311467055e19ba0b407178710f9325b9"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-morph/1x1-paper.png",
        "sha256": "d4f5c7d845665b6465749b50206168bdbabfdd6e472ae55e0b862f592379314d"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-morph/1x1-night.png",
        "sha256": "332f8e95c203057ad0dcf55972f440d8bbc18defa30d095b6639a977caec826f"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-morph/1x1-color.png",
        "sha256": "be93236ccc43088adb2cd36b93867eee4b6e5c06488d19396a01115462547def"
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
          "cursor-morph--16x9",
          "cursor-morph--9x16",
          "cursor-morph--1x1"
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
            "paperNight": 116.98030598958333,
            "paperColor": 17.892469618055557,
            "region": {
              "left": 55,
              "top": 290,
              "width": 1810,
              "height": 556
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 113.19867621527777,
            "paperColor": 16.92645941840278,
            "region": {
              "left": 27,
              "top": 172,
              "width": 1026,
              "height": 1633
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 117.69173177083333,
            "paperColor": 17.22829861111111,
            "region": {
              "left": 25,
              "top": 74,
              "width": 1030,
              "height": 988
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
            "occupancy": 0.6141755506214833,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.687812097575656,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.6141755506214833,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0656453617969823,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.145117335128496,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0656453617969823,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1239741095340745,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2364828190078045,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1239741095340745,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 1.4750434027777777,
        "frames": [
          21,
          144,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 96,
            "averageChannelDifference": 1.4792751736111112,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 11,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-morph/16x9-duration-96-frame-11.png",
                "sha256": "29713d9b01ec324a2ee0438f9636c7ab2a4995af62e1c0cafa7660ceed0f622e",
                "alphaMass": 587520
              },
              {
                "frame": 95,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-morph/16x9-duration-96-frame-95.png",
                "sha256": "d0ac982ad6ec1f11f522dceee6526b5c1e4ad769bf3870e97011c7901a66c728",
                "alphaMass": 587520
              },
              {
                "frame": 84,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-morph/16x9-duration-96-frame-84.png",
                "sha256": "d0ac982ad6ec1f11f522dceee6526b5c1e4ad769bf3870e97011c7901a66c728",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 1.4750434027777777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 21,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-morph/16x9-duration-600-frame-21.png",
                "sha256": "0c925f2a09f5484f8b2680744f682b8f63a05f835186ba8930910637f7d67497",
                "alphaMass": 587520
              },
              {
                "frame": 144,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-morph/16x9-duration-600-frame-144.png",
                "sha256": "d0ac982ad6ec1f11f522dceee6526b5c1e4ad769bf3870e97011c7901a66c728",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-morph/16x9-duration-600-frame-528.png",
                "sha256": "d0ac982ad6ec1f11f522dceee6526b5c1e4ad769bf3870e97011c7901a66c728",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-morph/16x9-duration-600-frame-599.png",
                "sha256": "d0ac982ad6ec1f11f522dceee6526b5c1e4ad769bf3870e97011c7901a66c728",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 96,
            "averageChannelDifference": 6.852322048611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 11,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-morph/9x16-duration-96-frame-11.png",
                "sha256": "9a6af47676b6ecec02a9b9e4c8f1f124a274ad8a657dfd4675390693d9b424a3",
                "alphaMass": 587520
              },
              {
                "frame": 95,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-morph/9x16-duration-96-frame-95.png",
                "sha256": "0eac8dc0ddeaf22ab1f896ef871c6f881088d51542830dbe9da05435fc371de6",
                "alphaMass": 587520
              },
              {
                "frame": 84,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-morph/9x16-duration-96-frame-84.png",
                "sha256": "0eac8dc0ddeaf22ab1f896ef871c6f881088d51542830dbe9da05435fc371de6",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 6.819118923611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 21,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-morph/9x16-duration-600-frame-21.png",
                "sha256": "857122e2c887d5833e75aaefca0f62d9d4bf1431c893805e942658fc21140666",
                "alphaMass": 587520
              },
              {
                "frame": 144,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-morph/9x16-duration-600-frame-144.png",
                "sha256": "0eac8dc0ddeaf22ab1f896ef871c6f881088d51542830dbe9da05435fc371de6",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-morph/9x16-duration-600-frame-528.png",
                "sha256": "0eac8dc0ddeaf22ab1f896ef871c6f881088d51542830dbe9da05435fc371de6",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-morph/9x16-duration-600-frame-599.png",
                "sha256": "0eac8dc0ddeaf22ab1f896ef871c6f881088d51542830dbe9da05435fc371de6",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 96,
            "averageChannelDifference": 2.759548611111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 11,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-morph/1x1-duration-96-frame-11.png",
                "sha256": "08b2dc0f0a67c556cf46963d7e58b04dd0e408e38fd536558b46198fb4b3daf0",
                "alphaMass": 587520
              },
              {
                "frame": 95,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-morph/1x1-duration-96-frame-95.png",
                "sha256": "c59fd9382de94054b7cd405352e028aa268017ea6f3f3051e23e754938d0278c",
                "alphaMass": 587520
              },
              {
                "frame": 84,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-morph/1x1-duration-96-frame-84.png",
                "sha256": "c59fd9382de94054b7cd405352e028aa268017ea6f3f3051e23e754938d0278c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 2.745876736111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 21,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-morph/1x1-duration-600-frame-21.png",
                "sha256": "932b42e31c9a02fa5b1abab59219d82b4b1b1971a6743e0e11086181896bb812",
                "alphaMass": 587520
              },
              {
                "frame": 144,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-morph/1x1-duration-600-frame-144.png",
                "sha256": "c59fd9382de94054b7cd405352e028aa268017ea6f3f3051e23e754938d0278c",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-morph/1x1-duration-600-frame-528.png",
                "sha256": "c59fd9382de94054b7cd405352e028aa268017ea6f3f3051e23e754938d0278c",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-cursors-a/cursor-morph/1x1-duration-600-frame-599.png",
                "sha256": "c59fd9382de94054b7cd405352e028aa268017ea6f3f3051e23e754938d0278c",
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
        "note": "One cursor becomes a hand, I-beam, hand and crosshair as it crosses a link, text, button and canvas."
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
      "bundleSha256": "98abb89e9ccf0bf118836f7f91b492184c82816b87397af7d8cac46c87f9d986",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-07",
      "at": "2026-10-07T23:49:44.264Z",
      "basis": "Cursor blocks: 10 interactions and 12 cursor styles, approved by the owner from the prototypes"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-morph/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-morph/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-morph/16x9/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 144,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "a13bfc3a397ecd049410d3835eb8d5f7a75bfa01f018d7593b4ab7461d7a835d",
        "loop": "ace78e7b6154963ba5242fae4d3894087dc57e731584b713d40159f296dfe043",
        "detail": "851fd1feb3227e9d6acce1d4e666df3f08dc8e948838423289fad36070d5a385"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-morph/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-morph/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-morph/9x16/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 144,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "657cac3b4c8fb9e403b5c7ff82b7e5413758a2f4f39b9212f4b492012df24680",
        "loop": "432632734198fecb14a44504598ca5789523996c83a72aa8b01e01ecf8e0e70e",
        "detail": "c801039b4e8e441133ee4f5a6299b87d9b90650da04adaabb328c9fa6589e011"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-morph/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-morph/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-morph/1x1/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 144,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "e5d2e6293d5596f3a39fc4acb8f186ead8e8625d1b125a1c8561874a491e7f6d",
        "loop": "40552f0b4181e2a4978f44d8e284f0defbe49591575890ebaa088905e53d5f71",
        "detail": "ee184683e4fcdd9a4cfae29992ebc383f0e06001b271d112b789d0f17780d3e9"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/98abb89e9ccf0bf118836f7f91b492184c82816b87397af7d8cac46c87f9d986/index.mjs",
    "sha256": "98abb89e9ccf0bf118836f7f91b492184c82816b87397af7d8cac46c87f9d986",
    "bytes": 181290,
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
    "at": "2026-10-08T00:02:24.887Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
