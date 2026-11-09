// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "gallery/craft",
  "job": "gallery",
  "language": "photo-collage",
  "mechanic": [
    "cylinder"
  ],
  "tags": [
    "cylinder",
    "carousel",
    "rotation",
    "gallery"
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
      "key": "photo",
      "type": "image",
      "role": "image"
    },
    {
      "key": "image",
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
    "sourceUrl": "21st first-party (Image Carousel Drum, 2026-10-09)"
  },
  "defaults": {
    "primary": "#A9402C",
    "secondary": "#C6A65F",
    "color": "#29362F",
    "background": "#F4F0E5",
    "fontFamily": "DM Sans",
    "seed": 31,
    "image": "",
    "photo": "",
    "caption": "Keep the ideas turning"
  },
  "fields": [
    {
      "key": "image",
      "label": "Image",
      "type": "asset",
      "role": "image"
    },
    {
      "key": "photo",
      "label": "Photo",
      "type": "asset",
      "role": "image"
    },
    {
      "key": "caption",
      "label": "Caption",
      "type": "text",
      "max": 36,
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
  "name": "Image Carousel Drum",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "infinite-loop-cylinder",
    "bundleSha256": "9ef947e9b6f94d6c8365897be2000b08e6a00c0f25236d3e5c84eda769dac03e",
    "sourceSnapshot": {
      "sha256": "c47c5ab6a2d4c2ace1617a542efbf08f9b9f6ed2dd9c899fd982fbfc0b4c400e",
      "files": 2133
    },
    "renderedAt": "2026-10-09T22:04:46.882Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/infinite-loop-cylinder/16x9-paper.png",
        "sha256": "b052de34d107824b856e63c9279fead507051f83968d543afe769d07d4f13dd4"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/infinite-loop-cylinder/16x9-night.png",
        "sha256": "61c73f5b19fa5b73fabc86011c529c71dcae68527855aeab3a5db3840f574b04"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/infinite-loop-cylinder/16x9-color.png",
        "sha256": "e846826a2ada38a59f9dfe0e121b89dc8add187fa6177914398ea939e004244c"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/infinite-loop-cylinder/9x16-paper.png",
        "sha256": "8efb8698a54b9481948bb2c4e8b8d5a480ae4d4bc48ff13e8931a6d0679d68a4"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/infinite-loop-cylinder/9x16-night.png",
        "sha256": "46d389f6f6aa2fa8baf1f8af1452e33167aefdc903303af2755a436f685584e7"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/infinite-loop-cylinder/9x16-color.png",
        "sha256": "1d4d3a6f838aa4b73ad64e00dbca5716cc47e297052fd2445deb1a7d617e0e3b"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/infinite-loop-cylinder/1x1-paper.png",
        "sha256": "0548a72191406ae2eedb84dae01688dd94ff50c863211b5f4d4688f7b34ff3bf"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/infinite-loop-cylinder/1x1-night.png",
        "sha256": "8bc4ef47383b81eae9c1462347281ff4093e12716123dae730f849e0803f0f56"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/infinite-loop-cylinder/1x1-color.png",
        "sha256": "a73d795d86bb97ee29175c0780975f84209a5a233b7c4d2439e029d6fa02bc75"
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
          "infinite-loop-cylinder--16x9",
          "infinite-loop-cylinder--9x16",
          "infinite-loop-cylinder--1x1"
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
            "paperNight": 26.236707899305557,
            "paperColor": 8.992133246527779,
            "region": {
              "left": 236,
              "top": 79,
              "width": 1448,
              "height": 906
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 25.63552517361111,
            "paperColor": 8.629801432291666,
            "region": {
              "left": 106,
              "top": 272,
              "width": 872,
              "height": 1583
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 30.900716145833332,
            "paperColor": 10.134114583333334,
            "region": {
              "left": 133,
              "top": 79,
              "width": 814,
              "height": 906
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
            "occupancy": 0.8966298710842363,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8966298710842363,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8857436364463482,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8820529240502787,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8417380423105458,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.7752710459183675,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8960794537293657,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8960794537293657,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8851999018628944,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 7.329969618055555,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 7.858289930555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/infinite-loop-cylinder/16x9-duration-150-frame-18.png",
                "sha256": "d1339df81db46b25943649cae19877668d55b19f6944a17e4f8a7ed116a89b83",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/infinite-loop-cylinder/16x9-duration-150-frame-135.png",
                "sha256": "42c6f555732bf6884608b9d17f986450176b9ac6ef203199e2f008d3d415ba2a",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/infinite-loop-cylinder/16x9-duration-150-frame-132.png",
                "sha256": "42c6f555732bf6884608b9d17f986450176b9ac6ef203199e2f008d3d415ba2a",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/infinite-loop-cylinder/16x9-duration-150-frame-149.png",
                "sha256": "42c6f555732bf6884608b9d17f986450176b9ac6ef203199e2f008d3d415ba2a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 7.329969618055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/infinite-loop-cylinder/16x9-duration-600-frame-20.png",
                "sha256": "c9195d2ea5bf00d924ae1c8e56a6f7ef7ddc91260bed9226c767231212eaf144",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/infinite-loop-cylinder/16x9-duration-600-frame-135.png",
                "sha256": "42c6f555732bf6884608b9d17f986450176b9ac6ef203199e2f008d3d415ba2a",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/infinite-loop-cylinder/16x9-duration-600-frame-528.png",
                "sha256": "42c6f555732bf6884608b9d17f986450176b9ac6ef203199e2f008d3d415ba2a",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/infinite-loop-cylinder/16x9-duration-600-frame-599.png",
                "sha256": "42c6f555732bf6884608b9d17f986450176b9ac6ef203199e2f008d3d415ba2a",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 9.185112847222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/infinite-loop-cylinder/9x16-duration-150-frame-18.png",
                "sha256": "0bc9c972811adb912567b92de26149ef213461a6478fe836a61792c112b63bcd",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/infinite-loop-cylinder/9x16-duration-150-frame-135.png",
                "sha256": "7760edb4b7710ba525c638a0f9b63ca9c5ae2bcd44afcd9f708224843729f7ec",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/infinite-loop-cylinder/9x16-duration-150-frame-132.png",
                "sha256": "7760edb4b7710ba525c638a0f9b63ca9c5ae2bcd44afcd9f708224843729f7ec",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/infinite-loop-cylinder/9x16-duration-150-frame-149.png",
                "sha256": "7760edb4b7710ba525c638a0f9b63ca9c5ae2bcd44afcd9f708224843729f7ec",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 8.580620659722221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/infinite-loop-cylinder/9x16-duration-600-frame-20.png",
                "sha256": "7afbd24ea705004c3d3f48a5aab21a36b255a0a92d0b045a61a03819db22879f",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/infinite-loop-cylinder/9x16-duration-600-frame-135.png",
                "sha256": "7760edb4b7710ba525c638a0f9b63ca9c5ae2bcd44afcd9f708224843729f7ec",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/infinite-loop-cylinder/9x16-duration-600-frame-528.png",
                "sha256": "7760edb4b7710ba525c638a0f9b63ca9c5ae2bcd44afcd9f708224843729f7ec",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/infinite-loop-cylinder/9x16-duration-600-frame-599.png",
                "sha256": "7760edb4b7710ba525c638a0f9b63ca9c5ae2bcd44afcd9f708224843729f7ec",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 10.144097222222221,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/infinite-loop-cylinder/1x1-duration-150-frame-18.png",
                "sha256": "90ae8978c45c987c8b4395db9eda11968a44d3b69cd881e6800ab7d54f0bdd1d",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/infinite-loop-cylinder/1x1-duration-150-frame-135.png",
                "sha256": "e72f32891094361ada53e5b4914929cd7f2263813697fd3deb9c1b1be9681fd0",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/infinite-loop-cylinder/1x1-duration-150-frame-132.png",
                "sha256": "e72f32891094361ada53e5b4914929cd7f2263813697fd3deb9c1b1be9681fd0",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/infinite-loop-cylinder/1x1-duration-150-frame-149.png",
                "sha256": "e72f32891094361ada53e5b4914929cd7f2263813697fd3deb9c1b1be9681fd0",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 8.835828993055555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/infinite-loop-cylinder/1x1-duration-600-frame-20.png",
                "sha256": "4223a6236fe750bf49fa06944763299a9e2166bb1e58be66903b1eb6b537b724",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/infinite-loop-cylinder/1x1-duration-600-frame-135.png",
                "sha256": "e72f32891094361ada53e5b4914929cd7f2263813697fd3deb9c1b1be9681fd0",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/infinite-loop-cylinder/1x1-duration-600-frame-528.png",
                "sha256": "e72f32891094361ada53e5b4914929cd7f2263813697fd3deb9c1b1be9681fd0",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/pub/packages/video-kit/out/creative/resume-20261009T215019Z/gates/infinite-loop-cylinder/1x1-duration-600-frame-599.png",
                "sha256": "e72f32891094361ada53e5b4914929cd7f2263813697fd3deb9c1b1be9681fd0",
                "alphaMass": 587520
              }
            ]
          }
        ],
        "note": "Measured motion and final alpha retention at min/max in all three formats; sampled frames do not certify full playback."
      },
      "semantic": {
        "pass": true,
        "recognizedJob": "gallery",
        "titleMatches": true,
        "noBakedHeading": true,
        "brandAdherence": true,
        "languageAdherence": true,
        "note": "titleMatches: The subject of all images is a graphical carousel of three interface cards/windows depicted as rotating horizontally around a center axis, visually supporting the claimed 'Image Carousel Drum' title. The three chronological samples (images 2-4) show consistent changes in which card is foremost, simulating carousel rotation. noBakedHeading: There is no unnecessary block title, logo, or language label baked into the composition; all visible headings ('Keep the ideas turning') match named-slot content and are placed as main captions. brandAdherence: Images five to seven display the same design with three distinct palette applications: (5) beige/pink, (6) navy/green, (7) mint/blue—these match the supplied palettes for primary, secondary, text, and background. UI shapes and hierarchy remain unchanged, and borders/shadows accurately reflect palette changes with no unexplained fixed colors. All variants are legible and preserve layout clarity. languageAdherence: Across all variants, the use of materials (window cards with implied depth), typographic structure, and color roles remain consistent, adhering to the language card's stated roles ('matte board' background, clear type hierarchy, etc.). No inconsistencies or forbidden elements are visible. Motion samples ('reveal', 'stack', 'crop') are honored by the changing stack depth and arrangement in the carousel effect."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 22,
        "compared": 22,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "9ef947e9b6f94d6c8365897be2000b08e6a00c0f25236d3e5c84eda769dac03e",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T22:37:02.714Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "infinite-loop-cylinder",
      "vsPositive": 0.6666666666666666,
      "vsNegative": 0.9166666666666666,
      "fakeVotes": 0.1875,
      "perModel": {
        "claude": {
          "vsPositive": 0.5,
          "vsNegative": 0.75
        },
        "gpt": {
          "vsPositive": 1,
          "vsNegative": 1
        },
        "gemini": {
          "vsPositive": 0.5,
          "vsNegative": 1
        }
      },
      "errors": 0,
      "calls": 48,
      "complete": true,
      "framesSha256": "dd7733cc9659bec34dc64ff9f93227ce3ab6b593d454862d2d1d2ee9ce9ba2ca",
      "bundleSha256": "9ef947e9b6f94d6c8365897be2000b08e6a00c0f25236d3e5c84eda769dac03e",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/infinite-loop-cylinder/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/infinite-loop-cylinder/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/infinite-loop-cylinder/16x9/detail.mp4",
      "bg": "#f4f0e5",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "01a39ba409072f2f333d3cce27bfce9790cfea83c0013a01c5f5952a15f42776",
        "loop": "8a7fb2c6f5ef5bf85208a64ccdf7fb24446e0a033e42d316aa9582afa75b61cd",
        "detail": "a3055d6fadcbb4007a24ea38a5099cfe2092ad9855132efcdfe0f9554eacf04d"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/infinite-loop-cylinder/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/infinite-loop-cylinder/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/infinite-loop-cylinder/9x16/detail.mp4",
      "bg": "#f4f0e5",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "08b5a1a80e9babc018a552d9226d065510932472438f84e64bc43e4652e4b3ce",
        "loop": "121966105b0be0b8eb55d3233f4af231716fcaca3696315e4aa3686ef1b2428a",
        "detail": "b36e0f6896221906c8065387d7fcfcc1294c1626c9e619e4e5f67efb1d45f9b1"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/infinite-loop-cylinder/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/infinite-loop-cylinder/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/infinite-loop-cylinder/1x1/detail.mp4",
      "bg": "#f4f0e5",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "8c5c751e0b5cc2302a5c750d78143d970eaa6e7a6ebd75599de40a262927007e",
        "loop": "eb1cbb1ed62c3a2a755343c269e4f064a9187bffad1e5d38b70ce12445885028",
        "detail": "96a54d956027d08ff9325280d6294a2b3d6066aacb392fbd0ea2b70aa8bc341e"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/9ef947e9b6f94d6c8365897be2000b08e6a00c0f25236d3e5c84eda769dac03e/index.mjs",
    "sha256": "9ef947e9b6f94d6c8365897be2000b08e6a00c0f25236d3e5c84eda769dac03e",
    "bytes": 164432,
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
    "at": "2026-10-09T22:43:00.983Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
