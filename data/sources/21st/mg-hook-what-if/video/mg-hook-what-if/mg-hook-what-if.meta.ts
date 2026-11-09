// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/motion-gallery",
  "job": "titles",
  "language": "product-ui",
  "mechanic": [
    "blurred-ui-focus-pull"
  ],
  "energy": "calm",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "titles",
    "blurred-ui-focus-pull",
    "hook",
    "question",
    "product-reveal"
  ],
  "engines": {
    "remotion": ">=4.0.533 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 90,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 102,
      "out": 0
    },
    "markers": {
      "settled": 102
    },
    "beats": [
      0,
      26,
      51,
      77,
      102
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
    "preset": "full",
    "backdrop": [
      "paintBackground"
    ]
  },
  "slots": [
    {
      "key": "headline",
      "type": "text",
      "maxChars": 28,
      "role": "headline"
    },
    {
      "key": "sub",
      "type": "text",
      "maxChars": 52,
      "role": "body"
    }
  ],
  "brand": {
    "ink": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "paper": "colors.background",
    "displayFont": "fonts.heading",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "blurred-ui-focus-pull",
      "prop": "transform",
      "from": "enter",
      "settledBy": 102,
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
    "sourceUrl": "docs/research/launch-videos-2026-10-06/README.md"
  },
  "defaults": {
    "ink": "#0F0F12",
    "accent": "#3D63FF",
    "secondary": "#3FD0FF",
    "paper": "#F7F7F5",
    "displayFont": "Geist",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "headline": "What if it just worked?",
    "sub": "Lumen keeps your docs, code and team in sync."
  },
  "fields": [
    {
      "key": "ink",
      "label": "Ink",
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
      "key": "paper",
      "label": "Paper",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "displayFont",
      "label": "Display font",
      "type": "font",
      "brand": "fonts.heading"
    },
    {
      "key": "bodyFont",
      "label": "Body font",
      "type": "font",
      "brand": "fonts.body"
    },
    {
      "key": "monoFont",
      "label": "Mono font",
      "type": "font",
      "brand": "fonts.mono"
    },
    {
      "key": "paintBackground",
      "label": "Paint background",
      "type": "boolean",
      "backdrop": true
    },
    {
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 28,
      "role": "headline"
    },
    {
      "key": "sub",
      "label": "Sub",
      "type": "text",
      "max": 52,
      "role": "body"
    }
  ],
  "name": "What If Focus Pull",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-hook-what-if",
    "bundleSha256": "c98af31798b37987b983196e5d0241b72b2354e5862e0d91c2a8339b39ef5f23",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:47:19.601Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-hook-what-if/16x9-paper.png",
        "sha256": "9ca9213d84192f2cce8f50747dc94bf81b9af0d6bd444ab030a4f630db9aa414"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-hook-what-if/16x9-night.png",
        "sha256": "a1be21b09955aca3f211b2fbd0527505c26c6bd005e7b7a5b804d5d856db5828"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-hook-what-if/16x9-color.png",
        "sha256": "5f31c4c28297f8a4a5fa84df61847a7deb47b7b068e3870a1e65b8cd566427c4"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-hook-what-if/9x16-paper.png",
        "sha256": "e9baa8533ab29d690fac7e83ffad50006bc0f40e0df66ad227c5750ae7e8b92c"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-hook-what-if/9x16-night.png",
        "sha256": "2e6e3feb5c658a79bba632e4f92765b3f43b68e80467e949ac8635ee949efd5b"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-hook-what-if/9x16-color.png",
        "sha256": "1f02354856b399fd33f65467c0f21ffe3c57ebd5d4c218a61e6cd93ff200d1b9"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-hook-what-if/1x1-paper.png",
        "sha256": "0175f90888a81b6eed52d18c1c9e7eed84d5211decfaa524a439a70b9a89c844"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-hook-what-if/1x1-night.png",
        "sha256": "9751b9c191cbed7adbe0e8d1ec6d5d436d4f1b4b0b14a21301988c667dfdd87c"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-hook-what-if/1x1-color.png",
        "sha256": "f1d78372696de46e8907532c9e20dabb22aae4f4f11e1fbf105c398741b1a036"
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
          "mg-hook-what-if--16x9",
          "mg-hook-what-if--9x16",
          "mg-hook-what-if--1x1"
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
            "paperNight": 13.024034288194445,
            "paperColor": 8.235785590277779,
            "region": {
              "left": 193,
              "top": 120,
              "width": 1535,
              "height": 960
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 19.82660590277778,
            "paperColor": 16.421983506944443,
            "region": {
              "left": 5,
              "top": 165,
              "width": 1070,
              "height": 1616
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 15.656304253472221,
            "paperColor": 12.73776584201389,
            "region": {
              "left": 35,
              "top": 86,
              "width": 1011,
              "height": 926
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
            "occupancy": 1.0040070474563285,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0019088091126371,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0071544049718655,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1781369086986648,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1752116773921506,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1810621400051793,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.135055359592397,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1325985298097294,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1362837744837306,
            "bad": [],
            "measured": 6
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 7.177083333333333,
        "frames": [
          15,
          102,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 7.273546006944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-hook-what-if/16x9-duration-90-frame-10.png",
                "sha256": "8b0c84adfe70ace42a9b6e4bf44456705c28794e1ab4611bc9a9449c21e9273c",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-hook-what-if/16x9-duration-90-frame-89.png",
                "sha256": "512da56ca518c06e6e8d191fc069f0d7326672fe548fd3adcf2d0ba55c2a4b84",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-hook-what-if/16x9-duration-90-frame-79.png",
                "sha256": "512da56ca518c06e6e8d191fc069f0d7326672fe548fd3adcf2d0ba55c2a4b84",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 7.177083333333333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-hook-what-if/16x9-duration-900-frame-15.png",
                "sha256": "a6b3932a0365d1d834f05e16198e750f68ff82920352fbb3ee20a2cff2fb3248",
                "alphaMass": 587520
              },
              {
                "frame": 102,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-hook-what-if/16x9-duration-900-frame-102.png",
                "sha256": "512da56ca518c06e6e8d191fc069f0d7326672fe548fd3adcf2d0ba55c2a4b84",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-hook-what-if/16x9-duration-900-frame-792.png",
                "sha256": "512da56ca518c06e6e8d191fc069f0d7326672fe548fd3adcf2d0ba55c2a4b84",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-hook-what-if/16x9-duration-900-frame-899.png",
                "sha256": "512da56ca518c06e6e8d191fc069f0d7326672fe548fd3adcf2d0ba55c2a4b84",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 8.365234375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-hook-what-if/9x16-duration-90-frame-10.png",
                "sha256": "e4e149c2b93019b973649203862d0222397b525bd3f634a712d4034b45d7b1d9",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-hook-what-if/9x16-duration-90-frame-89.png",
                "sha256": "169c55cb41dcc17bd2e1dd93e46707e6f40a4397d8e26e4274538b8f483efdd9",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-hook-what-if/9x16-duration-90-frame-79.png",
                "sha256": "169c55cb41dcc17bd2e1dd93e46707e6f40a4397d8e26e4274538b8f483efdd9",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 8.24001736111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-hook-what-if/9x16-duration-900-frame-15.png",
                "sha256": "03309c435551915f6e11e4a953fd5415d4728fbdeb98b31b430e09447e5610c8",
                "alphaMass": 587520
              },
              {
                "frame": 102,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-hook-what-if/9x16-duration-900-frame-102.png",
                "sha256": "169c55cb41dcc17bd2e1dd93e46707e6f40a4397d8e26e4274538b8f483efdd9",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-hook-what-if/9x16-duration-900-frame-792.png",
                "sha256": "169c55cb41dcc17bd2e1dd93e46707e6f40a4397d8e26e4274538b8f483efdd9",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-hook-what-if/9x16-duration-900-frame-899.png",
                "sha256": "169c55cb41dcc17bd2e1dd93e46707e6f40a4397d8e26e4274538b8f483efdd9",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 7.224066840277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-hook-what-if/1x1-duration-90-frame-10.png",
                "sha256": "6bef01a054c0cb54b70b694d9a61c95f759e22e13f0b240a798b11ec4fbb1f9f",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-hook-what-if/1x1-duration-90-frame-89.png",
                "sha256": "c1e46088b66e92bc8e437de450fbcf4b605b23a07f400fe3f4a020d02b8c8375",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-hook-what-if/1x1-duration-90-frame-79.png",
                "sha256": "c1e46088b66e92bc8e437de450fbcf4b605b23a07f400fe3f4a020d02b8c8375",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 7.111870659722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-hook-what-if/1x1-duration-900-frame-15.png",
                "sha256": "7b089919c14b1a6ac8500906dc58bc4f4a1f8d9fd57388c8125baaa98c591886",
                "alphaMass": 587520
              },
              {
                "frame": 102,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-hook-what-if/1x1-duration-900-frame-102.png",
                "sha256": "c1e46088b66e92bc8e437de450fbcf4b605b23a07f400fe3f4a020d02b8c8375",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-hook-what-if/1x1-duration-900-frame-792.png",
                "sha256": "c1e46088b66e92bc8e437de450fbcf4b605b23a07f400fe3f4a020d02b8c8375",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-hook-what-if/1x1-duration-900-frame-899.png",
                "sha256": "c1e46088b66e92bc8e437de450fbcf4b605b23a07f400fe3f4a020d02b8c8375",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "titles",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "A headline asks What if it just worked with the last word in a blue-to-cyan gradient, then focus pulls to a launch plan."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 43,
        "compared": 43,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "c98af31798b37987b983196e5d0241b72b2354e5862e0d91c2a8339b39ef5f23",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-hook-what-if/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-hook-what-if/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-hook-what-if/16x9/detail.mp4",
      "bg": "#f7f7f5",
      "posterFrame": 102,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "e1595ee0ea80971ede409e4c5cf1569a8d5516cc3e116313a6670450f8b0b5f0",
        "loop": "c4d4129c8d753f7185b1a09e2e6b9d7d28a2b1ba17389b04aa3c879b12823d45",
        "detail": "6dbc530e8bdd6e94d3be4650b95d2b632398864c76aa3be4ecf312948507c67c"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-hook-what-if/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-hook-what-if/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-hook-what-if/9x16/detail.mp4",
      "bg": "#f7f7f5",
      "posterFrame": 102,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "9244898263deba6e42920826092744b51037fa1dcbceb858d5e444b0eeb9ec38",
        "loop": "ee9c31538d0c9dd4ca425dd4e82e3f0b7c8db9dc1c4bed406b60f871bf5fa187",
        "detail": "ac2707ff450c01bf89e41521e067c63118110b263beb5711658ec7b766bde1be"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-hook-what-if/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-hook-what-if/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-hook-what-if/1x1/detail.mp4",
      "bg": "#f7f7f5",
      "posterFrame": 102,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "a8597e824b2e596814857f8f67a526f1706e13d73a13cb04df4eeff0db9ea294",
        "loop": "fa5a42c750f314d9bc3b1ed70fa7b59e42b40befe623662e0ce43b8c99f1af43",
        "detail": "395f66d2cd98cf9b25c933219587521e323304b7eba029e30a31775ffb8c1f19"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/c98af31798b37987b983196e5d0241b72b2354e5862e0d91c2a8339b39ef5f23/index.mjs",
    "sha256": "c98af31798b37987b983196e5d0241b72b2354e5862e0d91c2a8339b39ef5f23",
    "bytes": 218295,
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
    "at": "2026-10-09T04:00:27.025Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
