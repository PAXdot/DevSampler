// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "transition",
  "category": "transition/brand",
  "tags": [
    "transition",
    "app icon",
    "shrink",
    "brand color",
    "logo",
    "outro",
    "app launch"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 28,
      "min": 16,
      "max": 45
    },
    "stretch": "scale",
    "phases": {
      "in": 0,
      "out": 0
    },
    "markers": {
      "settled": 0
    },
    "beats": [
      0,
      7,
      15,
      21
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
    "fill": "frame",
    "safeArea": "none",
    "transparent": true,
    "backdrop": [
      "background",
      "nextBackground"
    ]
  },
  "slots": [
    {
      "key": "beforeTitle",
      "type": "text",
      "maxChars": 32,
      "lines": 2,
      "role": "headline"
    },
    {
      "key": "afterTitle",
      "type": "text",
      "maxChars": 32,
      "lines": 2,
      "role": "headline"
    },
    {
      "key": "nextLabel",
      "type": "text",
      "maxChars": 32,
      "lines": 2,
      "role": "label"
    },
    {
      "key": "logo",
      "type": "image",
      "role": "logo"
    },
    {
      "key": "name",
      "type": "text",
      "maxChars": 24,
      "lines": 1,
      "role": "name"
    }
  ],
  "brand": {
    "previewAccent": "colors.primary",
    "textColor": "colors.text",
    "fontFamily": "fonts.heading",
    "bodyFontFamily": "fonts.body",
    "color": "colors.primary",
    "logo": "logos.light",
    "background": "colors.background",
    "nextBackground": "colors.background"
  },
  "motionBeats": [],
  "render": {
    "deterministic": true,
    "clientRenderable": true,
    "webgl": false,
    "requiresGpu": false
  },
  "preview": {
    "poster": {
      "frame": 35
    },
    "hover": [
      0,
      60
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (TransitionPresentation; motion study of V07, research 2026-10-05)"
  },
  "job": "logos",
  "language": "product-ui",
  "mechanic": [
    "collapse"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "previewAccent": "#3D63FF",
    "textColor": "#F4F4F5",
    "beforeTitle": "Before",
    "afterTitle": "After",
    "nextLabel": "Next scene",
    "fontFamily": "Geist",
    "bodyFontFamily": "Geist",
    "background": "#0B0B10",
    "nextBackground": "#0B0B10",
    "color": "#3557DF",
    "logo": "",
    "name": "Orbit",
    "iconSize": 0.2,
    "radius": 0.22
  },
  "fields": [
    {
      "key": "previewAccent",
      "label": "Preview accent",
      "type": "color",
      "brand": "colors.primary"
    },
    {
      "key": "textColor",
      "label": "Text color",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "beforeTitle",
      "label": "Before title",
      "type": "text",
      "max": 32,
      "role": "headline"
    },
    {
      "key": "afterTitle",
      "label": "After title",
      "type": "text",
      "max": 32,
      "role": "headline"
    },
    {
      "key": "nextLabel",
      "label": "Next label",
      "type": "text",
      "max": 32,
      "role": "label"
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    },
    {
      "key": "bodyFontFamily",
      "label": "Body font family",
      "type": "font",
      "brand": "fonts.body"
    },
    {
      "key": "background",
      "label": "Background",
      "type": "color",
      "brand": "colors.background",
      "backdrop": true
    },
    {
      "key": "nextBackground",
      "label": "Next background",
      "type": "color",
      "brand": "colors.background",
      "backdrop": true
    },
    {
      "key": "color",
      "label": "Color",
      "type": "color",
      "brand": "colors.primary"
    },
    {
      "key": "logo",
      "label": "Logo",
      "type": "asset",
      "role": "logo",
      "brand": "logos.light"
    },
    {
      "key": "name",
      "label": "Name",
      "type": "text",
      "max": 24,
      "role": "name"
    },
    {
      "key": "iconSize",
      "label": "Icon size",
      "type": "number",
      "min": 0.1,
      "max": 0.4
    },
    {
      "key": "radius",
      "label": "Radius",
      "type": "number",
      "min": 0,
      "max": 0.5
    }
  ],
  "name": "Frame To Icon",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "frame-to-icon",
    "bundleSha256": "9ee188e64bd509ab5184975a833b7ca948dd40a8892f43d7541b6395a59f9ee4",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:35:05.717Z",
    "samples": [
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/frame-to-icon/1x1-paper.png",
        "sha256": "590ac609f9d0ba37060b992c5aa4ae4e25a6565594043f9e5348835e2cef22a7"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/frame-to-icon/1x1-night.png",
        "sha256": "5e5169039da3a1f1666bf1b3d660eea5bca14fe81638dabdf97623d9366a0eed"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/frame-to-icon/1x1-color.png",
        "sha256": "3fb1f6b71d6a921418f81e69df3f442c93e65af184418f76d2abed3fef185f46"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/frame-to-icon/9x16-paper.png",
        "sha256": "d87338f16339c8b9633337c3400b8042e49e84d2e8bd6a0fe1e6ffcaa38934b4"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/frame-to-icon/9x16-night.png",
        "sha256": "4dd38f49913237d62476e89966626f43806d1d042c5786a4ac1a14ddc97a58b7"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/frame-to-icon/9x16-color.png",
        "sha256": "a08981d701ef7fc7e8a247e437aa78297ca23ef8e15fdf53dd4cfd2f1b8b0455"
      },
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/frame-to-icon/16x9-paper.png",
        "sha256": "3a945550398b9c8657434fff9e65599dd0b92432f6d5422151df23b2dc57a12a"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/frame-to-icon/16x9-night.png",
        "sha256": "f4c12b6419eced5dbb88494e50736c101bfc1230d3ea355d14bf4e62dab56159"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/frame-to-icon/16x9-color.png",
        "sha256": "ee8d7ec37ca68bff84cab490af8e771ff42c6c5c950ae19e7c2f70465242f11f"
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
          "frame-to-icon--1x1",
          "frame-to-icon--9x16",
          "frame-to-icon--16x9"
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
            "paperNight": 14.104383680555555,
            "paperColor": 8.31442599826389,
            "region": {
              "left": 107,
              "top": 114,
              "width": 554,
              "height": 854
            },
            "canvas": {
              "width": 1080,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 11.65380859375,
            "paperColor": 5.493950737847222,
            "region": {
              "left": 107,
              "top": 190,
              "width": 590,
              "height": 1522
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "16:9",
            "pass": true,
            "paperNight": 9.29758029513889,
            "paperColor": 5.179931640625,
            "region": {
              "left": 191,
              "top": 114,
              "width": 890,
              "height": 854
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
            "occupancy": 0.5707718615566941,
            "bad": [],
            "measured": 5,
            "note": "Non-text block"
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.570101154316322,
            "bad": [],
            "measured": 5,
            "note": "Non-text block"
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5741861502259799,
            "bad": [],
            "measured": 5,
            "note": "Non-text block"
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6104520318930042,
            "bad": [],
            "measured": 5,
            "note": "Non-text block"
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6100501543209877,
            "bad": [],
            "measured": 5,
            "note": "Non-text block"
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6081371350623584,
            "bad": [],
            "measured": 5,
            "note": "Non-text block"
          },
          {
            "aspect": "16:9",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5164864942890738,
            "bad": [],
            "measured": 5,
            "note": "Non-text block"
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5158795771394978,
            "bad": [],
            "measured": 5,
            "note": "Non-text block"
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.51886632031928,
            "bad": [],
            "measured": 5,
            "note": "Non-text block"
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 7.661675347222222,
        "frames": [
          7,
          35,
          59
        ],
        "elastic": [
          {
            "aspect": "1:1",
            "duration": 16,
            "averageChannelDifference": 8.92165798611111,
            "retainedAlpha": 1.000027253525925,
            "pass": true,
            "samples": [
              {
                "frame": 1,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/frame-to-icon/1x1-duration-16-frame-1.png",
                "sha256": "39e80fd9d53ea754df88bcb32bf2b5ce56b4f4bf8e27f7aef5824b40357772b2",
                "alphaMass": 587080
              },
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/frame-to-icon/1x1-duration-16-frame-15.png",
                "sha256": "87acebaacdc7fa68f900b91b1f34d42499484aaf5705b27f5eb6fa9d3c32cb15",
                "alphaMass": 587080
              },
              {
                "frame": 14,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/frame-to-icon/1x1-duration-16-frame-14.png",
                "sha256": "72edaa438c45ea69ff15e09a5b6ad9016be93a3e5b969a634ac9295b3159417e",
                "alphaMass": 587096
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 45,
            "averageChannelDifference": 8.885199652777779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/frame-to-icon/1x1-duration-45-frame-5.png",
                "sha256": "39e80fd9d53ea754df88bcb32bf2b5ce56b4f4bf8e27f7aef5824b40357772b2",
                "alphaMass": 587080
              },
              {
                "frame": 35,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/frame-to-icon/1x1-duration-45-frame-35.png",
                "sha256": "1eac5948cf00a16c49441a605b6abd6ef55c93b8bad3ea825375917b428ece3c",
                "alphaMass": 587096
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/frame-to-icon/1x1-duration-45-frame-39.png",
                "sha256": "87acebaacdc7fa68f900b91b1f34d42499484aaf5705b27f5eb6fa9d3c32cb15",
                "alphaMass": 587080
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/frame-to-icon/1x1-duration-45-frame-44.png",
                "sha256": "87acebaacdc7fa68f900b91b1f34d42499484aaf5705b27f5eb6fa9d3c32cb15",
                "alphaMass": 587080
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 16,
            "averageChannelDifference": 7.283528645833333,
            "retainedAlpha": 1.000018731917314,
            "pass": true,
            "samples": [
              {
                "frame": 1,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/frame-to-icon/9x16-duration-16-frame-1.png",
                "sha256": "69c4610bef551527351f7c3344bee74a8b5fcc89716b3af69dd28f6a4a56fcd3",
                "alphaMass": 587233
              },
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/frame-to-icon/9x16-duration-16-frame-15.png",
                "sha256": "3cdbe53887ea1c27b0cf693f0ed71c1f421c16ff64a6ee9d3a5396cc222069cf",
                "alphaMass": 587233
              },
              {
                "frame": 14,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/frame-to-icon/9x16-duration-16-frame-14.png",
                "sha256": "f47bca5d145114cc012062e704e44256deb775554587ef1a6f1901e283f62178",
                "alphaMass": 587244
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 45,
            "averageChannelDifference": 7.262152777777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/frame-to-icon/9x16-duration-45-frame-5.png",
                "sha256": "69c4610bef551527351f7c3344bee74a8b5fcc89716b3af69dd28f6a4a56fcd3",
                "alphaMass": 587233
              },
              {
                "frame": 35,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/frame-to-icon/9x16-duration-45-frame-35.png",
                "sha256": "309d529254e29ae7520477225e84ffb8d8173040907e74d63a94095a2b2438ad",
                "alphaMass": 587244
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/frame-to-icon/9x16-duration-45-frame-39.png",
                "sha256": "3cdbe53887ea1c27b0cf693f0ed71c1f421c16ff64a6ee9d3a5396cc222069cf",
                "alphaMass": 587233
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/frame-to-icon/9x16-duration-45-frame-44.png",
                "sha256": "3cdbe53887ea1c27b0cf693f0ed71c1f421c16ff64a6ee9d3a5396cc222069cf",
                "alphaMass": 587233
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 16,
            "averageChannelDifference": 7.550889756944445,
            "retainedAlpha": 1.000006811293124,
            "pass": true,
            "samples": [
              {
                "frame": 1,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/frame-to-icon/16x9-duration-16-frame-1.png",
                "sha256": "762e0dc4bd2c1d74ea02b782e592bc8ff62af564cac964ca6f1f167ab14f723b",
                "alphaMass": 587260
              },
              {
                "frame": 15,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/frame-to-icon/16x9-duration-16-frame-15.png",
                "sha256": "538a32d9c2350c006ba7515a2b47348dc05246aaca2d1d5f5bc82958682f9666",
                "alphaMass": 587260
              },
              {
                "frame": 14,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/frame-to-icon/16x9-duration-16-frame-14.png",
                "sha256": "c1bb76f7dee6f8285e2d3346b3c6d12f2198bf74c4503d5ed7c63e498c570776",
                "alphaMass": 587264
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 45,
            "averageChannelDifference": 7.532009548611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/frame-to-icon/16x9-duration-45-frame-5.png",
                "sha256": "762e0dc4bd2c1d74ea02b782e592bc8ff62af564cac964ca6f1f167ab14f723b",
                "alphaMass": 587260
              },
              {
                "frame": 35,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/frame-to-icon/16x9-duration-45-frame-35.png",
                "sha256": "85627e96628b7197d8e2efa57411fdb9794340eb528f13f6cc027a9ec6e51e62",
                "alphaMass": 587264
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/frame-to-icon/16x9-duration-45-frame-39.png",
                "sha256": "538a32d9c2350c006ba7515a2b47348dc05246aaca2d1d5f5bc82958682f9666",
                "alphaMass": 587260
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-2/frame-to-icon/16x9-duration-45-frame-44.png",
                "sha256": "538a32d9c2350c006ba7515a2b47348dc05246aaca2d1d5f5bc82958682f9666",
                "alphaMass": 587260
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "logos",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "A content frame collapses into an app icon tile with its name; icon is brand blue."
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
      "bundleSha256": "9ee188e64bd509ab5184975a833b7ca948dd40a8892f43d7541b6395a59f9ee4",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/frame-to-icon/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/frame-to-icon/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/frame-to-icon/1x1/detail.mp4",
      "bg": "#000000",
      "posterFrame": 35,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 60,
      "sha256": {
        "poster": "e11babedac3e72dbf550c42014903fc3e5913df0f62802747cd837fa40238eda",
        "loop": "634168288b6e0abbcc7d3087dc0241e4bf8e5acfe11a9e4318aa501b8c435243",
        "detail": "9ac7822dac1771587e2b1580eb4120c98cbb7ec34669c4596a0986a56dc88182"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/frame-to-icon/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/frame-to-icon/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/frame-to-icon/9x16/detail.mp4",
      "bg": "#000000",
      "posterFrame": 35,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 60,
      "sha256": {
        "poster": "09d5ad21f68fc4cd85134200c5517bcd79cf9d273f9781615db1e4006960a265",
        "loop": "fabe7da476214e0bf87ef28b133c2d1f070adf28bfaf43a14cb3c3731aa74d28",
        "detail": "585f83230feebd8c16dfcb618bec044e701a1f083728e57d5da01571746af06b"
      }
    },
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/frame-to-icon/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/frame-to-icon/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/frame-to-icon/16x9/detail.mp4",
      "bg": "#000000",
      "posterFrame": 35,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 60,
      "sha256": {
        "poster": "43c03e628b907d7dcdb8922ba4eae830ec11211f50d30eab412377325da4d06e",
        "loop": "b19026bc8e595eb6c3e7934e27d76f9908b5f91a630dffca5a816ebb6bdc252e",
        "detail": "30cc2c0303c1b56289c91e9a62e86ffd0aab8395c505a28217fff858bcfcef01"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/9ee188e64bd509ab5184975a833b7ca948dd40a8892f43d7541b6395a59f9ee4/index.mjs",
    "sha256": "9ee188e64bd509ab5184975a833b7ca948dd40a8892f43d7541b6395a59f9ee4",
    "bytes": 163137,
    "externals": [
      "@remotion/transitions",
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
      "flat": true
    },
    "9:16": {
      "speed": true,
      "determinism": true,
      "flat": true
    },
    "16:9": {
      "speed": true,
      "determinism": true,
      "flat": true
    }
  },
  "intake": {
    "at": "2026-10-09T03:14:36.062Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
