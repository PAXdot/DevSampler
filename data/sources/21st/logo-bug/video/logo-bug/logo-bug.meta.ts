// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "overlay-fx",
  "category": "brand/logo-bug",
  "tags": [
    "logo",
    "bug",
    "watermark",
    "brand",
    "corner",
    "overlay"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 150,
      "min": 30,
      "max": 1800
    },
    "stretch": "hold",
    "phases": {
      "in": 16,
      "out": 0
    },
    "markers": {
      "settled": 18
    },
    "beats": [
      0
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
      "x": 0.03,
      "y": 0.04,
      "w": 0.2,
      "h": 0.12
    },
    "safeArea": "action",
    "transparent": true,
    "preset": "corner-tl",
    "backdrop": []
  },
  "slots": [
    {
      "key": "name",
      "type": "text",
      "maxChars": 18,
      "lines": 1,
      "role": "name"
    },
    {
      "key": "logo",
      "type": "image"
    }
  ],
  "brand": {
    "accent": "colors.primary",
    "color": "colors.text",
    "fontFamily": "fonts.heading",
    "logo": "logos.light"
  },
  "motionBeats": [
    {
      "target": "bug",
      "prop": "opacity",
      "settledBy": 16,
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
      150
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party"
  },
  "job": "logos",
  "language": "kinetic-poster",
  "mechanic": [
    "assemble"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "name": "Acme",
    "logo": "",
    "color": "#F4F4F5",
    "accent": "#3D63FF",
    "fontFamily": "Geist",
    "opacity": 0.9,
    "showName": true
  },
  "fields": [
    {
      "key": "name",
      "label": "Name",
      "type": "text",
      "max": 18,
      "role": "name"
    },
    {
      "key": "logo",
      "label": "Logo",
      "type": "asset",
      "brand": "logos.light"
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
      "key": "opacity",
      "label": "Opacity",
      "type": "number",
      "min": 0.2,
      "max": 1
    },
    {
      "key": "showName",
      "label": "Show name",
      "type": "boolean"
    }
  ],
  "name": "Logo Bug",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "logo-bug",
    "bundleSha256": "3ed975d08dfdace19c7a5875852b6257687481bc7bac582e8181ace030ec6d0e",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T01:00:59.568Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/logo-bug/16x9-paper.png",
        "sha256": "720a54db2ebfda6bd9b69488636c74749c8e188b45d7151e80ab46b6ebfb1a15"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/logo-bug/16x9-night.png",
        "sha256": "24f49263ef5bdf8856cd48d6fa9bb1c9dd49f49094eeeef2d01734a182285ef5"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/logo-bug/16x9-color.png",
        "sha256": "d4b60ed5111e5070aeb98cb72df7875d90a5a91141c2863f9802a49a3a352d5c"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/logo-bug/9x16-paper.png",
        "sha256": "9cf396634545a1955ff486d58248f3b7c81ab1890dcaaaa540ff2a7499a709e4"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/logo-bug/9x16-night.png",
        "sha256": "d949cc714c3785c4231c46e1be20fd3001c980ede6f8ba9d309189cb4f82f851"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/logo-bug/9x16-color.png",
        "sha256": "80768330f57cd469c79c5f59ddc760c20f5331894dd581b31f97d85767999544"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/logo-bug/1x1-paper.png",
        "sha256": "94fd5a62e9a3587ee52cd4ac34aedc61bbe927d52b5e82186a644e16c43f9b36"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/logo-bug/1x1-night.png",
        "sha256": "964a91748bbbaa74e13b68b9cf3370e7a02821a14e3a5752790536b1cd088c60"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/logo-bug/1x1-color.png",
        "sha256": "8eb9898cea43e2769221e1917f1b6dc87368252f094281ec18d5eb25be67b108"
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
          "logo-bug--16x9",
          "logo-bug--9x16",
          "logo-bug--1x1"
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
            "paperNight": 35.01445855034722,
            "paperColor": 24.303087022569443,
            "region": {
              "left": 55,
              "top": 68,
              "width": 233,
              "height": 81
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 32.83100043402778,
            "paperColor": 22.429280598958332,
            "region": {
              "left": 29,
              "top": 166,
              "width": 149,
              "height": 54
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 32.83100043402778,
            "paperColor": 22.429280598958332,
            "region": {
              "left": 29,
              "top": 82,
              "width": 149,
              "height": 54
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
            "occupancy": 0.535806269623234,
            "bad": [],
            "measured": 1,
            "note": "Non-text block"
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5220086832810048,
            "bad": [],
            "measured": 1,
            "note": "Non-text block"
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.41852678571428575,
            "bad": [],
            "measured": 1,
            "note": "Non-text block"
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.22953021788425515,
            "bad": [
              {
                "key": "name",
                "x": 96.74168395996094,
                "y": 172.984375,
                "w": 78.5625,
                "h": 38,
                "overflowX": 0,
                "overflowY": 0,
                "lineBoxOverflowX": 0,
                "lineBoxOverflowY": 0,
                "fontSize": 29.4624,
                "cssFontSize": 29.4624,
                "scale": 1,
                "text": "Acme"
              }
            ],
            "measured": 1,
            "note": "Non-text block"
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.22336833284038254,
            "bad": [
              {
                "key": "name",
                "x": 96.74168395996094,
                "y": 172.984375,
                "w": 74.78125,
                "h": 38,
                "overflowX": 0,
                "overflowY": 0,
                "lineBoxOverflowX": 0,
                "lineBoxOverflowY": 0,
                "fontSize": 29.4624,
                "cssFontSize": 29.4624,
                "scale": 1,
                "text": "Acme"
              }
            ],
            "measured": 1,
            "note": "Non-text block"
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.17869466627230604,
            "bad": [
              {
                "key": "name",
                "x": 96.74168395996094,
                "y": 173.984375,
                "w": 46.046875,
                "h": 36,
                "overflowX": 0,
                "overflowY": 0,
                "lineBoxOverflowX": 0,
                "lineBoxOverflowY": 0,
                "fontSize": 29.4624,
                "cssFontSize": 29.4624,
                "scale": 1,
                "text": "Acme"
              }
            ],
            "measured": 1,
            "note": "Non-text block"
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.4060919239490668,
            "bad": [],
            "measured": 1,
            "note": "Non-text block"
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.3951901273329845,
            "bad": [],
            "measured": 1,
            "note": "Non-text block"
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.3161521018663876,
            "bad": [],
            "measured": 1,
            "note": "Non-text block"
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 1.6495225694444444,
        "frames": [
          2,
          18,
          149
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 30,
            "averageChannelDifference": 1.6495225694444444,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 2,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/logo-bug/16x9-duration-30-frame-2.png",
                "sha256": "e2de8b909453ba1443bba3c5bb6b65c3037dc31babb1b6a53918fb8fda9be31c",
                "alphaMass": 269
              },
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/logo-bug/16x9-duration-30-frame-18.png",
                "sha256": "7c6a32a8f1fd1f72e9f3fd89725c8df82031400088d06aeec754a4355bf145cc",
                "alphaMass": 1898
              },
              {
                "frame": 26,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/logo-bug/16x9-duration-30-frame-26.png",
                "sha256": "56dd7028c147a5af355338aff5b50b61516016ceeca7738e7147ba78db94c1b9",
                "alphaMass": 1913
              },
              {
                "frame": 29,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/logo-bug/16x9-duration-30-frame-29.png",
                "sha256": "56dd7028c147a5af355338aff5b50b61516016ceeca7738e7147ba78db94c1b9",
                "alphaMass": 1913
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 1800,
            "averageChannelDifference": 1.6495225694444444,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 2,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/logo-bug/16x9-duration-1800-frame-2.png",
                "sha256": "e2de8b909453ba1443bba3c5bb6b65c3037dc31babb1b6a53918fb8fda9be31c",
                "alphaMass": 269
              },
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/logo-bug/16x9-duration-1800-frame-18.png",
                "sha256": "7c6a32a8f1fd1f72e9f3fd89725c8df82031400088d06aeec754a4355bf145cc",
                "alphaMass": 1898
              },
              {
                "frame": 1584,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/logo-bug/16x9-duration-1800-frame-1584.png",
                "sha256": "56dd7028c147a5af355338aff5b50b61516016ceeca7738e7147ba78db94c1b9",
                "alphaMass": 1913
              },
              {
                "frame": 1799,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/logo-bug/16x9-duration-1800-frame-1799.png",
                "sha256": "56dd7028c147a5af355338aff5b50b61516016ceeca7738e7147ba78db94c1b9",
                "alphaMass": 1913
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 30,
            "averageChannelDifference": 1.2801649305555556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 2,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/logo-bug/9x16-duration-30-frame-2.png",
                "sha256": "3d4c570051cd7e6c1411f336f12913a45265d9ef51791210b1bfee59f1b1c197",
                "alphaMass": 112
              },
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/logo-bug/9x16-duration-30-frame-18.png",
                "sha256": "ca864873d8e16c3d801d533d8d158e87497fbac652cc6742d44ae4d05b08551b",
                "alphaMass": 808
              },
              {
                "frame": 26,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/logo-bug/9x16-duration-30-frame-26.png",
                "sha256": "8a6fee6f94990ac81f7f3ce22df5ccb7ea4e245223702a5b83603e09c52ba710",
                "alphaMass": 805
              },
              {
                "frame": 29,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/logo-bug/9x16-duration-30-frame-29.png",
                "sha256": "8a6fee6f94990ac81f7f3ce22df5ccb7ea4e245223702a5b83603e09c52ba710",
                "alphaMass": 805
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 1800,
            "averageChannelDifference": 1.2801649305555556,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 2,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/logo-bug/9x16-duration-1800-frame-2.png",
                "sha256": "3d4c570051cd7e6c1411f336f12913a45265d9ef51791210b1bfee59f1b1c197",
                "alphaMass": 112
              },
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/logo-bug/9x16-duration-1800-frame-18.png",
                "sha256": "ca864873d8e16c3d801d533d8d158e87497fbac652cc6742d44ae4d05b08551b",
                "alphaMass": 808
              },
              {
                "frame": 1584,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/logo-bug/9x16-duration-1800-frame-1584.png",
                "sha256": "8a6fee6f94990ac81f7f3ce22df5ccb7ea4e245223702a5b83603e09c52ba710",
                "alphaMass": 805
              },
              {
                "frame": 1799,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/logo-bug/9x16-duration-1800-frame-1799.png",
                "sha256": "8a6fee6f94990ac81f7f3ce22df5ccb7ea4e245223702a5b83603e09c52ba710",
                "alphaMass": 805
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 30,
            "averageChannelDifference": 1.6369357638888888,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 2,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/logo-bug/1x1-duration-30-frame-2.png",
                "sha256": "b00958128e59522c8bb9bde9c4146d4fab6426f773fcacaf3a9a9f7b760da01e",
                "alphaMass": 197
              },
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/logo-bug/1x1-duration-30-frame-18.png",
                "sha256": "fa0a067493f383eeccb1605bdeefeef3fd53b764d37c3ee263aa5d693cdfee1c",
                "alphaMass": 1444
              },
              {
                "frame": 26,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/logo-bug/1x1-duration-30-frame-26.png",
                "sha256": "13f2486d7c59e37f4a7fe6c9026f1ee22b9764082d3d00f6c5a8b562e3c32ce4",
                "alphaMass": 1441
              },
              {
                "frame": 29,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/logo-bug/1x1-duration-30-frame-29.png",
                "sha256": "13f2486d7c59e37f4a7fe6c9026f1ee22b9764082d3d00f6c5a8b562e3c32ce4",
                "alphaMass": 1441
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 1800,
            "averageChannelDifference": 1.6369357638888888,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 2,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/logo-bug/1x1-duration-1800-frame-2.png",
                "sha256": "b00958128e59522c8bb9bde9c4146d4fab6426f773fcacaf3a9a9f7b760da01e",
                "alphaMass": 197
              },
              {
                "frame": 18,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/logo-bug/1x1-duration-1800-frame-18.png",
                "sha256": "fa0a067493f383eeccb1605bdeefeef3fd53b764d37c3ee263aa5d693cdfee1c",
                "alphaMass": 1444
              },
              {
                "frame": 1584,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/logo-bug/1x1-duration-1800-frame-1584.png",
                "sha256": "13f2486d7c59e37f4a7fe6c9026f1ee22b9764082d3d00f6c5a8b562e3c32ce4",
                "alphaMass": 1441
              },
              {
                "frame": 1799,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/logo-bug/1x1-duration-1800-frame-1799.png",
                "sha256": "13f2486d7c59e37f4a7fe6c9026f1ee22b9764082d3d00f6c5a8b562e3c32ce4",
                "alphaMass": 1441
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
        "note": "A small corner logo bug, meant as an overlay on other scenes."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 10,
        "compared": 10,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "3ed975d08dfdace19c7a5875852b6257687481bc7bac582e8181ace030ec6d0e",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:02.013319Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/logo-bug/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/logo-bug/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/logo-bug/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 18,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "017cdbfa97cef1b3621bfd4a9b40b3a543a48fbae2908769175549cc3a40cbd2",
        "loop": "75861039588af2e4af677bf90ec9b7259ff35a08eca0421542cf3c12fecb0a1c",
        "detail": "1762bdf365214b335fd634c85494128671ffd2decf5e2bc40a86a091a016f8e5"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/logo-bug/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/logo-bug/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/logo-bug/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 18,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "314e85c2d83245e4c4de347c8bb2d39a82fb5a8d66e405bbf4f31800100b6b78",
        "loop": "9d6b57543ebcfe41d8a4fa170e5206ac4f6cf4747e878ab15ea23dc4690527ed",
        "detail": "9472cd66d81f643d14cd692374da05682a33f1a6861aed2407fd0f3eeb2dd3b1"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/logo-bug/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/logo-bug/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/logo-bug/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 18,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 150,
      "sha256": {
        "poster": "3056b1d8770bba352b275cd1997db8013e82e60bd66ccf8b151e37e65d761920",
        "loop": "c67eea1d8fabee8a1ec7fcf77a2902683c5069bf74a02b38a8680b93ba56d55d",
        "detail": "bf3dd81dfae801c74002171329d8628175e576ac1d1a3c8b428cab9d4700dacc"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/3ed975d08dfdace19c7a5875852b6257687481bc7bac582e8181ace030ec6d0e/index.mjs",
    "sha256": "3ed975d08dfdace19c7a5875852b6257687481bc7bac582e8181ace030ec6d0e",
    "bytes": 158681,
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
    "at": "2026-10-07T02:32:59.350Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
