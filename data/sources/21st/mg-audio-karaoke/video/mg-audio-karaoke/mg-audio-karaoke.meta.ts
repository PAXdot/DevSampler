// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "titles/motion-gallery",
  "job": "titles",
  "language": "aura",
  "mechanic": [
    "lyric-words-fill-in-time"
  ],
  "energy": "default",
  "requiresScreenshot": false,
  "tags": [
    "motion-gallery",
    "titles",
    "lyric-words-fill-in-time",
    "music",
    "lyrics",
    "karaoke",
    "sing-along"
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
      "in": 123,
      "out": 0
    },
    "markers": {
      "settled": 123
    },
    "beats": [
      0,
      31,
      62,
      92,
      123
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
      "key": "track",
      "type": "text",
      "maxChars": 24,
      "role": "label"
    },
    {
      "key": "artist",
      "type": "text",
      "maxChars": 24,
      "role": "name"
    },
    {
      "key": "lyric",
      "type": "text",
      "maxChars": 64,
      "role": "headline"
    },
    {
      "key": "foot",
      "type": "text",
      "maxChars": 52,
      "role": "caption"
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
      "target": "lyric-words-fill-in-time",
      "prop": "transform",
      "from": "enter",
      "settledBy": 123,
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
    "accent": "#FF7A3D",
    "secondary": "#FF2E88",
    "paper": "#22062E",
    "displayFont": "Bricolage Grotesque",
    "bodyFont": "Geist",
    "monoFont": "Geist Mono",
    "paintBackground": true,
    "track": "Static Bloom",
    "artist": "Juno Vale",
    "lyric": "leave the radio on, so the room hums your name",
    "foot": "Glass Weather · out now on tidewell records"
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
      "key": "track",
      "label": "Track",
      "type": "text",
      "max": 24,
      "role": "label"
    },
    {
      "key": "artist",
      "label": "Artist",
      "type": "text",
      "max": 24,
      "role": "name"
    },
    {
      "key": "lyric",
      "label": "Lyric",
      "type": "text",
      "max": 64,
      "role": "headline"
    },
    {
      "key": "foot",
      "label": "Foot",
      "type": "text",
      "max": 52,
      "role": "caption"
    }
  ],
  "name": "Karaoke Lyric Fill",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "mg-audio-karaoke",
    "bundleSha256": "723879e713b6448a0c21f366e3b2e0b71f646141d7ccb7c9b8a62490e6659836",
    "sourceSnapshot": {
      "sha256": "6b3c4b88f93414cdcd38f196512f266d5b9796152360325f32188ecfc5077c45",
      "files": 2067
    },
    "renderedAt": "2026-10-09T06:06:46.056Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-karaoke/16x9-paper.png",
        "sha256": "00b4c28cbc6426cf5f93716769b217b0a59beff49a8974e796401e24dc5bd1c1"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-karaoke/16x9-night.png",
        "sha256": "3cf52d70ded4bb7aa25b79631946b6fb96c0af4ec9dc9ba078a00f3bae6e2f07"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-karaoke/16x9-color.png",
        "sha256": "467fb96898880a32ce2c8edbe1b0e93a08c46a1c8ca5ccfe395f3c330fe41f0e"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-karaoke/9x16-paper.png",
        "sha256": "e0dcc4ef87cc9b32267b5214faa7aca2e5568cc22260a5a95236ffedcfc653d0"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-karaoke/9x16-night.png",
        "sha256": "dcde28acab46541f9f6b0a3e3be8517d4264a6749820eba275654e72fe17eb0b"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-karaoke/9x16-color.png",
        "sha256": "7f7a0112064b4718a3af0863fecc3bcbca1b8a9f728e0b99445d129d13b39890"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-karaoke/1x1-paper.png",
        "sha256": "d3ed00bdb50215004d35487d3272caac27dbfbab91927b97e8b24da52abb2f57"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-karaoke/1x1-night.png",
        "sha256": "15bcee4d31efdc43fdca33adb300f0ad0358c4a4eb4f6375b03728a81b5fefd0"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-karaoke/1x1-color.png",
        "sha256": "4962748e1d626f995ee9838b5fcb7dcf8c47279fdf212e650a69646d608ca13a"
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
          "mg-audio-karaoke--16x9",
          "mg-audio-karaoke--9x16",
          "mg-audio-karaoke--1x1"
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
            "paperNight": 34.85020616319444,
            "paperColor": 15.142686631944445,
            "region": {
              "left": 137,
              "top": 84,
              "width": 1629,
              "height": 862
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 49.399169921875,
            "paperColor": 20.319715711805557,
            "region": {
              "left": 75,
              "top": 132,
              "width": 917,
              "height": 1616
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 38.09263780381944,
            "paperColor": 16.79779730902778,
            "region": {
              "left": 76,
              "top": 84,
              "width": 918,
              "height": 871
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
            "occupancy": 0.9597205490992695,
            "bad": [],
            "measured": 13
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9597205490992695,
            "bad": [],
            "measured": 13
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9586071841931219,
            "bad": [],
            "measured": 13
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0128080295904371,
            "bad": [],
            "measured": 13
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.0128080295904371,
            "bad": [],
            "measured": 13
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.012181291948364,
            "bad": [],
            "measured": 13
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9715267279751408,
            "bad": [],
            "measured": 13
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9715267279751408,
            "bad": [],
            "measured": 13
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9704113126732176,
            "bad": [],
            "measured": 13
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 10.70681423611111,
        "frames": [
          18,
          123,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 10.756727430555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-karaoke/16x9-duration-90-frame-10.png",
                "sha256": "1fc52a13cfaf26e2f2d42d1ee75b9eb9b32414e7552e0f16f9ca957fd59d4d58",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-karaoke/16x9-duration-90-frame-89.png",
                "sha256": "98219c64487e0cf618817c6a9bb031a02302313c702e03a5a01d15f3b8dcdae6",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-karaoke/16x9-duration-90-frame-79.png",
                "sha256": "98219c64487e0cf618817c6a9bb031a02302313c702e03a5a01d15f3b8dcdae6",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 900,
            "averageChannelDifference": 10.70681423611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-karaoke/16x9-duration-900-frame-18.png",
                "sha256": "a84c21298e1ff9ff7a8bb70360c4f149db6ab036a93b08f9f8c0985bcaa581e3",
                "alphaMass": 587520
              },
              {
                "frame": 123,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-karaoke/16x9-duration-900-frame-123.png",
                "sha256": "98219c64487e0cf618817c6a9bb031a02302313c702e03a5a01d15f3b8dcdae6",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-karaoke/16x9-duration-900-frame-792.png",
                "sha256": "98219c64487e0cf618817c6a9bb031a02302313c702e03a5a01d15f3b8dcdae6",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-karaoke/16x9-duration-900-frame-899.png",
                "sha256": "98219c64487e0cf618817c6a9bb031a02302313c702e03a5a01d15f3b8dcdae6",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 9.778211805555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-karaoke/9x16-duration-90-frame-10.png",
                "sha256": "8154b4321bad5c71428904a7a03c0e6b9e2b3ffcd2cb8ce036b2fe0805512f51",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-karaoke/9x16-duration-90-frame-89.png",
                "sha256": "0aed3f1900edc05803d4c801c8206eb544a8686784c7d2909890a578425cb277",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-karaoke/9x16-duration-90-frame-79.png",
                "sha256": "0aed3f1900edc05803d4c801c8206eb544a8686784c7d2909890a578425cb277",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 900,
            "averageChannelDifference": 9.67556423611111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-karaoke/9x16-duration-900-frame-18.png",
                "sha256": "5319a01b8943c0e114a34606cce75292e02c134e238ecae9c5512ea359ee7437",
                "alphaMass": 587520
              },
              {
                "frame": 123,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-karaoke/9x16-duration-900-frame-123.png",
                "sha256": "0aed3f1900edc05803d4c801c8206eb544a8686784c7d2909890a578425cb277",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-karaoke/9x16-duration-900-frame-792.png",
                "sha256": "0aed3f1900edc05803d4c801c8206eb544a8686784c7d2909890a578425cb277",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-karaoke/9x16-duration-900-frame-899.png",
                "sha256": "0aed3f1900edc05803d4c801c8206eb544a8686784c7d2909890a578425cb277",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 10.898111979166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-karaoke/1x1-duration-90-frame-10.png",
                "sha256": "8a95cfc8731323767ac7974dae4eb2ee1b3c2c7d4c25742d2e88f048d2901f47",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-karaoke/1x1-duration-90-frame-89.png",
                "sha256": "3060de4ae8afda87b35678098168147c57c5e5a935cf8d926a1032e3ef3f7d90",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-karaoke/1x1-duration-90-frame-79.png",
                "sha256": "3060de4ae8afda87b35678098168147c57c5e5a935cf8d926a1032e3ef3f7d90",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 900,
            "averageChannelDifference": 10.797960069444445,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-karaoke/1x1-duration-900-frame-18.png",
                "sha256": "c4307362970266811798cd7a61d4807ac0daef977b5ffc3a8cd5001786456d33",
                "alphaMass": 587520
              },
              {
                "frame": 123,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-karaoke/1x1-duration-900-frame-123.png",
                "sha256": "3060de4ae8afda87b35678098168147c57c5e5a935cf8d926a1032e3ef3f7d90",
                "alphaMass": 587520
              },
              {
                "frame": 792,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-karaoke/1x1-duration-900-frame-792.png",
                "sha256": "3060de4ae8afda87b35678098168147c57c5e5a935cf8d926a1032e3ef3f7d90",
                "alphaMass": 587520
              },
              {
                "frame": 899,
                "file": "/private/tmp/claude-501/-Users-serafimcloud-Documents-GitHub-21st-private-1/20aae3e5-5f48-49f6-93ed-0f1c16fc39d5/scratchpad/kitwt/packages/video-kit/out/catalog-gates-claude-ind4-22/mg-audio-karaoke/1x1-duration-900-frame-899.png",
                "sha256": "3060de4ae8afda87b35678098168147c57c5e5a935cf8d926a1032e3ef3f7d90",
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
        "note": "Lyric line fills word by word over a gradient with a progress bar; rebrands distinct."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 63,
        "compared": 63,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "723879e713b6448a0c21f366e3b2e0b71f646141d7ccb7c9b8a62490e6659836",
      "selectedBy": "serafim (repo owner) on 2026-10-08; visual review by claude",
      "at": "2026-10-09T06:12:51.082Z",
      "basis": "Owner asked to put the 100-variant industry gallery into the library"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/mg-audio-karaoke/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-audio-karaoke/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-audio-karaoke/16x9/detail.mp4",
      "bg": "#481a2f",
      "posterFrame": 123,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "49ad0c78ae06cbaec8d92c806d3df6dc80c7d4629610dfdaa9979b7be4a24fda",
        "loop": "71a409d25464492b7e9c36192aa18da54527b3969a491e7dc282c2a6421c7de0",
        "detail": "5a111fea447275e8a2b83550193129e0eff70e9096ba2ee48235049519ed1620"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/mg-audio-karaoke/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-audio-karaoke/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-audio-karaoke/9x16/detail.mp4",
      "bg": "#300d2c",
      "posterFrame": 123,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "9e2a1c49f10e1ee42e575e9a283deae8cb91786188d55dc82b5802654be90079",
        "loop": "fa9d5d0d56d1d65e4ee7c6de810fe10cdefdca390aaed2c5404ec29db51b687d",
        "detail": "7018cffd76e56023690b825ae2aaa938676e47364bbf2b3d551534d85ff9c961"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/mg-audio-karaoke/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/mg-audio-karaoke/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/mg-audio-karaoke/1x1/detail.mp4",
      "bg": "#511f2f",
      "posterFrame": 123,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "71c4f651c06a6bb606d82e84cfb07ac950cff3677475fdf0bcfabaadb41dec1a",
        "loop": "e2b30aaaacd239eab88bd187fe76d4b461f3e5798805868284f0b40408119d95",
        "detail": "c816a809118d223024dff6ca756b0dc200175af7193d8a2e4e768ae190dded73"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/723879e713b6448a0c21f366e3b2e0b71f646141d7ccb7c9b8a62490e6659836/index.mjs",
    "sha256": "723879e713b6448a0c21f366e3b2e0b71f646141d7ccb7c9b8a62490e6659836",
    "bytes": 245243,
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
    "at": "2026-10-09T07:09:40.510Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
