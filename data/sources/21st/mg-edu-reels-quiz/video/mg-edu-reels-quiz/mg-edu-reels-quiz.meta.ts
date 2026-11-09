// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/motion-gallery",
  "job": "product-ui",
  "language": "aura",
  "mechanic": [
    "quiz-answer-tap-confetti"
  ],
  "energy": "punchy",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "product-ui",
    "quiz-answer-tap-confetti",
    "quiz",
    "education",
    "reels",
    "confetti"
  ],
  "engines": {
    "remotion": ">=4.0.533 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 180,
      "min": 90,
      "max": 900
    },
    "stretch": "hold",
    "phases": {
      "in": 96,
      "out": 0
    },
    "markers": {
      "settled": 96
    },
    "beats": [
      0,
      24,
      48,
      72,
      96
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
    "preset": "full",
    "backdrop": [
      "paintBackground"
    ]
  },
  "slots": [
    {
      "key": "question",
      "type": "text",
      "maxChars": 48,
      "role": "headline"
    },
    {
      "key": "answer",
      "type": "text",
      "maxChars": 16,
      "role": "label"
    },
    {
      "key": "cta",
      "type": "text",
      "maxChars": 24,
      "role": "cta"
    },
    {
      "key": "brand",
      "type": "text",
      "maxChars": 18,
      "role": "label"
    }
  ],
  "brand": {
    "ink": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "paper": "colors.background",
    "displayFont": "fonts.display",
    "bodyFont": "fonts.body",
    "monoFont": "fonts.mono"
  },
  "motionBeats": [
    {
      "target": "quiz-answer-tap-confetti",
      "prop": "transform",
      "from": "enter",
      "settledBy": 96,
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
      180
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "docs/research/launch-videos-2026-10-06/README.md"
  },
  "defaults": {
    "ink": "#FFFFFF",
    "accent": "#FF7A59",
    "secondary": "#3FD0FF",
    "paper": "#4B1DB8",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "question": "Which planet spins the fastest?",
    "answer": "Jupiter",
    "cta": "Start learning free",
    "brand": "Brightwell"
  },
  "fields": [
    {
      "key": "ink",
      "label": "Ink",
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
      "key": "secondary",
      "label": "Secondary",
      "type": "color",
      "brand": "colors.secondary"
    },
    {
      "key": "paper",
      "label": "Paper",
      "type": "color",
      "brand": "colors.background"
    },
    {
      "key": "displayFont",
      "label": "Display font",
      "type": "font",
      "brand": "fonts.display"
    },
    {
      "key": "bodyFont",
      "label": "Body font",
      "type": "font",
      "brand": "fonts.body"
    },
    {
      "key": "monoFont",
      "label": "Mono font",
      "type": "font",
      "brand": "fonts.mono"
    },
    {
      "key": "paintBackground",
      "label": "Paint background",
      "type": "boolean",
      "backdrop": true
    },
    {
      "key": "question",
      "label": "Question",
      "type": "text",
      "max": 48,
      "role": "headline"
    },
    {
      "key": "answer",
      "label": "Answer",
      "type": "text",
      "max": 16,
      "role": "label"
    },
    {
      "key": "cta",
      "label": "Cta",
      "type": "text",
      "max": 24,
      "role": "cta"
    },
    {
      "key": "brand",
      "label": "Brand",
      "type": "text",
      "max": 18,
      "role": "label"
    }
  ],
  "name": "Quiz Answer Reveal",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-edu-reels-quiz",
    "bundleSha256": "d809ac9f7256772f9834e8fa9f463d459c8f6fde686fb96bab178fde0b87e870",
    "sourceSnapshot": {
      "sha256": "6b3c4b88f93414cdcd38f196512f266d5b9796152360325f32188ecfc5077c45",
      "files": 2067
    },
    "renderedAt": "2026-10-09T06:09:32.667Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-reels-quiz/16x9-paper.png",
        "sha256": "7c6d60dee679ced990edf051dafd3168f48e15bd5c1b3580ab3e5b979965b01b"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-reels-quiz/16x9-night.png",
        "sha256": "a9c8ea871123e6f019464258ebc4beb3b04f301221867754b92a4d11230f666c"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-reels-quiz/16x9-color.png",
        "sha256": "dc591f84d9bba3089f7f50c81a4347de38c219424480085ab3713eedcaa21d6b"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-reels-quiz/9x16-paper.png",
        "sha256": "92b57e1f513e7703d2246d4d509b2f545118f628f73d482d4ae3069f337b3440"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-reels-quiz/9x16-night.png",
        "sha256": "e9fe21c86c6ee1664c16b75175c6ea7b0755dd0618171f38cdd9d53eb6ef12c5"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-reels-quiz/9x16-color.png",
        "sha256": "f58d36362add4e10253f792c891bb0c4efaa6ac6e8becc87afaafc25e8421289"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-reels-quiz/1x1-paper.png",
        "sha256": "b83b6d2f36982becb5ed06e1571295d6121fe317dc8327c29ce4f54bfdb714a1"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-reels-quiz/1x1-night.png",
        "sha256": "284675b2f55876af6f4a548fe9081bb1c63936689700160b72fba8e360d617b4"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-reels-quiz/1x1-color.png",
        "sha256": "ff42dfbee97dd7fbe5e1bdc4cedc358b02be145ceaaf01c104c224a4e2237fa7"
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
          "mg-edu-reels-quiz--16x9",
          "mg-edu-reels-quiz--9x16",
          "mg-edu-reels-quiz--1x1"
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
            "paperNight": 72.93709309895833,
            "paperColor": 22.981580946180557,
            "region": {
              "left": 65,
              "top": 69,
              "width": 1816,
              "height": 952
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 96.5185546875,
            "paperColor": 29.961995442708332,
            "region": {
              "left": 47,
              "top": 86,
              "width": 1024,
              "height": 1777
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 94.52590603298611,
            "paperColor": 33.2607421875,
            "region": {
              "left": 36,
              "top": 54,
              "width": 1032,
              "height": 1000
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
            "occupancy": 1.181596609837351,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.181596609837351,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.181596609837351,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2436661907561382,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2436661907561382,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2436661907561382,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2539309276522683,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2539309276522683,
            "bad": [],
            "measured": 4
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.2539309276522683,
            "bad": [],
            "measured": 4
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 11.136176215277779,
        "frames": [
          14,
          96,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 11.294921875,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-reels-quiz/16x9-duration-90-frame-10.png",
                "sha256": "d9171beccde48ca9911bd2346e8b6330363311b072572424c2faeb1851488592",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-reels-quiz/16x9-duration-90-frame-89.png",
                "sha256": "0fea18aaca78561d63ced027a77b107c431f85db0446f0893c75aacb8b0697d5",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-reels-quiz/16x9-duration-90-frame-79.png",
                "sha256": "0fea18aaca78561d63ced027a77b107c431f85db0446f0893c75aacb8b0697d5",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 11.136176215277779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-reels-quiz/16x9-duration-900-frame-14.png",
                "sha256": "1eb8e5a68de36243c003dfffb4bcba2e28cee5b963b2e64b1471f248deb64c38",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-reels-quiz/16x9-duration-900-frame-96.png",
                "sha256": "0fea18aaca78561d63ced027a77b107c431f85db0446f0893c75aacb8b0697d5",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-reels-quiz/16x9-duration-900-frame-792.png",
                "sha256": "0fea18aaca78561d63ced027a77b107c431f85db0446f0893c75aacb8b0697d5",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-reels-quiz/16x9-duration-900-frame-899.png",
                "sha256": "0fea18aaca78561d63ced027a77b107c431f85db0446f0893c75aacb8b0697d5",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 16.217881944444443,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-reels-quiz/9x16-duration-90-frame-10.png",
                "sha256": "353545e9a67e253f016f4fc69cf5e2197d21cf1c2fb6b662b9b2bc297801fad2",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-reels-quiz/9x16-duration-90-frame-89.png",
                "sha256": "93c18bcf766201124634316925142fbdd8a8610b20e7eaac04533f73a172dab7",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-reels-quiz/9x16-duration-90-frame-79.png",
                "sha256": "93c18bcf766201124634316925142fbdd8a8610b20e7eaac04533f73a172dab7",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 16.13064236111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-reels-quiz/9x16-duration-900-frame-14.png",
                "sha256": "99499ea98185eceb28074432d4ebc02dae84fc7fff697c6e77c940b8c4e1a0b4",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-reels-quiz/9x16-duration-900-frame-96.png",
                "sha256": "93c18bcf766201124634316925142fbdd8a8610b20e7eaac04533f73a172dab7",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-reels-quiz/9x16-duration-900-frame-792.png",
                "sha256": "93c18bcf766201124634316925142fbdd8a8610b20e7eaac04533f73a172dab7",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-reels-quiz/9x16-duration-900-frame-899.png",
                "sha256": "93c18bcf766201124634316925142fbdd8a8610b20e7eaac04533f73a172dab7",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 13.423177083333334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-reels-quiz/1x1-duration-90-frame-10.png",
                "sha256": "a605ae2435f9ff4245af4a39599f730f525e27cae1ed412bdc9dedd9e966323c",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-reels-quiz/1x1-duration-90-frame-89.png",
                "sha256": "5bf909b8045eabb56d3f49396bb4ffd16f22ce8b3fdd614cd3ab55d39201ba98",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-reels-quiz/1x1-duration-90-frame-79.png",
                "sha256": "5bf909b8045eabb56d3f49396bb4ffd16f22ce8b3fdd614cd3ab55d39201ba98",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 13.391167534722221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 14,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-reels-quiz/1x1-duration-900-frame-14.png",
                "sha256": "3ccb8ab0a6690ab7c165f98c5a976716bb7ffbfceda02352847165dceaea21b5",
                "alphaMass": 587520
              },
              {
                "frame": 96,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-reels-quiz/1x1-duration-900-frame-96.png",
                "sha256": "5bf909b8045eabb56d3f49396bb4ffd16f22ce8b3fdd614cd3ab55d39201ba98",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-reels-quiz/1x1-duration-900-frame-792.png",
                "sha256": "5bf909b8045eabb56d3f49396bb4ffd16f22ce8b3fdd614cd3ab55d39201ba98",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-21/mg-edu-reels-quiz/1x1-duration-900-frame-899.png",
                "sha256": "5bf909b8045eabb56d3f49396bb4ffd16f22ce8b3fdd614cd3ab55d39201ba98",
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
        "note": "Quiz card with options where the right answer lights up with confetti and a CTA; rebrands distinct."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 76,
        "compared": 76,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "d809ac9f7256772f9834e8fa9f463d459c8f6fde686fb96bab178fde0b87e870",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.092Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-edu-reels-quiz/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-edu-reels-quiz/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-edu-reels-quiz/16x9/detail.mp4",
      "bg": "#7b60cc",
      "posterFrame": 96,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "597edfe03a568fb91c6478b08a4d73e601615460625623461046c5e62d4ea4fe",
        "loop": "4cf247165f5b665c730a2002f61187abd00e11fbcb5e40f037cce11d4ed23897",
        "detail": "2b26896bab7a825765d2dc056ee0ae46d6115522f0ac85bb10931c97ac451e0c"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-edu-reels-quiz/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-edu-reels-quiz/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-edu-reels-quiz/9x16/detail.mp4",
      "bg": "#7b60cc",
      "posterFrame": 96,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "49865c4fb8eeab941b794d435bb230bf100e026112671f6213cbb5423f4bc140",
        "loop": "07c62183ded24296298e7b410f38e143a7238c8799cc2914e03a3b5260800ea8",
        "detail": "76976a7a628496a4ddd94f312128b113cddb0c7dd82d18d79f6163fa7e4d0941"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-edu-reels-quiz/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-edu-reels-quiz/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-edu-reels-quiz/1x1/detail.mp4",
      "bg": "#7b60cc",
      "posterFrame": 96,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "225dfa37e7eec416d802c9e7bc878c1cd74eabe360911e541b0678ad7503bad5",
        "loop": "3a6afadabe58bb01c29db0dfd23ca872b78a657887f8b6957af218f8544692c5",
        "detail": "7accac32890ad513930362ae642d2349015dfc214798a804c7739eb5d6e0ac94"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/d809ac9f7256772f9834e8fa9f463d459c8f6fde686fb96bab178fde0b87e870/index.mjs",
    "sha256": "d809ac9f7256772f9834e8fa9f463d459c8f6fde686fb96bab178fde0b87e870",
    "bytes": 287729,
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
    "at": "2026-10-09T07:16:08.843Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
