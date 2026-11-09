// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "logos/craft",
  "job": "logos",
  "language": "editorial",
  "mechanic": [
    "weave"
  ],
  "tags": [
    "textile",
    "jacquard",
    "weaving",
    "logo",
    "thread",
    "fabric",
    "shuttle",
    "material"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 155,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 145,
      "out": 0
    },
    "markers": {
      "settled": 145,
      "shuttle": 70
    },
    "beats": [
      0,
      16,
      70,
      130,
      145
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
      "maxChars": 40,
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
    "sourceUrl": "21st first-party (warp and weft interlace the user's logo into a physical textile, 2026-10-09)"
  },
  "defaults": {
    "logo": "",
    "caption": "Woven together",
    "primary": "#14B8A6",
    "secondary": "#F59E0B",
    "color": "#0C2420",
    "background": "#F0F7F4",
    "fontFamily": "DM Sans"
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
      "max": 40,
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
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.body"
    }
  ],
  "name": "Jacquard Woven Logo",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "jacquard-weave-logo",
    "bundleSha256": "5a0d83223c1fcada86bcd5907bec6f87615571ca82b8f3ed7db546a08fdf1197",
    "sourceSnapshot": {
      "sha256": "22c3646f894c097d81b062c3f1a3835236d1899cdd1b233897adb47db79ad625",
      "files": 1995
    },
    "renderedAt": "2026-10-09T19:30:09.306Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/jacquard-weave-logo/16x9-paper.png",
        "sha256": "a23abdaa5cdfca708ef0572f28d5b8c13a92d3b52afe499029395b9d8b7f997b"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/jacquard-weave-logo/16x9-night.png",
        "sha256": "d3d03fb554c420834b5f0baa59c548401bf5823f2919974128e8af89aed17194"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/jacquard-weave-logo/16x9-color.png",
        "sha256": "0c9c91a65b5d2a1d2cdefbec3907b58c5f1060b34144be125403a51ff75ea13a"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/jacquard-weave-logo/9x16-paper.png",
        "sha256": "182e9bb01bc1d80357db05ea281e36bb7f8bf0ca008b1d0cc96cde354e6440fd"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/jacquard-weave-logo/9x16-night.png",
        "sha256": "2a22ffd13722fec828a8ffb2607a3a4ab2857d5c10cb2f5adfc178d51225b538"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/jacquard-weave-logo/9x16-color.png",
        "sha256": "aa56010bc3c057be6bf5294e749f763c3cd7765936326c1d43b9099579b3b8a4"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/jacquard-weave-logo/1x1-paper.png",
        "sha256": "f304e591be998ffd3c688b561b3e9269935a42f21e685be721bb91b45f0febf9"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/jacquard-weave-logo/1x1-night.png",
        "sha256": "e08de9374b0a194f96ceb03febe6cf8db76176ad1c3d41e806fa8e0e259d4d68"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/jacquard-weave-logo/1x1-color.png",
        "sha256": "f8915d58fcbc927e5ef56be1fdce61cd7ec1ab8ca27c79abe501e46af44c0196"
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
          "jacquard-weave-logo--16x9",
          "jacquard-weave-logo--9x16",
          "jacquard-weave-logo--1x1"
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
            "paperNight": 114.01836480034723,
            "paperColor": 36.495090060763886,
            "region": {
              "left": 173,
              "top": 117,
              "width": 1574,
              "height": 825
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 114,
            "paperColor": 36.374837239583336,
            "region": {
              "left": 97,
              "top": 218,
              "width": 886,
              "height": 1447
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 115.65692816840277,
            "paperColor": 36.79503038194444,
            "region": {
              "left": 97,
              "top": 117,
              "width": 886,
              "height": 825
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
            "occupancy": 0.8875138114659445,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8875138114659445,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8875138114659445,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8762311669781083,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8762311669781083,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8756256167590495,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.888140321286265,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.888140321286265,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.888140321286265,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 4.446506076388889,
        "frames": [
          21,
          145,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 155,
            "averageChannelDifference": 4.443142361111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/jacquard-weave-logo/16x9-duration-155-frame-18.png",
                "sha256": "39e88cff1f00ac5c09e747e9298dbd56c1d5c390c59719d4c87cdd5e002c846b",
                "alphaMass": 587520
              },
              {
                "frame": 145,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/jacquard-weave-logo/16x9-duration-155-frame-145.png",
                "sha256": "e5dc1d5ea85debafd218d8609cc70b23e33c94c0f98d71cbb22224c99f3a515b",
                "alphaMass": 587520
              },
              {
                "frame": 136,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/jacquard-weave-logo/16x9-duration-155-frame-136.png",
                "sha256": "90211d11fe7bbc43e03171664d5efdf6b3aca032b58ee82fdad735ef470df215",
                "alphaMass": 587520
              },
              {
                "frame": 154,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/jacquard-weave-logo/16x9-duration-155-frame-154.png",
                "sha256": "e5dc1d5ea85debafd218d8609cc70b23e33c94c0f98d71cbb22224c99f3a515b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 4.446506076388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 21,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/jacquard-weave-logo/16x9-duration-600-frame-21.png",
                "sha256": "2022562433a22a26127cb337c9f06964ec0e908d75df951be270aee16c17ead5",
                "alphaMass": 587520
              },
              {
                "frame": 145,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/jacquard-weave-logo/16x9-duration-600-frame-145.png",
                "sha256": "e5dc1d5ea85debafd218d8609cc70b23e33c94c0f98d71cbb22224c99f3a515b",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/jacquard-weave-logo/16x9-duration-600-frame-528.png",
                "sha256": "e5dc1d5ea85debafd218d8609cc70b23e33c94c0f98d71cbb22224c99f3a515b",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/jacquard-weave-logo/16x9-duration-600-frame-599.png",
                "sha256": "e5dc1d5ea85debafd218d8609cc70b23e33c94c0f98d71cbb22224c99f3a515b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 155,
            "averageChannelDifference": 4.981770833333333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/jacquard-weave-logo/9x16-duration-155-frame-18.png",
                "sha256": "ccd8004a6b3289aeb4c46a8f6484eb8296e6e680eebacb2d8ef5bbcf9e50139a",
                "alphaMass": 587520
              },
              {
                "frame": 145,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/jacquard-weave-logo/9x16-duration-155-frame-145.png",
                "sha256": "eafe21abf107f7b83bd932cd8391b6bcf0f7a9a2baffa384580a356e5ac1e00d",
                "alphaMass": 587520
              },
              {
                "frame": 136,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/jacquard-weave-logo/9x16-duration-155-frame-136.png",
                "sha256": "75fe25411df61f53fa984ee089652debece333c524aa21173b8a3a8b3222cfeb",
                "alphaMass": 587520
              },
              {
                "frame": 154,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/jacquard-weave-logo/9x16-duration-155-frame-154.png",
                "sha256": "eafe21abf107f7b83bd932cd8391b6bcf0f7a9a2baffa384580a356e5ac1e00d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 4.989583333333333,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 21,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/jacquard-weave-logo/9x16-duration-600-frame-21.png",
                "sha256": "aae4026c251d3388f03eb6baf02236d56f27b3575b7cb61e05b3ce7cc5a7ec57",
                "alphaMass": 587520
              },
              {
                "frame": 145,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/jacquard-weave-logo/9x16-duration-600-frame-145.png",
                "sha256": "eafe21abf107f7b83bd932cd8391b6bcf0f7a9a2baffa384580a356e5ac1e00d",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/jacquard-weave-logo/9x16-duration-600-frame-528.png",
                "sha256": "eafe21abf107f7b83bd932cd8391b6bcf0f7a9a2baffa384580a356e5ac1e00d",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/jacquard-weave-logo/9x16-duration-600-frame-599.png",
                "sha256": "eafe21abf107f7b83bd932cd8391b6bcf0f7a9a2baffa384580a356e5ac1e00d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 155,
            "averageChannelDifference": 4.697916666666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/jacquard-weave-logo/1x1-duration-155-frame-18.png",
                "sha256": "18e1a3f6de53c171d7593759fffe0c5a31497a8e423ff9f5222c04a4e75f1b9b",
                "alphaMass": 587520
              },
              {
                "frame": 145,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/jacquard-weave-logo/1x1-duration-155-frame-145.png",
                "sha256": "8fabe4c3827608904039ec18178d29aba664b1adaabfc5fc7fc6e25885bf13e9",
                "alphaMass": 587520
              },
              {
                "frame": 136,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/jacquard-weave-logo/1x1-duration-155-frame-136.png",
                "sha256": "40983380f296625dcefe9315d1e75ed0952db2ea0aa75a338de7fd6671c81e13",
                "alphaMass": 587520
              },
              {
                "frame": 154,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/jacquard-weave-logo/1x1-duration-155-frame-154.png",
                "sha256": "8fabe4c3827608904039ec18178d29aba664b1adaabfc5fc7fc6e25885bf13e9",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 4.702799479166667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 21,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/jacquard-weave-logo/1x1-duration-600-frame-21.png",
                "sha256": "cd6011d3ed380b57c86a33884baf273f892a4f7da885956386743c9d1c4a1c4f",
                "alphaMass": 587520
              },
              {
                "frame": 145,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/jacquard-weave-logo/1x1-duration-600-frame-145.png",
                "sha256": "8fabe4c3827608904039ec18178d29aba664b1adaabfc5fc7fc6e25885bf13e9",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/jacquard-weave-logo/1x1-duration-600-frame-528.png",
                "sha256": "8fabe4c3827608904039ec18178d29aba664b1adaabfc5fc7fc6e25885bf13e9",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T191036Z/gates/jacquard-weave-logo/1x1-duration-600-frame-599.png",
                "sha256": "8fabe4c3827608904039ec18178d29aba664b1adaabfc5fc7fc6e25885bf13e9",
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
        "note": "1. TitleMatches: The subject is a logo-like graphic composed of colored woven rectangles, supported by detailed woven background and structure. Motion samples (images 2–4) clearly animate the weaving and intersection, visually supporting the 'Jacquard Woven Logo' concept in both construction and effect (elements rise, move, and interlock like a jacquard weave). \n2. noBakedHeading: The only notable text ('Woven together') matches named-slot content, and appears below the design as a caption. There are no visible decorative block-titles, labels or unexplained headings baked into the artwork itself in any state or rebrand.\n3. BrandAdherence: Images 5–7 show the complete poster design under three different palette settings (light, dark, colored), with all type and graphic elements adapted for color and legibility. Each palette clearly makes use of the supplied colors and does not fix unexplained block colors; the woven texture, foreground logo, and caption remain fully visible and readable.\n4. LanguageAdherence: Across all images and states, the material is rendered as paper-like with rules and margins, static camera, and serif display/body text as described on the language card. Woven marks and fine rules respect paper/meticulous numerals. There is no glow, gradient, or shadow; every sample obeys the specified material and type guidance, and visual roles remain consistent under rebranding."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 36,
        "compared": 36,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "5a0d83223c1fcada86bcd5907bec6f87615571ca82b8f3ed7db546a08fdf1197",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T19:39:06.902Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "jacquard-weave-logo",
      "vsPositive": 0.7916666666666666,
      "vsNegative": 0.9583333333333334,
      "fakeVotes": 0,
      "perModel": {
        "claude": {
          "vsPositive": 1,
          "vsNegative": 1
        },
        "gpt": {
          "vsPositive": 0.75,
          "vsNegative": 1
        },
        "gemini": {
          "vsPositive": 0.625,
          "vsNegative": 0.875
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "70c0576df64a599dac562a74d48169ffb0d80cfbf94e6458aa80b728474bd019",
      "bundleSha256": "5a0d83223c1fcada86bcd5907bec6f87615571ca82b8f3ed7db546a08fdf1197",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/jacquard-weave-logo/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/jacquard-weave-logo/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/jacquard-weave-logo/16x9/detail.mp4",
      "bg": "#f0f7f4",
      "posterFrame": 145,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "2338af3b6cdb9401aa5f9c7b45f4891a75a35284de13c3c64ce6088303dca1e7",
        "loop": "2d2c58356feb8cc54234bdb4067a2757bb4217552a4877cecade7b00ac46dad6",
        "detail": "b9b98786af3916a5a128208ffa71c6a3720404e76b162b10b0d9cf2eb6a9632c"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/jacquard-weave-logo/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/jacquard-weave-logo/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/jacquard-weave-logo/9x16/detail.mp4",
      "bg": "#f0f7f4",
      "posterFrame": 145,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "009f78b91e03eecf0b2b1b579abde70b591b835f038b775a0806951d94246b62",
        "loop": "420ab0c86231eb5e626770c1bcbf9d2770748c7ec8cff4eed63edfcdfe5857e8",
        "detail": "e79b68d659aef01927d5e2eddde839b379b2f91d083af981d5bd52c50f652d88"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/jacquard-weave-logo/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/jacquard-weave-logo/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/jacquard-weave-logo/1x1/detail.mp4",
      "bg": "#f0f7f4",
      "posterFrame": 145,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "4b2ce07d7ce872d3df0a1eb98ccf4f3bdfe40486d44050c4724f13a13128aa68",
        "loop": "ba41a9f5dc70e830990dd7e598cb98384f2e7dd2fb91804047fbca7b4ce9e40e",
        "detail": "293de4e3b203a54ab79b2b51a2c16e373258d1ca9bbd5c320ca624d7fe0a057c"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/5a0d83223c1fcada86bcd5907bec6f87615571ca82b8f3ed7db546a08fdf1197/index.mjs",
    "sha256": "5a0d83223c1fcada86bcd5907bec6f87615571ca82b8f3ed7db546a08fdf1197",
    "bytes": 161426,
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
    "at": "2026-10-09T19:56:56.382Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
