// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "cta/motion-gallery",
  "job": "cta",
  "language": "neo-brutal",
  "mechanic": [
    "layers-drop-stack-burst"
  ],
  "energy": "punchy",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "cta",
    "layers-drop-stack-burst",
    "restaurant",
    "promo",
    "poster"
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
      "in": 90,
      "out": 0
    },
    "markers": {
      "settled": 90
    },
    "beats": [
      0,
      23,
      45,
      68,
      90
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
      "key": "line1",
      "type": "text",
      "maxChars": 8,
      "role": "headline"
    },
    {
      "key": "line2",
      "type": "text",
      "maxChars": 8,
      "role": "headline"
    },
    {
      "key": "price",
      "type": "text",
      "maxChars": 5,
      "role": "value"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 24,
      "role": "cta"
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
      "target": "layers-drop-stack-burst",
      "prop": "transform",
      "from": "enter",
      "settledBy": 90,
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
    "ink": "#1A120D",
    "accent": "#E8361F",
    "secondary": "#FFF4D6",
    "paper": "#FFCF2E",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "line1": "double",
    "line2": "smash.",
    "price": "$15",
    "cta": "order on fennel.app"
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
      "key": "line1",
      "label": "Line 1",
      "type": "text",
      "max": 8,
      "role": "headline"
    },
    {
      "key": "line2",
      "label": "Line 2",
      "type": "text",
      "max": 8,
      "role": "headline"
    },
    {
      "key": "price",
      "label": "Price",
      "type": "text",
      "max": 5,
      "role": "value"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 24,
      "role": "cta"
    }
  ],
  "name": "Burger Stack Poster",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-food-street-poster",
    "bundleSha256": "876c0210dbf5373ae65e0edf6a1170dd996403cec5a9db1314ddbc2c49ba47b4",
    "sourceSnapshot": {
      "sha256": "b342da95c90071ffb99c060c999d9fca49ed6722762d7db99795613749872dfe",
      "files": 2067
    },
    "renderedAt": "2026-10-09T07:47:24.388Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-food-street-poster/16x9-paper.png",
        "sha256": "14fb916b9a62d13e11166e6eb5f88c0d293915171d3fc22da35fcba9bae43509"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-food-street-poster/16x9-night.png",
        "sha256": "c2c721e63d486c33de7c195c17350d4d34aed64018108233e5158f09e81f4107"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-food-street-poster/16x9-color.png",
        "sha256": "ecd2814190217dcddd912032bb1d66884da76098a007abfae8bf085712c5ff42"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-food-street-poster/9x16-paper.png",
        "sha256": "7082e06e96ef61d15068c0b8230bec0de83a145e099ec4281ecd733297c9a2c3"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-food-street-poster/9x16-night.png",
        "sha256": "9354cfab0cbef635d6b2fa4377b0b99fb428f15220dace33272a6209f7a0fb12"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-food-street-poster/9x16-color.png",
        "sha256": "591ea02fa0841cf404beb5cad978c284279a57edfe946208eab7ba6cc7bc0fe5"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-food-street-poster/1x1-paper.png",
        "sha256": "26bd6121defc9be4d10dc9ed8f2f4ce778220a56db6613be890f674a5f2e34ad"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-food-street-poster/1x1-night.png",
        "sha256": "2cb1d0479f598e00fd50b003c06a0c695e45fd2b751cd5f124f0c13bd32c7c6b"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-food-street-poster/1x1-color.png",
        "sha256": "3cf4902e2eb41b35adab74b7e2c383d1e95437897eb4f181065a0312f54f133b"
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
          "mg-food-street-poster--16x9",
          "mg-food-street-poster--9x16",
          "mg-food-street-poster--1x1"
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
            "paperNight": 53.70648871527778,
            "paperColor": 22.5810546875,
            "region": {
              "left": 0,
              "top": 54,
              "width": 1920,
              "height": 1026
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 60.10142686631944,
            "paperColor": 24.404161241319443,
            "region": {
              "left": 0,
              "top": 122,
              "width": 1080,
              "height": 1723
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 54.532741970486114,
            "paperColor": 22.28534613715278,
            "region": {
              "left": 0,
              "top": 79,
              "width": 1080,
              "height": 986
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
            "occupancy": 1.346371882086168,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.346371882086168,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.346371882086168,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2636999244142104,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2651762093726382,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2718194916855634,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.284695977156295,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2860082304526752,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2938817502309568,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 17.89203559027778,
        "frames": [
          13,
          90,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 17.891710069444443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-food-street-poster/16x9-duration-90-frame-10.png",
                "sha256": "c35fd83732c4cf92dc6d8cafe55f2a62131c646b38d8695c09ba5f4f83cce925",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-food-street-poster/16x9-duration-90-frame-89.png",
                "sha256": "39f169acb922f9cb53cf56370243d93151483538b8bf6569acf74f3689d8198c",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-food-street-poster/16x9-duration-90-frame-79.png",
                "sha256": "ae92f7ef5c9b3aa6e7aa40f9b42944c22e38d4c7d2097c3ed86dd9b2f5e2cecd",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 17.89203559027778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-food-street-poster/16x9-duration-900-frame-13.png",
                "sha256": "aef81883250def74839066f77fc0f18446dfde8e8d4bab182c020647de22b1e8",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-food-street-poster/16x9-duration-900-frame-90.png",
                "sha256": "79ee77fa16a1fa292da41017439ab3e85b6cb1105d571b331dc9386da9343f60",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-food-street-poster/16x9-duration-900-frame-792.png",
                "sha256": "89cdece141ee8c583bb5600af2b942268091293b89769ce632666e902da7f9d8",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-food-street-poster/16x9-duration-900-frame-899.png",
                "sha256": "54e6b05d140b5b963b7e043ab49360dc1a7279ae9d026278cd7d473613b908f2",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 22.288194444444443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-food-street-poster/9x16-duration-90-frame-10.png",
                "sha256": "de54bdfec8523832e0ee250c17096df727043cacf8cc76b48e3da67fc8091b51",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-food-street-poster/9x16-duration-90-frame-89.png",
                "sha256": "76570fa8bf648bb9eedbfd272a8509eacc0d24ab7c76cc9c1caca112beebb2cf",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-food-street-poster/9x16-duration-90-frame-79.png",
                "sha256": "e880727b6e542153c46d980affa7ef07c14eddbfdb775ab56e0737df5b39e9b5",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 22.14670138888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-food-street-poster/9x16-duration-900-frame-13.png",
                "sha256": "612d44a44addbff73520ab7455711c7a93e3caaf97fd039aa6dd3ff88bedf4b9",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-food-street-poster/9x16-duration-900-frame-90.png",
                "sha256": "d0c80dcba1f2f5c01cfcf55daade6919a2f4029a33cff227356a33cadc0bba38",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-food-street-poster/9x16-duration-900-frame-792.png",
                "sha256": "2ddf50beed6dbdf0be59de2162c515fd4d3bd63aa78d5742fcc6323ac0f35786",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-food-street-poster/9x16-duration-900-frame-899.png",
                "sha256": "035c4af1bc1838afc936c231b97ec18ea3768848ba30ddcb229b8a904a312fc3",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 19.222330729166668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-food-street-poster/1x1-duration-90-frame-10.png",
                "sha256": "7305b82d16c59193545436ef70fba9169aca4471b8759e39f8f9daeeca5e618d",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-food-street-poster/1x1-duration-90-frame-89.png",
                "sha256": "c67b0e6c12288c9ae6d7bb18032d176cf7e04addb16ee491cb46d2ed20f9a700",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-food-street-poster/1x1-duration-90-frame-79.png",
                "sha256": "c67b0e6c12288c9ae6d7bb18032d176cf7e04addb16ee491cb46d2ed20f9a700",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 18.741102430555557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 13,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-food-street-poster/1x1-duration-900-frame-13.png",
                "sha256": "b9d33b6f38db6dcd43b6856a82a8adeb0e2c7b491385e8f700d42225d555595e",
                "alphaMass": 587520
              },
              {
                "frame": 90,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-food-street-poster/1x1-duration-900-frame-90.png",
                "sha256": "c67b0e6c12288c9ae6d7bb18032d176cf7e04addb16ee491cb46d2ed20f9a700",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-food-street-poster/1x1-duration-900-frame-792.png",
                "sha256": "c67b0e6c12288c9ae6d7bb18032d176cf7e04addb16ee491cb46d2ed20f9a700",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind5-30/mg-food-street-poster/1x1-duration-900-frame-899.png",
                "sha256": "c67b0e6c12288c9ae6d7bb18032d176cf7e04addb16ee491cb46d2ed20f9a700",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "cta",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "Burger stacks into a poster with outlined and bold type, price burst and tapes; rebrands distinct."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 22,
        "compared": 22,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "876c0210dbf5373ae65e0edf6a1170dd996403cec5a9db1314ddbc2c49ba47b4",
      "selectedBy": "serafim (repo owner) on 2026-10-09; visual review by claude",
      "at": "2026-10-09T07:49:52.847Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-food-street-poster/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-food-street-poster/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-food-street-poster/16x9/detail.mp4",
      "bg": "#ffcf2e",
      "posterFrame": 90,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "f06e8bf5c94f738b51d30a5fea1bd0d741abe109b0e9645f6cf551bb89d92b8f",
        "loop": "bb306d125b650db2bd1e6292814262f6e8c1ac52468f773e5e4a4675327b2125",
        "detail": "99157cc12116d64a5a79c3f81baff1925efb06e20cdca21914239638515b444d"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-food-street-poster/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-food-street-poster/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-food-street-poster/9x16/detail.mp4",
      "bg": "#ffcf2e",
      "posterFrame": 90,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "91eaccb8722f290654dd9fbe1f18e6c408b5c07c2778b9fec89d902327164b32",
        "loop": "d52d634738ce2efccb51f1588013c1c4ec64aee0bea6da9f72fe5e433f05c447",
        "detail": "170336e42593264a93d07043703e9d474409570757996203c1e14da2537d4ac3"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-food-street-poster/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-food-street-poster/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-food-street-poster/1x1/detail.mp4",
      "bg": "#ffcf2e",
      "posterFrame": 90,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "5b71c01ec66a73b7cff64341c4c7175d571055599d780a42bfc9d002eada21f6",
        "loop": "2829dbb86ce6b42c4d57842b1c4160dc3bf4a77ab1e5fde9d0c967f7d18002c6",
        "detail": "ee7c3bf371238103e304ba0ac4509a7feae6bf03072ebba48407ae9ec6ac805d"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/876c0210dbf5373ae65e0edf6a1170dd996403cec5a9db1314ddbc2c49ba47b4/index.mjs",
    "sha256": "876c0210dbf5373ae65e0edf6a1170dd996403cec5a9db1314ddbc2c49ba47b4",
    "bytes": 187759,
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
    "at": "2026-10-09T08:02:11.004Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
