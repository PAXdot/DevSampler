// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "titles/motion-gallery",
  "job": "titles",
  "language": "pixel-terminal",
  "mechanic": [
    "typed-transcript-scroll"
  ],
  "energy": "calm",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "titles",
    "typed-transcript-scroll",
    "captions",
    "transcript",
    "typewriter",
    "screen-recording"
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
      "key": "prev",
      "type": "text",
      "maxChars": 28,
      "role": "caption"
    },
    {
      "key": "line",
      "type": "text",
      "maxChars": 56,
      "role": "caption"
    },
    {
      "key": "label",
      "type": "text",
      "maxChars": 22,
      "role": "label"
    }
  ],
  "brand": {
    "ink": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "paper": "colors.background",
    "displayFont": "fonts.display",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "typed-transcript-scroll",
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
    "ink": "#EDEFEA",
    "accent": "#FFB224",
    "secondary": "#5EEAD4",
    "paper": "#050807",
    "displayFont": "Geist",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": false,
    "prev": "Meet Lumen.",
    "line": "Your docs, your code, your team, in one place.",
    "label": "live captions · en"
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
      "brand": "fonts.display"
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
      "key": "prev",
      "label": "Prev",
      "type": "text",
      "max": 28,
      "role": "caption"
    },
    {
      "key": "line",
      "label": "Line",
      "type": "text",
      "max": 56,
      "role": "caption"
    },
    {
      "key": "label",
      "label": "Label",
      "type": "text",
      "max": 22,
      "role": "label"
    }
  ],
  "name": "Typewriter Transcript",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-cap-typewriter",
    "bundleSha256": "44940316bbb6f34778a8b91d33e38d64b692d4eae4afbbfe221f38abf91067c2",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:43:44.788Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-cap-typewriter/16x9-paper.png",
        "sha256": "a14c7c4d655dca311228c5f429009cf3762cb587517782682d88c32dafbc16ca"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-cap-typewriter/16x9-night.png",
        "sha256": "0438415d1e5321c677467762dcc8ab08c18a73d8c2ffe602216165b62ff5d274"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-cap-typewriter/16x9-color.png",
        "sha256": "3cfa4257ccf7b0eeba5f1b7e5eaee4494b028d656deacb2989890be3447fe587"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-cap-typewriter/9x16-paper.png",
        "sha256": "ded533f35ed6e1d0fa530a9478c920b1d232b73ac2d2457b2d52448abd6ed420"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-cap-typewriter/9x16-night.png",
        "sha256": "4e6fcb7fb9983353aaee84530b5c87ee2f92331a2ca444fed485b06ec8d76984"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-cap-typewriter/9x16-color.png",
        "sha256": "b7292be387583f67d1ad01ac13467a8e36a4eb850e001a7250102f1fefdd5af6"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-cap-typewriter/1x1-paper.png",
        "sha256": "d4e9d63d156345587711f90bf045cdca6249855390bc5fbe91d09f19e9059762"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-cap-typewriter/1x1-night.png",
        "sha256": "5a3f2762220462c4c507aa4a8f093375859c11a54db4d0687a3a1323a9517763"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-cap-typewriter/1x1-color.png",
        "sha256": "3c28c187db4dae5f1c5f178fd75f2dad9b977a1fb7af7c5299d9d46afbf624fb"
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
          "mg-cap-typewriter--16x9",
          "mg-cap-typewriter--9x16",
          "mg-cap-typewriter--1x1"
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
            "paperNight": 98.21546766493056,
            "paperColor": 10.24636501736111,
            "region": {
              "left": 34,
              "top": 623,
              "width": 1334,
              "height": 457
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 55.13804796006944,
            "paperColor": 6.913031684027778,
            "region": {
              "left": 24,
              "top": 153,
              "width": 1032,
              "height": 1529
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 110.02568901909723,
            "paperColor": 11.515543619791666,
            "region": {
              "left": 23,
              "top": 707,
              "width": 1034,
              "height": 372
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
            "occupancy": 0.4166663932805633,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.4166663932805633,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.4166663932805633,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.078458968463929,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.078458968463929,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.078458968463929,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.467366301801928,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.467366301801928,
            "bad": [],
            "measured": 12
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.467366301801928,
            "bad": [],
            "measured": 12
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 6.927517361111111,
        "frames": [
          15,
          102,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 6.997395833333333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-cap-typewriter/16x9-duration-90-frame-10.png",
                "sha256": "f71398494cb2aee66b9e7007f85521017b16ffcd156c5659955e880ff801ffc5",
                "alphaMass": 56467
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-cap-typewriter/16x9-duration-90-frame-89.png",
                "sha256": "03aa412bbdaf16c5ddf082866b932d7f19ee030f5d7409c4b8abb9c29a5d539f",
                "alphaMass": 98280
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-cap-typewriter/16x9-duration-90-frame-79.png",
                "sha256": "03aa412bbdaf16c5ddf082866b932d7f19ee030f5d7409c4b8abb9c29a5d539f",
                "alphaMass": 98280
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 6.927517361111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-cap-typewriter/16x9-duration-900-frame-15.png",
                "sha256": "9fe93d24378ce1f9567b9e65963e6d4cf8fc29c056a6748336abe34efe851da8",
                "alphaMass": 56480
              },
              {
                "frame": 102,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-cap-typewriter/16x9-duration-900-frame-102.png",
                "sha256": "03aa412bbdaf16c5ddf082866b932d7f19ee030f5d7409c4b8abb9c29a5d539f",
                "alphaMass": 98280
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-cap-typewriter/16x9-duration-900-frame-792.png",
                "sha256": "03aa412bbdaf16c5ddf082866b932d7f19ee030f5d7409c4b8abb9c29a5d539f",
                "alphaMass": 98280
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-cap-typewriter/16x9-duration-900-frame-899.png",
                "sha256": "03aa412bbdaf16c5ddf082866b932d7f19ee030f5d7409c4b8abb9c29a5d539f",
                "alphaMass": 98280
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 10.348198784722221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-cap-typewriter/9x16-duration-90-frame-10.png",
                "sha256": "a869083c80844e0630a4f41a7904fec40a0f89ee19389943450a5670d183c501",
                "alphaMass": 65271
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-cap-typewriter/9x16-duration-90-frame-89.png",
                "sha256": "4eec456654f6f8bd8f3dc40bb88c8deb43c7bc0971de1dab88e17987ed23a84d",
                "alphaMass": 128136
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-cap-typewriter/9x16-duration-90-frame-79.png",
                "sha256": "4eec456654f6f8bd8f3dc40bb88c8deb43c7bc0971de1dab88e17987ed23a84d",
                "alphaMass": 128136
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 10.339518229166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-cap-typewriter/9x16-duration-900-frame-15.png",
                "sha256": "e94a720e3325e7ac1c79acf18811822d8ef05292205803ed6768766c3b97d9f9",
                "alphaMass": 65280
              },
              {
                "frame": 102,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-cap-typewriter/9x16-duration-900-frame-102.png",
                "sha256": "4eec456654f6f8bd8f3dc40bb88c8deb43c7bc0971de1dab88e17987ed23a84d",
                "alphaMass": 128136
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-cap-typewriter/9x16-duration-900-frame-792.png",
                "sha256": "4eec456654f6f8bd8f3dc40bb88c8deb43c7bc0971de1dab88e17987ed23a84d",
                "alphaMass": 128136
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-cap-typewriter/9x16-duration-900-frame-899.png",
                "sha256": "4eec456654f6f8bd8f3dc40bb88c8deb43c7bc0971de1dab88e17987ed23a84d",
                "alphaMass": 128136
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 8.590386284722221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-cap-typewriter/1x1-duration-90-frame-10.png",
                "sha256": "cf2974f6897ac369416f87fe6e235f431edf18b0c0ce5b0806f5a62a8e503e8e",
                "alphaMass": 69768
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-cap-typewriter/1x1-duration-90-frame-89.png",
                "sha256": "2971c188df6e1620b804bd4c55d6768306a4b2c3925e74b3996d5dbd8eeaedb9",
                "alphaMass": 119703
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-cap-typewriter/1x1-duration-90-frame-79.png",
                "sha256": "2971c188df6e1620b804bd4c55d6768306a4b2c3925e74b3996d5dbd8eeaedb9",
                "alphaMass": 119703
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 8.513780381944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-cap-typewriter/1x1-duration-900-frame-15.png",
                "sha256": "b3e3fe6413bbbba993aa4d7966a0bf91d8e6b0c898b0ef4723fbdf3ced22b5f4",
                "alphaMass": 69778
              },
              {
                "frame": 102,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-cap-typewriter/1x1-duration-900-frame-102.png",
                "sha256": "2971c188df6e1620b804bd4c55d6768306a4b2c3925e74b3996d5dbd8eeaedb9",
                "alphaMass": 119703
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-cap-typewriter/1x1-duration-900-frame-792.png",
                "sha256": "2971c188df6e1620b804bd4c55d6768306a4b2c3925e74b3996d5dbd8eeaedb9",
                "alphaMass": 119703
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-cap-typewriter/1x1-duration-900-frame-899.png",
                "sha256": "2971c188df6e1620b804bd4c55d6768306a4b2c3925e74b3996d5dbd8eeaedb9",
                "alphaMass": 119703
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
        "note": "Typewriter live-caption transcript card as a transparent layer; readable in every brand."
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
      "bundleSha256": "44940316bbb6f34778a8b91d33e38d64b692d4eae4afbbfe221f38abf91067c2",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-cap-typewriter/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-cap-typewriter/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-cap-typewriter/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 102,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "d162598198b974c83bd34e3062a11db630dfe5e572ab45b38696cc39492d7683",
        "loop": "c9ea08e1be3946fcb1af246b7debf3771de02935a4149fb3bf4baa1b766a7547",
        "detail": "d5ed598fad8291cdd19ff42b7b0a2ca1bd9f6b5e8877162ba6a5f231ced48cca"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-cap-typewriter/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-cap-typewriter/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-cap-typewriter/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 102,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "3105ba907b1a697e87fa5482ad422a5e6200e6f41ec73bf424284c2e49ba10cf",
        "loop": "cf47718d922aa774c1ffc73a487d4216ea4d4163b5b037e8762aef8466dff862",
        "detail": "ac08f5ee9b0d020fee9b911a960e86e0153d317dd557f9d9f208a6681f629a7c"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-cap-typewriter/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-cap-typewriter/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-cap-typewriter/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 102,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "d583411962c0803c5279092a4965dfbb13dd00df9e6347f55d49e1b007f3bc65",
        "loop": "e683d38ca77c71c1fc51d379dbe73fac9d914c77d868a39375f56b0f09e94de7",
        "detail": "3c6712469705af451e7831f6d332af6ca994c852abaa4aa878004bea47ca4e86"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/44940316bbb6f34778a8b91d33e38d64b692d4eae4afbbfe221f38abf91067c2/index.mjs",
    "sha256": "44940316bbb6f34778a8b91d33e38d64b692d4eae4afbbfe221f38abf91067c2",
    "bytes": 191788,
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
      "overflow": true,
      "transparent": true
    },
    "9:16": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "overflow": true,
      "transparent": true
    },
    "1:1": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "overflow": true,
      "transparent": true
    }
  },
  "intake": {
    "at": "2026-10-09T03:45:58.959Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
