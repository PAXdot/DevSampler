// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "logos/craft",
  "job": "logos",
  "language": "aura",
  "mechanic": [
    "point-cloud"
  ],
  "tags": [
    "point-cloud",
    "rotation",
    "particles",
    "logo"
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
    "sourceUrl": "21st first-party (Logo from Rotating Points, 2026-10-09)"
  },
  "defaults": {
    "primary": "#C39A54",
    "secondary": "#6C9F92",
    "color": "#F1E8D1",
    "background": "#15282D",
    "fontFamily": "DM Sans",
    "seed": 31,
    "logo": "",
    "caption": "Clarity from every angle"
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
      "max": 35,
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
  "name": "Logo from Rotating Points",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "logo-point-cloud",
    "bundleSha256": "376aea1c8b48bb1ab04a7076f8596941fc0563324acaf3b1418904a63f63d8b1",
    "sourceSnapshot": {
      "sha256": "3672d7f9ac3eaa3d3710ed2a8f5eebbd7346940163538cd029a0064cde980765",
      "files": 2172
    },
    "renderedAt": "2026-10-09T22:52:37.121Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/logo-point-cloud/16x9-paper.png",
        "sha256": "3ebee48c7ecf5eb7b7f72dc0f5783e34471cc1db70e8f222d23b5bc1232fb114"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/logo-point-cloud/16x9-night.png",
        "sha256": "98b64260063c411401cddf74eb9104bf2508d9374a3d52e908e208e1616c3efb"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/logo-point-cloud/16x9-color.png",
        "sha256": "5021dd6b42a83d07dc100662700e43a2f85c7f95ee2b0fe5b6b3418b982613c1"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/logo-point-cloud/9x16-paper.png",
        "sha256": "6b45f7d7ac3882d5de0a01ccac0154249a701b46ded52444729b049fc3dfd204"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/logo-point-cloud/9x16-night.png",
        "sha256": "b848f61eb3d952c7bb2b3b2b2dddda25c8582ab8e83b7cf9ee0c33ea0afe309d"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/logo-point-cloud/9x16-color.png",
        "sha256": "0efdf71e6af3cba1e6889e543c48f22254f594b216e057f89cc99002cda94b96"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/logo-point-cloud/1x1-paper.png",
        "sha256": "f8537724c966dec6c81ff4fc4d0e1f3d2d30b2e5fff74305aa5859acf6d04487"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/logo-point-cloud/1x1-night.png",
        "sha256": "34403443fcf12f74284b90040a71b651bf33ab07665d07132e62967fe4affa7a"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/logo-point-cloud/1x1-color.png",
        "sha256": "49bdb1b0ce5e082194e1c0deb2089fd8e8f794a10ed0989c2d8631ba2d999e13"
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
          "logo-point-cloud--16x9",
          "logo-point-cloud--9x16",
          "logo-point-cloud--1x1"
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
            "paperNight": 7.194959852430555,
            "paperColor": 3.6997612847222223,
            "region": {
              "left": 532,
              "top": 259,
              "width": 856,
              "height": 693
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 11.46096462673611,
            "paperColor": 4.785210503472222,
            "region": {
              "left": 48,
              "top": 571,
              "width": 984,
              "height": 1229
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 7.191134982638889,
            "paperColor": 3.6997612847222223,
            "region": {
              "left": 112,
              "top": 259,
              "width": 856,
              "height": 693
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
            "occupancy": 0.4054370590828925,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.4054370590828925,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.3990015502085609,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8265391418913246,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.82452155244814,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7411278554631731,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7207769939251422,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7207769939251422,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7093360892596637,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 5.055230034722222,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 5.078233506944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/logo-point-cloud/16x9-duration-150-frame-18.png",
                "sha256": "0f0e6f895cc48a2cc13a9ac01b02e756363042a27f16c89bd613428a83702b17",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/logo-point-cloud/16x9-duration-150-frame-135.png",
                "sha256": "08c27e936b58562fcebe9a875f2c3336e6bedc38fa788bcbdcc73e1c3af59d9e",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/logo-point-cloud/16x9-duration-150-frame-132.png",
                "sha256": "5dcd0ea6246899d50f8cf72495886e05812146e4005882075a378a5d4bb04c0c",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/logo-point-cloud/16x9-duration-150-frame-149.png",
                "sha256": "08c27e936b58562fcebe9a875f2c3336e6bedc38fa788bcbdcc73e1c3af59d9e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 5.055230034722222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/logo-point-cloud/16x9-duration-600-frame-20.png",
                "sha256": "37d677855df8fbc51902cd393e02c4c13e0a4c0eb42a7e01491dc8a0185b7ea4",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/logo-point-cloud/16x9-duration-600-frame-135.png",
                "sha256": "08c27e936b58562fcebe9a875f2c3336e6bedc38fa788bcbdcc73e1c3af59d9e",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/logo-point-cloud/16x9-duration-600-frame-528.png",
                "sha256": "08c27e936b58562fcebe9a875f2c3336e6bedc38fa788bcbdcc73e1c3af59d9e",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/logo-point-cloud/16x9-duration-600-frame-599.png",
                "sha256": "08c27e936b58562fcebe9a875f2c3336e6bedc38fa788bcbdcc73e1c3af59d9e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 8.085611979166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/logo-point-cloud/9x16-duration-150-frame-18.png",
                "sha256": "1b4df9ffc0b71d095ad2286adee72ed324937fca2df1b64f05fcf6c6e0664744",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/logo-point-cloud/9x16-duration-150-frame-135.png",
                "sha256": "433e8aa5e82c5bfb549356916cafed2cc3172a0b394f863ab763a049027b465e",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/logo-point-cloud/9x16-duration-150-frame-132.png",
                "sha256": "d3916132aa2e3527c7f6b94b3b0d7d7561225687aafdcd5f74885067c3c73800",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/logo-point-cloud/9x16-duration-150-frame-149.png",
                "sha256": "433e8aa5e82c5bfb549356916cafed2cc3172a0b394f863ab763a049027b465e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 8.08224826388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/logo-point-cloud/9x16-duration-600-frame-20.png",
                "sha256": "9719cdfefff4a9f722b23ab4d8bc74fefb3f2f09ea34718cf657e464c8726b63",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/logo-point-cloud/9x16-duration-600-frame-135.png",
                "sha256": "433e8aa5e82c5bfb549356916cafed2cc3172a0b394f863ab763a049027b465e",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/logo-point-cloud/9x16-duration-600-frame-528.png",
                "sha256": "433e8aa5e82c5bfb549356916cafed2cc3172a0b394f863ab763a049027b465e",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/logo-point-cloud/9x16-duration-600-frame-599.png",
                "sha256": "433e8aa5e82c5bfb549356916cafed2cc3172a0b394f863ab763a049027b465e",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 9.119249131944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/logo-point-cloud/1x1-duration-150-frame-18.png",
                "sha256": "9421756696350ed7ed08ed39def109ac47d34c137ede77223c283b21248487db",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/logo-point-cloud/1x1-duration-150-frame-135.png",
                "sha256": "18652101f2931759123c54a6e79ee8619f9d82293076b23814e4ed94def71eb0",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/logo-point-cloud/1x1-duration-150-frame-132.png",
                "sha256": "3a291f079781d816286c639d216236841c4349d1540221092e96d7591150f2fd",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/logo-point-cloud/1x1-duration-150-frame-149.png",
                "sha256": "18652101f2931759123c54a6e79ee8619f9d82293076b23814e4ed94def71eb0",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 9.09743923611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/logo-point-cloud/1x1-duration-600-frame-20.png",
                "sha256": "d690c168ae351791897d932610f3bedbd33c16c9a3eea3bd56b663cd69548a60",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/logo-point-cloud/1x1-duration-600-frame-135.png",
                "sha256": "18652101f2931759123c54a6e79ee8619f9d82293076b23814e4ed94def71eb0",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/logo-point-cloud/1x1-duration-600-frame-528.png",
                "sha256": "18652101f2931759123c54a6e79ee8619f9d82293076b23814e4ed94def71eb0",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/logo-point-cloud/1x1-duration-600-frame-599.png",
                "sha256": "18652101f2931759123c54a6e79ee8619f9d82293076b23814e4ed94def71eb0",
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
        "note": "1. TitleMatches: The sequence of images shows transformation: starting from an abstract logo built from circle/square overlap, then two motion samples of rotating or scattering points, which later settle back into the original logo shape. This directly and visually supports the 'Logo from Rotating Points' title; the motion indeed demonstrates rotation and re-formation into the logo, rather than just suggesting it in text alone.\n\n2. noBakedHeading: There are no decorative or unexplained block titles, categories, or language labels visibly baked into any composition. The only heading present is the caption 'Clarity from every angle', which matches the editable named-slot content and is positioned as a legitimate, editable caption beneath the visual subject.\n\n3. brandAdherence: The final three images show three distinct palettes applied to the same central logo composition. Each variant uses the supplied values for background, text, and ink colors; the shapes and structure remain consistent. All text remains legible at sufficient contrast. No unexplained fixed block colors are retained; only the expected colors are visible.\n\n4. languageAdherence: The use of continuous soft fields, isolated sharp logo, no UI skeletons or rainbow colors, contrasting ink on ambient BG, and consistent type roles are all present through each rebrand and motion sample. The use of sans type for both body and display, and rebrands in multiple palettes, all fit the provided language card guidance."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 48,
        "compared": 48,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "376aea1c8b48bb1ab04a7076f8596941fc0563324acaf3b1418904a63f63d8b1",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T22:58:07.997Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "logo-point-cloud",
      "vsPositive": 0.9583333333333334,
      "vsNegative": 0.9583333333333334,
      "fakeVotes": 0,
      "perModel": {
        "claude": {
          "vsPositive": 1,
          "vsNegative": 0.875
        },
        "gpt": {
          "vsPositive": 0.875,
          "vsNegative": 1
        },
        "gemini": {
          "vsPositive": 1,
          "vsNegative": 1
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "26e2f094ca624af06f8a292b0c62f766723fa5c0bcf67b0b647aed457329507f",
      "bundleSha256": "376aea1c8b48bb1ab04a7076f8596941fc0563324acaf3b1418904a63f63d8b1",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/logo-point-cloud/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/logo-point-cloud/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/logo-point-cloud/16x9/detail.mp4",
      "bg": "#15282d",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "2d372d6d3454e4aa090026a3e13361aa82ab9b494a13959dac7e03c33c62f73a",
        "loop": "c4076ff790956a3892c3ba1d46ead62cb39d47647805a65833ac08cc64738bb3",
        "detail": "32d9cdbd3bcdd46fb724ed1db083945821e2e883d154f3635a506c5999b4d3c7"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/logo-point-cloud/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/logo-point-cloud/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/logo-point-cloud/9x16/detail.mp4",
      "bg": "#15282d",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "dac2223b16a032c75bfe1f4ccf944fa852319b8913c6515013a8ef3e5e684ac9",
        "loop": "af0df317cbe10017a19ed078a316bf9d1915585c13740f187bcb9ed8ca172609",
        "detail": "d8cb0bb101e809ededdc99de1bdb269a206510bd46b9bc90fa3c7cb97ce3567c"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/logo-point-cloud/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/logo-point-cloud/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/logo-point-cloud/1x1/detail.mp4",
      "bg": "#15282d",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "2a3f0bd847d6561e0c12df8a44b3085e8a2e3907c5a9d8dc3f652e0ac603d64f",
        "loop": "25f884b282c8648f343a5106f0f791716aedde8606979b45fd52d93ed670fb30",
        "detail": "ae26d6261b456fa1a26995de2e7962265e5536f33a857b22403871b8c6b93684"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/376aea1c8b48bb1ab04a7076f8596941fc0563324acaf3b1418904a63f63d8b1/index.mjs",
    "sha256": "376aea1c8b48bb1ab04a7076f8596941fc0563324acaf3b1418904a63f63d8b1",
    "bytes": 160983,
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
    "at": "2026-10-09T23:05:41.801Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
