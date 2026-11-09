// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "product-ui/craft",
  "job": "product-ui",
  "language": "product-ui",
  "mechanic": [
    "recursion"
  ],
  "tags": [
    "screenshot",
    "droste",
    "recursion",
    "infinite zoom",
    "escher",
    "spiral",
    "loop",
    "self-similar",
    "product ui",
    "screenshot loop"
  ],
  "engines": {
    "remotion": ">=4.0.479 <5"
  },
  "timing": {
    "fps": 30,
    "duration": {
      "default": 240,
      "min": 90,
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
    "safeArea": "action",
    "transparent": true,
    "backdrop": [
      "background"
    ]
  },
  "slots": [
    {
      "key": "image",
      "type": "image",
      "role": "screenshot"
    }
  ],
  "brand": {
    "color": "colors.text",
    "accent": "colors.primary",
    "secondary": "colors.secondary",
    "background": "colors.background"
  },
  "motionBeats": [
    {
      "target": "camera",
      "prop": "zoom",
      "settledBy": 0,
      "easing": "linear"
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
      240
    ]
  },
  "provenance": {
    "origin": "own",
    "license": "MIT",
    "sourceUrl": "21st first-party (screenshot holds itself inside itself, Escher-style Droste spiral zoom, 2026-10-08)"
  },
  "defaults": {
    "image": "",
    "color": "#0F2A22",
    "accent": "#0B7A5A",
    "secondary": "#F28F3B",
    "background": "#EAF2EF",
    "twist": 2,
    "anchorX": 0.7,
    "anchorY": 0.62,
    "ratio": 0.3,
    "cycles": 1,
    "grain": true
  },
  "fields": [
    {
      "key": "image",
      "label": "Image",
      "type": "asset",
      "role": "screenshot"
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
      "key": "twist",
      "label": "Twist",
      "type": "number",
      "step": 1,
      "min": 0,
      "max": 2
    },
    {
      "key": "anchorX",
      "label": "Anchor x",
      "type": "number",
      "min": 0,
      "max": 1
    },
    {
      "key": "anchorY",
      "label": "Anchor y",
      "type": "number",
      "min": 0,
      "max": 1
    },
    {
      "key": "ratio",
      "label": "Ratio",
      "type": "number",
      "min": 0.2,
      "max": 0.5
    },
    {
      "key": "cycles",
      "label": "Cycles",
      "type": "number",
      "step": 1,
      "min": 1,
      "max": 3
    },
    {
      "key": "grain",
      "label": "Grain",
      "type": "boolean"
    }
  ],
  "name": "Droste Loop",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "droste-recursion",
    "bundleSha256": "7a8a742c9ac6ddd945ea88b1e1664b3df91df9cb08391bc8baf6af4d7e4f7ca7",
    "sourceSnapshot": {
      "sha256": "9e35d3c82866b9e7d91cc05371dbb6a11d2baff6259c1f78edb0655aafd4ab0f",
      "files": 1818
    },
    "renderedAt": "2026-10-09T10:18:58.666Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/droste-recursion/16x9-paper.png",
        "sha256": "8039fd0aaa1e510dcb1f1e438ec43c1a60e8e48093b4987d3714c029faa6afe3"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/droste-recursion/16x9-night.png",
        "sha256": "5a1ad07f55fb7a0cdc2d9c21d00e29f0fd9de8d82711c253a20e87b8265cee4e"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/droste-recursion/16x9-color.png",
        "sha256": "9d601fe519a4189ae3ffcb122d0142dd4aea0e096a9f6ba536f662deead4478d"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/droste-recursion/9x16-paper.png",
        "sha256": "1583112a5c16670d56988f86480060a23074104fcd4d79de618f2b855e41225d"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/droste-recursion/9x16-night.png",
        "sha256": "21dfe2e481250aefc70eb92a7f9301da1977e38728ce4f859cc5fa4d01495e17"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/droste-recursion/9x16-color.png",
        "sha256": "62761c5dce11f8e33a9483355d660a67a5784ddc95f0173fc025d6cd8a3b3a76"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/droste-recursion/1x1-paper.png",
        "sha256": "3048f0f90132f73d5b94583b3e41eb0dfd4895193cd683f29af4be2e7919b0fc"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/droste-recursion/1x1-night.png",
        "sha256": "78b74de9dbb54f7246c0021552604b2517969fdf7f8e6bbde6aed35ec56e2076"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/droste-recursion/1x1-color.png",
        "sha256": "bdeda1785161bd7c463910ccdad03983266a61f2bb042f6440b124390882ba71"
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
          "droste-recursion--16x9",
          "droste-recursion--9x16",
          "droste-recursion--1x1"
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
            "paperNight": 16.537841796875,
            "paperColor": 7.502712673611111,
            "region": {
              "left": 0,
              "top": 0,
              "width": 1920,
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
            "paperNight": 16.826036241319443,
            "paperColor": 9.452392578125,
            "region": {
              "left": 0,
              "top": 15,
              "width": 1080,
              "height": 1720
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 14.669080946180555,
            "paperColor": 9.737603081597221,
            "region": {
              "left": 0,
              "top": 0,
              "width": 1080,
              "height": 1021
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
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.4172335600907033,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2489370748299322,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2696050642479217,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 1.2489370748299322,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3148778029730412,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3398106156042666,
            "bad": [],
            "measured": 0
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 1.3148778029730412,
            "bad": [],
            "measured": 0
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 17.34592013888889,
        "frames": [
          28,
          108,
          239
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 90,
            "averageChannelDifference": 17.361219618055557,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/droste-recursion/16x9-duration-90-frame-10.png",
                "sha256": "8fa8e5dd40eee1ed3c731effca35cab87848359d82782588fc4b183fe5294f0e",
                "alphaMass": 587520
              },
              {
                "frame": 40,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/droste-recursion/16x9-duration-90-frame-40.png",
                "sha256": "bca6c3d638e67493ea43bf2ac8c046ee76bffc6631bca515df8018f167a9c798",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/droste-recursion/16x9-duration-90-frame-79.png",
                "sha256": "8e8b29c5cc896f512343225af04288de92369c4b8ac6765f8c9c66cc100c40c1",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/droste-recursion/16x9-duration-90-frame-89.png",
                "sha256": "6ac053de2da21d6178829c5f52fa26ac4a0516533e375198728394ae7834d541",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 1800,
            "averageChannelDifference": 17.32769097222222,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 216,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/droste-recursion/16x9-duration-1800-frame-216.png",
                "sha256": "62e8bda62ec2ddb99f53bc246ae8a654020481ef7eea162de9dc7e428fe587f7",
                "alphaMass": 587520
              },
              {
                "frame": 810,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/droste-recursion/16x9-duration-1800-frame-810.png",
                "sha256": "7985f204a4aa79c7510066b956a7a9b0c27f543a6ebe228282cce08468c3f2ec",
                "alphaMass": 587520
              },
              {
                "frame": 1584,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/droste-recursion/16x9-duration-1800-frame-1584.png",
                "sha256": "8cb1a27295d22f742e446ce18ecd575318cfbf2c73ccb5116057aeed5ee2525a",
                "alphaMass": 587520
              },
              {
                "frame": 1799,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/droste-recursion/16x9-duration-1800-frame-1799.png",
                "sha256": "1369d100c6d1dcaa82b0ad30bf5d17e1c83ed150010ec120ba984c5be29c8dad",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 90,
            "averageChannelDifference": 14.35232204861111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/droste-recursion/9x16-duration-90-frame-10.png",
                "sha256": "fa38e49603041bfaff7a1c9e1c50f24271a5dd46a4cfee1f1fdc23e5eb2a1fcf",
                "alphaMass": 587520
              },
              {
                "frame": 40,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/droste-recursion/9x16-duration-90-frame-40.png",
                "sha256": "cb9cb15fd18187a01f9ec776fea14e465066a1467f9d3a757453d766581a734d",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/droste-recursion/9x16-duration-90-frame-79.png",
                "sha256": "c5a199ca89aa67490c9591215a3188105518b5519470a26bf85ad64d492a81ad",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/droste-recursion/9x16-duration-90-frame-89.png",
                "sha256": "03b993c0477973a926fa00563cdef7cb0ffcffc564a0d9d6f5e99b138cbdefa7",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 1800,
            "averageChannelDifference": 14.31955295138889,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 216,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/droste-recursion/9x16-duration-1800-frame-216.png",
                "sha256": "24821cc2b1cff556e091aa6237f2fd791b844330ffa487517caadb523917ec44",
                "alphaMass": 587520
              },
              {
                "frame": 810,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/droste-recursion/9x16-duration-1800-frame-810.png",
                "sha256": "da53823e25e6d9dfabbb48e192ec40746c671b97711ffa99c472904497fcdd82",
                "alphaMass": 587520
              },
              {
                "frame": 1584,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/droste-recursion/9x16-duration-1800-frame-1584.png",
                "sha256": "9323a44e4cb210ca22c9367cc5b23918464b59dce085784148ad51de8ff4b56a",
                "alphaMass": 587520
              },
              {
                "frame": 1799,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/droste-recursion/9x16-duration-1800-frame-1799.png",
                "sha256": "5876c3fa9f8f53f8555fa1dac1b0b9a462c55c542da3d56894255ef3e045da21",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 90,
            "averageChannelDifference": 18.19965277777778,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 10,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/droste-recursion/1x1-duration-90-frame-10.png",
                "sha256": "e3fcfc443b1ff77990c4f3a30db9032790ba2db717817e7709f48476585979d3",
                "alphaMass": 587520
              },
              {
                "frame": 40,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/droste-recursion/1x1-duration-90-frame-40.png",
                "sha256": "2a899ab421ce30bf3fcedea7ea474ecb8a5470972825783502dc29a91ac4697f",
                "alphaMass": 587520
              },
              {
                "frame": 79,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/droste-recursion/1x1-duration-90-frame-79.png",
                "sha256": "2f22db4e6f373a861f6a288dec305a469c05db8e35e4b26fdd71de10e0b40de7",
                "alphaMass": 587520
              },
              {
                "frame": 89,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/droste-recursion/1x1-duration-90-frame-89.png",
                "sha256": "ee48ed76c236a644c697987185596671b98a8bf5bef2d9d7552ea219e0cd17b0",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 1800,
            "averageChannelDifference": 18.17263454861111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 216,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/droste-recursion/1x1-duration-1800-frame-216.png",
                "sha256": "614cf9ed3f23aeaee8ef877a7cb8a50b06024e9e204c766181aca7d31b5a528c",
                "alphaMass": 587520
              },
              {
                "frame": 810,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/droste-recursion/1x1-duration-1800-frame-810.png",
                "sha256": "e12ba094b37ed9d6ec3d3020f65496744dc0c60ba0b461fa69adef2c17aad1e5",
                "alphaMass": 587520
              },
              {
                "frame": 1584,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/droste-recursion/1x1-duration-1800-frame-1584.png",
                "sha256": "6c44aa77c2bf5459c04c8b59ac9b5d4acf3c7b6b02bb8e6a4982058844ac32c5",
                "alphaMass": 587520
              },
              {
                "frame": 1799,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/catalog-gates-craft-20261009-121058/droste-recursion/1x1-duration-1800-frame-1799.png",
                "sha256": "31ea87568d78bb241baeb34e72f22c5b1d83b139c238a052886d32c0cbdaac3d",
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
        "note": "TitleMatches: The imagery in the first image and chronological motion samples (images 1-4) displays a clear Droste effect—each panel depicts a recursive visual loop where the interface/window appears within itself in a receding sequence. The structure and sampled motion (progressive warping and recursion) directly support the claimed 'Droste Loop' title, rather than relying on copy or label claims. \n\nnoBakedHeading: None of the images contain a decorative block-title, category, or language label embedded in the composition. Editable headings or UI content are not present as overlaid elements; all visible text appears within the interface mockup as legitimate content. \n\nbrandAdherence: Images five through seven show the same poster iterated through three visibly distinct palette treatments matching the supplied palette list (light/theme 1, dark/theme 2, and green/theme 3). In each, the Droste recursion, interface, and edge highlights are clearly visible and legible. All supplied palettes are represented; no unexplained fixed block colors are retained. Surface and accent treatments use appropriate colors from the palettes while preserving the original shapes and material.\n\nlanguageAdherence: The interface typesetting and surfaces remain clear and consistent across all versions, matching the supplied language card's requirements: flat surfaces, restrained elevation, evenly-lit and color-appropriate treatments, and sans-serif type. Across all palettes and the animated samples, there is no shift to decorative typesetting, headline overlays, or invented metrics. Thus, type roles and material consistency align with the language card evidence."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 58,
        "compared": 58,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "7a8a742c9ac6ddd945ea88b1e1664b3df91df9cb08391bc8baf6af4d7e4f7ca7",
      "selectedBy": "serafim (repo owner): publish every craft block that passes the gates and the creativity jury (2026-10-08)",
      "at": "2026-10-09T10:26:36.820Z",
      "basis": "Craft harness: passed the creativity jury against owner-liked anchors"
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/droste-recursion/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/droste-recursion/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/droste-recursion/16x9/detail.mp4",
      "bg": "#e3e9e2",
      "posterFrame": 0,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 240,
      "sha256": {
        "poster": "fb759a387fcd87a80f5a87c73c7af58520248dff4757b116d60af6afca8fad25",
        "loop": "7e0d224c272888bd51ea1b47a0d8c41fcf951c6a763f71cc3c54d46788314745",
        "detail": "defc4edd7a641de27b8fa08b1ad41d0aa9a57c2da7412f505a71448be0d9d609"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/droste-recursion/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/droste-recursion/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/droste-recursion/9x16/detail.mp4",
      "bg": "#e4e8e7",
      "posterFrame": 0,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 240,
      "sha256": {
        "poster": "aa66391ca076abc208468a3acdcc85a50bf455faecfda0766adac42047a10dcb",
        "loop": "c6504fef3dd3768b382bbc0989cd5f225565698daf27ab4e88cc45d536babe6a",
        "detail": "b049d7813a90abc5a26ff763daa267311945348b78b9dcae65e3b0124bf493e1"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/droste-recursion/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/droste-recursion/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/droste-recursion/1x1/detail.mp4",
      "bg": "#d4dadb",
      "posterFrame": 0,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 240,
      "sha256": {
        "poster": "ac021607bc521e73db3cf833d21d5cb211e4765e83d3e992271314d44411fb55",
        "loop": "e51ee6b0ddba59a3303aa26b5d9453bc1a4de9cd8000b90afdc6be031be73853",
        "detail": "f7f1e23a37e1e418355bb059bed8a1d22595e28445ad7bf276f6a42a34a91daa"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/7a8a742c9ac6ddd945ea88b1e1664b3df91df9cb08391bc8baf6af4d7e4f7ca7/index.mjs",
    "sha256": "7a8a742c9ac6ddd945ea88b1e1664b3df91df9cb08391bc8baf6af4d7e4f7ca7",
    "bytes": 65351,
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
    "at": "2026-10-09T10:39:05.249Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
