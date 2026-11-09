// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "data/number",
  "tags": [
    "number",
    "counter",
    "stat",
    "ticker",
    "metric",
    "growth"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 90,
      "min": 45,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 52,
      "out": 0
    },
    "markers": {
      "settled": 56
    },
    "beats": [
      0,
      6,
      52
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
      "x": 0.1,
      "y": 0.2,
      "w": 0.8,
      "h": 0.6
    },
    "safeArea": "title",
    "transparent": true,
    "preset": "center",
    "backdrop": []
  },
  "slots": [
    {
      "key": "value",
      "type": "number",
      "role": "value"
    },
    {
      "key": "label",
      "type": "text",
      "maxChars": 48,
      "lines": 1,
      "role": "headline"
    }
  ],
  "brand": {
    "accent": "colors.primary",
    "color": "colors.text",
    "fontFamily": "fonts.heading"
  },
  "motionBeats": [
    {
      "target": "value",
      "prop": "count",
      "settledBy": 52,
      "easing": "ease"
    },
    {
      "target": "label",
      "prop": "y",
      "from": "below",
      "settledBy": 30,
      "easing": "spring"
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
      90
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party"
  },
  "job": "data",
  "language": "kinetic-poster",
  "mechanic": [
    "count"
  ],
  "energy": "default",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "value": 12480,
    "from": 0,
    "decimals": 0,
    "prefix": "",
    "suffix": "+",
    "label": "Teams on the waitlist",
    "color": "#F4F4F5",
    "accent": "#7C9CFF",
    "fontFamily": "Geist"
  },
  "fields": [
    {
      "key": "value",
      "label": "Value",
      "type": "number",
      "min": -1000000000000,
      "max": 1000000000000,
      "role": "value"
    },
    {
      "key": "from",
      "label": "From",
      "type": "number",
      "min": -1000000000000,
      "max": 1000000000000
    },
    {
      "key": "decimals",
      "label": "Decimals",
      "type": "number",
      "step": 1,
      "min": 0,
      "max": 3
    },
    {
      "key": "prefix",
      "label": "Prefix",
      "type": "text",
      "max": 4
    },
    {
      "key": "suffix",
      "label": "Suffix",
      "type": "text",
      "max": 6
    },
    {
      "key": "label",
      "label": "Label",
      "type": "text",
      "max": 48,
      "role": "headline"
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
    }
  ],
  "name": "Number Ticker",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "number-ticker",
    "bundleSha256": "17af70ce9de104219b0666218c470f3322eff85569abab01025aa2d7607e7d0d",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T00:57:18.139Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/number-ticker/16x9-paper.png",
        "sha256": "878cfc4a59b36d5bd4bc6fcb22026437b7b8b1c7f98b1e40947ea8411429e74e"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/number-ticker/16x9-night.png",
        "sha256": "bd80966604eb06f057a5b961593b18592d7316e75f751bd2be710f267324575d"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/number-ticker/16x9-color.png",
        "sha256": "4245b93df98939fa884fe9e84a4dae5d3478e768f050414e85ebbe174b576bba"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/number-ticker/9x16-paper.png",
        "sha256": "591f34b0879a8444cf19d408d9f1d38130da3a879b1c23b52e218f2267256ea6"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/number-ticker/9x16-night.png",
        "sha256": "f61d4260a970d516ba8d3bf610ffd6ddbe3d90ede4bf1fbd08d1ac61d6145dbc"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/number-ticker/9x16-color.png",
        "sha256": "d4aad720453d7bda8ac1659ac44967d454da4c1d284597e273aa8ea4c49ae9d2"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/number-ticker/1x1-paper.png",
        "sha256": "b99f2c1479610ee57bb5b0b25956531496273638ef93101d179d71d7c7a34970"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/number-ticker/1x1-night.png",
        "sha256": "624d86ba811525359d9a4e9ab3dc303671255c91e736027c3f4c1d99ece0c5a1"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/number-ticker/1x1-color.png",
        "sha256": "c662d537a1654b702a11892c733d3a28a3da1aac2dc13ddff935cfd8fbb54450"
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
          "number-ticker--16x9",
          "number-ticker--9x16",
          "number-ticker--1x1"
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
            "paperNight": 96.34404839409723,
            "paperColor": 43.43028428819444,
            "region": {
              "left": 412,
              "top": 354,
              "width": 1101,
              "height": 380
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 32.56556532118056,
            "paperColor": 12.49514431423611,
            "region": {
              "left": 177,
              "top": 534,
              "width": 726,
              "height": 864
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 96.94330512152777,
            "paperColor": 43.508083767361114,
            "region": {
              "left": 223,
              "top": 432,
              "width": 637,
              "height": 220
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
            "occupancy": 0.5362553851594651,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.570642230979326,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.36932184353508213,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8838487290170699,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8828149878135412,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8931523998488285,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.32081099829620924,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.34023153704973835,
            "bad": [],
            "measured": 3
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.21963029515265947,
            "bad": [],
            "measured": 3
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 23.74273003472222,
        "frames": [
          8,
          56,
          89
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 45,
            "averageChannelDifference": 30.58930121527778,
            "retainedAlpha": 0.998999484582967,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/number-ticker/16x9-duration-45-frame-5.png",
                "sha256": "03b6a693889ecc074066625dbd314da65b0b72d566de367f8b9a7c84c5a6b5fd",
                "alphaMass": 5311
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/number-ticker/16x9-duration-45-frame-44.png",
                "sha256": "dde995c5984a9fee1dfaa05191fae28a9904cbdeeaf371564e2199016585158f",
                "alphaMass": 32983
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/number-ticker/16x9-duration-45-frame-39.png",
                "sha256": "86692506790b9769c4777130bc779e6b4b274f65a2c27a050fed37b42a1cae7e",
                "alphaMass": 32950
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 23.74273003472222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/number-ticker/16x9-duration-600-frame-8.png",
                "sha256": "bea8a463ad861a032c5e3eceb73cba8c62096ca4c77bf0c9e3040a16aea7fff8",
                "alphaMass": 23310
              },
              {
                "frame": 56,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/number-ticker/16x9-duration-600-frame-56.png",
                "sha256": "9a9ba6c1e800c1a310db3b92c7a60d6d28c43fc86fdce2089e7d9a430f856fcc",
                "alphaMass": 34009
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/number-ticker/16x9-duration-600-frame-528.png",
                "sha256": "9a9ba6c1e800c1a310db3b92c7a60d6d28c43fc86fdce2089e7d9a430f856fcc",
                "alphaMass": 34009
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/number-ticker/16x9-duration-600-frame-599.png",
                "sha256": "9a9ba6c1e800c1a310db3b92c7a60d6d28c43fc86fdce2089e7d9a430f856fcc",
                "alphaMass": 34009
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 45,
            "averageChannelDifference": 21.90700954861111,
            "retainedAlpha": 0.9994659749771132,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/number-ticker/9x16-duration-45-frame-5.png",
                "sha256": "f52c963583756ee073aca6a13dcba84009273b94f26f196fab634095f82ad7b0",
                "alphaMass": 2442
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/number-ticker/9x16-duration-45-frame-44.png",
                "sha256": "dba5a8d8cfffba0ea107992f5fd73783a00a268ff49a088684095f932020d821",
                "alphaMass": 13108
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/number-ticker/9x16-duration-45-frame-39.png",
                "sha256": "5ccfbe6a95143cfcf7629bd7171a899b4e35705a36f751835c8029b1d7992f61",
                "alphaMass": 13101
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 17.146809895833332,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/number-ticker/9x16-duration-600-frame-8.png",
                "sha256": "ec6f875a607319cf35e310fa011cdf74a2863a4751ca97017a8f49e256b0840c",
                "alphaMass": 8855
              },
              {
                "frame": 56,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/number-ticker/9x16-duration-600-frame-56.png",
                "sha256": "88be12e5d3322292e244a943443339906f5a699b27f8156ea8669b25b19d6a7d",
                "alphaMass": 13466
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/number-ticker/9x16-duration-600-frame-528.png",
                "sha256": "ba95ba33ea05b34be60de42937995a0bda3e0b353751c78fcb72bc11fdd36b54",
                "alphaMass": 13466
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/number-ticker/9x16-duration-600-frame-599.png",
                "sha256": "1a7d02cdd12c206789164447f9f3c0339bf6c9d08302e277c1c0fcdf69c651f2",
                "alphaMass": 13466
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 45,
            "averageChannelDifference": 22.031358506944443,
            "retainedAlpha": 0.9982608695652174,
            "pass": true,
            "samples": [
              {
                "frame": 5,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/number-ticker/1x1-duration-45-frame-5.png",
                "sha256": "ed3f1aa0edeee6239f2b77a134cf58ccdc623e0881bb64971a2a4f1141ca04f1",
                "alphaMass": 3339
              },
              {
                "frame": 44,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/number-ticker/1x1-duration-45-frame-44.png",
                "sha256": "40d6738b52c3bf08e8f2e2e90d077b3ee0399f59c4071bb02f4505bfc32a6248",
                "alphaMass": 20125
              },
              {
                "frame": 39,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/number-ticker/1x1-duration-45-frame-39.png",
                "sha256": "68933e65c0ceac4fbae4450838236c70973e96fc118c893b06e0a6ffd998d3da",
                "alphaMass": 20090
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 14.930013020833334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 8,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/number-ticker/1x1-duration-600-frame-8.png",
                "sha256": "6388a2454fab220a5dd45bbfb2fea108523d86cf4f009c6ea877acc1243144cf",
                "alphaMass": 14638
              },
              {
                "frame": 56,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/number-ticker/1x1-duration-600-frame-56.png",
                "sha256": "d61e8a8dd6387593913bd5ebf6b931bfbec807082debb63bb6b42dbaf606b11b",
                "alphaMass": 20791
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/number-ticker/1x1-duration-600-frame-528.png",
                "sha256": "06e7d4104a597b4a1cfed5c71b15e62f806f56c5587b1fbb752505f972dd7558",
                "alphaMass": 20791
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-0/number-ticker/1x1-duration-600-frame-599.png",
                "sha256": "f79b3555b117c3e749520f4962b2f7481a9ffd563e3a5d12832480fa29eb77ca",
                "alphaMass": 20791
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "data",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "A big number counts up to a total with a caption."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 11,
        "compared": 11,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "17af70ce9de104219b0666218c470f3322eff85569abab01025aa2d7607e7d0d",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:01.931735Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/number-ticker/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/number-ticker/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/number-ticker/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 56,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 90,
      "sha256": {
        "poster": "55c34ba5c8a5747424efcf7f37393496d6d04fa2e46ece688485f33184afb376",
        "loop": "eaf50e44f81b1d0cc557945ec1ca07566382d9d4c2a1f4d89b932e3599a87eaa",
        "detail": "235fe961c7293ac3bedcf604cf9ce6a9c2cd14ab93c44484f47c0bbaf50bfbca"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/number-ticker/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/number-ticker/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/number-ticker/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 56,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 90,
      "sha256": {
        "poster": "9c9dac71d49cc77422971754546d271e7a850b95991e703d0aad1a23fd764e39",
        "loop": "351834f6de3ae5247cd3f580bf5b1979c161bc3f7230564059987b7807ca02cc",
        "detail": "250c8376489412fb2a3991f150f1b3a27d46f3511abe1314ab4652759dd2adda"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/number-ticker/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/number-ticker/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/number-ticker/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 56,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 90,
      "sha256": {
        "poster": "a41e428bc126978ba295134f9dc922c112c578db16716629261a5c84b804d04b",
        "loop": "106c32ef576798f4487793adf6e99409b27f9599a4d5dcb4cdab88224e0a8890",
        "detail": "f5eb4d16863e2a42d9d90d7181c2a330d23a94f2f7c6cfe5d62cfc5250d7e4dd"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/17af70ce9de104219b0666218c470f3322eff85569abab01025aa2d7607e7d0d/index.mjs",
    "sha256": "17af70ce9de104219b0666218c470f3322eff85569abab01025aa2d7607e7d0d",
    "bytes": 159254,
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
    "at": "2026-10-07T02:20:40.986Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
