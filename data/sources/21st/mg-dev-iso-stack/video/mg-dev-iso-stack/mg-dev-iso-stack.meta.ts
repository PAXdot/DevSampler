// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "devices/motion-gallery",
  "job": "devices",
  "language": "isometric",
  "mechanic": [
    "iso-devices-sync-screens"
  ],
  "energy": "calm",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "devices",
    "iso-devices-sync-screens",
    "isometric",
    "multi-device",
    "sync"
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
      "in": 108,
      "out": 0
    },
    "markers": {
      "settled": 108
    },
    "beats": [
      0,
      27,
      54,
      81,
      108
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
      "key": "kicker",
      "type": "text",
      "maxChars": 26,
      "role": "kicker"
    },
    {
      "key": "headline",
      "type": "text",
      "maxChars": 40,
      "role": "headline"
    },
    {
      "key": "caption",
      "type": "text",
      "maxChars": 60,
      "role": "caption"
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
      "target": "iso-devices-sync-screens",
      "prop": "transform",
      "from": "enter",
      "settledBy": 108,
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
    "ink": "#FFFFFF",
    "accent": "#B9FF66",
    "secondary": "#38E0C8",
    "paper": "#2844E1",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "kicker": "Launch checklist",
    "headline": "In sync on every screen",
    "caption": "Check it off once and every device updates"
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
      "key": "kicker",
      "label": "Kicker",
      "type": "text",
      "max": 26,
      "role": "kicker"
    },
    {
      "key": "headline",
      "label": "Headline",
      "type": "text",
      "max": 40,
      "role": "headline"
    },
    {
      "key": "caption",
      "label": "Caption",
      "type": "text",
      "max": 60,
      "role": "caption"
    }
  ],
  "name": "Isometric Device Family",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-dev-iso-stack",
    "bundleSha256": "039aa0a9d59157ac849f35477bb7a3161bed10bd7222759b91b89a6d07b76017",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:44:41.752Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-dev-iso-stack/16x9-paper.png",
        "sha256": "2091dd3da89ba380ee004eff4f61b690b6fb981b515935ccc07f489dcd853ef8"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-dev-iso-stack/16x9-night.png",
        "sha256": "4eeafe8a41eb974c051aa4fd386da841647480f5a9220132942363ddd1e61517"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-dev-iso-stack/16x9-color.png",
        "sha256": "3e12c75223724dee2fdce53d7a6b369003c273b710e0e2af2ed262c0c3127efa"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-dev-iso-stack/9x16-paper.png",
        "sha256": "0baa531a83cdc889bb845191308b75aa07b75fd493799fed1ce9f7ef34da1b37"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-dev-iso-stack/9x16-night.png",
        "sha256": "1658067c61825064bd4c7dc9d6d0f9886ae7add1bc7e55325b444aec9640e314"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-dev-iso-stack/9x16-color.png",
        "sha256": "acce8e3c7c1ccdb83d73e2d524bb0d792286522e1edadfed5b0aec16a6091555"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-dev-iso-stack/1x1-paper.png",
        "sha256": "0c443bd9825fdce2a9c098aa748368ecf1b63720722910586f86e5ed278956d9"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-dev-iso-stack/1x1-night.png",
        "sha256": "efcf29329bd08d1fa261866b42fcbec2ac29523e2dfb9448dc0262c02c786657"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-dev-iso-stack/1x1-color.png",
        "sha256": "5daf0b740045d09b87a1e4ba36db40d7362d2dfcf65075741b20a27d28cb8da6"
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
          "mg-dev-iso-stack--16x9",
          "mg-dev-iso-stack--9x16",
          "mg-dev-iso-stack--1x1"
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
            "paperNight": 18.862630208333332,
            "paperColor": 6.384548611111111,
            "region": {
              "left": 103,
              "top": 288,
              "width": 1527,
              "height": 579
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 32.977023654513886,
            "paperColor": 12.472330729166666,
            "region": {
              "left": 78,
              "top": 168,
              "width": 802,
              "height": 1603
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 19.052734375,
            "paperColor": 5.860541449652778,
            "region": {
              "left": 68,
              "top": 71,
              "width": 727,
              "height": 940
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
            "occupancy": 0.604274189421139,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.604274189421139,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.604274189421139,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.872099619490286,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8731890631123851,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8775707588848298,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8303404237781077,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8303404237781077,
            "bad": [],
            "measured": 7
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8303404237781077,
            "bad": [],
            "measured": 7
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 5.416666666666667,
        "frames": [
          16,
          108,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 5.579752604166667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-dev-iso-stack/16x9-duration-90-frame-10.png",
                "sha256": "50d73d6e0a23a1baceadff0742d3ddf2e2b7aacf8da3976156bd081b72cae551",
                "alphaMass": 579742
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-dev-iso-stack/16x9-duration-90-frame-89.png",
                "sha256": "c495dc0fff3244be77897d3b809c3d918d90e9abe42e94c2d41e4de06110285a",
                "alphaMass": 579266
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-dev-iso-stack/16x9-duration-90-frame-79.png",
                "sha256": "c495dc0fff3244be77897d3b809c3d918d90e9abe42e94c2d41e4de06110285a",
                "alphaMass": 579266
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 5.416666666666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-dev-iso-stack/16x9-duration-900-frame-16.png",
                "sha256": "80571c80812a3efbca4e60b86ccea72e84743876afbee9511afc36236ade9f60",
                "alphaMass": 579743
              },
              {
                "frame": 108,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-dev-iso-stack/16x9-duration-900-frame-108.png",
                "sha256": "c495dc0fff3244be77897d3b809c3d918d90e9abe42e94c2d41e4de06110285a",
                "alphaMass": 579266
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-dev-iso-stack/16x9-duration-900-frame-792.png",
                "sha256": "c495dc0fff3244be77897d3b809c3d918d90e9abe42e94c2d41e4de06110285a",
                "alphaMass": 579266
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-dev-iso-stack/16x9-duration-900-frame-899.png",
                "sha256": "c495dc0fff3244be77897d3b809c3d918d90e9abe42e94c2d41e4de06110285a",
                "alphaMass": 579266
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 6.326822916666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-dev-iso-stack/9x16-duration-90-frame-10.png",
                "sha256": "c5925717d7e9f85b508b8dc70a4be6550bd0160b997bb90e87d26d1f0b453814",
                "alphaMass": 579743
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-dev-iso-stack/9x16-duration-90-frame-89.png",
                "sha256": "ee1c173386723ca4606dd1f6647179e78c35673b1e4c280a41edf2ad81719b80",
                "alphaMass": 579609
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-dev-iso-stack/9x16-duration-90-frame-79.png",
                "sha256": "eb7670182c6a592eeb5871c4334517a03cba4e7fa1cee32e60bb16e29f087c3c",
                "alphaMass": 579609
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 6.133463541666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-dev-iso-stack/9x16-duration-900-frame-16.png",
                "sha256": "decb1154693ec14c1c7c69afa5f0299d352693340a5ead8113862ebab044f3b6",
                "alphaMass": 579798
              },
              {
                "frame": 108,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-dev-iso-stack/9x16-duration-900-frame-108.png",
                "sha256": "eb7670182c6a592eeb5871c4334517a03cba4e7fa1cee32e60bb16e29f087c3c",
                "alphaMass": 579609
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-dev-iso-stack/9x16-duration-900-frame-792.png",
                "sha256": "eb7670182c6a592eeb5871c4334517a03cba4e7fa1cee32e60bb16e29f087c3c",
                "alphaMass": 579609
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-dev-iso-stack/9x16-duration-900-frame-899.png",
                "sha256": "eb7670182c6a592eeb5871c4334517a03cba4e7fa1cee32e60bb16e29f087c3c",
                "alphaMass": 579609
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 6.222330729166667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-dev-iso-stack/1x1-duration-90-frame-10.png",
                "sha256": "d6375bffc3d3b5ee614bdd4017f11ef4090f1e464a87127f64cfab86f22f0c64",
                "alphaMass": 580931
              },
              {
                "frame": 89,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-dev-iso-stack/1x1-duration-90-frame-89.png",
                "sha256": "46c5c945f71f6d8e780b038d48f961f632e9ca67bb10d680ba2168f1f805ffb1",
                "alphaMass": 580543
              },
              {
                "frame": 79,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-dev-iso-stack/1x1-duration-90-frame-79.png",
                "sha256": "1f219724bb134169e9cf8b665bb898316cb916b4413a885afcf88d9a8fd40431",
                "alphaMass": 580543
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 6.058810763888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-dev-iso-stack/1x1-duration-900-frame-16.png",
                "sha256": "173ba2696b4ff7a291a214d7d5e57d7ba404f5ab0a996204ead57dcb86a02d98",
                "alphaMass": 580957
              },
              {
                "frame": 108,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-dev-iso-stack/1x1-duration-900-frame-108.png",
                "sha256": "1f219724bb134169e9cf8b665bb898316cb916b4413a885afcf88d9a8fd40431",
                "alphaMass": 580543
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-dev-iso-stack/1x1-duration-900-frame-792.png",
                "sha256": "46c5c945f71f6d8e780b038d48f961f632e9ca67bb10d680ba2168f1f805ffb1",
                "alphaMass": 580543
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-1/mg-dev-iso-stack/1x1-duration-900-frame-899.png",
                "sha256": "46c5c945f71f6d8e780b038d48f961f632e9ca67bb10d680ba2168f1f805ffb1",
                "alphaMass": 580543
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "devices",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "An isometric laptop, tablet and phone stay in sync on a brand-blue field."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 14,
        "compared": 14,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "039aa0a9d59157ac849f35477bb7a3161bed10bd7222759b91b89a6d07b76017",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-dev-iso-stack/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-dev-iso-stack/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-dev-iso-stack/16x9/detail.mp4",
      "bg": "#1a2d96",
      "posterFrame": 108,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "f3e06dd833c343a6d5a7bc036142c756c464642b31d851e907266f31f4fa5b75",
        "loop": "e78cabe8e9d913957f178c1603fa6ffc29b90ac0124b5ecc64070dc7781ef236",
        "detail": "2023c0ffb8e26d3f4407cf64ea4864b7cce429e2ddeecede73e4c3b1e3052146"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-dev-iso-stack/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-dev-iso-stack/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-dev-iso-stack/9x16/detail.mp4",
      "bg": "#1a2d96",
      "posterFrame": 108,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "01273e6a1b2004edc561882e68a0a63cf0660468c6acde472646af6b515c2015",
        "loop": "ab8a7282e1d6c3707c2bd47856f6dbb26ab257b97d54daa61710a9521a017a6a",
        "detail": "e61a32ca66f24589827607bcf7478babdfe493950c3879d8d46a75e16b2dc91c"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-dev-iso-stack/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-dev-iso-stack/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-dev-iso-stack/1x1/detail.mp4",
      "bg": "#1a2d96",
      "posterFrame": 108,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "0f4054f92363173adf8176275f6328973cd3005af8d0ed6154c736540f359eb6",
        "loop": "eb38b3238ab8a14a66a0514bc81168e53b44f6dfb9ed21a5c836a440f065377e",
        "detail": "9f1b9f65b98828c297c6c613b1ff2b1b43bb38410d982298f4ee99a38e6cb77d"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/039aa0a9d59157ac849f35477bb7a3161bed10bd7222759b91b89a6d07b76017/index.mjs",
    "sha256": "039aa0a9d59157ac849f35477bb7a3161bed10bd7222759b91b89a6d07b76017",
    "bytes": 180748,
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
    "at": "2026-10-09T03:53:13.907Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
