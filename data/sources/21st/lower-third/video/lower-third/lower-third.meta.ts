// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "text/lower-third",
  "tags": [
    "lower third",
    "name",
    "title",
    "speaker",
    "interview",
    "testimonial"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 120,
      "min": 45,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 40,
      "out": 0
    },
    "markers": {
      "settled": 40
    },
    "beats": [
      0,
      6,
      14
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
    "fill": "region",
    "defaultRegion": {
      "x": 0,
      "y": 0.5,
      "w": 1,
      "h": 0.5
    },
    "safeArea": "action",
    "transparent": true,
    "preset": "lower-third",
    "backdrop": []
  },
  "slots": [
    {
      "key": "name",
      "type": "text",
      "maxChars": 32,
      "lines": 1,
      "role": "name"
    },
    {
      "key": "role",
      "type": "text",
      "maxChars": 48,
      "lines": 1,
      "role": "subline"
    }
  ],
  "brand": {
    "accent": "colors.primary",
    "color": "colors.text",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "bar",
      "prop": "scaleY",
      "from": "0",
      "settledBy": 12,
      "easing": "spring"
    },
    {
      "target": "name",
      "prop": "x",
      "from": "left",
      "settledBy": 40,
      "easing": "spring"
    },
    {
      "target": "role",
      "prop": "opacity",
      "settledBy": 28,
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
    "sourceUrl": "21st-ads/remotion/ui.tsx (Caption), factor-marketplace/remotion/components/mixed-text.tsx (Subtitles)"
  },
  "job": "testimonials",
  "language": "kinetic-poster",
  "mechanic": [
    "reveal"
  ],
  "energy": "calm",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "name": "Maya Chen",
    "role": "Head of Design, Acme",
    "color": "#F4F4F5",
    "accent": "#3D63FF",
    "fontFamily": "Geist",
    "plate": true,
    "align": "left"
  },
  "fields": [
    {
      "key": "name",
      "label": "Name",
      "type": "text",
      "max": 32,
      "role": "name"
    },
    {
      "key": "role",
      "label": "Role",
      "type": "text",
      "max": 48,
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
      "key": "fontFamily",
      "label": "Font family",
      "type": "font",
      "brand": "fonts.heading"
    },
    {
      "key": "plate",
      "label": "Plate",
      "type": "boolean"
    },
    {
      "key": "align",
      "label": "Align",
      "type": "select",
      "options": [
        "left",
        "center"
      ]
    }
  ],
  "name": "Lower Third",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "lower-third",
    "bundleSha256": "ced1f9c1027857905a0253bbc928f6429cc73dc0209fa5eb21d8e40ae8dbfb52",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T01:10:15.754Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/lower-third/16x9-paper.png",
        "sha256": "8fcde89d54d2c1083d3f85813845c6b84003e2571634d291ae40f6c2fd5a57cc"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/lower-third/16x9-night.png",
        "sha256": "bd9757ea93ec0c9fbe59d191d81b4a456efac5b083dcbb0da3754836ec89a030"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/lower-third/16x9-color.png",
        "sha256": "69268e7e927745089c6169d793515fefbb5acca28ac4b0d172d020482f2d7ed0"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/lower-third/9x16-paper.png",
        "sha256": "42c05c657457334ac61267e6ef60a1fba8ab1bcb9e234fc4a5ecf859a1cb3293"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/lower-third/9x16-night.png",
        "sha256": "89d1aeebcf372cb8e60a4805039adf1ee971d51a0935bb0410766eebd3e7fa73"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/lower-third/9x16-color.png",
        "sha256": "31e5f139c996277579fa4d75ac787e07f9994aee69b4d349ece8f64f4a7d076f"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/lower-third/1x1-paper.png",
        "sha256": "82d0dd18cd9cb6f389f3da90f782549fc7b2c2aa9d10eb5ca1068c5f52d15822"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/lower-third/1x1-night.png",
        "sha256": "3c55d3c1f86ab5290bec507c77ac7920dc1f40ec2725db58beec7286d009324f"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/lower-third/1x1-color.png",
        "sha256": "ff111dc1f7102aecd63f3f5092cf4e9e9b22195af646ac11b86a91c36df0e75c"
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
          "lower-third--16x9",
          "lower-third--9x16",
          "lower-third--1x1"
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
            "paperNight": 171.04977756076389,
            "paperColor": 77.73619249131944,
            "region": {
              "left": 115,
              "top": 819,
              "width": 396,
              "height": 164
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 179.70515950520834,
            "paperColor": 69.12323676215277,
            "region": {
              "left": 65,
              "top": 960,
              "width": 950,
              "height": 788
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 170.59309895833334,
            "paperColor": 77.5380859375,
            "region": {
              "left": 65,
              "top": 819,
              "width": 395,
              "height": 164
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
            "occupancy": 0.0878772290809328,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.088773935500126,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.06433868557711152,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0232841850732064,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0232841850732064,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7636931444388456,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.15582764884646133,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.15742179359169367,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.11437988547042047,
            "bad": [],
            "measured": 2
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 2.3602430555555554,
        "frames": [
          6,
          40,
          119
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 45,
            "averageChannelDifference": 2.4041883680555554,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/lower-third/16x9-duration-45-frame-5.png",
                "sha256": "1d487db73c7cea6e200530314b28a6f5421ff4dd431c8882219eb0436ba7d6d2",
                "alphaMass": 411
              },
              {
                "frame": 40,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/lower-third/16x9-duration-45-frame-40.png",
                "sha256": "477dd19d32b73dc1224f8add63b331ed62b2eccc336fd5176dafb0e9e7524ce8",
                "alphaMass": 11175
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/lower-third/16x9-duration-45-frame-39.png",
                "sha256": "477dd19d32b73dc1224f8add63b331ed62b2eccc336fd5176dafb0e9e7524ce8",
                "alphaMass": 11175
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/lower-third/16x9-duration-45-frame-44.png",
                "sha256": "477dd19d32b73dc1224f8add63b331ed62b2eccc336fd5176dafb0e9e7524ce8",
                "alphaMass": 11175
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 2.3602430555555554,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/lower-third/16x9-duration-900-frame-6.png",
                "sha256": "8bae572bc99e58b3f0c80e330ff82953f2b094ee5749da3a8942238506c794c4",
                "alphaMass": 778
              },
              {
                "frame": 40,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/lower-third/16x9-duration-900-frame-40.png",
                "sha256": "477dd19d32b73dc1224f8add63b331ed62b2eccc336fd5176dafb0e9e7524ce8",
                "alphaMass": 11175
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/lower-third/16x9-duration-900-frame-792.png",
                "sha256": "477dd19d32b73dc1224f8add63b331ed62b2eccc336fd5176dafb0e9e7524ce8",
                "alphaMass": 11175
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/lower-third/16x9-duration-900-frame-899.png",
                "sha256": "477dd19d32b73dc1224f8add63b331ed62b2eccc336fd5176dafb0e9e7524ce8",
                "alphaMass": 11175
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 45,
            "averageChannelDifference": 22.88986545138889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/lower-third/9x16-duration-45-frame-5.png",
                "sha256": "f0312b68572ca54ad95d05b0b7f69459e953d2f68b25daba8a085bab66022579",
                "alphaMass": 5266
              },
              {
                "frame": 40,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/lower-third/9x16-duration-45-frame-40.png",
                "sha256": "872b2d75916d95b1e7386caa3c248b200de7d6ecbcf8828752dca13abeb83daa",
                "alphaMass": 125531
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/lower-third/9x16-duration-45-frame-39.png",
                "sha256": "872b2d75916d95b1e7386caa3c248b200de7d6ecbcf8828752dca13abeb83daa",
                "alphaMass": 125531
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/lower-third/9x16-duration-45-frame-44.png",
                "sha256": "872b2d75916d95b1e7386caa3c248b200de7d6ecbcf8828752dca13abeb83daa",
                "alphaMass": 125531
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 22.022569444444443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/lower-third/9x16-duration-900-frame-6.png",
                "sha256": "26ee2d72d5a3d872110380aa01530b045a566cf72a8da37132fccd508480eff1",
                "alphaMass": 9526
              },
              {
                "frame": 40,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/lower-third/9x16-duration-900-frame-40.png",
                "sha256": "872b2d75916d95b1e7386caa3c248b200de7d6ecbcf8828752dca13abeb83daa",
                "alphaMass": 125531
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/lower-third/9x16-duration-900-frame-792.png",
                "sha256": "872b2d75916d95b1e7386caa3c248b200de7d6ecbcf8828752dca13abeb83daa",
                "alphaMass": 125531
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/lower-third/9x16-duration-900-frame-899.png",
                "sha256": "872b2d75916d95b1e7386caa3c248b200de7d6ecbcf8828752dca13abeb83daa",
                "alphaMass": 125531
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 45,
            "averageChannelDifference": 4.182074652777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/lower-third/1x1-duration-45-frame-5.png",
                "sha256": "7537cb7fe0f8e6b5d8b56f8541a7c408dd2ca1f3a3b5a323d712c0ea1fe6a629",
                "alphaMass": 758
              },
              {
                "frame": 40,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/lower-third/1x1-duration-45-frame-40.png",
                "sha256": "cebf86f1aac459539ac318e694045b673d2fe08feb266fe0766fd5646ffa4f04",
                "alphaMass": 19889
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/lower-third/1x1-duration-45-frame-39.png",
                "sha256": "cebf86f1aac459539ac318e694045b673d2fe08feb266fe0766fd5646ffa4f04",
                "alphaMass": 19889
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/lower-third/1x1-duration-45-frame-44.png",
                "sha256": "cebf86f1aac459539ac318e694045b673d2fe08feb266fe0766fd5646ffa4f04",
                "alphaMass": 19889
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 4.042534722222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 6,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/lower-third/1x1-duration-900-frame-6.png",
                "sha256": "a7f9faa9067ae94d342d764225428c65cb0405ec02a7d90ba86bd8417cedca7a",
                "alphaMass": 1384
              },
              {
                "frame": 40,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/lower-third/1x1-duration-900-frame-40.png",
                "sha256": "cebf86f1aac459539ac318e694045b673d2fe08feb266fe0766fd5646ffa4f04",
                "alphaMass": 19889
              },
              {
                "frame": 792,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/lower-third/1x1-duration-900-frame-792.png",
                "sha256": "cebf86f1aac459539ac318e694045b673d2fe08feb266fe0766fd5646ffa4f04",
                "alphaMass": 19889
              },
              {
                "frame": 899,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/lower-third/1x1-duration-900-frame-899.png",
                "sha256": "cebf86f1aac459539ac318e694045b673d2fe08feb266fe0766fd5646ffa4f04",
                "alphaMass": 19889
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "testimonials",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "A name and role lower third slides in; speaker identification overlay."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 2,
        "compared": 2,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "ced1f9c1027857905a0253bbc928f6429cc73dc0209fa5eb21d8e40ae8dbfb52",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:02.027603Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/lower-third/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lower-third/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lower-third/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 40,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "cdf5a37bb5f79f339dd25a665b92d5aaedef7f9f10242091700325316d9af718",
        "loop": "3407fbe1c3bed6f4f33869ba8d8fe232aa705ad705a9b9542b46e7cef652b1ed",
        "detail": "f49702399ff478e9e54d2a541c895356b18394b1a1bfe201f18ec084551c30ab"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/lower-third/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lower-third/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lower-third/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 40,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "e1e928ab4d68a14936a5843adc2963ee861724f19cb815ffa9348d13f032c1db",
        "loop": "18f9d689d1384862af090bf094a68783db92e3331851e7c031633fb1b587cd4e",
        "detail": "e5fa19c984ebca973bafcec896d84db652b90947cb94cc3a87844c81f6a2410e"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/lower-third/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/lower-third/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/lower-third/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 40,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 120,
      "sha256": {
        "poster": "2e3488e869a3833d5169678d4e9054b8217b3cf25190a52287bb4dea3e018c85",
        "loop": "f9f3a5e76c62d91ea5738d14584cf526fd5ddf9aad668d21c501f0ed037fef33",
        "detail": "5ab2dc0feb759934c393729ee9f07763adbd8b5d19a20825074124b0df8d87a2"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/ced1f9c1027857905a0253bbc928f6429cc73dc0209fa5eb21d8e40ae8dbfb52/index.mjs",
    "sha256": "ced1f9c1027857905a0253bbc928f6429cc73dc0209fa5eb21d8e40ae8dbfb52",
    "bytes": 160049,
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
      "overflow": true,
      "transparent": true
    },
    "9:16": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "overflow": true,
      "transparent": true
    },
    "1:1": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "overflow": true,
      "transparent": true
    }
  },
  "intake": {
    "at": "2026-10-07T02:34:35.608Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
