// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "logos/craft",
  "job": "logos",
  "language": "glass",
  "mechanic": [
    "refract"
  ],
  "tags": [
    "caustics",
    "water",
    "pool",
    "refraction",
    "logo",
    "ripples",
    "light"
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
      "settled": 135,
      "ripples": 50,
      "calm": 110
    },
    "beats": [
      0,
      30,
      50,
      90,
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
    "sourceUrl": "21st first-party (refracted light nets drift over the user logo, then the water calms, 2026-10-09)"
  },
  "defaults": {
    "logo": "",
    "caption": "A clearer kind of motion",
    "primary": "#FF6F59",
    "secondary": "#FFC2A8",
    "color": "#F6EFE6",
    "background": "#0D1A14",
    "fontFamily": "DM Sans",
    "seed": 43
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
    },
    {
      "key": "seed",
      "label": "Seed",
      "type": "number",
      "step": 1
    }
  ],
  "name": "Caustic Pool Logo",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "caustic-pool-logo",
    "bundleSha256": "64282797939e8ca702dcd90c01b74e6ecaaeb252046fa23c498e39284b16a439",
    "sourceSnapshot": {
      "sha256": "8c8648af8fd3e1e355643a057cccbaeed8f2d74a734b1f517c02e3af0d549bea",
      "files": 2016
    },
    "renderedAt": "2026-10-09T19:50:18.083Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/caustic-pool-logo/16x9-paper.png",
        "sha256": "db1437315e5fcb975d97310278036a0203adb5e62d1f3557fedc4ab7b54feee0"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/caustic-pool-logo/16x9-night.png",
        "sha256": "a561efffb6a4edd43f96ae84880b5a32604c36e03ecb0385d683051f3e058dad"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/caustic-pool-logo/16x9-color.png",
        "sha256": "2f52b85ee7559c3cd002768a789e62ecf9f73f03d7ad000459b64ad545b06c07"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/caustic-pool-logo/9x16-paper.png",
        "sha256": "72f851b4ef6247736bf988ccc4c4ef6bfc5172657dc42eb066539662fb47a25d"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/caustic-pool-logo/9x16-night.png",
        "sha256": "d7e444ad1ee1fba563f7704d2ea5309693ec1593841cb8bd7bb81ed9f6d53f28"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/caustic-pool-logo/9x16-color.png",
        "sha256": "8a13fbf2770661206a771b84b8d32c437cfadaa728f3774be2f603dbfa555a6c"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/caustic-pool-logo/1x1-paper.png",
        "sha256": "9ad9804f467336167b53e2dcddfe5870f2d6ec7e22afbdffc26a364d5b451b87"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/caustic-pool-logo/1x1-night.png",
        "sha256": "53c016f47aecf78bce66a12d6f17e1a0b1fd7c776abdbfdf697ba16fdc6bfb00"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/caustic-pool-logo/1x1-color.png",
        "sha256": "d2df1892cba2ec9ce273c935ce41d75d6b1b8027e0bb5f54406bf810528fef79"
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
          "caustic-pool-logo--16x9",
          "caustic-pool-logo--9x16",
          "caustic-pool-logo--1x1"
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
            "paperNight": 47.12310112847222,
            "paperColor": 26.30352105034722,
            "region": {
              "left": 144,
              "top": 97,
              "width": 1632,
              "height": 843
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 58.77422417534722,
            "paperColor": 27.472981770833332,
            "region": {
              "left": 81,
              "top": 172,
              "width": 918,
              "height": 1596
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 49.130452473958336,
            "paperColor": 27.261149088541668,
            "region": {
              "left": 81,
              "top": 97,
              "width": 918,
              "height": 843
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
            "occupancy": 0.9402950995212902,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9402950995212902,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9391796842193669,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0013640873015874,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0013640873015874,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0001092450869238,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9402950995212902,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9402950995212902,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9391796842193669,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 3.1221788194444446,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 3.1851128472222223,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/caustic-pool-logo/16x9-duration-150-frame-18.png",
                "sha256": "b4f6ed33610d2a6830b76c639495ac39c87ae1f6f6791a8f2fc435e97d542351",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/caustic-pool-logo/16x9-duration-150-frame-135.png",
                "sha256": "3798601117fe9798cd1d5d1ed28cc3d31ea513de03f8d2f8514b2e6888172afa",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/caustic-pool-logo/16x9-duration-150-frame-132.png",
                "sha256": "e4ea0ac1f83f1023aa263004c0786c8d8a44ac0e9aa60c18b9325e712b3fba91",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/caustic-pool-logo/16x9-duration-150-frame-149.png",
                "sha256": "3798601117fe9798cd1d5d1ed28cc3d31ea513de03f8d2f8514b2e6888172afa",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 3.1221788194444446,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/caustic-pool-logo/16x9-duration-600-frame-20.png",
                "sha256": "6ed94eb1c0cf0c0ee53d6cdd29e7c29034fc2ab5b142116de8f246148cf9bdde",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/caustic-pool-logo/16x9-duration-600-frame-135.png",
                "sha256": "3798601117fe9798cd1d5d1ed28cc3d31ea513de03f8d2f8514b2e6888172afa",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/caustic-pool-logo/16x9-duration-600-frame-528.png",
                "sha256": "3798601117fe9798cd1d5d1ed28cc3d31ea513de03f8d2f8514b2e6888172afa",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/caustic-pool-logo/16x9-duration-600-frame-599.png",
                "sha256": "3798601117fe9798cd1d5d1ed28cc3d31ea513de03f8d2f8514b2e6888172afa",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 3.482204861111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/caustic-pool-logo/9x16-duration-150-frame-18.png",
                "sha256": "e3f9b8fe233e906220e5c1322b000aca928c9bde9354521db22e5a7fa7763f8c",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/caustic-pool-logo/9x16-duration-150-frame-135.png",
                "sha256": "1fe1d9cc56437a256182bfd2aad5002769df248017dda2d9b30ff3e34bc8e881",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/caustic-pool-logo/9x16-duration-150-frame-132.png",
                "sha256": "30202dfbc377483a970d6973a0ba0f97f96601c2e35b3d81445198a5bfdc8ec2",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/caustic-pool-logo/9x16-duration-150-frame-149.png",
                "sha256": "1fe1d9cc56437a256182bfd2aad5002769df248017dda2d9b30ff3e34bc8e881",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 3.4380425347222223,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/caustic-pool-logo/9x16-duration-600-frame-20.png",
                "sha256": "abd629c93aa776ac961f62677249891dceaf48dff3e796bbdd0e6e2b4752f0f9",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/caustic-pool-logo/9x16-duration-600-frame-135.png",
                "sha256": "1fe1d9cc56437a256182bfd2aad5002769df248017dda2d9b30ff3e34bc8e881",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/caustic-pool-logo/9x16-duration-600-frame-528.png",
                "sha256": "1fe1d9cc56437a256182bfd2aad5002769df248017dda2d9b30ff3e34bc8e881",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/caustic-pool-logo/9x16-duration-600-frame-599.png",
                "sha256": "1fe1d9cc56437a256182bfd2aad5002769df248017dda2d9b30ff3e34bc8e881",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 3.512478298611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/caustic-pool-logo/1x1-duration-150-frame-18.png",
                "sha256": "018cbe64bf1f44c786ca8c147e8f867cf64319f0cf6eb5d41af054c88b50f20f",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/caustic-pool-logo/1x1-duration-150-frame-135.png",
                "sha256": "97a9744de4e8884b9d66036e6615271748066bbe3c513d79ed8512f7d71aecea",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/caustic-pool-logo/1x1-duration-150-frame-132.png",
                "sha256": "c3da79430ad9368ac5a41ce93e8166de9d985d416d9f8006e2dbb32e48caaa8f",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/caustic-pool-logo/1x1-duration-150-frame-149.png",
                "sha256": "97a9744de4e8884b9d66036e6615271748066bbe3c513d79ed8512f7d71aecea",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 3.4419487847222223,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/caustic-pool-logo/1x1-duration-600-frame-20.png",
                "sha256": "4e7daecf2d34937cf67ce54941db84242562b0273e15b395a6674cc5cb8cec25",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/caustic-pool-logo/1x1-duration-600-frame-135.png",
                "sha256": "97a9744de4e8884b9d66036e6615271748066bbe3c513d79ed8512f7d71aecea",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/caustic-pool-logo/1x1-duration-600-frame-528.png",
                "sha256": "97a9744de4e8884b9d66036e6615271748066bbe3c513d79ed8512f7d71aecea",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T194515Z/gates/caustic-pool-logo/1x1-duration-600-frame-599.png",
                "sha256": "97a9744de4e8884b9d66036e6615271748066bbe3c513d79ed8512f7d71aecea",
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
        "note": "1. TitleMatches: The subject is a logo composed of overlapping translucent lenses/panels, and the sampled motion across frames 2–4 shows these shapes distorting with depth and refractive cues, matching the title 'Caustic Pool Logo.' The background has refractive, undulating lines, consistent with water caustics; the motion of the overlapped forms fits the claim of a 'clearer kind of motion' through parallax and refractive shifts.\n\n2. noBakedHeading: There are no decorative headings or labels embedded in the poster composition itself. The only visible text is the actionable caption 'A clearer kind of motion' in the named-slot position.\n\n3. brandAdherence: Images 5–7 apply three distinct palettes to the same composition. In each, the palette affects background, shape, and type: legibility is preserved, shapes remain consistent, and there are no unexplained fixed or stray colors. Screened lines and background marks adapt to luminosity and palette, following the provided swatches.\n\n4. languageAdherence: All samples feature overlapping translucent lenses with depth, refractive highlights, and a shifting camera. Edges have highlights that respond to palette luminance, the camera movement demonstrates parallax and 'refract' verbs, and type remains sans in named positions, consistent with the supplied language card. No forbidden elements (neon, blurred main text, opaque generic cards) are present."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 37,
        "compared": 37,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "64282797939e8ca702dcd90c01b74e6ecaaeb252046fa23c498e39284b16a439",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T20:03:13.639Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "caustic-pool-logo",
      "vsPositive": 0.5416666666666666,
      "vsNegative": 0.9166666666666666,
      "fakeVotes": 0.22916666666666666,
      "perModel": {
        "claude": {
          "vsPositive": 0.625,
          "vsNegative": 0.875
        },
        "gpt": {
          "vsPositive": 0.25,
          "vsNegative": 0.875
        },
        "gemini": {
          "vsPositive": 0.75,
          "vsNegative": 1
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "342dc0a1fb310d67ce1b5f57bc8d789afa552478c182676d399ac4fbadd5c61b",
      "bundleSha256": "64282797939e8ca702dcd90c01b74e6ecaaeb252046fa23c498e39284b16a439",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/caustic-pool-logo/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/caustic-pool-logo/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/caustic-pool-logo/16x9/detail.mp4",
      "bg": "#0d1a14",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "15d9139eb322bf19129ad8f23826ac1b762bf39de9f59aed089bef26884a86b4",
        "loop": "4ec72a7b9ac3f6b84ece7bad3d515fde6b60e360ef80713ca5ab887b5a2bcda6",
        "detail": "b3e38488df6b0e6bbd1053f1407153f6497676d77b64b700909151d20dd8ef1b"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/caustic-pool-logo/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/caustic-pool-logo/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/caustic-pool-logo/9x16/detail.mp4",
      "bg": "#0d1a14",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "26ab68a8cff16b9c9885b6f93cda0ea456a646fbb00108b3f40ea913808860dc",
        "loop": "cadf5eb91d039705e752af59ed911e9195d00330377873b96ba9f08dd14c17f6",
        "detail": "5230bbe2e39ba6e8e1a50046af800ed520eb872cf5688eb3ff2a7452fd7beb90"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/caustic-pool-logo/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/caustic-pool-logo/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/caustic-pool-logo/1x1/detail.mp4",
      "bg": "#0d1a14",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "f3c742aa915c43615649ee4ce8da36984edf349c6c40dc1f017873e6e77b0623",
        "loop": "ea25ad4b22834f0449065395a3235b1ec974c0949b7bfe3ba6fc0e0ab1920ff9",
        "detail": "a0d94f4c7a8ec71f78a5e44d3dfef6d2673a9d0d3f1f96c52050c4cee1667cd1"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/64282797939e8ca702dcd90c01b74e6ecaaeb252046fa23c498e39284b16a439/index.mjs",
    "sha256": "64282797939e8ca702dcd90c01b74e6ecaaeb252046fa23c498e39284b16a439",
    "bytes": 163058,
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
    "at": "2026-10-09T20:04:56.494Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
