// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/craft",
  "job": "product-ui",
  "language": "photo-collage",
  "mechanic": [
    "scroll"
  ],
  "tags": [
    "scroll",
    "blueprint",
    "paper",
    "unroll"
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
      "role": "image"
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
    "sourceUrl": "21st first-party (Rolled Screenshot Blueprint, 2026-10-09)"
  },
  "defaults": {
    "primary": "#2F6172",
    "secondary": "#C5AA77",
    "color": "#252A25",
    "background": "#F4F1E8",
    "fontFamily": "DM Sans",
    "seed": 31,
    "screenshot": "",
    "caption": "Unroll the next idea"
  },
  "fields": [
    {
      "key": "screenshot",
      "label": "Screenshot",
      "type": "asset",
      "role": "image"
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
  "name": "Rolled Screenshot Blueprint",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "scroll-blueprint-screen",
    "bundleSha256": "86c15992cc0f2a87af814e911f5d71d603cf39b511740dfb3712e496353e8927",
    "sourceSnapshot": {
      "sha256": "de7e642bcc5aea77fca1b37a034278288bb6c3e6764a2876338cde9c7e59dadb",
      "files": 2190
    },
    "renderedAt": "2026-10-09T22:50:10.462Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/scroll-blueprint-screen/16x9-paper.png",
        "sha256": "77c0db639f04c708d967b14a27dcaa9a002ed412453133c2ed9c7776eccba78c"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/scroll-blueprint-screen/16x9-night.png",
        "sha256": "94cd4f32eadd2838a912397a31c35b5619ae0cf2c90632367646f8e35f833ef5"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/scroll-blueprint-screen/16x9-color.png",
        "sha256": "c13e5b6f907be5f50a78c554e46e26561aed7d990e3891b9a056d2aee0ce3872"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/scroll-blueprint-screen/9x16-paper.png",
        "sha256": "cd81e4d9b510d32f5334dd9251fe50ce030fecd50a83a0b6878f801531c3d037"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/scroll-blueprint-screen/9x16-night.png",
        "sha256": "2903bb3d7b7638b316de32f0cd56fe46017a87ee8236a0d6f12301f85a13fc7b"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/scroll-blueprint-screen/9x16-color.png",
        "sha256": "ed2746e5afa05b9d9fb84b7ad6cb793aa128bb3b4f1a682d1ecc4905a0cd1b44"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/scroll-blueprint-screen/1x1-paper.png",
        "sha256": "47126600bacfc93aaef1e013e05c6653288286e4eac2645247f4c6db2b0051b7"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/scroll-blueprint-screen/1x1-night.png",
        "sha256": "5990ff169ca028e4fe11767e2d3639586c389054a3fdabd7841cb78d0ab42c76"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/scroll-blueprint-screen/1x1-color.png",
        "sha256": "e8d69e037c174401f99818028777b7eb53ef62f950ff34e2314bc5f2031617de"
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
          "scroll-blueprint-screen--16x9",
          "scroll-blueprint-screen--9x16",
          "scroll-blueprint-screen--1x1"
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
            "paperNight": 15.537516276041666,
            "paperColor": 5.589680989583333,
            "region": {
              "left": 150,
              "top": 84,
              "width": 1626,
              "height": 882
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 17.330810546875,
            "paperColor": 6.851535373263889,
            "region": {
              "left": 74,
              "top": 159,
              "width": 938,
              "height": 1559
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 19.462076822916668,
            "paperColor": 7.242214626736111,
            "region": {
              "left": 74,
              "top": 84,
              "width": 938,
              "height": 882
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
            "occupancy": 0.9790680836377763,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9801793981481484,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9768454546170322,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9981777722663141,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9994599530913191,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9962545010288067,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0040900505149477,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.005229766803841,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.0018106179371613,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 15.710611979166666,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 15.64767795138889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/scroll-blueprint-screen/16x9-duration-150-frame-18.png",
                "sha256": "a50c3e28bcc79222dd51e012e8e6615da76942ccff55445299b3fa50cd402097",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/scroll-blueprint-screen/16x9-duration-150-frame-135.png",
                "sha256": "22711d7eb768ce0fa272a77035963bea89ee238c5705faa72a5a2ffdfc851391",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/scroll-blueprint-screen/16x9-duration-150-frame-132.png",
                "sha256": "22711d7eb768ce0fa272a77035963bea89ee238c5705faa72a5a2ffdfc851391",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/scroll-blueprint-screen/16x9-duration-150-frame-149.png",
                "sha256": "22711d7eb768ce0fa272a77035963bea89ee238c5705faa72a5a2ffdfc851391",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 15.710611979166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/scroll-blueprint-screen/16x9-duration-600-frame-20.png",
                "sha256": "eea53d33b3c201a8693b8b71b342cf4987031b539e5cd08fbd506945c631b3d3",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/scroll-blueprint-screen/16x9-duration-600-frame-135.png",
                "sha256": "22711d7eb768ce0fa272a77035963bea89ee238c5705faa72a5a2ffdfc851391",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/scroll-blueprint-screen/16x9-duration-600-frame-528.png",
                "sha256": "22711d7eb768ce0fa272a77035963bea89ee238c5705faa72a5a2ffdfc851391",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/scroll-blueprint-screen/16x9-duration-600-frame-599.png",
                "sha256": "22711d7eb768ce0fa272a77035963bea89ee238c5705faa72a5a2ffdfc851391",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 15.816731770833334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/scroll-blueprint-screen/9x16-duration-150-frame-18.png",
                "sha256": "676c0a243ba67fb3da1f94d93b10e668622db77007716b7252a031f7ae002cdb",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/scroll-blueprint-screen/9x16-duration-150-frame-135.png",
                "sha256": "73eb46450b8e4a691eaa620e642df31b4e08da64b3d285a263452cb3e57118c5",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/scroll-blueprint-screen/9x16-duration-150-frame-132.png",
                "sha256": "73eb46450b8e4a691eaa620e642df31b4e08da64b3d285a263452cb3e57118c5",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/scroll-blueprint-screen/9x16-duration-150-frame-149.png",
                "sha256": "73eb46450b8e4a691eaa620e642df31b4e08da64b3d285a263452cb3e57118c5",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 15.8212890625,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/scroll-blueprint-screen/9x16-duration-600-frame-20.png",
                "sha256": "58b690101d50fb97656002244eaa73c3213b31dfa65d6e080070236703508ce4",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/scroll-blueprint-screen/9x16-duration-600-frame-135.png",
                "sha256": "73eb46450b8e4a691eaa620e642df31b4e08da64b3d285a263452cb3e57118c5",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/scroll-blueprint-screen/9x16-duration-600-frame-528.png",
                "sha256": "73eb46450b8e4a691eaa620e642df31b4e08da64b3d285a263452cb3e57118c5",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/scroll-blueprint-screen/9x16-duration-600-frame-599.png",
                "sha256": "73eb46450b8e4a691eaa620e642df31b4e08da64b3d285a263452cb3e57118c5",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 18.665147569444443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/scroll-blueprint-screen/1x1-duration-150-frame-18.png",
                "sha256": "40487c9f3b3aeb79af68b8215e67a39cff8d2746b5361b0344ed13d60e9e8a6d",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/scroll-blueprint-screen/1x1-duration-150-frame-135.png",
                "sha256": "c94a099f43760404f412ba6f218aa0af2d84fc2ab8b965459458cd79c0e979f0",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/scroll-blueprint-screen/1x1-duration-150-frame-132.png",
                "sha256": "c94a099f43760404f412ba6f218aa0af2d84fc2ab8b965459458cd79c0e979f0",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/scroll-blueprint-screen/1x1-duration-150-frame-149.png",
                "sha256": "c94a099f43760404f412ba6f218aa0af2d84fc2ab8b965459458cd79c0e979f0",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 18.777994791666668,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/scroll-blueprint-screen/1x1-duration-600-frame-20.png",
                "sha256": "06f13ebc702743704aabecb735fa16a0530adf1c9532c1d8d06604c319a84dc4",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/scroll-blueprint-screen/1x1-duration-600-frame-135.png",
                "sha256": "c94a099f43760404f412ba6f218aa0af2d84fc2ab8b965459458cd79c0e979f0",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/scroll-blueprint-screen/1x1-duration-600-frame-528.png",
                "sha256": "c94a099f43760404f412ba6f218aa0af2d84fc2ab8b965459458cd79c0e979f0",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T224709Z/gates/scroll-blueprint-screen/1x1-duration-600-frame-599.png",
                "sha256": "c94a099f43760404f412ba6f218aa0af2d84fc2ab8b965459458cd79c0e979f0",
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
        "note": "- titleMatches: The visible subject is a schematic or simplified blueprint of a roll-down projection screen with UI mockup elements, supported by the clear unrolling motion between frames 2–4. This fits 'Rolled Screenshot Blueprint', as the entire sequence explicitly visualizes a \"blueprint\" style interface being unrolled, matching verb, subject, and claimed motion.\n- noBakedHeading: There are no decorative or unexplained block title/category/language baked into the composition. The only heading is the legitimate named-slot caption, clearly separated under the poster. No additional decorative label is present.\n- brandAdherence: The last three images (frames 5–7) test three distinct brand palettes (purple/beige, green/black, gold/green), with visible changes to poster hardware, background, and type. Content remains entirely legible, and all supplied palette colors are applied to appropriate parts as described in the roles. No unexplained fixed color remains, and the brand shape/material is preserved.\n- languageAdherence: Consistent use of sans font for body, tabular numerals (in UI mock), and photographic layering for the central interface (as per material guidance). No element breaches the provided material, light or type rules. Motion is consistent with 'unroll', matching a reveal-type verb, and color roles stay accurate (matte board, cutout edge, ink for text). No language card is present in the image, but all visible content aligns with supplied card guidelines."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 82,
        "compared": 82,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "86c15992cc0f2a87af814e911f5d71d603cf39b511740dfb3712e496353e8927",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T22:56:29.205Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "scroll-blueprint-screen",
      "vsPositive": 0.8333333333333334,
      "vsNegative": 0.875,
      "fakeVotes": 0.16666666666666666,
      "perModel": {
        "claude": {
          "vsPositive": 0.5,
          "vsNegative": 0.625
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
      "framesSha256": "348a9a744414cbccebb2f57d2e2b18718d178a3e1033cff6643ca11a3fc5cba7",
      "bundleSha256": "86c15992cc0f2a87af814e911f5d71d603cf39b511740dfb3712e496353e8927",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/scroll-blueprint-screen/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/scroll-blueprint-screen/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/scroll-blueprint-screen/16x9/detail.mp4",
      "bg": "#f4f1e8",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "0e5ce185296b13a3936c1f0d28a9efbfcd497d62bf65c481fa59c24a6a79a340",
        "loop": "82dfe68ffd4d081c828b74345b3fd72ce6f8e25b53f4e5ac36d734ca16cc6b3e",
        "detail": "1dec78169310e4e693af3722d5c6c2f8c6568f788aad7324558e89185de1a32b"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/scroll-blueprint-screen/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/scroll-blueprint-screen/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/scroll-blueprint-screen/9x16/detail.mp4",
      "bg": "#f4f1e8",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "134a1617e14c1874dec279180f5c4c86af47dded471296a4480bc510989da7fb",
        "loop": "1343e82c9db776c5d4a7e39e18c21437dd9d25e55dedddfa6cb10cbb2fb3f0a4",
        "detail": "823559e5c0ee89c098531b4e1fab89dd17a548d2ea6962429b7fd2ce872261d0"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/scroll-blueprint-screen/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/scroll-blueprint-screen/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/scroll-blueprint-screen/1x1/detail.mp4",
      "bg": "#f4f1e8",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "efd347caa3da04be74750ad86e343024a16be95f1bd05297bb1a2658aad39e1c",
        "loop": "462ba544b84124ad2d81bec91fb1f3fb8ed389cd355accc817353c7fe4462d23",
        "detail": "a9de9ed77fb667d455edb3101c37023aebdf8e8ece404b3fdc41a7f57ef33e4c"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/86c15992cc0f2a87af814e911f5d71d603cf39b511740dfb3712e496353e8927/index.mjs",
    "sha256": "86c15992cc0f2a87af814e911f5d71d603cf39b511740dfb3712e496353e8927",
    "bytes": 164319,
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
    "at": "2026-10-09T23:00:24.907Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
