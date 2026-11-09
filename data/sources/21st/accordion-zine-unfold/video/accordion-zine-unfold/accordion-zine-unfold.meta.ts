// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/craft",
  "job": "product-ui",
  "language": "photo-collage",
  "mechanic": [
    "fold"
  ],
  "tags": [
    "fold",
    "zine",
    "photography",
    "accordion",
    "paper"
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
      "key": "screenshot",
      "type": "image",
      "role": "screenshot"
    },
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
    "sourceUrl": "21st first-party (Accordion Photo Zine, 2026-10-09)"
  },
  "defaults": {
    "primary": "#BE4932",
    "secondary": "#BFAF8F",
    "color": "#252A25",
    "background": "#F4F1E8",
    "fontFamily": "Playfair Display",
    "seed": 31,
    "screenshot": "",
    "text": "Stories worth unfolding"
  },
  "fields": [
    {
      "key": "screenshot",
      "label": "Screenshot",
      "type": "asset",
      "role": "screenshot"
    },
    {
      "key": "text",
      "label": "Text",
      "type": "text",
      "max": 35,
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
  "name": "Accordion Screenshot Fold",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "accordion-zine-unfold",
    "bundleSha256": "d57c98153b8e9dedf336b312bbd1f9604e7f3a950e212097e4f171ddb56bb626",
    "sourceSnapshot": {
      "sha256": "3c8f9beca2d21af5776a406cc9ca7e375f382a45fef2346630c17a4221a87761",
      "files": 2046
    },
    "renderedAt": "2026-10-09T20:57:53.226Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/accordion-zine-unfold/16x9-paper.png",
        "sha256": "4d023e30475a22973b982277de6b28c0f29e01d48d665f67aa5eabf92c51ef3f"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/accordion-zine-unfold/16x9-night.png",
        "sha256": "74b066118649c4081cb7e01d01f6cac95b004c0b03346f0aedb48be9b7f24784"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/accordion-zine-unfold/16x9-color.png",
        "sha256": "bea7cc2698f20e230db1f8a5d54e669ecf293e43f9813688553681b3a3fb9f25"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/accordion-zine-unfold/9x16-paper.png",
        "sha256": "678426639488dc0e89f5378f5f45a51434524b51abde85fb93f52fc067d28b73"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/accordion-zine-unfold/9x16-night.png",
        "sha256": "603c22741180f88df74c317e30f284ac86fce65717b53370b50f58b6e95639cd"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/accordion-zine-unfold/9x16-color.png",
        "sha256": "8b78b830b00c807b2bd128d46aff34b58c3edd3eb24e890554c026fed83dbe53"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/accordion-zine-unfold/1x1-paper.png",
        "sha256": "fd91d70d382bb17e5029e281ac800b9d81bfa2ae13b08307ef28b8403ca5630f"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/accordion-zine-unfold/1x1-night.png",
        "sha256": "9251c7a2610a72012f19e23d34be90be247d8539ceb4eda483db1582dc74d9d9"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/accordion-zine-unfold/1x1-color.png",
        "sha256": "56a27f4e445cbd1e11f310f48e147947b08a3cb9015902b662f2d2da160b6ca8"
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
          "accordion-zine-unfold--16x9",
          "accordion-zine-unfold--9x16",
          "accordion-zine-unfold--1x1"
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
            "paperNight": 30.892198350694443,
            "paperColor": 9.7978515625,
            "region": {
              "left": 141,
              "top": 162,
              "width": 1661,
              "height": 866
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 29.582872178819443,
            "paperColor": 10.9150390625,
            "region": {
              "left": 94,
              "top": 211,
              "width": 914,
              "height": 1684
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 25.593098958333332,
            "paperColor": 9.81076388888889,
            "region": {
              "left": 79,
              "top": 162,
              "width": 934,
              "height": 828
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
            "occupancy": 0.9831141979682821,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9797084905850202,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9524628315189246,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0519733227653203,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0500992610264273,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.031983330883794,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.939660843761373,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9362562754868753,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9169637219313882,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 15.04416232638889,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 15.079752604166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/accordion-zine-unfold/16x9-duration-150-frame-18.png",
                "sha256": "9e7e1a4f91d3482004575fae5bb26f30f807728b7b759219c32e3ddaaaba898d",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/accordion-zine-unfold/16x9-duration-150-frame-135.png",
                "sha256": "45467c0275c5b358dc1b93f34096d1396bbb723be573c475e54fb6a0f35fe8d9",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/accordion-zine-unfold/16x9-duration-150-frame-132.png",
                "sha256": "45467c0275c5b358dc1b93f34096d1396bbb723be573c475e54fb6a0f35fe8d9",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/accordion-zine-unfold/16x9-duration-150-frame-149.png",
                "sha256": "45467c0275c5b358dc1b93f34096d1396bbb723be573c475e54fb6a0f35fe8d9",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 15.04416232638889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/accordion-zine-unfold/16x9-duration-600-frame-20.png",
                "sha256": "18a55eba9dd5e2707978130d7bd96d0b02c55e593e616cc612fb14c8bafa5dfb",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/accordion-zine-unfold/16x9-duration-600-frame-135.png",
                "sha256": "45467c0275c5b358dc1b93f34096d1396bbb723be573c475e54fb6a0f35fe8d9",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/accordion-zine-unfold/16x9-duration-600-frame-528.png",
                "sha256": "45467c0275c5b358dc1b93f34096d1396bbb723be573c475e54fb6a0f35fe8d9",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/accordion-zine-unfold/16x9-duration-600-frame-599.png",
                "sha256": "45467c0275c5b358dc1b93f34096d1396bbb723be573c475e54fb6a0f35fe8d9",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 13.13693576388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/accordion-zine-unfold/9x16-duration-150-frame-18.png",
                "sha256": "48a5f329784d9f73b28693855b1214b598c0122258a2aeae88c4eaf43c9831a0",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/accordion-zine-unfold/9x16-duration-150-frame-135.png",
                "sha256": "6ffb150ba5f2ad56e3ceda6273e84a2422b79592958ca8767b8deeb2b4f8a95d",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/accordion-zine-unfold/9x16-duration-150-frame-132.png",
                "sha256": "6ffb150ba5f2ad56e3ceda6273e84a2422b79592958ca8767b8deeb2b4f8a95d",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/accordion-zine-unfold/9x16-duration-150-frame-149.png",
                "sha256": "6ffb150ba5f2ad56e3ceda6273e84a2422b79592958ca8767b8deeb2b4f8a95d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 13.1865234375,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/accordion-zine-unfold/9x16-duration-600-frame-20.png",
                "sha256": "64eb90a4e0c595b1d92dffb7e28f52de1e1576537f9ac7da530637a4f0353291",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/accordion-zine-unfold/9x16-duration-600-frame-135.png",
                "sha256": "6ffb150ba5f2ad56e3ceda6273e84a2422b79592958ca8767b8deeb2b4f8a95d",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/accordion-zine-unfold/9x16-duration-600-frame-528.png",
                "sha256": "6ffb150ba5f2ad56e3ceda6273e84a2422b79592958ca8767b8deeb2b4f8a95d",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/accordion-zine-unfold/9x16-duration-600-frame-599.png",
                "sha256": "6ffb150ba5f2ad56e3ceda6273e84a2422b79592958ca8767b8deeb2b4f8a95d",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 13.959852430555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/accordion-zine-unfold/1x1-duration-150-frame-18.png",
                "sha256": "9df494ce5df68165529b1dd937c4a3d33d558fd0aef3da5e935e71b605206203",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/accordion-zine-unfold/1x1-duration-150-frame-135.png",
                "sha256": "1e6ce5c448c43c9a8646cfb27643356d65f18fca6aee00a52f73fd04440599da",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/accordion-zine-unfold/1x1-duration-150-frame-132.png",
                "sha256": "1e6ce5c448c43c9a8646cfb27643356d65f18fca6aee00a52f73fd04440599da",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/accordion-zine-unfold/1x1-duration-150-frame-149.png",
                "sha256": "1e6ce5c448c43c9a8646cfb27643356d65f18fca6aee00a52f73fd04440599da",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 13.957573784722221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/accordion-zine-unfold/1x1-duration-600-frame-20.png",
                "sha256": "cdac4e0c1280ce99b720b51924d52f99bbdba7c90f2eefbbe47b793994f6c7e2",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/accordion-zine-unfold/1x1-duration-600-frame-135.png",
                "sha256": "1e6ce5c448c43c9a8646cfb27643356d65f18fca6aee00a52f73fd04440599da",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/accordion-zine-unfold/1x1-duration-600-frame-528.png",
                "sha256": "1e6ce5c448c43c9a8646cfb27643356d65f18fca6aee00a52f73fd04440599da",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T205437Z/gates/accordion-zine-unfold/1x1-duration-600-frame-599.png",
                "sha256": "1e6ce5c448c43c9a8646cfb27643356d65f18fca6aee00a52f73fd04440599da",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "product-ui",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "TitleMatches: The subject visually and structurally supports 'Accordion Screenshot Fold.' The images show a five-panel rectangle with design elements resembling interface screenshots; in the motion sequence, these panels are shown folded and fanned out as an accordion structure, then returning to flat, consistent with the accordion fold concept. \n\nNoBakedHeading: The only large text is the heading 'Stories worth unfolding,' which matches the editable named-slot content. There are no decorative or unexplained headings elsewhere, and the text is not baked in as a non-editable or decorative block element.\n\nBrandAdherence: Images 5 through 7 show the poster under three distinctly different palette treatments—the dividers and text colors shift to match the palette definitions as primary (frame), text, and background. Each remains legible and the shape/material are preserved. No unexplained static block colors persist across the variants.\n\nLanguageAdherence: Across both static, motion, and rebrand images, the material is consistent with the supplied language card: the use of soft shadow, the matte backdrop, and modular layering evoke \"matte board\" and \"contact print\". The type roles and style (display serif/sans display, tabular numerals usage in illustrative elements if present) are kept consistent. Motion in the chronology aligns with 'reveal, stack, crop' and avoids prohibited personas or product imagery."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 75,
        "compared": 75,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "d57c98153b8e9dedf336b312bbd1f9604e7f3a950e212097e4f171ddb56bb626",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T21:11:12.683Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "accordion-zine-unfold",
      "vsPositive": 0.9583333333333334,
      "vsNegative": 0.9583333333333334,
      "fakeVotes": 0.041666666666666664,
      "perModel": {
        "claude": {
          "vsPositive": 0.875,
          "vsNegative": 0.875
        },
        "gpt": {
          "vsPositive": 1,
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
      "framesSha256": "c12e11a1a3d669ab24ef3a4f4cdaf87022aac68582ec78155f8e2a000f2ef43e",
      "bundleSha256": "d57c98153b8e9dedf336b312bbd1f9604e7f3a950e212097e4f171ddb56bb626",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/accordion-zine-unfold/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/accordion-zine-unfold/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/accordion-zine-unfold/16x9/detail.mp4",
      "bg": "#f4f1e8",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "4c1eff9a5f088c94ef740f674e19816dacfbbee333f412d75dd80611c336bb81",
        "loop": "4e234aec01c2b2fd0ba45100279e17f4c7e2c7108e7850585f5e61005bc92c35",
        "detail": "b234b604c3632e9aea25f303749518e5f39dcef90060b90520e3a35be39b5ef3"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/accordion-zine-unfold/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/accordion-zine-unfold/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/accordion-zine-unfold/9x16/detail.mp4",
      "bg": "#f4f1e8",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "647839ee55352b724b3d452b21ecfb109326f8dae3e78ea93cb6d5974deac055",
        "loop": "4b80c149f4f698a01242724a5348b51caeb556ab45a4aa31a528cd962e381895",
        "detail": "f5004cad8ec4fc31a0f392242acdf84929e9725503e72163137ce030c7c3680d"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/accordion-zine-unfold/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/accordion-zine-unfold/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/accordion-zine-unfold/1x1/detail.mp4",
      "bg": "#f4f1e8",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "97ace9a15a1c41fc21d57470798253694be3606a229992e993297d1834edb111",
        "loop": "516ab75d9a78a2e929edecaeb51c01550b505de84eac7cb22e2f122d1aaa09fb",
        "detail": "6af67bfc11cb07790734f548ff1831b4b73e4c7cb995cb27ddc550e7469ef02c"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/d57c98153b8e9dedf336b312bbd1f9604e7f3a950e212097e4f171ddb56bb626/index.mjs",
    "sha256": "d57c98153b8e9dedf336b312bbd1f9604e7f3a950e212097e4f171ddb56bb626",
    "bytes": 164316,
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
    "at": "2026-10-09T21:18:49.090Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
