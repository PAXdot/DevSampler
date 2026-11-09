// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "element",
  "category": "text/kinetic",
  "tags": [
    "slam",
    "chromatic",
    "rgb split",
    "glitch",
    "hype",
    "title",
    "shockwave",
    "text"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 75,
      "min": 30,
      "max": 600
    },
    "stretch": "hold",
    "phases": {
      "in": 24,
      "out": 0
    },
    "markers": {
      "settled": 26,
      "impact": 9
    },
    "beats": [
      2,
      9,
      13,
      16
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
      "key": "title",
      "type": "text",
      "maxChars": 32,
      "lines": 1,
      "role": "headline"
    },
    {
      "key": "eyebrow",
      "type": "text",
      "maxChars": 40,
      "lines": 1,
      "role": "kicker"
    }
  ],
  "brand": {
    "color": "colors.text",
    "accent": "colors.primary",
    "splitA": "colors.secondary",
    "fontFamily": "fonts.heading",
    "splitB": "colors.primary"
  },
  "motionBeats": [
    {
      "target": "title",
      "prop": "x",
      "from": "right",
      "settledBy": 9,
      "easing": "ease"
    },
    {
      "target": "eyebrow",
      "prop": "opacity",
      "settledBy": 21,
      "easing": "ease"
    },
    {
      "target": "underline",
      "prop": "scaleX",
      "from": "0",
      "settledBy": 24,
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
      75
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "motion recipe from research V03 (chromatic title slam with shockwave); own copy"
  },
  "job": "titles",
  "language": "kinetic-poster",
  "mechanic": [
    "slam"
  ],
  "energy": "punchy",
  "looks": [],
  "requiresScreenshot": false,
  "defaults": {
    "title": "Launch week",
    "eyebrow": "Day one",
    "color": "#F4F4F5",
    "accent": "#7C9CFF",
    "splitA": "#22D3EE",
    "splitB": "#F59E0B",
    "fontFamily": "Geist",
    "shockwave": true
  },
  "fields": [
    {
      "key": "title",
      "label": "Title",
      "type": "text",
      "max": 32,
      "role": "headline"
    },
    {
      "key": "eyebrow",
      "label": "Eyebrow",
      "type": "text",
      "max": 40,
      "role": "kicker"
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
      "key": "splitA",
      "label": "Split a",
      "type": "color",
      "brand": "colors.secondary"
    },
    {
      "key": "splitB",
      "label": "Split b",
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
      "key": "shockwave",
      "label": "Shockwave",
      "type": "boolean"
    }
  ],
  "name": "Chromatic Slam",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "chroma-slam",
    "bundleSha256": "54c43af6a048a70561bfa9d3c13e3f760289524a3ac5b2bf520738a92ddc5a2f",
    "sourceSnapshot": {
      "sha256": "e4dac0c1a6c17254b6a94612c237dabbb64464d67ebd4b64bbbc6b4e65d5656a",
      "files": 1467
    },
    "renderedAt": "2026-10-07T01:06:12.034Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chroma-slam/16x9-paper.png",
        "sha256": "7fbd2ca5d3368fa544ac6dd51d69d094a91ebad62ee3d919644fcac766d5d6f6"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chroma-slam/16x9-night.png",
        "sha256": "d8259f9070fb2e84cf36aa816d5165e38ff057e39cfed1948a9e69ca90b2f033"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chroma-slam/16x9-color.png",
        "sha256": "f0183173fa2224293749e226a2a71bf511e5cd5716c4eeea936c1c371b0b4d58"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chroma-slam/9x16-paper.png",
        "sha256": "b78c3bb4c2558bc2e6790ea07add9879cc22ba672723a8e51a9eeb2600f74013"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chroma-slam/9x16-night.png",
        "sha256": "7adbba4ed0bce67eed594910deb1a4eda6d3adfe85315d5351dbeed35fbd8f21"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chroma-slam/9x16-color.png",
        "sha256": "476ce7b0c8f7790750d56494486fcb9d27570ac043453fd7a2e98ace88eb57b7"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chroma-slam/1x1-paper.png",
        "sha256": "19c9704598eb6d2559e77753edef6b9afc1290faacfe5e2076cc363b98010433"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chroma-slam/1x1-night.png",
        "sha256": "a7c90348f847e05716a7b82f08c80c1915fc35accdc4119c4e617304bd0e27ef"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chroma-slam/1x1-color.png",
        "sha256": "54d870c5b01435917666c88245aab889ec2532730ba3d1057467bc4e56df73fb"
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
          "chroma-slam--16x9",
          "chroma-slam--9x16",
          "chroma-slam--1x1"
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
            "paperNight": 56.02197265625,
            "paperColor": 33.765299479166664,
            "region": {
              "left": 437,
              "top": 393,
              "width": 1065,
              "height": 305
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 45.841145833333336,
            "paperColor": 28.795301649305557,
            "region": {
              "left": 192,
              "top": 533,
              "width": 707,
              "height": 865
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 56.61859809027778,
            "paperColor": 33.088948567708336,
            "region": {
              "left": 245,
              "top": 457,
              "width": 600,
              "height": 172
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
            "occupancy": 0.4594808783370602,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.457534426236201,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.29971945026939106,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8645265966040052,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8645265966040052,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.6207573210611406,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.25971679824193056,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.25971679824193056,
            "bad": [],
            "measured": 2
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.16868935121678608,
            "bad": [],
            "measured": 2
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 13.806206597222221,
        "frames": [
          3,
          26,
          74
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 30,
            "averageChannelDifference": 13.806315104166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chroma-slam/16x9-duration-30-frame-3.png",
                "sha256": "a637125d8823b584677b8ae75a1911433e037769f5f204bb340fadfda72d9cfe",
                "alphaMass": 31758
              },
              {
                "frame": 26,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chroma-slam/16x9-duration-30-frame-26.png",
                "sha256": "149cb2a10ea8fca44548ee8938d7585d52f6f58fecae6d1ce8a6360e18a38324",
                "alphaMass": 18405
              },
              {
                "frame": 29,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chroma-slam/16x9-duration-30-frame-29.png",
                "sha256": "838c77c9b3d63df81edc4b3bb690fd4fb5c16b7386904d9e47eb4f129e87e020",
                "alphaMass": 18405
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 13.806206597222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chroma-slam/16x9-duration-600-frame-3.png",
                "sha256": "bf58725005ea96a9ced88b7c7f9d2a875ce02952b158b9e751eafb38e03110f9",
                "alphaMass": 31758
              },
              {
                "frame": 26,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chroma-slam/16x9-duration-600-frame-26.png",
                "sha256": "40a96dfd2f4c7d200e0931d980f7a58bf10c612b9decd16ebd7ef5be5e3d4dbb",
                "alphaMass": 18405
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chroma-slam/16x9-duration-600-frame-528.png",
                "sha256": "18936c8828c9651c9622bf2cb45d71ee12ae3f8bd77a540e16d70a28dbaeea64",
                "alphaMass": 18404
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chroma-slam/16x9-duration-600-frame-599.png",
                "sha256": "cd9445427f2866f4f3a4b5687576ef84f1509ae47b8e4d78328b8e1fa162895c",
                "alphaMass": 18404
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 30,
            "averageChannelDifference": 24.10796440972222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chroma-slam/9x16-duration-30-frame-3.png",
                "sha256": "e7c8a9cc7fea5b15d1cea9aa537cd0ba9b8ff3d4eea7e39c5569e67baaf99a0e",
                "alphaMass": 45170
              },
              {
                "frame": 26,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chroma-slam/9x16-duration-30-frame-26.png",
                "sha256": "d4f01639415ac3ddc339781d700e116591a53716a4e32dab2e45a390b31772db",
                "alphaMass": 26461
              },
              {
                "frame": 29,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chroma-slam/9x16-duration-30-frame-29.png",
                "sha256": "bdadcd3d8f391da8c347e1a0eaee416870cf9442d8e8e5e861004c59436ba0a0",
                "alphaMass": 26461
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 24.10796440972222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chroma-slam/9x16-duration-600-frame-3.png",
                "sha256": "33bb7e36de8fa048bfa9e7c67b358c7e948f9219c32f4b125deb9d145b2a4603",
                "alphaMass": 45170
              },
              {
                "frame": 26,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chroma-slam/9x16-duration-600-frame-26.png",
                "sha256": "5258763611d01a9ba7c7a653bf1aaa6ec3534012252785d5758f8c0c29178d55",
                "alphaMass": 26461
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chroma-slam/9x16-duration-600-frame-528.png",
                "sha256": "752dc9940931ef00de31ec98ffba43894b573af741b07667f1afd1f5bc586876",
                "alphaMass": 26461
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chroma-slam/9x16-duration-600-frame-599.png",
                "sha256": "966f2e0b98cabd494ac2bd6530800296a8e89134db3cf37c7796b6aecd1725de",
                "alphaMass": 26461
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 30,
            "averageChannelDifference": 13.816080729166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chroma-slam/1x1-duration-30-frame-3.png",
                "sha256": "26b43c29bdb4163ad50d494285cf452d8770ece2eabb88c2a7a09529fe018197",
                "alphaMass": 18114
              },
              {
                "frame": 26,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chroma-slam/1x1-duration-30-frame-26.png",
                "sha256": "1738f3d7bdf03948dde9473b714e1e7ff05b0467c0974c94e22d9722df09c8eb",
                "alphaMass": 10791
              },
              {
                "frame": 29,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chroma-slam/1x1-duration-30-frame-29.png",
                "sha256": "1738f3d7bdf03948dde9473b714e1e7ff05b0467c0974c94e22d9722df09c8eb",
                "alphaMass": 10791
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 13.816080729166666,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 3,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chroma-slam/1x1-duration-600-frame-3.png",
                "sha256": "26b43c29bdb4163ad50d494285cf452d8770ece2eabb88c2a7a09529fe018197",
                "alphaMass": 18114
              },
              {
                "frame": 26,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chroma-slam/1x1-duration-600-frame-26.png",
                "sha256": "1738f3d7bdf03948dde9473b714e1e7ff05b0467c0974c94e22d9722df09c8eb",
                "alphaMass": 10791
              },
              {
                "frame": 528,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chroma-slam/1x1-duration-600-frame-528.png",
                "sha256": "1738f3d7bdf03948dde9473b714e1e7ff05b0467c0974c94e22d9722df09c8eb",
                "alphaMass": 10791
              },
              {
                "frame": 599,
                "file": "/Users/serafimcloud/Documents/GitHub/21st-private-1/packages/video-kit/out/catalog-gates-claude-final-3/chroma-slam/1x1-duration-600-frame-599.png",
                "sha256": "1738f3d7bdf03948dde9473b714e1e7ff05b0467c0974c94e22d9722df09c8eb",
                "alphaMass": 10791
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
        "note": "Title slams in with a chromatic split, then settles with an underline; title card."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 24,
        "compared": 24,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "54c43af6a048a70561bfa9d3c13e3f760289524a3ac5b2bf520738a92ddc5a2f",
      "selectedBy": "claude-review, delegated by the repo owner (serafim) on 2026-10-06",
      "at": "2026-10-07T01:41:02.021737Z",
      "basis": "Frame-by-frame review of all 211 catalog candidates; publish/fix/drop list in docs/research/video-catalog-2026-10-06/review-2026-10-06.md"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/chroma-slam/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/chroma-slam/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/chroma-slam/16x9/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 26,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 75,
      "sha256": {
        "poster": "a219741a3b55d9f2e4bf2c93c7c3e09081e3612077ffafc2b90513df19cbe74e",
        "loop": "025ed50e00a77b9dfe15985605c6f2d4487b6f29570b3148fe1c65465cc5947c",
        "detail": "3d7f3379dbc7c4539e023d11592660757500fe16e9c2fd2e74e2b7770f74cb7e"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/chroma-slam/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/chroma-slam/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/chroma-slam/9x16/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 26,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 75,
      "sha256": {
        "poster": "5bc03dcf0020ec1f0d20f0ca0ea8c7c5e190b861380487a08c6bb971f7931cd9",
        "loop": "ff21d2e2ed7484f377132eb4712ab2bd1ae73513ede19ddc3f8598eedf74923c",
        "detail": "86ed4a075f6b38e56b579891df9360c47fe28cf34ef5ba094da5cef9bd6efada"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/chroma-slam/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/chroma-slam/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/chroma-slam/1x1/detail.mp4",
      "bg": "#0a0a0c",
      "posterFrame": 26,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 75,
      "sha256": {
        "poster": "c4f405d1e07cde4953fc60ff04c13c4bcfe53b8106d3736507ca478ba1d1b449",
        "loop": "bd4b1d0126bcef3f14a5d7652231266baa5a0375b82de092cc51131645933ec3",
        "detail": "b1b9b3c7b84e1fc7f2c3b69fcf4efabe8124f8aebf08519a2163e526c88ed55d"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/54c43af6a048a70561bfa9d3c13e3f760289524a3ac5b2bf520738a92ddc5a2f/index.mjs",
    "sha256": "54c43af6a048a70561bfa9d3c13e3f760289524a3ac5b2bf520738a92ddc5a2f",
    "bytes": 161375,
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
    "at": "2026-10-07T02:34:24.633Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
