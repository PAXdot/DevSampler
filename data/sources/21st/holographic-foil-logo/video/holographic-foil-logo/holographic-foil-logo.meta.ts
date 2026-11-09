// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "logos/craft",
  "job": "logos",
  "language": "glass",
  "mechanic": [
    "foil"
  ],
  "tags": [
    "logo",
    "logo reveal",
    "holographic",
    "foil",
    "hologram",
    "emboss",
    "rainbow",
    "iridescent",
    "diffraction",
    "light",
    "shine",
    "stamp",
    "brand"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 140,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 126,
      "out": 0
    },
    "markers": {
      "settled": 126,
      "press": 12,
      "sweep": 24,
      "glint": 66
    },
    "beats": [
      0,
      12,
      24,
      66,
      100,
      126
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
      "key": "logo",
      "type": "image",
      "role": "logo"
    },
    {
      "key": "caption",
      "type": "text",
      "maxChars": 48,
      "lines": 2,
      "role": "subline"
    }
  ],
  "brand": {
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "color": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.body"
  },
  "motionBeats": [
    {
      "target": "card",
      "prop": "scale",
      "from": "lifted",
      "settledBy": 24,
      "easing": "spring"
    },
    {
      "target": "mark",
      "prop": "emboss depth",
      "from": "flat",
      "settledBy": 34,
      "easing": "spring"
    },
    {
      "target": "light",
      "prop": "position",
      "from": "upper left",
      "settledBy": 126,
      "easing": "ease"
    },
    {
      "target": "rainbow",
      "prop": "angle",
      "from": "dark foil",
      "settledBy": 126,
      "easing": "ease"
    },
    {
      "target": "caption",
      "prop": "y",
      "from": "below",
      "settledBy": 112,
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
    "sourceUrl": "21st first-party (logo embossed into a holographic foil card, a moving light rolls a brand-tinted diffraction rainbow across it, 2026-10-08)"
  },
  "defaults": {
    "logo": "",
    "caption": "Stamped in light",
    "primary": "#B7E35A",
    "secondary": "#5AA9E6",
    "color": "#EAF4E4",
    "background": "#151E15",
    "intensity": 0.85,
    "grain": true,
    "fontFamily": "Manrope"
  },
  "fields": [
    {
      "key": "logo",
      "label": "Logo",
      "type": "asset",
      "role": "logo"
    },
    {
      "key": "caption",
      "label": "Caption",
      "type": "text",
      "max": 48,
      "role": "subline"
    },
    {
      "key": "primary",
      "label": "Primary",
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
      "key": "color",
      "label": "Color",
      "type": "color",
      "brand": "colors.text"
    },
    {
      "key": "background",
      "label": "Background",
      "type": "color",
      "brand": "colors.background",
      "backdrop": true
    },
    {
      "key": "intensity",
      "label": "Intensity",
      "type": "number",
      "min": 0,
      "max": 1
    },
    {
      "key": "grain",
      "label": "Grain",
      "type": "boolean"
    },
    {
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.body"
    }
  ],
  "name": "Holographic Foil Logo",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "holographic-foil-logo",
    "bundleSha256": "7703e2ea95cdf7ec5635d0c44f0d86abd6ce41a208710f6d7717706278751c0f",
    "sourceSnapshot": {
      "sha256": "be113857ae041533797b125ad6f1737614716f34c43f0c6f645addc012f77824",
      "files": 1926
    },
    "renderedAt": "2026-10-09T18:53:31.371Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/holographic-foil-logo/16x9-paper.png",
        "sha256": "14439fb386cdb55f62fba199fefe74a58054bba56219ccbcbd963ac406f747d7"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/holographic-foil-logo/16x9-night.png",
        "sha256": "23bddcde7127aeaa28de659383b49b23b0fa14d101008d26873d60a8eda20a9b"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/holographic-foil-logo/16x9-color.png",
        "sha256": "361c7c9ceabf46f65a49599c0d5d68ed58fa4221e2664f14c147b4406a4dd92f"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/holographic-foil-logo/9x16-paper.png",
        "sha256": "95619a0c821527ba04206857fbde31ace9387ba46b5fef7473b33344f39bbf93"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/holographic-foil-logo/9x16-night.png",
        "sha256": "b6a2a6f2ba854862fced8434992fab692ef471ea778048ec699ce5bde416e60b"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/holographic-foil-logo/9x16-color.png",
        "sha256": "ad0cbbdd647bd78510da6531393255b96a32b777f0554c8bbbd400e70b201436"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/holographic-foil-logo/1x1-paper.png",
        "sha256": "81940c26cc1cc3cbaff5a15c18e0f30e05e0a1e1095813e9b3c16a7e408994db"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/holographic-foil-logo/1x1-night.png",
        "sha256": "831e80d6be697c53f0976f7a6aaf3b6512ac4a1661c9dd3e429a0e191f49c6e8"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/holographic-foil-logo/1x1-color.png",
        "sha256": "464bc1ca9ae98948484c379108a73d5a8bd6d1cdd3fe2e8932c8e730e859c9f5"
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
          "holographic-foil-logo--16x9",
          "holographic-foil-logo--9x16",
          "holographic-foil-logo--1x1"
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
            "paperNight": 41.81939019097222,
            "paperColor": 8.78122287326389,
            "region": {
              "left": 428,
              "top": 110,
              "width": 1015,
              "height": 832
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 42.181369357638886,
            "paperColor": 8.989122178819445,
            "region": {
              "left": 0,
              "top": 188,
              "width": 1026,
              "height": 1358
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 40.421956380208336,
            "paperColor": 8.872205946180555,
            "region": {
              "left": 82,
              "top": 112,
              "width": 873,
              "height": 805
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
            "occupancy": 0.5454380826404637,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5771727415245935,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.54476965361762,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.901673844692198,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9522776124338627,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9009999479472861,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8092495971868401,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8538941553987852,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8092495971868401,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 13.519639756944445,
        "frames": [
          18,
          126,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 140,
            "averageChannelDifference": 13.413953993055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/holographic-foil-logo/16x9-duration-140-frame-16.png",
                "sha256": "c7427bc4a7e1c2a81d1a5787fec9a62178b2b237578e06566d8bb6612d2a6484",
                "alphaMass": 587520
              },
              {
                "frame": 126,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/holographic-foil-logo/16x9-duration-140-frame-126.png",
                "sha256": "909a14668232e12d84961644cf7c46dd44e9a20fa267eddded62f9c35eec84da",
                "alphaMass": 587520
              },
              {
                "frame": 123,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/holographic-foil-logo/16x9-duration-140-frame-123.png",
                "sha256": "47f882778e6fc1c73655c9b5a36ebb70e0070976ab92b342b5fb5152ec6d4e77",
                "alphaMass": 587520
              },
              {
                "frame": 139,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/holographic-foil-logo/16x9-duration-140-frame-139.png",
                "sha256": "c4175657e73c39824a9154dff0fb481edfb80285be6116fdba4446d3b04a296e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 13.519639756944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/holographic-foil-logo/16x9-duration-600-frame-18.png",
                "sha256": "191b3fea883f74a02594a0b768b714e7de395c67642675e267cda586cf422506",
                "alphaMass": 587520
              },
              {
                "frame": 126,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/holographic-foil-logo/16x9-duration-600-frame-126.png",
                "sha256": "909a14668232e12d84961644cf7c46dd44e9a20fa267eddded62f9c35eec84da",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/holographic-foil-logo/16x9-duration-600-frame-528.png",
                "sha256": "838d184fad30d2fb1edf2f47506f93012f98a01615e682dde43f071032f1b9a6",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/holographic-foil-logo/16x9-duration-600-frame-599.png",
                "sha256": "685de7657ab4094f5fee31bb56619866ffd0621babb7cfcf2e88d3de85edbaa0",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 140,
            "averageChannelDifference": 19.209092881944443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/holographic-foil-logo/9x16-duration-140-frame-16.png",
                "sha256": "9b32bf0c1f01970ed8036996067e467c2886f97e890cf7f2dd9b298c20715c31",
                "alphaMass": 587520
              },
              {
                "frame": 126,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/holographic-foil-logo/9x16-duration-140-frame-126.png",
                "sha256": "c3f825913d08900e4d0a34ecc379919ae45d6105282d0cadf38a582decffa1a9",
                "alphaMass": 587520
              },
              {
                "frame": 123,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/holographic-foil-logo/9x16-duration-140-frame-123.png",
                "sha256": "1f01a9435db6c726c3d9d3e776f2f110e18b8cab1a8cbcff276d50062f439a19",
                "alphaMass": 587520
              },
              {
                "frame": 139,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/holographic-foil-logo/9x16-duration-140-frame-139.png",
                "sha256": "7fad3e94f30dc707359648fe17d408d101d2556543877a1716aae21c924f5951",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 19.351236979166668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/holographic-foil-logo/9x16-duration-600-frame-18.png",
                "sha256": "36cc64225d57eaff758c852a4bbbb3c5540f851271f62cb90632d46b527a0c2f",
                "alphaMass": 587520
              },
              {
                "frame": 126,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/holographic-foil-logo/9x16-duration-600-frame-126.png",
                "sha256": "c3f825913d08900e4d0a34ecc379919ae45d6105282d0cadf38a582decffa1a9",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/holographic-foil-logo/9x16-duration-600-frame-528.png",
                "sha256": "92797693ddcc7ef343dc74af4a7caffbb1c6fe0c6a1714cc685d36c5cbec93d6",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/holographic-foil-logo/9x16-duration-600-frame-599.png",
                "sha256": "884f89de3ae7d218a87f6a64e9dbea98b08b50a736ba36bcf8d01ab571d98b05",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 140,
            "averageChannelDifference": 16.83051215277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 16,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/holographic-foil-logo/1x1-duration-140-frame-16.png",
                "sha256": "721987cbb20ef4d59b6499e9af1a85532a5d790e16230c18b992b69b394a173b",
                "alphaMass": 587520
              },
              {
                "frame": 126,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/holographic-foil-logo/1x1-duration-140-frame-126.png",
                "sha256": "7f40965f5102b7a9152033cc439382204fec08d342c77a130ef178f4cebd136d",
                "alphaMass": 587520
              },
              {
                "frame": 123,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/holographic-foil-logo/1x1-duration-140-frame-123.png",
                "sha256": "405ce73fd3ee39bf35795f496bbfd429db4331df0771e99eb586d2d69c089ee0",
                "alphaMass": 587520
              },
              {
                "frame": 139,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/holographic-foil-logo/1x1-duration-140-frame-139.png",
                "sha256": "bc38e1f6ae32daa31f0919f641f2ebda7c0e16b9a5236fcb11701440bdd23488",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 16.952799479166668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/holographic-foil-logo/1x1-duration-600-frame-18.png",
                "sha256": "464b69d7a3cbaf3bea444d3ee564825c0a15f6c218b9265f02ea7f1d65ac1aca",
                "alphaMass": 587520
              },
              {
                "frame": 126,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/holographic-foil-logo/1x1-duration-600-frame-126.png",
                "sha256": "7f40965f5102b7a9152033cc439382204fec08d342c77a130ef178f4cebd136d",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/holographic-foil-logo/1x1-duration-600-frame-528.png",
                "sha256": "c6f9e864b43dc8dbc31493f718842c750477546cf8e951889bc6873d352d3e24",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T183430Z/gates/holographic-foil-logo/1x1-duration-600-frame-599.png",
                "sha256": "cafa78117dede0441aa5cdcea9951eeffd581ca6e797449122aff6142d70f080",
                "alphaMass": 587520
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
        "note": "The visible subject is a logo and card rendered with a holographic foil effect, matching the claimed title 'Holographic Foil Logo'. Motion samples (images 2–4) show parallax and refractive changes in highlights and color, supporting the provided motion verbs (focus, float, refract), as well as maintaining a persistent subject through those changes, matching both the title and language card. No decorative or extraneous block-title or baked heading is present; the only visible prominent text ('Stamped in light') matches the provided editable slot content and is not a generic or unrelated category label. For brand adherence, images 5–7 show the same composition adapted to three distinct palettes matching the given color evidence (background, foil and text colors update correctly for each); shape, material, and legibility are preserved, with no unexplained color blocks. Language adherence is upheld: throughout all images and palettes, there is visible depth, overlapping refractive panels, controlled luminance highlights as edge accents, and consistent use of sans-serif type. No elements are blurred, neon-glowing, or presented as generic cards, fulfilling all 'never' constraints in the language card."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 34,
        "compared": 34,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "7703e2ea95cdf7ec5635d0c44f0d86abd6ce41a208710f6d7717706278751c0f",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T19:04:22.777Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "holographic-foil-logo",
      "vsPositive": 0.9166666666666666,
      "vsNegative": 1,
      "fakeVotes": 0.041666666666666664,
      "perModel": {
        "claude": {
          "vsPositive": 1,
          "vsNegative": 1
        },
        "gpt": {
          "vsPositive": 1,
          "vsNegative": 1
        },
        "gemini": {
          "vsPositive": 0.75,
          "vsNegative": 1
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "8556a92dbe122e27833cc0546e08f6baea6483fede94cc7d8dd09b8552e098b8",
      "bundleSha256": "7703e2ea95cdf7ec5635d0c44f0d86abd6ce41a208710f6d7717706278751c0f",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/holographic-foil-logo/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/holographic-foil-logo/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/holographic-foil-logo/16x9/detail.mp4",
      "bg": "#101710",
      "posterFrame": 126,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "628f5a22b579d0c7b12466ec21b22929c47cd90568585bf4c2874b82dcfd72d7",
        "loop": "224e6cee84b524a10d5836844385e2f3a115eb72c96ed86c4367a1f751f2d065",
        "detail": "bd4ab0b88c0af63f829cdb0feffe2b949058f95a972183c8c0f4da47fb4b8dd2"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/holographic-foil-logo/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/holographic-foil-logo/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/holographic-foil-logo/9x16/detail.mp4",
      "bg": "#111812",
      "posterFrame": 126,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "a26bd7abd5adb2c6a2ff63528fd772e18eca6619232065b5bd2900b7cb3f3078",
        "loop": "cabdfe616f5d61613d6e7daf74954938554928514b8ef71e565269aab516ae20",
        "detail": "cb05b8a4618fb0114f980b129bb2f636ed1c1a1d6002bc13d121635fa0fc706f"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/holographic-foil-logo/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/holographic-foil-logo/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/holographic-foil-logo/1x1/detail.mp4",
      "bg": "#111811",
      "posterFrame": 126,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "d724529af42508574ed0fc1a3ec052d7d67a3cf1279f0e6bf09d6f6fcb9edb62",
        "loop": "bc8528956657666e92ece7db9e82b3c5deb88c3964a94abd3f13430a9803f53f",
        "detail": "0c00153d8d1afbce40e47984dbbcb0d98ba38a5415dbff8d1c5fb41cf912dd07"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/7703e2ea95cdf7ec5635d0c44f0d86abd6ce41a208710f6d7717706278751c0f/index.mjs",
    "sha256": "7703e2ea95cdf7ec5635d0c44f0d86abd6ce41a208710f6d7717706278751c0f",
    "bytes": 177654,
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
    "at": "2026-10-09T19:21:48.360Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
