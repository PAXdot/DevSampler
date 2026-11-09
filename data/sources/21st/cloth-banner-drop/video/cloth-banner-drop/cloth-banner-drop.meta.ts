// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/craft",
  "job": "titles",
  "language": "kinetic-poster",
  "mechanic": [
    "drop"
  ],
  "tags": [
    "drop",
    "fabric",
    "banner",
    "cloth",
    "typography"
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
      "key": "text",
      "type": "text",
      "role": "heading"
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
    "sourceUrl": "21st first-party (Falling Fabric Headline, 2026-10-09)"
  },
  "defaults": {
    "primary": "#D5442F",
    "secondary": "#E4C474",
    "color": "#F5EEE0",
    "background": "#202927",
    "fontFamily": "Archivo Black",
    "seed": 31,
    "text": "LET IDEAS FLY"
  },
  "fields": [
    {
      "key": "text",
      "label": "Text",
      "type": "text",
      "max": 36,
      "role": "heading"
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
  "name": "Falling Fabric Headline",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "cloth-banner-drop",
    "bundleSha256": "60df0231cb01997f62e6aa8919e86a00e5319dc7aadda0e04532f7d166b2bffb",
    "sourceSnapshot": {
      "sha256": "86e16398ba23389e2567ea0c6d2d2c7d9ef47a18365417f190bac9aff219abb2",
      "files": 2070
    },
    "renderedAt": "2026-10-09T21:08:26.587Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/cloth-banner-drop/16x9-paper.png",
        "sha256": "f78de8d2be6acfbf92ad9ada49c37196e4918dadb8f7da610015b5e0d659b386"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/cloth-banner-drop/16x9-night.png",
        "sha256": "58df3ee4cfaa5fb52fa872158f24005f9c3744ee69d837853296bc5c564005b2"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/cloth-banner-drop/16x9-color.png",
        "sha256": "c21f472eea74d535b3d89c2166f8caf42661c10aa9fc6669f8beac9c35992b6d"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/cloth-banner-drop/9x16-paper.png",
        "sha256": "5de1b89f35cbf5f53edf7f3787402ca09b93ef08cc54a400252bb0ca11179ddc"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/cloth-banner-drop/9x16-night.png",
        "sha256": "945ee28ca46188d94b938cc6a2ac31451e012736073ea21eb4963eb9a59dda59"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/cloth-banner-drop/9x16-color.png",
        "sha256": "622c28466c55db81430bd599fb93279c63369ae897a140a1c44837423784281e"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/cloth-banner-drop/1x1-paper.png",
        "sha256": "e23544401afac1dfca78a14cc1ce8353bc6f3a6e2d713042f17ebfddfb90ecb1"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/cloth-banner-drop/1x1-night.png",
        "sha256": "d92f1b90ed9c4f5eedfeb9aaa178e36ba2f62d57fb14bf5cffa706a7ff3c0535"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/cloth-banner-drop/1x1-color.png",
        "sha256": "aadf32b13e99b61161601ddd045b55c95002daaacd74daacb91fcc34190c611f"
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
          "cloth-banner-drop--16x9",
          "cloth-banner-drop--9x16",
          "cloth-banner-drop--1x1"
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
            "paperNight": 21.327772352430557,
            "paperColor": 34.67857530381944,
            "region": {
              "left": 154,
              "top": 130,
              "width": 1612,
              "height": 756
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 27.241048177083332,
            "paperColor": 36.67784288194444,
            "region": {
              "left": 86,
              "top": 230,
              "width": 908,
              "height": 1441
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 16.767333984375,
            "paperColor": 32.543185763888886,
            "region": {
              "left": 86,
              "top": 130,
              "width": 908,
              "height": 756
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
            "occupancy": 0.8329199735449737,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8329199735449737,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8329199735449737,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8942650812897177,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8942650812897177,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8942650812897177,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8340681951793064,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8340681951793064,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8340681951793064,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 36.662760416666664,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 36.662868923611114,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/cloth-banner-drop/16x9-duration-150-frame-18.png",
                "sha256": "8e8479674f04054cd01e51f998d30735e50f57af5a32bcdf43cde6418b93af82",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/cloth-banner-drop/16x9-duration-150-frame-135.png",
                "sha256": "be7b093c047f9072dd7b1c3a2e2cb8607b58c8b159f3c72cf69afdfc9452b0f5",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/cloth-banner-drop/16x9-duration-150-frame-132.png",
                "sha256": "46949b49228a9d103cc0730db9cb9b25e6eaa818ed42b8bea3bcece9b5ce9254",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/cloth-banner-drop/16x9-duration-150-frame-149.png",
                "sha256": "5c19f3a72004e08273991626eb210f6f229e7240af5f2911d75b68c2bbce655d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 36.662760416666664,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/cloth-banner-drop/16x9-duration-600-frame-20.png",
                "sha256": "8e8479674f04054cd01e51f998d30735e50f57af5a32bcdf43cde6418b93af82",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/cloth-banner-drop/16x9-duration-600-frame-135.png",
                "sha256": "73426ebca79734d6de02c8fdb88aafd7ca8c1c39b2564627c550a99c604621f9",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/cloth-banner-drop/16x9-duration-600-frame-528.png",
                "sha256": "c877cbf4c179d619e7e77c92019c242b2a0e2068be391ca684abf12f74859543",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/cloth-banner-drop/16x9-duration-600-frame-599.png",
                "sha256": "946f298dbd78794ef24e6725bd5f6623be90e934c90830d1529d02e82473ddaa",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 41.59906684027778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/cloth-banner-drop/9x16-duration-150-frame-18.png",
                "sha256": "d412f38626ff939c6374e03a8d2ef1d83b46fcf8cef792019e026687a1458ec5",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/cloth-banner-drop/9x16-duration-150-frame-135.png",
                "sha256": "4d205c314065bbb2514e01dacdd334c5c3ca55e5c941db1b104e2a6901e58736",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/cloth-banner-drop/9x16-duration-150-frame-132.png",
                "sha256": "ac7e1b754794e6251398f5863301f2a9b0d3d25dcb48f85fa65b065d9bc88278",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/cloth-banner-drop/9x16-duration-150-frame-149.png",
                "sha256": "acab4e902c5d0456fd5a3bfdf365831f5d46a6c127f6c97f20ccba250f2630f8",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 41.59906684027778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/cloth-banner-drop/9x16-duration-600-frame-20.png",
                "sha256": "d412f38626ff939c6374e03a8d2ef1d83b46fcf8cef792019e026687a1458ec5",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/cloth-banner-drop/9x16-duration-600-frame-135.png",
                "sha256": "993eaa4b34cf66e0e4ef40b7d182ea50bbdc36d92f0ecaee84ad46ae47983adb",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/cloth-banner-drop/9x16-duration-600-frame-528.png",
                "sha256": "2769dc86a5b114facc0578c57d637a659f09bc38998e41e155863f1237c6d088",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/cloth-banner-drop/9x16-duration-600-frame-599.png",
                "sha256": "9dd996eddd3183e3b6e679b38e9cb498dd3d1ddf451c72d8ef76bea6430176bf",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 35.15581597222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/cloth-banner-drop/1x1-duration-150-frame-18.png",
                "sha256": "aabf1839652e56f57df6ab4112885bb227e0c60d9332b516dea99a8f72f45270",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/cloth-banner-drop/1x1-duration-150-frame-135.png",
                "sha256": "82f51a59d36080e190346285714465cba78df334df8d0ef06125b947fbdb8635",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/cloth-banner-drop/1x1-duration-150-frame-132.png",
                "sha256": "deb70db566dbe12b4ca6ed06b9bf55a788d6472f9d9121aca5b95b42181a720c",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/cloth-banner-drop/1x1-duration-150-frame-149.png",
                "sha256": "82f51a59d36080e190346285714465cba78df334df8d0ef06125b947fbdb8635",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 35.15581597222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/cloth-banner-drop/1x1-duration-600-frame-20.png",
                "sha256": "aabf1839652e56f57df6ab4112885bb227e0c60d9332b516dea99a8f72f45270",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/cloth-banner-drop/1x1-duration-600-frame-135.png",
                "sha256": "736bf6b1629fb89ac7ab8803e2e9ffd990517e432e1de3e8cc6b4dab30000365",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/cloth-banner-drop/1x1-duration-600-frame-528.png",
                "sha256": "736bf6b1629fb89ac7ab8803e2e9ffd990517e432e1de3e8cc6b4dab30000365",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T210542Z/gates/cloth-banner-drop/1x1-duration-600-frame-599.png",
                "sha256": "736bf6b1629fb89ac7ab8803e2e9ffd990517e432e1de3e8cc6b4dab30000365",
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
        "note": "1) TitleMatches: The claimed title is 'Falling Fabric Headline' and the content is 'LET IDEAS FLY.' The first image shows this phrase in a bold, simple sans-serif across a flat field, consistent with a static poster. The chronological motion sample (images 2-4) includes a fully blank frame, followed by the headline with a distorted, wavy, fabric-like mesh deformation, and finally a return to the original static appearance. This transformation strongly supports the idea of 'falling fabric' as the headline visually 'waves' or 'falls' as fabric does, then resets. Therefore, the subject, structure, and motion genuinely reflect the title.\n\n2) noBakedHeading: There are no decorative block titles, categories, or language labels baked into the poster composition. All visible type is legitimate editable content or image subject. There is no unexplained heading or overlay.\n\n3) brandAdherence: The last three images (images 5-7) show the same design rendered in three distinct supplied palettes. Each uses the provided brand colors for key roles (main background, text, and poster area), and the heading remains highly legible in all. There are no unexplained fixed colors. Overall shapes and letterforms persist, and the palette change is consistent with brand adaptation. No visual evidence suggests dropped roles or artifacts persisting through rebrands.\n\n4) languageAdherence: The design correctly implements the language card requirements: oversized display type, flat color backgrounds with no faux-depth or ambient effects. The sans-serif is used for display, with no serif intervention. Motion is carried by the type and mask (the wavy deformation), not a camera move, and the palette objects (background, type) remain visually consistent across brand variants. No frosted glass, browser chrome, or floating cards are present. The graphical approach fits 'cut masks and compressed graphic shapes,' and numerical content (if any) is rendered in a tabular fashion. Language card supplied, and adherence is verified visually."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 70,
        "compared": 70,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "60df0231cb01997f62e6aa8919e86a00e5319dc7aadda0e04532f7d166b2bffb",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T21:26:49.101Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "cloth-banner-drop",
      "vsPositive": 0.9166666666666666,
      "vsNegative": 1,
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
          "vsPositive": 0.75,
          "vsNegative": 1
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "fe0c50b1782d7440016574403cd7daa0c65c755e7c963d35778c1ff65711bcbd",
      "bundleSha256": "60df0231cb01997f62e6aa8919e86a00e5319dc7aadda0e04532f7d166b2bffb",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/cloth-banner-drop/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cloth-banner-drop/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cloth-banner-drop/16x9/detail.mp4",
      "bg": "#202927",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "7555c42af177c4543469041c9536383cfc01df65c5edaf232185c7bf362906ed",
        "loop": "122b09a972b2c109b7405cfa5e007e376d1a610d4aef606f42779592cdb61770",
        "detail": "16eb421d86301f2688a9e77118c5ee0ade42412e24e3b81aab979db7f17461b5"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/cloth-banner-drop/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cloth-banner-drop/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cloth-banner-drop/9x16/detail.mp4",
      "bg": "#202927",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "428011067f5c7fb2ae2bcfbfd3c85a8379bb8cb01236ea628986b89d1d8a6d45",
        "loop": "44953817e2103bdc75f43503518bc03ebc32990b7abf51518d2af07191a53978",
        "detail": "ad7cfba399a31cdfcbb78b3d1893143555e1b31e751df5dae87b397fab1bf4a5"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/cloth-banner-drop/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/cloth-banner-drop/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/cloth-banner-drop/1x1/detail.mp4",
      "bg": "#202927",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "06a410bc48da312c6c88325b5031a3ad7b5a78c40bf1302ce27becae35416b5b",
        "loop": "0a8b82999da1e0709d4ff34431a2b2aec81b69695921336720970b938b80b64c",
        "detail": "92cfb8c9992d8dd17f8f123f1a18a3fe81e08ee90b3181f88756677ad1dd3a46"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/60df0231cb01997f62e6aa8919e86a00e5319dc7aadda0e04532f7d166b2bffb/index.mjs",
    "sha256": "60df0231cb01997f62e6aa8919e86a00e5319dc7aadda0e04532f7d166b2bffb",
    "bytes": 161823,
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
    "at": "2026-10-09T21:40:56.977Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
