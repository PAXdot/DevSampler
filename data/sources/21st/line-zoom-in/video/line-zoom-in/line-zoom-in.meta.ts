// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "text/kinetic",
  "tags": [
    "zoom",
    "pop",
    "lines",
    "end line",
    "app launch",
    "text"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 75,
      "min": 30,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 14,
      "out": 0
    },
    "markers": {
      "settled": 14
    },
    "beats": [
      2,
      9
    ],
    "loop": false
  },
  "layout": {
    "aspects": [
      "1:1",
      "9:16",
      "16:9"
    ],
    "mode": "responsive",
    "fill": "region",
    "defaultRegion": {
      "x": 0.1,
      "y": 0.2,
      "w": 0.8,
      "h": 0.6
    },
    "safeArea": "title",
    "transparent": true,
    "preset": "center",
    "backdrop": []
  },
  "slots": [
    {
      "key": "lines",
      "type": "list",
      "maxChars": 28,
      "lines": 4,
      "role": "headline"
    }
  ],
  "brand": {
    "color": "colors.text",
    "accent": "colors.primary",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "line",
      "prop": "scale",
      "from": "0.1",
      "settledBy": 14,
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
      75
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "motion recipe from research V07 (line by line zoom text); own copy"
  },
  "job": "titles",
  "language": "kinetic-poster",
  "mechanic": [
    "reveal"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "lines": [
      "Now on",
      "every screen"
    ],
    "color": "#F4F4F5",
    "accent": "#7C9CFF",
    "fontFamily": "Geist",
    "gapFrames": 7,
    "accentLast": true
  },
  "fields": [
    {
      "key": "lines",
      "label": "Lines",
      "type": "list",
      "max": 4,
      "role": "headline"
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
      "key": "gapFrames",
      "label": "Gap frames",
      "type": "number",
      "step": 1,
      "min": 3,
      "max": 20
    },
    {
      "key": "accentLast",
      "label": "Accent last",
      "type": "boolean"
    }
  ],
  "name": "Line Zoom In",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "line-zoom-in",
    "bundleSha256": "bec4c7ab9ecdb6c0456b3081a4ea39651e914722f4fade731a06686435c7e95f",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T00:58:59.011Z",
    "samples": [
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/line-zoom-in/1x1-paper.png",
        "sha256": "cecc25c396e6d9ee061db8ff645ea895245c8502f66697f560d0ca08246a5ba4"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/line-zoom-in/1x1-night.png",
        "sha256": "db666984d885d7df18b86cc89ba21a9100aea2c017908d43d5e07cfb1d3cf1ce"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/line-zoom-in/1x1-color.png",
        "sha256": "bd1268b8e7f49f253cc4bfa0b2df8261dfcb99cb60586f9405599cb175d36cad"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/line-zoom-in/9x16-paper.png",
        "sha256": "8133cbafeac095de20b7c2091c4b51535cfdd3fca2f54380df157387a072b3d3"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/line-zoom-in/9x16-night.png",
        "sha256": "704bbbc15046a5a41b2232f5c849e02936cab25bebd34496134fb0639d37931f"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/line-zoom-in/9x16-color.png",
        "sha256": "611d158ad869fcd3d2589d043669221e5c1f851da6e244c8ec86e81c284a98b2"
      },
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/line-zoom-in/16x9-paper.png",
        "sha256": "4c18ee6b0561aaa605c6958bebda191d91feadcd29fd8076cf772394ae574df3"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/line-zoom-in/16x9-night.png",
        "sha256": "c807fb4b1321d350bb9a90b9f0d25578ded28c2c4efecf0863f491af2f472eea"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/line-zoom-in/16x9-color.png",
        "sha256": "800bb16e485bf13fa6b5d72d6ac38722d45966f30964c25ee93794d9c32fea49"
      }
    ],
    "gates": {
      "contract": {
        "pass": true,
        "errors": [],
        "transparency": [
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
          }
        ]
      },
      "formats": {
        "pass": true,
        "rendered": [
          "line-zoom-in--1x1",
          "line-zoom-in--9x16",
          "line-zoom-in--16x9"
        ]
      },
      "brand": {
        "pass": true,
        "sourcePaintLiterals": [],
        "sourceFontLiterals": [],
        "samples": [
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 43.518310546875,
            "paperColor": 50.24066840277778,
            "region": {
              "left": 250,
              "top": 439,
              "width": 584,
              "height": 214
            },
            "canvas": {
              "width": 1080,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 43.03339301215278,
            "paperColor": 62.47211371527778,
            "region": {
              "left": 179,
              "top": 512,
              "width": 735,
              "height": 867
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "16:9",
            "pass": true,
            "paperNight": 43.8740234375,
            "paperColor": 51.033474392361114,
            "region": {
              "left": 445,
              "top": 364,
              "width": 1037,
              "height": 378
            },
            "canvas": {
              "width": 1920,
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
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.30601017841979045,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.30149677636067385,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.189934995345875,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7451479981138547,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.74111840086043,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7135462732225093,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5419010929721255,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5319410107149857,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.3348068479792466,
            "bad": [],
            "measured": 2
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 25.905924479166668,
        "frames": [
          2,
          14,
          74
        ],
        "elastic": [
          {
            "aspect": "1:1",
            "duration": 30,
            "averageChannelDifference": 18.3359375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 2,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/line-zoom-in/1x1-duration-30-frame-2.png",
                "sha256": "eea44a6e62e43ec072206d3a06521fe36da748324505d25e83a2adab78fc7dcc",
                "alphaMass": 82
              },
              {
                "frame": 14,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/line-zoom-in/1x1-duration-30-frame-14.png",
                "sha256": "cd262ce9df1e3b9b7fe324ff7a5b9be0a32b1fbbe9f84b247359da2a849929c5",
                "alphaMass": 15656
              },
              {
                "frame": 26,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/line-zoom-in/1x1-duration-30-frame-26.png",
                "sha256": "cd262ce9df1e3b9b7fe324ff7a5b9be0a32b1fbbe9f84b247359da2a849929c5",
                "alphaMass": 15656
              },
              {
                "frame": 29,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/line-zoom-in/1x1-duration-30-frame-29.png",
                "sha256": "cd262ce9df1e3b9b7fe324ff7a5b9be0a32b1fbbe9f84b247359da2a849929c5",
                "alphaMass": 15656
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 18.3359375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 2,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/line-zoom-in/1x1-duration-600-frame-2.png",
                "sha256": "eea44a6e62e43ec072206d3a06521fe36da748324505d25e83a2adab78fc7dcc",
                "alphaMass": 82
              },
              {
                "frame": 14,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/line-zoom-in/1x1-duration-600-frame-14.png",
                "sha256": "cd262ce9df1e3b9b7fe324ff7a5b9be0a32b1fbbe9f84b247359da2a849929c5",
                "alphaMass": 15656
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/line-zoom-in/1x1-duration-600-frame-528.png",
                "sha256": "cd262ce9df1e3b9b7fe324ff7a5b9be0a32b1fbbe9f84b247359da2a849929c5",
                "alphaMass": 15656
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/line-zoom-in/1x1-duration-600-frame-599.png",
                "sha256": "cd262ce9df1e3b9b7fe324ff7a5b9be0a32b1fbbe9f84b247359da2a849929c5",
                "alphaMass": 15656
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 30,
            "averageChannelDifference": 37.878255208333336,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 2,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/line-zoom-in/9x16-duration-30-frame-2.png",
                "sha256": "38bd55fbb1257d2bc25e27998c7c5574b170fba97c7f99f25061c4e41e2e2d0a",
                "alphaMass": 217
              },
              {
                "frame": 14,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/line-zoom-in/9x16-duration-30-frame-14.png",
                "sha256": "fb49a02a69a2eae5f0eaf1e0dde7eb0b7df1afc5c3ed65fadb273d2564c70e9c",
                "alphaMass": 40146
              },
              {
                "frame": 26,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/line-zoom-in/9x16-duration-30-frame-26.png",
                "sha256": "098a8d2ea924c3668e5a77db21c7c026c0e2fc691b5a79b066ab2c6f6e56317d",
                "alphaMass": 40146
              },
              {
                "frame": 29,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/line-zoom-in/9x16-duration-30-frame-29.png",
                "sha256": "fbd65b781675dc4d0e62a739fc5c938bfb0d60cfb33d10443f11948e97f4e06b",
                "alphaMass": 40146
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 37.878255208333336,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 2,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/line-zoom-in/9x16-duration-600-frame-2.png",
                "sha256": "38bd55fbb1257d2bc25e27998c7c5574b170fba97c7f99f25061c4e41e2e2d0a",
                "alphaMass": 217
              },
              {
                "frame": 14,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/line-zoom-in/9x16-duration-600-frame-14.png",
                "sha256": "f934624b4855977dbe7915ef5cfd827eed874121fb2682315919a43a11b13b2b",
                "alphaMass": 40146
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/line-zoom-in/9x16-duration-600-frame-528.png",
                "sha256": "88ea8c3922e3731b75769310cf3c8c201c2a1aecdaf30de9b42fe602d227d044",
                "alphaMass": 40146
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/line-zoom-in/9x16-duration-600-frame-599.png",
                "sha256": "31ea3e36c0879de12bd5e2ee1579f944dc4adcd4924983039d417025f903215a",
                "alphaMass": 40146
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 30,
            "averageChannelDifference": 25.905924479166668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 2,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/line-zoom-in/16x9-duration-30-frame-2.png",
                "sha256": "171f0925e903c0d7d94e1dff1202e3bffd7042d93c30eeafafe3a5e8e330599a",
                "alphaMass": 133
              },
              {
                "frame": 14,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/line-zoom-in/16x9-duration-30-frame-14.png",
                "sha256": "32a74ed63beeaaff542a46c07fe16cb3885956345b0ea27b9a6cd3391ca17261",
                "alphaMass": 26261
              },
              {
                "frame": 26,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/line-zoom-in/16x9-duration-30-frame-26.png",
                "sha256": "8f6ec3149ba6510826ad1acde65b1118da1127fe8a185c9d428a78a855ad8983",
                "alphaMass": 26261
              },
              {
                "frame": 29,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/line-zoom-in/16x9-duration-30-frame-29.png",
                "sha256": "272857769fbe14a591fe49390ecefaf31c953298fd1495782d51fba78254efb6",
                "alphaMass": 26261
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 25.905924479166668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 2,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/line-zoom-in/16x9-duration-600-frame-2.png",
                "sha256": "171f0925e903c0d7d94e1dff1202e3bffd7042d93c30eeafafe3a5e8e330599a",
                "alphaMass": 133
              },
              {
                "frame": 14,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/line-zoom-in/16x9-duration-600-frame-14.png",
                "sha256": "02ef4285ffc804a5989982a4b70539a8c5995f48274fa12825678a0ba9ff2c7c",
                "alphaMass": 26261
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/line-zoom-in/16x9-duration-600-frame-528.png",
                "sha256": "6d09f55c298f0ef25a268e894e19ba96b53cc3816e4e7b6038536556a0dac655",
                "alphaMass": 26261
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/line-zoom-in/16x9-duration-600-frame-599.png",
                "sha256": "d48c15bf997865ca1c5a5403795c930d201162897c98df86580b06d75dc57129",
                "alphaMass": 26261
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
        "note": "Two lines zoom in from a dash; title card."
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
      "bundleSha256": "bec4c7ab9ecdb6c0456b3081a4ea39651e914722f4fade731a06686435c7e95f",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.934937Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/line-zoom-in/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/line-zoom-in/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/line-zoom-in/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 14,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 75,
      "sha256": {
        "poster": "eed0669f42a545cf0d40e97dd77d686bc6e12987b95d238663bb3b407e00cdef",
        "loop": "06b22f83222cef400752da9980f79debdf6a8e6d5753806b0a1082a9408e9c90",
        "detail": "5b12915986a968778933ac3cd75b802db84c1a3a7ccaf73f4c3b59a282516ad4"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/line-zoom-in/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/line-zoom-in/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/line-zoom-in/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 14,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 75,
      "sha256": {
        "poster": "95516bb6ccfeda04e257a6531d5bce6be98741a4469ade4fd148f0b9c5f4429f",
        "loop": "583a508f0a7ed4cd84d0847b29fbce82e3058ed9a678a4bea5189a687203fb96",
        "detail": "92bda196aded3c7de976b8e36dc25179453d584bc3fe1f03f1ffe8a6ac6d46a2"
      }
    },
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/line-zoom-in/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/line-zoom-in/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/line-zoom-in/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 14,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 75,
      "sha256": {
        "poster": "7f45e8a7d97bfcb997b377beb495541730d50751fe0167f20146e817ea69f618",
        "loop": "1321d04a6d315ef592272b03158f68a3de3c15a3e79827826b1ae277a8a97010",
        "detail": "1b902935b9c1bb205403d94bac8538efc3d9ab4f791327577a95d3494a5182ac"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/bec4c7ab9ecdb6c0456b3081a4ea39651e914722f4fade731a06686435c7e95f/index.mjs",
    "sha256": "bec4c7ab9ecdb6c0456b3081a4ea39651e914722f4fade731a06686435c7e95f",
    "bytes": 159003,
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
    "1:1": {
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
    "16:9": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "overflow": true,
      "transparent": true
    }
  },
  "intake": {
    "at": "2026-10-07T02:22:09.433Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
