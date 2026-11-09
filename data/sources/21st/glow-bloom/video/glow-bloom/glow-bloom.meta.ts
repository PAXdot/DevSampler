// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "background",
  "category": "background/glow",
  "tags": [
    "background",
    "glow",
    "gradient",
    "ambient",
    "loop"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 240,
      "min": 60,
      "max": 1800
    },
    "stretch": "loop",
    "phases": {
      "in": 0,
      "out": 0
    },
    "markers": {
      "settled": 0
    },
    "beats": [
      0,
      60,
      120,
      180
    ],
    "loop": true
  },
  "layout": {
    "aspects": [
      "16:9",
      "9:16",
      "1:1"
    ],
    "mode": "responsive",
    "fill": "frame",
    "safeArea": "none",
    "transparent": true,
    "backdrop": [
      "background"
    ]
  },
  "slots": [],
  "brand": {
    "color": "colors.primary",
    "secondary": "colors.secondary",
    "background": "colors.background"
  },
  "motionBeats": [],
  "render": {
    "deterministic": true,
    "clientRenderable": false,
    "webgl": false,
    "requiresGpu": false
  },
  "preview": {
    "poster": {
      "frame": 60
    },
    "hover": [
      0,
      240
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "factor-marketplace/remotion/components/glow-bg.tsx"
  },
  "job": "backgrounds",
  "language": "aura",
  "mechanic": [
    "flow"
  ],
  "energy": "calm",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "color": "#0275de",
    "secondary": "#6d6f73",
    "background": "#09090b",
    "intensity": 0.6,
    "position": "split",
    "cycles": 1,
    "grain": true
  },
  "fields": [
    {
      "key": "color",
      "label": "Color",
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
      "key": "background",
      "label": "Background",
      "type": "color",
      "brand": "colors.background",
      "backdrop": true
    },
    {
      "key": "intensity",
      "label": "Intensity",
      "type": "number",
      "min": 0,
      "max": 1
    },
    {
      "key": "position",
      "label": "Position",
      "type": "select",
      "options": [
        "top",
        "bottom",
        "center",
        "split"
      ]
    },
    {
      "key": "cycles",
      "label": "Cycles",
      "type": "number",
      "step": 1,
      "min": 1,
      "max": 6
    },
    {
      "key": "grain",
      "label": "Grain",
      "type": "boolean"
    }
  ],
  "name": "Glow Bloom",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "glow-bloom",
    "bundleSha256": "2ae7c2a8e672f5185d7984cbccdfa239ee5bc4cb7fb73a3459d4faf0ebddef90",
    "sourceSnapshot": {
      "sha256": "f8c1d73b441d25bbbf0b21cb67796811b19f92af3507bdb03c534f400e7b5168",
      "files": 1757
    },
    "renderedAt": "2026-10-09T02:36:49.565Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/glow-bloom/16x9-paper.png",
        "sha256": "1a6e9868f7d1914cbd634c3fa07ac041dd774f668e96c0f5c7d50fc002cb17b0"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/glow-bloom/16x9-night.png",
        "sha256": "61c1b163f611ef0b14c26500d9f9709127c40c70c1299e58a165b6f6d09d98cd"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/glow-bloom/16x9-color.png",
        "sha256": "02de20ffe3848451769cc705c19604586371c9ef842db688410c3f6e7e88fd46"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/glow-bloom/9x16-paper.png",
        "sha256": "59c026610ae56fad4c63d950e536993855c196ccf0068bb5d5aaff13f101a320"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/glow-bloom/9x16-night.png",
        "sha256": "09d06515f5946c054d873163d42aa3b959f374ef86998f6b08a4cb9332147f3a"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/glow-bloom/9x16-color.png",
        "sha256": "3566f98cf93ee77eac495e18e555c6592ff64275b787d3b3fbe463a17a5d9c5c"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/glow-bloom/1x1-paper.png",
        "sha256": "30020871371bec118a5e7e9ff60b71805b29c85cfc1f76e1bf14dbf86c6ba94d"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/glow-bloom/1x1-night.png",
        "sha256": "8a6b7d278ef1554c1326fa81193d63a900d63e5f423007b8d28954cacdd81e25"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/glow-bloom/1x1-color.png",
        "sha256": "b3b5d40fda5c63eeb739f3aaaaeef31b8a5b925edf60e1f5ea0ceb33000e9ba8"
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
          "glow-bloom--16x9",
          "glow-bloom--9x16",
          "glow-bloom--1x1"
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
            "paperNight": 56.778103298611114,
            "paperColor": 26.559977213541668,
            "region": {
              "left": 35,
              "top": 0,
              "width": 1850,
              "height": 1080
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 56.928005642361114,
            "paperColor": 26.88381618923611,
            "region": {
              "left": 0,
              "top": 0,
              "width": 1080,
              "height": 1920
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 56.816134982638886,
            "paperColor": 26.515516493055557,
            "region": {
              "left": 20,
              "top": 0,
              "width": 1040,
              "height": 1080
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
            "occupancy": 1.3655635865457296,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3655635865457296,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3655635865457296,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.364743428235492,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.364743428235492,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.364743428235492,
            "bad": [],
            "measured": 0,
            "note": "Non-text block"
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 3.2450086805555554,
        "frames": [
          28,
          108,
          239
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 60,
            "averageChannelDifference": 3.2450086805555554,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/glow-bloom/16x9-duration-60-frame-7.png",
                "sha256": "5dd730caea5dd99f13e22134c82d4d494e41bd7e3add883c82771d58f1bbbddd",
                "alphaMass": 587520
              },
              {
                "frame": 27,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/glow-bloom/16x9-duration-60-frame-27.png",
                "sha256": "6b17c841d41c549fad185516968a7bbe3f39e163f78005c4a28bc476c3fdee36",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/glow-bloom/16x9-duration-60-frame-52.png",
                "sha256": "22eabcf0c2a03c6e87757c62163f4ff6572c1197742c75af7960cc00f260521e",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/glow-bloom/16x9-duration-60-frame-59.png",
                "sha256": "709b790750f591cb0abaa051a5815dc08b11789e727f09574faea18dfa79e2f8",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 1800,
            "averageChannelDifference": 3.232638888888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 216,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/glow-bloom/16x9-duration-1800-frame-216.png",
                "sha256": "c29c4f37c02a29ac69b1d58633cad77559bc98e3fb60ea5be1b178a63f4ea6e7",
                "alphaMass": 587520
              },
              {
                "frame": 810,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/glow-bloom/16x9-duration-1800-frame-810.png",
                "sha256": "6b17c841d41c549fad185516968a7bbe3f39e163f78005c4a28bc476c3fdee36",
                "alphaMass": 587520
              },
              {
                "frame": 1584,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/glow-bloom/16x9-duration-1800-frame-1584.png",
                "sha256": "08254006ee65cf6dec9921ebcca5c5c2054b2c66ed3fc06601e42e060126bd80",
                "alphaMass": 587520
              },
              {
                "frame": 1799,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/glow-bloom/16x9-duration-1800-frame-1799.png",
                "sha256": "62e543c1b2fbd14f67124fe49e53ee5c8d7e1f504433c1e2c395efef779dc2c9",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 60,
            "averageChannelDifference": 2.330295138888889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/glow-bloom/9x16-duration-60-frame-7.png",
                "sha256": "b44769b6405f731076d39d49173fc9ba19bcb5771b8562520cc0a12bc12ca7d0",
                "alphaMass": 587520
              },
              {
                "frame": 27,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/glow-bloom/9x16-duration-60-frame-27.png",
                "sha256": "47c2b929f31f47cad7428cdefcbb12e9bc39c37a533068194faf3a0d182e0c1e",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/glow-bloom/9x16-duration-60-frame-52.png",
                "sha256": "f4984b6f12c546335c3964f7acbfebccbdc79f4882d5f9dee4eae0b155210586",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/glow-bloom/9x16-duration-60-frame-59.png",
                "sha256": "488f62b5113b19aba698776ed941e7f870dc37d272b04e5faba6e3f6a4e98423",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 1800,
            "averageChannelDifference": 2.329861111111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 216,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/glow-bloom/9x16-duration-1800-frame-216.png",
                "sha256": "f186c0360a3fc26f19a9b8bd082be4f4924256d8244dffcfa81b6c2594f32c7d",
                "alphaMass": 587520
              },
              {
                "frame": 810,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/glow-bloom/9x16-duration-1800-frame-810.png",
                "sha256": "47c2b929f31f47cad7428cdefcbb12e9bc39c37a533068194faf3a0d182e0c1e",
                "alphaMass": 587520
              },
              {
                "frame": 1584,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/glow-bloom/9x16-duration-1800-frame-1584.png",
                "sha256": "a11bef7c613161deeae612aa89cc498a713e9ea637b6cc0041ab1b30fee6a5ed",
                "alphaMass": 587520
              },
              {
                "frame": 1799,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/glow-bloom/9x16-duration-1800-frame-1799.png",
                "sha256": "02dbcec48a8078b69442de7f01b3abdab8a79c67acff1839355a2599852daaaf",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 60,
            "averageChannelDifference": 3.2601996527777777,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 7,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/glow-bloom/1x1-duration-60-frame-7.png",
                "sha256": "ebea339809ac03dd041a4c57450d062807f7b76b3121ecf8095ded34e8713e73",
                "alphaMass": 587520
              },
              {
                "frame": 27,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/glow-bloom/1x1-duration-60-frame-27.png",
                "sha256": "473b12a77d4a7ab83e90ed90788e1a57a7d49fa7424079a3b54a061c9f114137",
                "alphaMass": 587520
              },
              {
                "frame": 52,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/glow-bloom/1x1-duration-60-frame-52.png",
                "sha256": "e0ded312754e0f75720d39e97e979241969ffb529ec4b81e4a8653cddb75cdc3",
                "alphaMass": 587520
              },
              {
                "frame": 59,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/glow-bloom/1x1-duration-60-frame-59.png",
                "sha256": "9264babb43ad78aded31301bbe1247f154242182cda1c7f7468a760dd615dc00",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 1800,
            "averageChannelDifference": 3.2434895833333335,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 216,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/glow-bloom/1x1-duration-1800-frame-216.png",
                "sha256": "33d675481d08c3ce66b6169e62e4c8d2bcc83c238f6848bc91e701e3869532ca",
                "alphaMass": 587520
              },
              {
                "frame": 810,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/glow-bloom/1x1-duration-1800-frame-810.png",
                "sha256": "473b12a77d4a7ab83e90ed90788e1a57a7d49fa7424079a3b54a061c9f114137",
                "alphaMass": 587520
              },
              {
                "frame": 1584,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/glow-bloom/1x1-duration-1800-frame-1584.png",
                "sha256": "d009e835247b07e52037d115f7b98194f66514115f9cf2f77102bbd435fe1dee",
                "alphaMass": 587520
              },
              {
                "frame": 1799,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-h-3/glow-bloom/1x1-duration-1800-frame-1799.png",
                "sha256": "3ee06829d363f80b3100875c11f39ce7d7af5f1f021d5c00aaa4dc8829fcf392",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "backgrounds",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "A soft glow blooms from the top edge of a dark field; default glow is brand blue and graphite, no purple."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 14,
        "compared": 14,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "2ae7c2a8e672f5185d7984cbccdfa239ee5bc4cb7fb73a3459d4faf0ebddef90",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T03:05:16.875160Z",
      "basis": "Purple removal pass: purple and indigo defaults recolored to brand blue and neutral, re-gated and republished"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/glow-bloom/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/glow-bloom/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/glow-bloom/16x9/detail.mp4",
      "bg": "#081421",
      "posterFrame": 60,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 240,
      "sha256": {
        "poster": "95dea5c6d0f9fbcba77ea7e953a57449a291e8023e315ee6adb4a5c769ab6a58",
        "loop": "b9ddfef8844815743ce4056c325182dd1ab0b8e51f86c388b6c6943c12fe8302",
        "detail": "9477c74dda87cf6ae441edd35d52790c169adf7cc888c3a852a0c459021ed601"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/glow-bloom/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/glow-bloom/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/glow-bloom/9x16/detail.mp4",
      "bg": "#072645",
      "posterFrame": 60,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 240,
      "sha256": {
        "poster": "f4c2ce9fd75c100b75bcfc45805ff5cbfa9e2febd2cfbfa6a6fe8be76bb2c134",
        "loop": "8783ac8868d9d72f490b5deff185ae3937a3f0a59483637e33ec6e551eb03cec",
        "detail": "58aefc741f8aea05246573bb3ba9b80e63888fe81fe4371eb831a3eb30096c04"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/glow-bloom/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/glow-bloom/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/glow-bloom/1x1/detail.mp4",
      "bg": "#081421",
      "posterFrame": 60,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 240,
      "sha256": {
        "poster": "6c04fa7433e440b674ee6207dff1e52eb63c77838235a91039092a15e8baa346",
        "loop": "4dd2385959a528689567d9056a49661c68e337fc38873c4012018894434fa2a2",
        "detail": "4b9e2c2e2951647d1855858a0c1d9c13238d521f25963f893b460efe7acde6c0"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/2ae7c2a8e672f5185d7984cbccdfa239ee5bc4cb7fb73a3459d4faf0ebddef90/index.mjs",
    "sha256": "2ae7c2a8e672f5185d7984cbccdfa239ee5bc4cb7fb73a3459d4faf0ebddef90",
    "bytes": 51764,
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
      "loop": true,
      "overflow": true
    },
    "9:16": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "loop": true,
      "overflow": true
    },
    "1:1": {
      "speed": true,
      "determinism": true,
      "flat": true,
      "loop": true,
      "overflow": true
    }
  },
  "intake": {
    "at": "2026-10-09T03:14:41.879Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
