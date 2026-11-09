// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "code/motion-gallery",
  "job": "code",
  "language": "product-ui",
  "mechanic": [
    "diff-accept-live-preview"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "code",
    "diff-accept-live-preview",
    "ai-coding",
    "diff",
    "hot-reload"
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
      "in": 105,
      "out": 0
    },
    "markers": {
      "settled": 105
    },
    "beats": [
      0,
      26,
      53,
      79,
      105
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
      "key": "prompt",
      "type": "text",
      "maxChars": 40,
      "role": "caption"
    },
    {
      "key": "plan",
      "type": "text",
      "maxChars": 12,
      "role": "label"
    },
    {
      "key": "price",
      "type": "text",
      "maxChars": 6,
      "role": "value"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 22,
      "role": "cta"
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
      "target": "diff-accept-live-preview",
      "prop": "transform",
      "from": "enter",
      "settledBy": 105,
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
    "ink": "#1F2328",
    "accent": "#3D63FF",
    "secondary": "#1A7F37",
    "paper": "#E1E4EC",
    "displayFont": "Geist",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "prompt": "Make the call to action stand out",
    "plan": "Pro",
    "price": "$24",
    "cta": "Start free trial →"
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
      "key": "prompt",
      "label": "Prompt",
      "type": "text",
      "max": 40,
      "role": "caption"
    },
    {
      "key": "plan",
      "label": "Plan",
      "type": "text",
      "max": 12,
      "role": "label"
    },
    {
      "key": "price",
      "label": "Price",
      "type": "text",
      "max": 6,
      "role": "value"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 22,
      "role": "cta"
    }
  ],
  "name": "Accept Diff Live Preview",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-code-diff-accept",
    "bundleSha256": "382c31542e9e9ccb57cdb8a3a62e9aa7268cda5f647e5dd1ba9d3df3a820948d",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:45:08.227Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-code-diff-accept/16x9-paper.png",
        "sha256": "fd02804cc3e62137c7dac9bb08b5d6a9a6a0180e05aa70e5a8e140c3286a64b0"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-code-diff-accept/16x9-night.png",
        "sha256": "79dc19a30188e92b4f950b0118412b305a221261ce0d320baa8de58191454b2f"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-code-diff-accept/16x9-color.png",
        "sha256": "f9742a453c08e29343884f04ab93172e123102e48281219bda9584b74d8a1e1a"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-code-diff-accept/9x16-paper.png",
        "sha256": "c84baa9064e4f5eaa507a2c89357f63100c946dfee55abf3475df8fa7068e5d4"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-code-diff-accept/9x16-night.png",
        "sha256": "c888293f1c30fb46aacafef4f6346e43172b3b175d5ba6175d31a4d885a477ab"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-code-diff-accept/9x16-color.png",
        "sha256": "38a150d9e75a51c9f0c96bae11fe53d6ac2bbb0d7009d75a84a68b3119156c67"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-code-diff-accept/1x1-paper.png",
        "sha256": "b5119ac0162321a343b248f859553f3ecba7090bf8ffa17c501ceedadf17359f"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-code-diff-accept/1x1-night.png",
        "sha256": "3acf97113fdff12d90a019a1719c8b44c6e70022381901cb8cb0048503f7439f"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-code-diff-accept/1x1-color.png",
        "sha256": "1b91d300f996007a3836ee39e0f9bd8e60cd10f4c5a19cda2fdffba572412275"
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
          "mg-code-diff-accept--16x9",
          "mg-code-diff-accept--9x16",
          "mg-code-diff-accept--1x1"
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
            "paperNight": 11.025336371527779,
            "paperColor": 2.682861328125,
            "region": {
              "left": 43,
              "top": 103,
              "width": 1834,
              "height": 931
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 7.801106770833333,
            "paperColor": 5.943739149305555,
            "region": {
              "left": 46,
              "top": 114,
              "width": 988,
              "height": 1725
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 9.720784505208334,
            "paperColor": 4.826226128472222,
            "region": {
              "left": 40,
              "top": 64,
              "width": 1000,
              "height": 985
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
            "occupancy": 1.1669854895404665,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1669854895404665,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1669854895404665,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1648298401150585,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1648298401150585,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.1648298401150585,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1968236082727561,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1968236082727561,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.1968236082727561,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 4.051432291666667,
        "frames": [
          15,
          105,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 4.051432291666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-code-diff-accept/16x9-duration-90-frame-10.png",
                "sha256": "54b7155ff83d8b2ee1c0a4d24bf481c7a4929be855636ef8dfde0b558c949526",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-code-diff-accept/16x9-duration-90-frame-89.png",
                "sha256": "2519a86e0bbc860d746a28d1de644648b069bd83d82e51282a242bab2d6f4c1d",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-code-diff-accept/16x9-duration-90-frame-79.png",
                "sha256": "2519a86e0bbc860d746a28d1de644648b069bd83d82e51282a242bab2d6f4c1d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 4.051432291666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-code-diff-accept/16x9-duration-900-frame-15.png",
                "sha256": "54b7155ff83d8b2ee1c0a4d24bf481c7a4929be855636ef8dfde0b558c949526",
                "alphaMass": 587520
              },
              {
                "frame": 105,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-code-diff-accept/16x9-duration-900-frame-105.png",
                "sha256": "2519a86e0bbc860d746a28d1de644648b069bd83d82e51282a242bab2d6f4c1d",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-code-diff-accept/16x9-duration-900-frame-792.png",
                "sha256": "2519a86e0bbc860d746a28d1de644648b069bd83d82e51282a242bab2d6f4c1d",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-code-diff-accept/16x9-duration-900-frame-899.png",
                "sha256": "2519a86e0bbc860d746a28d1de644648b069bd83d82e51282a242bab2d6f4c1d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 5.804904513888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-code-diff-accept/9x16-duration-90-frame-10.png",
                "sha256": "710d3ae527a7c00623ea664e2249586355d295e9d6493076e9ea103a12efeb58",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-code-diff-accept/9x16-duration-90-frame-89.png",
                "sha256": "0e126bbf99298e92ab8b7a2c449082cb608266ab4a7c8561494aac818d7a2737",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-code-diff-accept/9x16-duration-90-frame-79.png",
                "sha256": "0e126bbf99298e92ab8b7a2c449082cb608266ab4a7c8561494aac818d7a2737",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 5.804904513888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-code-diff-accept/9x16-duration-900-frame-15.png",
                "sha256": "710d3ae527a7c00623ea664e2249586355d295e9d6493076e9ea103a12efeb58",
                "alphaMass": 587520
              },
              {
                "frame": 105,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-code-diff-accept/9x16-duration-900-frame-105.png",
                "sha256": "0e126bbf99298e92ab8b7a2c449082cb608266ab4a7c8561494aac818d7a2737",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-code-diff-accept/9x16-duration-900-frame-792.png",
                "sha256": "0e126bbf99298e92ab8b7a2c449082cb608266ab4a7c8561494aac818d7a2737",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-code-diff-accept/9x16-duration-900-frame-899.png",
                "sha256": "0e126bbf99298e92ab8b7a2c449082cb608266ab4a7c8561494aac818d7a2737",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 3.241970486111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-code-diff-accept/1x1-duration-90-frame-10.png",
                "sha256": "8ca2f5cd750ed98319f0f8d0db8f683ed21232d541778eb2bc2d0dd0207fe05a",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-code-diff-accept/1x1-duration-90-frame-89.png",
                "sha256": "49c8ac354de69ab28a6c115b80b5b7f5284ac996eee1588e013fb781eb00a022",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-code-diff-accept/1x1-duration-90-frame-79.png",
                "sha256": "49c8ac354de69ab28a6c115b80b5b7f5284ac996eee1588e013fb781eb00a022",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 3.241970486111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-code-diff-accept/1x1-duration-900-frame-15.png",
                "sha256": "8ca2f5cd750ed98319f0f8d0db8f683ed21232d541778eb2bc2d0dd0207fe05a",
                "alphaMass": 587520
              },
              {
                "frame": 105,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-code-diff-accept/1x1-duration-900-frame-105.png",
                "sha256": "49c8ac354de69ab28a6c115b80b5b7f5284ac996eee1588e013fb781eb00a022",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-code-diff-accept/1x1-duration-900-frame-792.png",
                "sha256": "49c8ac354de69ab28a6c115b80b5b7f5284ac996eee1588e013fb781eb00a022",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/mg-code-diff-accept/1x1-duration-900-frame-899.png",
                "sha256": "49c8ac354de69ab28a6c115b80b5b7f5284ac996eee1588e013fb781eb00a022",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "code",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "An AI diff is accepted and the live preview restyles the CTA; editor and preview readable in every brand."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 13,
        "compared": 13,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "382c31542e9e9ccb57cdb8a3a62e9aa7268cda5f647e5dd1ba9d3df3a820948d",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-code-diff-accept/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-code-diff-accept/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-code-diff-accept/16x9/detail.mp4",
      "bg": "#f9f9fb",
      "posterFrame": 105,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "4411b108198b672983dfe892c32eedc47313d040fb76de7c159e9d31fd530874",
        "loop": "78a3ff824fdcead477e68c7d64be7b8b1bdffb4f9894ca5e4e9267732052094b",
        "detail": "86d9462334e1f82cb96f4da318cb5c68c3388f8ea023b3963d63cffe429619f6"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-code-diff-accept/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-code-diff-accept/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-code-diff-accept/9x16/detail.mp4",
      "bg": "#f9f9fb",
      "posterFrame": 105,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "45c96c60259a1c4332822576014fd7499a8e556f1b1dc33f487f029b86382671",
        "loop": "e7ea214ce13ac1f22be9a01040ed74d50154ec54daa65e5d81826c754c1f1717",
        "detail": "65afe6642bb9cdd9018931a50a92669b28bcc646ea324d291753968d1db48558"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-code-diff-accept/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-code-diff-accept/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-code-diff-accept/1x1/detail.mp4",
      "bg": "#f9f9fb",
      "posterFrame": 105,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "8efa41bff0a6fd0c6966e81e2506993919d53c955ecec53a5478a90ae30e9928",
        "loop": "5368320be683b8efc19637f6c541518f4815b85817fda3c8ebfbbf5d4f044415",
        "detail": "f3bbf4481b1c38aabe201472785811052956336b84fd002d6ce96890287545b9"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/382c31542e9e9ccb57cdb8a3a62e9aa7268cda5f647e5dd1ba9d3df3a820948d/index.mjs",
    "sha256": "382c31542e9e9ccb57cdb8a3a62e9aa7268cda5f647e5dd1ba9d3df3a820948d",
    "bytes": 178962,
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
    "at": "2026-10-09T03:48:22.027Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
