// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "text/hero",
  "tags": [
    "text behind",
    "depth",
    "cutout",
    "product hero",
    "giant word",
    "outline"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 120,
      "min": 50,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 40,
      "out": 0
    },
    "markers": {
      "settled": 42
    },
    "beats": [
      2,
      10,
      26,
      32
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
    "safeArea": "title",
    "transparent": true,
    "backdrop": [
      "background"
    ]
  },
  "slots": [
    {
      "key": "word",
      "type": "text",
      "maxChars": 12,
      "lines": 1,
      "role": "headline"
    },
    {
      "key": "image",
      "type": "image"
    },
    {
      "key": "caption",
      "type": "text",
      "maxChars": 60,
      "lines": 1,
      "role": "subline"
    }
  ],
  "brand": {
    "color": "colors.text",
    "accent": "colors.primary",
    "background": "colors.background",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "word",
      "prop": "letters",
      "from": "outline",
      "settledBy": 26,
      "easing": "linear"
    },
    {
      "target": "subject",
      "prop": "y",
      "from": "below",
      "settledBy": 24,
      "easing": "ease"
    },
    {
      "target": "caption",
      "prop": "opacity",
      "settledBy": 42,
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
      120
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "motion recipe from research V02 (giant word behind a cutout); own sample subject"
  },
  "job": "titles",
  "language": "aura",
  "mechanic": [
    "reveal"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": true,
  "defaults": {
    "word": "Depth",
    "image": "",
    "caption": "Layers that move like the real thing",
    "color": "#F4F4F5",
    "accent": "#7C9CFF",
    "background": "#09090B",
    "fontFamily": "Geist",
    "outlineOnly": false
  },
  "fields": [
    {
      "key": "word",
      "label": "Word",
      "type": "text",
      "max": 12,
      "role": "headline"
    },
    {
      "key": "image",
      "label": "Image",
      "type": "asset"
    },
    {
      "key": "caption",
      "label": "Caption",
      "type": "text",
      "max": 60,
      "role": "subline"
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
      "key": "outlineOnly",
      "label": "Outline only",
      "type": "boolean"
    }
  ],
  "name": "Text Behind Subject",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "text-behind-subject",
    "bundleSha256": "e19f1e43cd2e6a83ba52c3d22cbfad9a7dab55f51c594df9d377dc08922aea6c",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T01:04:07.917Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/text-behind-subject/16x9-paper.png",
        "sha256": "5c4e9ed55de0e769b8d1dd6756e27dc131500bc0a21a4040b48b221e8a348df1"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/text-behind-subject/16x9-night.png",
        "sha256": "0f777ee972fddfc73871989d13b919ae59972d5fe4c1e102a5758e225782fbf6"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/text-behind-subject/16x9-color.png",
        "sha256": "50ae65b6c4d4a33376391669040c8c3356e0fe6f550991867b0a06707a1435d2"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/text-behind-subject/9x16-paper.png",
        "sha256": "5e05ea33e3cf9d67f85cbe1970e8dd47f088f800eae486d00a54b2c0b8c8a10a"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/text-behind-subject/9x16-night.png",
        "sha256": "6573e49bf1c6f11eb9cb81def96a3e287acdf73eec34de81b8d90bb6b8e7c792"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/text-behind-subject/9x16-color.png",
        "sha256": "d803676a2e9e834178ec00ec6982a15cf357fb406984a8c1166561fd5865ba79"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/text-behind-subject/1x1-paper.png",
        "sha256": "1d59c423c5f9b5cfe45be60c8fa05d56823ab21ed7ea5242e24672ca61c494a4"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/text-behind-subject/1x1-night.png",
        "sha256": "bc9d9bb4c21b5a7a8170c904d5e90ebba85bd34c39f2e933c72df4767a4b05f8"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/text-behind-subject/1x1-color.png",
        "sha256": "a8e74aeb46ad2432139fa7c803a08e5c9276c3ca1fcb4ca0950b8058addd1dd5"
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
          "text-behind-subject--16x9",
          "text-behind-subject--9x16",
          "text-behind-subject--1x1"
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
            "paperNight": 62.42108832465278,
            "paperColor": 29.794108072916668,
            "region": {
              "left": 395,
              "top": 327,
              "width": 1147,
              "height": 691
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 64.73529730902777,
            "paperColor": 28.025987413194443,
            "region": {
              "left": 60,
              "top": 521,
              "width": 968,
              "height": 1204
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 61.90448676215278,
            "paperColor": 28.458251953125,
            "region": {
              "left": 66,
              "top": 357,
              "width": 962,
              "height": 644
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
            "occupancy": 0.5242260548766833,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5182635039612554,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.3447603803609922,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7879588949777444,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7781142613938581,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7794784580498868,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7314281165140954,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7251827628628041,
            "bad": [],
            "measured": 6
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.4744233084180175,
            "bad": [],
            "measured": 6
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 15.401692708333334,
        "frames": [
          6,
          42,
          119
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 50,
            "averageChannelDifference": 15.827473958333334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/text-behind-subject/16x9-duration-50-frame-6.png",
                "sha256": "0385dbad01c501aa18c5aab72c90afc3e2043b579bdd1df12555114a026a4de0",
                "alphaMass": 587520
              },
              {
                "frame": 42,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/text-behind-subject/16x9-duration-50-frame-42.png",
                "sha256": "53e81edbda72605e7f28ba15f82bf456ee66e51687578ca0378e9ea49d901918",
                "alphaMass": 587520
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/text-behind-subject/16x9-duration-50-frame-44.png",
                "sha256": "0a1607fc21e77a535ac328e9de622fba9c4deb0024ec4da59cd5747116c4c2b7",
                "alphaMass": 587520
              },
              {
                "frame": 49,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/text-behind-subject/16x9-duration-50-frame-49.png",
                "sha256": "fd971052260df6f972b9102b02f9137f9899cf6a8ffb518ca56fd2f4eeb0763b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 15.16579861111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/text-behind-subject/16x9-duration-600-frame-6.png",
                "sha256": "0385dbad01c501aa18c5aab72c90afc3e2043b579bdd1df12555114a026a4de0",
                "alphaMass": 587520
              },
              {
                "frame": 42,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/text-behind-subject/16x9-duration-600-frame-42.png",
                "sha256": "2498541026d1bcc561a191e18680a7e5fa316389106ae8d06d6a7cb4aa25f50a",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/text-behind-subject/16x9-duration-600-frame-528.png",
                "sha256": "0a1607fc21e77a535ac328e9de622fba9c4deb0024ec4da59cd5747116c4c2b7",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/text-behind-subject/16x9-duration-600-frame-599.png",
                "sha256": "c598af0ad0442d1c415cf698d1dda7d372902c89bf726622b89026b39667a2b8",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 50,
            "averageChannelDifference": 29.266276041666668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/text-behind-subject/9x16-duration-50-frame-6.png",
                "sha256": "f4f3eab58f4095a207332cd247a4dfafef82efbc9890639b26329362b51269b8",
                "alphaMass": 587520
              },
              {
                "frame": 42,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/text-behind-subject/9x16-duration-50-frame-42.png",
                "sha256": "5ab9bf2a03049d57944b7551d3960fb6b3877429fdd344b93520ab7e098c467c",
                "alphaMass": 587520
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/text-behind-subject/9x16-duration-50-frame-44.png",
                "sha256": "71fe87b05beb89ab02ba7e525cde05a3bd4932feb53e5ec071eaff1e703fcb32",
                "alphaMass": 587520
              },
              {
                "frame": 49,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/text-behind-subject/9x16-duration-50-frame-49.png",
                "sha256": "0bbe881ded0889909b885789d76a9c6fed61461753297490dc27acd94395c434",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 27.53244357638889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/text-behind-subject/9x16-duration-600-frame-6.png",
                "sha256": "f4f3eab58f4095a207332cd247a4dfafef82efbc9890639b26329362b51269b8",
                "alphaMass": 587520
              },
              {
                "frame": 42,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/text-behind-subject/9x16-duration-600-frame-42.png",
                "sha256": "e845c92f1204c95a2a4b9685a9d8bc6fecfb17739739113e8704b142cd08f76d",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/text-behind-subject/9x16-duration-600-frame-528.png",
                "sha256": "71fe87b05beb89ab02ba7e525cde05a3bd4932feb53e5ec071eaff1e703fcb32",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/text-behind-subject/9x16-duration-600-frame-599.png",
                "sha256": "f2ad55afe68d45fd4620977f5e7e46182d5995c08c82ea48e98d033dd206bec6",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 50,
            "averageChannelDifference": 22.668619791666668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/text-behind-subject/1x1-duration-50-frame-6.png",
                "sha256": "8ca6586cf730944c41a9a74414763a982e0b3540d4b997ba883239bd90c9d7d9",
                "alphaMass": 587520
              },
              {
                "frame": 42,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/text-behind-subject/1x1-duration-50-frame-42.png",
                "sha256": "69f6dd4a784b520951985d6e238d06aa7f560696a1d9e1490d338b2ad2f0a460",
                "alphaMass": 587520
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/text-behind-subject/1x1-duration-50-frame-44.png",
                "sha256": "b4bee4e886ace0a3dadcdf774f715da284c9b9cbe392ce94beaf7f40549f904b",
                "alphaMass": 587520
              },
              {
                "frame": 49,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/text-behind-subject/1x1-duration-50-frame-49.png",
                "sha256": "51f38b3a7a6f06c3e7549480504e2d0c363b4bc42cd2c1bbb905b2a9aa99d612",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 21.619466145833332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/text-behind-subject/1x1-duration-600-frame-6.png",
                "sha256": "8ca6586cf730944c41a9a74414763a982e0b3540d4b997ba883239bd90c9d7d9",
                "alphaMass": 587520
              },
              {
                "frame": 42,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/text-behind-subject/1x1-duration-600-frame-42.png",
                "sha256": "5aa006f9b3101f2520122bd1f389836efe05293d53efc0620906783ed25677fd",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/text-behind-subject/1x1-duration-600-frame-528.png",
                "sha256": "b4bee4e886ace0a3dadcdf774f715da284c9b9cbe392ce94beaf7f40549f904b",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-1/text-behind-subject/1x1-duration-600-frame-599.png",
                "sha256": "fa890129ee0e59979c433b86e0eebf207ecf11adbf34e67b2c15527e197db3d4",
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
        "note": "Big word with a lit sphere passing in front of it; layered title."
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
      "bundleSha256": "e19f1e43cd2e6a83ba52c3d22cbfad9a7dab55f51c594df9d377dc08922aea6c",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.970958Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/text-behind-subject/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/text-behind-subject/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/text-behind-subject/16x9/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 42,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "b9167929ddb5cbbfe30bc8b063f2e3f1a71f5a42c813fc29ec11e207a7de308a",
        "loop": "47a208b2de2387480a4b93dc5ba196ebbdf9a6504775e6aa02f64e1330c51b81",
        "detail": "18d916b636347ac196f7e5cea03b55e61b83cd4271e544e421ac265612283c77"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/text-behind-subject/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/text-behind-subject/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/text-behind-subject/9x16/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 42,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "f70564e9cfcb52c369fd72f63a7f376e86e0a8362a80a9df9e50c9c466be7f1a",
        "loop": "eb3430b85b710a456712363e7c9ae8d348ece12f1a26d27e03302fff7655d6a1",
        "detail": "a85e690e2aadb8cb9a35de90ba3f4a1a13ca5fafb3f0013f296f19526363db10"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/text-behind-subject/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/text-behind-subject/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/text-behind-subject/1x1/detail.mp4",
      "bg": "#09090b",
      "posterFrame": 42,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "9f8097c3942b8cbd8294bcbecb96af8d70ef95cd7de3db248083d99b1e168cf0",
        "loop": "b8c9a612c75468d10de71ea8b545f9b0f7cabf3046eb2b09e231cb0d42539d7c",
        "detail": "a68258ab9a6f7affcf7eca26517054ca6dda43e6cc17529cfda12e40321fd3f1"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/e19f1e43cd2e6a83ba52c3d22cbfad9a7dab55f51c594df9d377dc08922aea6c/index.mjs",
    "sha256": "e19f1e43cd2e6a83ba52c3d22cbfad9a7dab55f51c594df9d377dc08922aea6c",
    "bytes": 161961,
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
    "at": "2026-10-07T02:26:03.341Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
