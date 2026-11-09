// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "logos/craft",
  "job": "logos",
  "language": "isometric",
  "mechanic": [
    "gimbal"
  ],
  "tags": [
    "gimbal",
    "gyroscope",
    "rings",
    "logo",
    "rotation"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 150,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 135,
      "out": 0
    },
    "markers": {
      "settled": 135
    },
    "beats": [
      0,
      30,
      65,
      100,
      135
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
      "role": "caption"
    }
  ],
  "brand": {
    "primary": "colors.primary",
    "secondary": "colors.secondary",
    "color": "colors.text",
    "background": "colors.background",
    "fontFamily": "fonts.heading"
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
    "sourceUrl": "21st first-party (Gyroscope Logo Lock, 2026-10-09)"
  },
  "defaults": {
    "primary": "#B9A063",
    "secondary": "#A14B31",
    "color": "#26312D",
    "background": "#F3F0E7",
    "fontFamily": "DM Sans",
    "seed": 31,
    "logo": "",
    "caption": "Find your own balance"
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
      "max": 38,
      "role": "caption"
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
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    },
    {
      "key": "seed",
      "label": "Seed",
      "type": "number",
      "step": 1
    }
  ],
  "name": "Gyroscope Logo Lock",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "gyroscope-logo-lock",
    "bundleSha256": "992595fcb06c016cf06b6b245c83780eab8fa6998a4f4209a697944d7665b7e1",
    "sourceSnapshot": {
      "sha256": "86e16398ba23389e2567ea0c6d2d2c7d9ef47a18365417f190bac9aff219abb2",
      "files": 2070
    },
    "renderedAt": "2026-10-09T21:11:43.338Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/gyroscope-logo-lock/16x9-paper.png",
        "sha256": "212c3542269476115a40e141544a4cbfba62b71e807f998aca3c52fb40f02235"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/gyroscope-logo-lock/16x9-night.png",
        "sha256": "b06280250c6fec9cc3f622a462d4eb2eb097af4a10261322c28d392e1434da1a"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/gyroscope-logo-lock/16x9-color.png",
        "sha256": "5e73cc3a640183196c010a1344465f0d71d6cea9a69b56ac4c66abdc43674ab6"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/gyroscope-logo-lock/9x16-paper.png",
        "sha256": "b2eb5fa721c28c9ff97705ceedfa2a651a72af8e053230dcc99e7c4a5f686270"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/gyroscope-logo-lock/9x16-night.png",
        "sha256": "4cf90a638ef497f507455493bb4ae94e79404b816ae5296c270064284346771d"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/gyroscope-logo-lock/9x16-color.png",
        "sha256": "f0a91aea6139c27a9d62f3e1713b9a328cedefa372a9ac3813c0939c085e1990"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/gyroscope-logo-lock/1x1-paper.png",
        "sha256": "3846e85fce13d46572569fe736af99cdc33f02a443513dfff3c82f9ea9b88dbe"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/gyroscope-logo-lock/1x1-night.png",
        "sha256": "bdb068f9ac06cd060e424170cddbca3c151f6aa8de4b1277382058f5567148d4"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/gyroscope-logo-lock/1x1-color.png",
        "sha256": "04f290e04e20b25b2a754543230ff5ee45b191b74a3e090dc1a809d772eb0622"
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
          "gyroscope-logo-lock--16x9",
          "gyroscope-logo-lock--9x16",
          "gyroscope-logo-lock--1x1"
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
            "paperNight": 32.008138020833336,
            "paperColor": 23.46112738715278,
            "region": {
              "left": 585,
              "top": 99,
              "width": 677,
              "height": 864
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 28.839599609375,
            "paperColor": 19.30512152777778,
            "region": {
              "left": 106,
              "top": 390,
              "width": 870,
              "height": 1411
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 31.981282552083332,
            "paperColor": 23.454427083333332,
            "region": {
              "left": 165,
              "top": 99,
              "width": 677,
              "height": 864
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
            "occupancy": 0.3997779667422525,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.3997779667422525,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.3946882009619692,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7866753472222224,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7560656721536353,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6976594650205763,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.71071638531956,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.71071638531956,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7016679128212786,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 7.145941840277778,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 7.042751736111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/gyroscope-logo-lock/16x9-duration-150-frame-18.png",
                "sha256": "f1f4e814f2743e7ab24552c0b0a551c2c1b65e207f02c867ecb30bc23d56d1e7",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/gyroscope-logo-lock/16x9-duration-150-frame-135.png",
                "sha256": "033c75a74119974806e9d6099d95eda45287c674a1aba1c3d64ff2f4895fc052",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/gyroscope-logo-lock/16x9-duration-150-frame-132.png",
                "sha256": "e3b5d4b348060cb28d1029e5cc49643c8fbcb20080153d858da05727ffa12e16",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/gyroscope-logo-lock/16x9-duration-150-frame-149.png",
                "sha256": "033c75a74119974806e9d6099d95eda45287c674a1aba1c3d64ff2f4895fc052",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 7.145941840277778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/gyroscope-logo-lock/16x9-duration-600-frame-20.png",
                "sha256": "5e2e8d47ddce013d531323d184d6967deac898ebdccc182ff8486740d90db6ee",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/gyroscope-logo-lock/16x9-duration-600-frame-135.png",
                "sha256": "033c75a74119974806e9d6099d95eda45287c674a1aba1c3d64ff2f4895fc052",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/gyroscope-logo-lock/16x9-duration-600-frame-528.png",
                "sha256": "033c75a74119974806e9d6099d95eda45287c674a1aba1c3d64ff2f4895fc052",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/gyroscope-logo-lock/16x9-duration-600-frame-599.png",
                "sha256": "033c75a74119974806e9d6099d95eda45287c674a1aba1c3d64ff2f4895fc052",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 9.972005208333334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/gyroscope-logo-lock/9x16-duration-150-frame-18.png",
                "sha256": "4c119d4de20678a3344577984ab88e1ec4d447328d1618dee42be6e2c3cfb2a0",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/gyroscope-logo-lock/9x16-duration-150-frame-135.png",
                "sha256": "34f9eac781e682d806684e6682175f55878b0196d7eb40dbc9cdde262be8297a",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/gyroscope-logo-lock/9x16-duration-150-frame-132.png",
                "sha256": "b2ae86f29509693ced518aac6431ab170d8ddd727123d1605facf5b0aac978c9",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/gyroscope-logo-lock/9x16-duration-150-frame-149.png",
                "sha256": "34f9eac781e682d806684e6682175f55878b0196d7eb40dbc9cdde262be8297a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 10.084418402777779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/gyroscope-logo-lock/9x16-duration-600-frame-20.png",
                "sha256": "3e8f940c7d6e4ca91bc17b6469848109ef7ead1876078a902c4b2eec13007a3b",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/gyroscope-logo-lock/9x16-duration-600-frame-135.png",
                "sha256": "34f9eac781e682d806684e6682175f55878b0196d7eb40dbc9cdde262be8297a",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/gyroscope-logo-lock/9x16-duration-600-frame-528.png",
                "sha256": "34f9eac781e682d806684e6682175f55878b0196d7eb40dbc9cdde262be8297a",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/gyroscope-logo-lock/9x16-duration-600-frame-599.png",
                "sha256": "34f9eac781e682d806684e6682175f55878b0196d7eb40dbc9cdde262be8297a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 12.966688368055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/gyroscope-logo-lock/1x1-duration-150-frame-18.png",
                "sha256": "af741c1092925fe091425724f46cde60b98ca96681f324009011c8d7e9218dd8",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/gyroscope-logo-lock/1x1-duration-150-frame-135.png",
                "sha256": "55fe678a1456ce09591bfcd3b8776be3cef722b241828be06b90e017cad6a982",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/gyroscope-logo-lock/1x1-duration-150-frame-132.png",
                "sha256": "2e510cca452e73785d2f966d132d2da8b43eb2d311e10e272b4199435643b0f1",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/gyroscope-logo-lock/1x1-duration-150-frame-149.png",
                "sha256": "55fe678a1456ce09591bfcd3b8776be3cef722b241828be06b90e017cad6a982",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 13.035047743055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/gyroscope-logo-lock/1x1-duration-600-frame-20.png",
                "sha256": "0cb13e57207bf8894fe58fe0c26f94a83c1f3a6951a3244d24f34dbf6dd1d4c0",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/gyroscope-logo-lock/1x1-duration-600-frame-135.png",
                "sha256": "55fe678a1456ce09591bfcd3b8776be3cef722b241828be06b90e017cad6a982",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/gyroscope-logo-lock/1x1-duration-600-frame-528.png",
                "sha256": "55fe678a1456ce09591bfcd3b8776be3cef722b241828be06b90e017cad6a982",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/gyroscope-logo-lock/1x1-duration-600-frame-599.png",
                "sha256": "55fe678a1456ce09591bfcd3b8776be3cef722b241828be06b90e017cad6a982",
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
        "note": "TitleMatches: The subject is a logo abstracted as a central solid symbol with three intersecting ellipsoid rings, displaying features of a gyroscope lock (rings moving to assemble a balanced structure). Motion samples (2–4) demonstrate components assembling, traveling, and rising into a final locked configuration, matching the 'Gyroscope Logo Lock' title. No Baked Heading: There is no extraneous decorative title or block label within any composition; visible text matches the supplied named slot ('Find your own balance'). BrandAdherence: The last three images cover three distinctly different palette states, with logo and rings in appropriately recolored tones that match the supplied palettes, maintaining shape and legibility. No unexplained fixed colors or residual block colors are seen; all elements update palette-wise as intended. LanguageAdherence: Across all versions, material (extruded planes, rings rendered as volumetric paths), directional face shading, fixed parallel projection (not perspective/tilt), and consistent type roles (display/body) are evident. Even as colors and ground switch, the visual language specified in the language card (including motion verbs and type style) is retained. All checks are satisfied by direct visual evidence."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 41,
        "compared": 41,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "992595fcb06c016cf06b6b245c83780eab8fa6998a4f4209a697944d7665b7e1",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T21:32:52.643Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "gyroscope-logo-lock",
      "vsPositive": 0.9583333333333334,
      "vsNegative": 0.9583333333333334,
      "fakeVotes": 0,
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
          "vsPositive": 0.875,
          "vsNegative": 0.875
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "e964e14124513490e0c347481f5975294fdec035ce936fe2b1aab3c4d5ffe81c",
      "bundleSha256": "992595fcb06c016cf06b6b245c83780eab8fa6998a4f4209a697944d7665b7e1",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/gyroscope-logo-lock/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/gyroscope-logo-lock/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/gyroscope-logo-lock/16x9/detail.mp4",
      "bg": "#f3f0e7",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "c1290bc524f8bbe7fc48377b4be28049f0dea9829c5b308ff7c7b43e35a786cf",
        "loop": "18e685db1d3091c53ee4488f3c0614397d5dd28bd4c598c8f487422fdadd9dcd",
        "detail": "b10c27483babb7c943ee6b4095fe5e1f984dce6df7f78ee35f3843da073e158f"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/gyroscope-logo-lock/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/gyroscope-logo-lock/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/gyroscope-logo-lock/9x16/detail.mp4",
      "bg": "#f3f0e7",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "6000abdb81624d4810e1a7735726653eac4bf9b0b153932db904a045d798e95e",
        "loop": "81c5a77715cae1edc3bbf92b111319ac6496b78f9b37705b307ce65342a240ad",
        "detail": "a8eb144b2ba50a5125f04fec62198beb2e346a526422b4acaa0f4b2c0e92aaa8"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/gyroscope-logo-lock/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/gyroscope-logo-lock/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/gyroscope-logo-lock/1x1/detail.mp4",
      "bg": "#f3f0e7",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "013c66c43587b3b9c620491c16da7288e7fe0aee0c959630c8487e8e19927d7d",
        "loop": "0367f5e96cf65df88f0e73fd2960cc5f934e5d9381d0b99e4c559582d04dea5d",
        "detail": "e639eadd086c8a5b98eeefcba58cf1a2c31939df33f8c11b45a7027042c4cf41"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/992595fcb06c016cf06b6b245c83780eab8fa6998a4f4209a697944d7665b7e1/index.mjs",
    "sha256": "992595fcb06c016cf06b6b245c83780eab8fa6998a4f4209a697944d7665b7e1",
    "bytes": 160289,
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
    "at": "2026-10-09T21:44:29.938Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
