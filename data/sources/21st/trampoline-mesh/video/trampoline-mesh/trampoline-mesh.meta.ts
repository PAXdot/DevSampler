// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "logos/craft",
  "job": "logos",
  "language": "isometric",
  "mechanic": [
    "mesh"
  ],
  "tags": [
    "mesh",
    "bounce",
    "elastic",
    "landing"
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
    "sourceUrl": "21st first-party (Elastic Mesh Logo Landing, 2026-10-09)"
  },
  "defaults": {
    "primary": "#B94A31",
    "secondary": "#C5A25C",
    "color": "#27372E",
    "background": "#F3EFE5",
    "fontFamily": "DM Sans",
    "seed": 31,
    "logo": "",
    "caption": "Make a lasting impression"
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
  "name": "Elastic Mesh Logo Landing",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "trampoline-mesh",
    "bundleSha256": "3352282b4447b46154a676f4165325f26da0a9eab7dbc28f4d5f8977a7bbb8ab",
    "sourceSnapshot": {
      "sha256": "3672d7f9ac3eaa3d3710ed2a8f5eebbd7346940163538cd029a0064cde980765",
      "files": 2172
    },
    "renderedAt": "2026-10-09T22:44:21.191Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/trampoline-mesh/16x9-paper.png",
        "sha256": "b0972c7616d3af320ff59f516440930b2b3b3bfa555d99f425e8c049fe4a595b"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/trampoline-mesh/16x9-night.png",
        "sha256": "ecb1b28bd4e7e1f0e3defc1e4ee02dd5cab6e0458f4f0f9e2a3c14db40c4c321"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/trampoline-mesh/16x9-color.png",
        "sha256": "383a4356c3163387de4254bfe90572e6f182c3790a773e7c3366c0341949bc4d"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/trampoline-mesh/9x16-paper.png",
        "sha256": "de90834b5fbb2e1f889bdbaefc2ed8400e662102910e32833082a6df3250afe9"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/trampoline-mesh/9x16-night.png",
        "sha256": "a6d40de588b149c7890141ef7f8735934afc268643d4f284935e23c0e5c3bb60"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/trampoline-mesh/9x16-color.png",
        "sha256": "e787b89543344b554ea28705a7fd81e1adfd02f51289954dae4dd36b8b8494de"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/trampoline-mesh/1x1-paper.png",
        "sha256": "a8a368966bb100b545e98bfbbd0464c9a0cab11158f6d9f16c7b1e0c3d708878"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/trampoline-mesh/1x1-night.png",
        "sha256": "4abc03a37915aec5d28f8081b03614189e867c9761919d77a474b4f0192614ff"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/trampoline-mesh/1x1-color.png",
        "sha256": "9d7ef5ced971be8129fcfa70d0dc98a2c33b547d13011dd7ddf5dc049e334745"
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
          "trampoline-mesh--16x9",
          "trampoline-mesh--9x16",
          "trampoline-mesh--1x1"
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
            "paperNight": 32.416422526041664,
            "paperColor": 17.314534505208332,
            "region": {
              "left": 82,
              "top": 345,
              "width": 1759,
              "height": 640
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 37.245930989583336,
            "paperColor": 19.17523871527778,
            "region": {
              "left": 43,
              "top": 811,
              "width": 994,
              "height": 1046
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 34.526041666666664,
            "paperColor": 16.846327039930557,
            "region": {
              "left": 43,
              "top": 345,
              "width": 994,
              "height": 640
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
            "occupancy": 0.7694178494443047,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7694178494443047,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7561934801569806,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7106152324612974,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.709256503527337,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6243359451548111,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7729657935419254,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7729657935419254,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.7596804439654236,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 2.898654513888889,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 3.6187065972222223,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/trampoline-mesh/16x9-duration-150-frame-18.png",
                "sha256": "944594244416af863c90c2f155d1741eeceee12073fb4e5f6d68dec002acf101",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/trampoline-mesh/16x9-duration-150-frame-135.png",
                "sha256": "96fdf385f61ec760b0ba92e63f9ba9f60c1fe030de74f6f69d616aff2768c190",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/trampoline-mesh/16x9-duration-150-frame-132.png",
                "sha256": "2df4e52c553ec2a8a65f31f5d349670540054f43be7fcffebe63960a09a4a171",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/trampoline-mesh/16x9-duration-150-frame-149.png",
                "sha256": "96fdf385f61ec760b0ba92e63f9ba9f60c1fe030de74f6f69d616aff2768c190",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 2.898654513888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/trampoline-mesh/16x9-duration-600-frame-20.png",
                "sha256": "3b077a3fa6045b1398b24db81831e5d18d8276a3a7c806ebaca27b693280a4ca",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/trampoline-mesh/16x9-duration-600-frame-135.png",
                "sha256": "96fdf385f61ec760b0ba92e63f9ba9f60c1fe030de74f6f69d616aff2768c190",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/trampoline-mesh/16x9-duration-600-frame-528.png",
                "sha256": "96fdf385f61ec760b0ba92e63f9ba9f60c1fe030de74f6f69d616aff2768c190",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/trampoline-mesh/16x9-duration-600-frame-599.png",
                "sha256": "96fdf385f61ec760b0ba92e63f9ba9f60c1fe030de74f6f69d616aff2768c190",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 5.743381076388889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/trampoline-mesh/9x16-duration-150-frame-18.png",
                "sha256": "f634505850852d1b47d0281a7d9cb54e230852b4c63313e86993123a3179463a",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/trampoline-mesh/9x16-duration-150-frame-135.png",
                "sha256": "8e7e244bbb583195be94b0b300037b84024a7848cb76e2c518a766ae5d7d756c",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/trampoline-mesh/9x16-duration-150-frame-132.png",
                "sha256": "c49b503cd7f5a5975f3c6942c9624052426b210ccd02e3d99f7b259abefa5481",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/trampoline-mesh/9x16-duration-150-frame-149.png",
                "sha256": "8e7e244bbb583195be94b0b300037b84024a7848cb76e2c518a766ae5d7d756c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 5.203016493055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/trampoline-mesh/9x16-duration-600-frame-20.png",
                "sha256": "947bff52f91b580f872d593a1a59d3c47d5913eaa695112d63dced6abec10927",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/trampoline-mesh/9x16-duration-600-frame-135.png",
                "sha256": "8e7e244bbb583195be94b0b300037b84024a7848cb76e2c518a766ae5d7d756c",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/trampoline-mesh/9x16-duration-600-frame-528.png",
                "sha256": "8e7e244bbb583195be94b0b300037b84024a7848cb76e2c518a766ae5d7d756c",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/trampoline-mesh/9x16-duration-600-frame-599.png",
                "sha256": "8e7e244bbb583195be94b0b300037b84024a7848cb76e2c518a766ae5d7d756c",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 6.345811631944445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/trampoline-mesh/1x1-duration-150-frame-18.png",
                "sha256": "307ff53ba4c0a42251455ed098d4f8f9eb3df6b927f238e4406cf3312377a666",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/trampoline-mesh/1x1-duration-150-frame-135.png",
                "sha256": "7f08866c6e3066f4eb196b0cdfd9575ea6d90a9c33df1a0b6a75bc8790b5e2a2",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/trampoline-mesh/1x1-duration-150-frame-132.png",
                "sha256": "6b4f29388110f815e6b1370044f023cdd90bff95a0c39f733f091fdc01dc10fe",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/trampoline-mesh/1x1-duration-150-frame-149.png",
                "sha256": "7f08866c6e3066f4eb196b0cdfd9575ea6d90a9c33df1a0b6a75bc8790b5e2a2",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 5.088541666666667,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/trampoline-mesh/1x1-duration-600-frame-20.png",
                "sha256": "b4c57d1e673047f182969e6645a9fcd47cf0407176b644c4a1c99a6841dbf6db",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/trampoline-mesh/1x1-duration-600-frame-135.png",
                "sha256": "7f08866c6e3066f4eb196b0cdfd9575ea6d90a9c33df1a0b6a75bc8790b5e2a2",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/trampoline-mesh/1x1-duration-600-frame-528.png",
                "sha256": "7f08866c6e3066f4eb196b0cdfd9575ea6d90a9c33df1a0b6a75bc8790b5e2a2",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T224117Z/gates/trampoline-mesh/1x1-duration-600-frame-599.png",
                "sha256": "7f08866c6e3066f4eb196b0cdfd9575ea6d90a9c33df1a0b6a75bc8790b5e2a2",
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
        "note": "TitleMatches: The images show an abstract, extruded mesh-like structure on a ground plane with a logo or object performing an up-and-down (rise/fall/assemble) motion along a fixed, parallel camera axis. This accurately matches the claimed title 'Elastic Mesh Logo Landing' and supports described motion verbs such as 'rise,' 'assemble,' and overall geometric assembly. \nNoBakedHeading: There is no decorative or unexplained block title/language/category label baked into the image composition itself. The only headline present ('Make a lasting impression') matches the named slot content and is appropriately positioned as legit content. \nBrandAdherence: All three rebrand palette versions are present in the last three images, each adopting the supplied primary/secondary/text/background colors. The mesh, ground, and text all remain legible and shape/material are preserved; colors change appropriately for each palette with no retained color blocks from prior palettes.\nLanguageAdherence: The structure, motion, ground plane, and type roles remain consistent with the language card: the ground plane is always visible ('bg'), ink is used for faces/labels ('ink'), and accent colors appear appropriately for mesh lines/active forms. Type is sans-serif throughout, numerals (if any) appear tabular, and there is no flat UI or perspective error; camera and shadow behave as described. Motion is subtle but follows the prescribed direction and style. Therefore, all requirements are met based only on the supplied images."
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
      "bundleSha256": "3352282b4447b46154a676f4165325f26da0a9eab7dbc28f4d5f8977a7bbb8ab",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T22:58:08.237Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "trampoline-mesh",
      "vsPositive": 0.75,
      "vsNegative": 1,
      "fakeVotes": 0.020833333333333332,
      "perModel": {
        "claude": {
          "vsPositive": 1,
          "vsNegative": 1
        },
        "gpt": {
          "vsPositive": 0.5,
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
      "framesSha256": "1892ec5a69aa3a57ba14d3a5b29f2dd3ebab98531c533430dedcb3a84bc3db27",
      "bundleSha256": "3352282b4447b46154a676f4165325f26da0a9eab7dbc28f4d5f8977a7bbb8ab",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/trampoline-mesh/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/trampoline-mesh/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/trampoline-mesh/16x9/detail.mp4",
      "bg": "#f3efe5",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "fc0914b7ae0b36824999ad91a158f3738ac12373c1ca96b66c05054f4d53b824",
        "loop": "251a7684f607965f65be6117d914e9f6c54c8f3fab4e00a025cb962c5cae5cf1",
        "detail": "77886b8db4232cb79482a5b2468902db14be47ab1b9e899954258631730ea687"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/trampoline-mesh/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/trampoline-mesh/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/trampoline-mesh/9x16/detail.mp4",
      "bg": "#f3efe5",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "fcd340870f364c347bcc03cb8962fd7c931b438aaec2980167145302f24d16b5",
        "loop": "637f227fc72bc833a070fb2c5b12e1b82e497c2e35ed7d0b5821d6dbbe09ac1b",
        "detail": "e1e2994af010984f22cbdcb4088d44ccc82bc72de2a8714928d11e8626920063"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/trampoline-mesh/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/trampoline-mesh/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/trampoline-mesh/1x1/detail.mp4",
      "bg": "#f3efe5",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "83792fe60495ad4d1491820c258ad456916f86861f3134545f903a5791198a64",
        "loop": "d8e03d76ffb95efa1c952fb8902e14fc8c18b8088a979dd7cdd6ee5500246736",
        "detail": "4126c558d119ac13bc992f6a865fa41af9c0a5e1a2ce8630f762254935144127"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/3352282b4447b46154a676f4165325f26da0a9eab7dbc28f4d5f8977a7bbb8ab/index.mjs",
    "sha256": "3352282b4447b46154a676f4165325f26da0a9eab7dbc28f4d5f8977a7bbb8ab",
    "bytes": 160410,
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
    "at": "2026-10-09T23:05:48.469Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
