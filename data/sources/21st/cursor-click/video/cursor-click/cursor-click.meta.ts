// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "ui/cursor",
  "tags": [
    "cursor",
    "click",
    "button",
    "cta",
    "ui",
    "interaction"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 90,
      "min": 60,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 56,
      "out": 0
    },
    "markers": {
      "settled": 60,
      "click": 38
    },
    "beats": [
      0,
      38,
      44
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
    "fill": "region",
    "defaultRegion": {
      "x": 0.1,
      "y": 0.2,
      "w": 0.8,
      "h": 0.6
    },
    "safeArea": "action",
    "transparent": true,
    "preset": "center",
    "backdrop": []
  },
  "slots": [
    {
      "key": "label",
      "type": "text",
      "maxChars": 28,
      "lines": 1,
      "role": "headline"
    },
    {
      "key": "doneLabel",
      "type": "text",
      "maxChars": 28,
      "lines": 1,
      "role": "subline"
    }
  ],
  "brand": {
    "accent": "colors.primary",
    "fontFamily": "fonts.heading",
    "buttonColor": "colors.background",
    "color": "colors.text"
  },
  "motionBeats": [
    {
      "target": "cursor",
      "prop": "xy",
      "from": "bottom-right",
      "settledBy": 34,
      "easing": "ease"
    },
    {
      "target": "button",
      "prop": "scale",
      "settledBy": 46,
      "easing": "spring"
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
      90
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st-ads/remotion/showcase.tsx (Cursor, CopyPromptBeat), ui.tsx (CopyActions)"
  },
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "interact"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "label": "Copy prompt",
    "doneLabel": "Copied",
    "buttonColor": "#FFFFFF",
    "color": "#0A0A0A",
    "accent": "#3D63FF",
    "fontFamily": "Geist",
    "from": "bottom-right"
  },
  "fields": [
    {
      "key": "label",
      "label": "Label",
      "type": "text",
      "max": 28,
      "role": "headline"
    },
    {
      "key": "doneLabel",
      "label": "Done label",
      "type": "text",
      "max": 28,
      "role": "subline"
    },
    {
      "key": "buttonColor",
      "label": "Button color",
      "type": "color",
      "brand": "colors.background"
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
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    },
    {
      "key": "from",
      "label": "From",
      "type": "select",
      "options": [
        "bottom-right",
        "bottom-left",
        "right"
      ]
    }
  ],
  "name": "Cursor Click",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "cursor-click",
    "bundleSha256": "6cd009dd6cf3721357a3cd656f6d6d51dcdb2c61ce2ac50384b6ec3f7890e95f",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T01:02:25.000Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/cursor-click/16x9-paper.png",
        "sha256": "8fbcbfac56087ba6419b32ae9112888e5fe5de95879c72c35caa53dba1a0e198"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/cursor-click/16x9-night.png",
        "sha256": "2235dab5d3a2c2256b4e07c1159cae82246fc5de85e69033a50a92821bb3dcad"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/cursor-click/16x9-color.png",
        "sha256": "9ff94f551cf7d0865eefa19fb7308ce6da06b46011e483dd2a8dafa3dd020725"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/cursor-click/9x16-paper.png",
        "sha256": "caa9e2fcf3f8c9a9a6b966216a7f1858f827e51ef0c55d14d55488d57be4e245"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/cursor-click/9x16-night.png",
        "sha256": "991491c4f3009046f1bd4161e6d2db76c4f69e017b05205393fc7764db35a500"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/cursor-click/9x16-color.png",
        "sha256": "dc67953e72427d0ddf5f0a637a1807fd596e65b689c038d5e86140aedd3b7640"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/cursor-click/1x1-paper.png",
        "sha256": "8d32df4bb7fef4f231e233d4fc212637b43fdf5fa800b1f88b212dca84de2089"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/cursor-click/1x1-night.png",
        "sha256": "759eaddc4f7fbc721ba4f20076303eb2b2bc086d90553fea34d9462f324cd1c7"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/cursor-click/1x1-color.png",
        "sha256": "0b04261f99e956858ee57e87644cd59dabcc9f0263a74969d3a188fb4b250813"
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
          "cursor-click--16x9",
          "cursor-click--9x16",
          "cursor-click--1x1"
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
            "paperNight": 109.20673285590277,
            "paperColor": 57.225179036458336,
            "region": {
              "left": 744,
              "top": 449,
              "width": 432,
              "height": 182
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 51.37261284722222,
            "paperColor": 21.28510199652778,
            "region": {
              "left": 0,
              "top": 338,
              "width": 1080,
              "height": 1244
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 106.04106987847223,
            "paperColor": 59.12836371527778,
            "region": {
              "left": 376,
              "top": 471,
              "width": 328,
              "height": 140
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
            "occupancy": 0.1119516093474427,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.11143331485972305,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.09329300778953557,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907031,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.11623972100652485,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.11623972100652485,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.09710269376764577,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 3.4922960069444446,
        "frames": [
          9,
          60,
          89
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 60,
            "averageChannelDifference": 3.5284288194444446,
            "retainedAlpha": 1.0078048780487805,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/cursor-click/16x9-duration-60-frame-7.png",
                "sha256": "471618e25c5e3aaf613ea8577f37cf10fdf57ef753acb6a2762be21c9fe66a70",
                "alphaMass": 8219
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/cursor-click/16x9-duration-60-frame-59.png",
                "sha256": "89bcfde4c28550c4d7a85b5f73e453648e7fa6ce51c70b930378242d1ac6b992",
                "alphaMass": 9225
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/cursor-click/16x9-duration-60-frame-52.png",
                "sha256": "73083f001b6c5e707033e6b8fa2c79ba2e422e67f9314e357a57fccfc4461974",
                "alphaMass": 9297
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 3.4922960069444446,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/cursor-click/16x9-duration-600-frame-9.png",
                "sha256": "e6a425162a46c732e6b5ca2be07797d1ef2b54c395d6cd3c1371fe6d2c92fab1",
                "alphaMass": 9248
              },
              {
                "frame": 60,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/cursor-click/16x9-duration-600-frame-60.png",
                "sha256": "ae6d69c5fd8373a8723113abbdf47a2464a9f9e532b28ff20d368d379a33c47c",
                "alphaMass": 9222
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/cursor-click/16x9-duration-600-frame-528.png",
                "sha256": "07ce5baad337844ebd78c44b8415a25bc3c4a596e1df45943b11662ddb7e9a3a",
                "alphaMass": 9241
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/cursor-click/16x9-duration-600-frame-599.png",
                "sha256": "07ce5baad337844ebd78c44b8415a25bc3c4a596e1df45943b11662ddb7e9a3a",
                "alphaMass": 9241
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 60,
            "averageChannelDifference": 36.09483506944444,
            "retainedAlpha": 1.0223504806045633,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/cursor-click/9x16-duration-60-frame-7.png",
                "sha256": "a611d501bef3f8eaeaf7aebe1ba09b452944dea0fb0821f45bfd99e1391529b8",
                "alphaMass": 118046
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/cursor-click/9x16-duration-60-frame-59.png",
                "sha256": "7ca946ac966a05c42ee6c33270f30e76bb433eda9c8633ab690754ef31878e9e",
                "alphaMass": 137223
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/cursor-click/9x16-duration-60-frame-52.png",
                "sha256": "fd57a3ccd40e8d6984f99716b98ea7385ad846c4232476c3e66e4eb5e07bf2a7",
                "alphaMass": 140290
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 34.104275173611114,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/cursor-click/9x16-duration-600-frame-9.png",
                "sha256": "d8a9cb8ab3a0a71a7492945ba54e386418b08f9f9f08e160ad6932efb01e2404",
                "alphaMass": 136449
              },
              {
                "frame": 60,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/cursor-click/9x16-duration-600-frame-60.png",
                "sha256": "865e05f0fa35bf95617c2711207c96759732feb133bf685ee148347c85516298",
                "alphaMass": 136921
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/cursor-click/9x16-duration-600-frame-528.png",
                "sha256": "783da1bf70489f32a0aa53f0a907bd2e413a78770b2bb9fa37ba7f376a206acd",
                "alphaMass": 136310
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/cursor-click/9x16-duration-600-frame-599.png",
                "sha256": "783da1bf70489f32a0aa53f0a907bd2e413a78770b2bb9fa37ba7f376a206acd",
                "alphaMass": 136310
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 60,
            "averageChannelDifference": 4.623914930555555,
            "retainedAlpha": 0.9940271309981777,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/cursor-click/1x1-duration-60-frame-7.png",
                "sha256": "919f8652c0cacb49b46ab3f5753640621123556b105bda80dba427b6d1668d0b",
                "alphaMass": 8336
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/cursor-click/1x1-duration-60-frame-59.png",
                "sha256": "9222ffa0204b47b99768c8121fedb5a79ce8585254e0985d0c3131f60cffae3c",
                "alphaMass": 9878
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/cursor-click/1x1-duration-60-frame-52.png",
                "sha256": "9b84d2746d76d646ec43b364b5fed6f7ad076f76ae8ceafdb5ba8e295f96e938",
                "alphaMass": 9819
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 4.526475694444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 9,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/cursor-click/1x1-duration-600-frame-9.png",
                "sha256": "61298639c5831b31bff211f04589f6b4375ef778c3e80d92db2994d6037918fe",
                "alphaMass": 9700
              },
              {
                "frame": 60,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/cursor-click/1x1-duration-600-frame-60.png",
                "sha256": "46856f1d87194eba4310656ab6b8a9f45e706c181360e1161804e9f3400e4eb3",
                "alphaMass": 9885
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/cursor-click/1x1-duration-600-frame-528.png",
                "sha256": "e5cec664db3a3e24d2d45993ca8fc6906a529092c162fffe75be9b83a1dcdbd0",
                "alphaMass": 9938
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/cursor-click/1x1-duration-600-frame-599.png",
                "sha256": "e5cec664db3a3e24d2d45993ca8fc6906a529092c162fffe75be9b83a1dcdbd0",
                "alphaMass": 9938
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "product-ui",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "A cursor clicks a button that flips to a done state; a small UI moment, meant as a layer."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 39,
        "compared": 39,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "6cd009dd6cf3721357a3cd656f6d6d51dcdb2c61ce2ac50384b6ec3f7890e95f",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:02.015907Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-click/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-click/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-click/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 60,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 90,
      "sha256": {
        "poster": "1945e39df402d6d97cb0cf28ee420da62ca5a90a21f8e3a3804601d7ccc9cf57",
        "loop": "46f458012d5a99668b94cea1b4a2179ada1d8f9a367bbc13cbe1511eac5d9628",
        "detail": "b311028d2d6623243f18c7ee537c2518e24888a8ae99ce2be5bfa6437437dc20"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-click/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-click/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-click/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 60,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 90,
      "sha256": {
        "poster": "ef0db8fea4027c3a4ec2f2e65e1c813b439e44558e53c2f3b015c668f6267945",
        "loop": "de84e95ee82cf4c040e5fc1bda65370e5056788c8e9d23a51a20474e098ec2c0",
        "detail": "9a255de3b46b3a5cf5918fb6d3524f02dbdbcea6d79b0e20cb31058a72c4fe65"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/cursor-click/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cursor-click/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cursor-click/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 60,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 90,
      "sha256": {
        "poster": "88e7d4bf03666ffec8a697143c89eedb6cdbbf896aaf084abe30efc66519ecee",
        "loop": "445f7a30eb3d1bd02adb1c989883c1fcc2cd153ab10efbf17628ae536f2b4e58",
        "detail": "ad4dbae328916b5bb390b276b475fb5689eb1c6ddede8ece1462af9cdbea74a8"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/6cd009dd6cf3721357a3cd656f6d6d51dcdb2c61ce2ac50384b6ec3f7890e95f/index.mjs",
    "sha256": "6cd009dd6cf3721357a3cd656f6d6d51dcdb2c61ce2ac50384b6ec3f7890e95f",
    "bytes": 161144,
    "externals": [
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
    "at": "2026-10-07T02:32:27.625Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
