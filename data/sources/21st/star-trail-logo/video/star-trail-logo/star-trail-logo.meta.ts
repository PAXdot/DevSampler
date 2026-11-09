// Built with Remotion - https://remotion.pro/license
export const meta = {
  "spec": "21st.video/1",
  "kind": "scene",
  "category": "logos/craft",
  "job": "logos",
  "language": "aura",
  "mechanic": [
    "orbit"
  ],
  "tags": [
    "orbit",
    "trails",
    "long-exposure",
    "stars",
    "logo"
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
      "key": "logo",
      "type": "image",
      "role": "logo"
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
    "sourceUrl": "21st first-party (Star Trails to Logo, 2026-10-09)"
  },
  "defaults": {
    "primary": "#CFAF67",
    "secondary": "#67B9AD",
    "color": "#F2E8D1",
    "background": "#102329",
    "fontFamily": "DM Sans",
    "seed": 31,
    "logo": "",
    "caption": "Leave a lasting impression"
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
      "max": 38,
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
  "name": "Star Trails to Logo",
  "catalogGates": {
    "schema": "21st.video-catalog-gates/2",
    "ref": "star-trail-logo",
    "bundleSha256": "5e76fb9cd099467b19ab221ef9c08de646deb2a0a2ce256258adcd19514bf578",
    "sourceSnapshot": {
      "sha256": "136f455e69989d398a7f52ef2664d6cd965f6a6d4a284a1833f30ba8fcee6343",
      "files": 2037
    },
    "renderedAt": "2026-10-09T20:47:06.273Z",
    "samples": [
      {
        "aspect": "16:9",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T204247Z/gates/star-trail-logo/16x9-paper.png",
        "sha256": "058ef09480317ce952478b0a900e53733355e2fb423b34e8c930ccedcc7957e0"
      },
      {
        "aspect": "16:9",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T204247Z/gates/star-trail-logo/16x9-night.png",
        "sha256": "01d0bd1aeb129daeef9df3d81a8c2078e1fe70a9ef1209e6776ed4b6b7744924"
      },
      {
        "aspect": "16:9",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T204247Z/gates/star-trail-logo/16x9-color.png",
        "sha256": "1a1bc3639e2ba63d921a49ae550472b31c52c91f51cf85cbb39085d222a2614e"
      },
      {
        "aspect": "9:16",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T204247Z/gates/star-trail-logo/9x16-paper.png",
        "sha256": "58775314997e16117758525a3e7f49ce09f48767f3d777e6cb0109c0c7dc3271"
      },
      {
        "aspect": "9:16",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T204247Z/gates/star-trail-logo/9x16-night.png",
        "sha256": "40de8e411a5d1bf4f5f68ced309ddf3a22eaf04e298b7c3663be30ef31f3a0dc"
      },
      {
        "aspect": "9:16",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T204247Z/gates/star-trail-logo/9x16-color.png",
        "sha256": "9973207d8ff1d92bf2029f3bb4c2168918df5332483545c8e90ac7374af42231"
      },
      {
        "aspect": "1:1",
        "brand": "paper",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T204247Z/gates/star-trail-logo/1x1-paper.png",
        "sha256": "513819f902cb4bbc78eddb867de539fca1456219a951cbb52717d629fc9bb4c2"
      },
      {
        "aspect": "1:1",
        "brand": "night",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T204247Z/gates/star-trail-logo/1x1-night.png",
        "sha256": "1c3cf872d74766083aff1a1b49ce269a18075f1eb44a0eb1cb092c955a3824e8"
      },
      {
        "aspect": "1:1",
        "brand": "color",
        "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T204247Z/gates/star-trail-logo/1x1-color.png",
        "sha256": "ec106e31f26257de01c462a142f2250e164f7e7eff26162a0d4d6781cda825d9"
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
          "star-trail-logo--16x9",
          "star-trail-logo--9x16",
          "star-trail-logo--1x1"
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
            "paperNight": 33.69072808159722,
            "paperColor": 23.531331380208332,
            "region": {
              "left": 535,
              "top": 71,
              "width": 852,
              "height": 871
            },
            "canvas": {
              "width": 1920,
              "height": 1080
            }
          },
          {
            "aspect": "9:16",
            "pass": true,
            "paperNight": 34.80259874131944,
            "paperColor": 20.557237413194443,
            "region": {
              "left": 72,
              "top": 357,
              "width": 938,
              "height": 1419
            },
            "canvas": {
              "width": 1080,
              "height": 1920
            }
          },
          {
            "aspect": "1:1",
            "pass": true,
            "paperNight": 33.686767578125,
            "paperColor": 23.53021918402778,
            "region": {
              "left": 115,
              "top": 71,
              "width": 852,
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
            "occupancy": 0.5071941006340809,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5066117882338121,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "16:9",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.5002063518308559,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "paper",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.909707295340976,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "night",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.9090662049284737,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "9:16",
            "brand": "color",
            "pass": true,
            "minFont": 57.599999999999994,
            "occupancy": 0.8295709937781699,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "paper",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.901678401127255,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "night",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.9006431790823327,
            "bad": [],
            "measured": 1
          },
          {
            "aspect": "1:1",
            "brand": "color",
            "pass": true,
            "minFont": 19.439999999999998,
            "occupancy": 0.8892557365881882,
            "bad": [],
            "measured": 1
          }
        ]
      },
      "motion": {
        "pass": true,
        "averageChannelDifference": 3.9334852430555554,
        "frames": [
          20,
          135,
          179
        ],
        "elastic": [
          {
            "aspect": "16:9",
            "duration": 150,
            "averageChannelDifference": 3.9383680555555554,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T204247Z/gates/star-trail-logo/16x9-duration-150-frame-18.png",
                "sha256": "178a38530f8da8bc08c4d20beee98e7201d87bb758561597a74fc755e2da3bbc",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T204247Z/gates/star-trail-logo/16x9-duration-150-frame-135.png",
                "sha256": "c21b8610e7010071c14d21f5cae34e63cb579be23245e81fe39148c56381b34b",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T204247Z/gates/star-trail-logo/16x9-duration-150-frame-132.png",
                "sha256": "0d18fddeb95e8aca1394defc19330d8d489ebd379628dd334bed7b2280fc5ebf",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T204247Z/gates/star-trail-logo/16x9-duration-150-frame-149.png",
                "sha256": "c21b8610e7010071c14d21f5cae34e63cb579be23245e81fe39148c56381b34b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "16:9",
            "duration": 600,
            "averageChannelDifference": 3.9334852430555554,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T204247Z/gates/star-trail-logo/16x9-duration-600-frame-20.png",
                "sha256": "44a79d495194b5a43b294532778d671ed255c19b290da91d84a5d0216392528d",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T204247Z/gates/star-trail-logo/16x9-duration-600-frame-135.png",
                "sha256": "c21b8610e7010071c14d21f5cae34e63cb579be23245e81fe39148c56381b34b",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T204247Z/gates/star-trail-logo/16x9-duration-600-frame-528.png",
                "sha256": "c21b8610e7010071c14d21f5cae34e63cb579be23245e81fe39148c56381b34b",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T204247Z/gates/star-trail-logo/16x9-duration-600-frame-599.png",
                "sha256": "c21b8610e7010071c14d21f5cae34e63cb579be23245e81fe39148c56381b34b",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 150,
            "averageChannelDifference": 8.196723090277779,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T204247Z/gates/star-trail-logo/9x16-duration-150-frame-18.png",
                "sha256": "adde16661b2b68048f375c8eff8566392cc9b9064da4296475df3c0075e45340",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T204247Z/gates/star-trail-logo/9x16-duration-150-frame-135.png",
                "sha256": "31debed2b8122adc93bf0bb4a4b6a8068d351f669ca4814925a5aeee995aaf96",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T204247Z/gates/star-trail-logo/9x16-duration-150-frame-132.png",
                "sha256": "d7ccd17c7bc76df70edb6303ddc7d467aec2d4cab367f129459679e97e995102",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T204247Z/gates/star-trail-logo/9x16-duration-150-frame-149.png",
                "sha256": "31debed2b8122adc93bf0bb4a4b6a8068d351f669ca4814925a5aeee995aaf96",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "9:16",
            "duration": 600,
            "averageChannelDifference": 8.201497395833334,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T204247Z/gates/star-trail-logo/9x16-duration-600-frame-20.png",
                "sha256": "c8c2ce161e97fe3ca4b62c26746ec2d7c6eaa0905eb3295c03a440223cdd688e",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T204247Z/gates/star-trail-logo/9x16-duration-600-frame-135.png",
                "sha256": "31debed2b8122adc93bf0bb4a4b6a8068d351f669ca4814925a5aeee995aaf96",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T204247Z/gates/star-trail-logo/9x16-duration-600-frame-528.png",
                "sha256": "31debed2b8122adc93bf0bb4a4b6a8068d351f669ca4814925a5aeee995aaf96",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T204247Z/gates/star-trail-logo/9x16-duration-600-frame-599.png",
                "sha256": "31debed2b8122adc93bf0bb4a4b6a8068d351f669ca4814925a5aeee995aaf96",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 150,
            "averageChannelDifference": 7.081814236111111,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 18,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T204247Z/gates/star-trail-logo/1x1-duration-150-frame-18.png",
                "sha256": "041cfd5a88b276d001a0ef2f12ef94f0f4b153749fe4bce06bdcefbcc8ae430a",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T204247Z/gates/star-trail-logo/1x1-duration-150-frame-135.png",
                "sha256": "602ce1a84f2ea6abc83143bebbc240d57cf053559c6d2185d19c98dedd6a1778",
                "alphaMass": 587520
              },
              {
                "frame": 132,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T204247Z/gates/star-trail-logo/1x1-duration-150-frame-132.png",
                "sha256": "8240b92c170a130f40fae8d5d2706a6b3a196e3976886d1eeff48e6626895bc9",
                "alphaMass": 587520
              },
              {
                "frame": 149,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T204247Z/gates/star-trail-logo/1x1-duration-150-frame-149.png",
                "sha256": "602ce1a84f2ea6abc83143bebbc240d57cf053559c6d2185d19c98dedd6a1778",
                "alphaMass": 587520
              }
            ]
          },
          {
            "aspect": "1:1",
            "duration": 600,
            "averageChannelDifference": 7.084852430555555,
            "retainedAlpha": 1,
            "pass": true,
            "samples": [
              {
                "frame": 20,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T204247Z/gates/star-trail-logo/1x1-duration-600-frame-20.png",
                "sha256": "878ae662869ea4a6a478d32e17570e838aa8baddd7fccc52f71c76b474744328",
                "alphaMass": 587520
              },
              {
                "frame": 135,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T204247Z/gates/star-trail-logo/1x1-duration-600-frame-135.png",
                "sha256": "602ce1a84f2ea6abc83143bebbc240d57cf053559c6d2185d19c98dedd6a1778",
                "alphaMass": 587520
              },
              {
                "frame": 528,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T204247Z/gates/star-trail-logo/1x1-duration-600-frame-528.png",
                "sha256": "602ce1a84f2ea6abc83143bebbc240d57cf053559c6d2185d19c98dedd6a1778",
                "alphaMass": 587520
              },
              {
                "frame": 599,
                "file": "/Users/m1/craft/build/packages/video-kit/out/creative/resume-20261009T204247Z/gates/star-trail-logo/1x1-duration-600-frame-599.png",
                "sha256": "602ce1a84f2ea6abc83143bebbc240d57cf053559c6d2185d19c98dedd6a1778",
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
        "note": "TitleMatches: The poster and the three chronological frames support the 'Star Trails to Logo' title; we see isolated star trails in a circular pattern that gradually form into a central star logo. This transformation is evident frame-by-frame, with the logo not present in the initial motion, then appearing, matching the title's claim.\n\nnoBakedHeading: No decorative, unexplained, or generic category/title heading is visible in any image. The only heading is the caption ('Leave a lasting impression'), which matches the named-slot content provided and is clearly intended as the editable message, not a block title.\n\nbrandAdherence: The final three images show the same composition with varied palettes corresponding to the provided brand swatches. Each is fully legible, preserving icon and text shape. The colors correctly match each supplied palette, and no unexplained fixed block colors persist; artwork is recolored appropriately.\n\nlanguageAdherence: The soft star trails (ambient field), sharp isolated star (subject/ink), and color/contrast (accent/ambient) remain consistent with the language card material and palette guidance. Type and color roles persist correctly across all rebrands and sampled motion. Motion samples visibly follow verbs like 'reveal' (star emerging from trails) and 'focus' (clarity increases), and the structure never includes forbidden elements (blurred copy, rainbow palettes, UI skeleton)."
      },
      "duplicates": {
        "pass": true,
        "threshold": 0.97,
        "required": 39,
        "compared": 39,
        "matches": []
      }
    },
    "pass": true,
    "humanSelection": {
      "selected": true,
      "bundleSha256": "5e76fb9cd099467b19ab221ef9c08de646deb2a0a2ce256258adcd19514bf578",
      "selectedBy": "Owner-authorized continuation, executed by Codex",
      "at": "2026-10-09T21:05:22.094Z",
      "basis": "Resumed the owner's request to publish craft blocks that pass catalog gates and the blind creativity jury"
    },
    "creativityReview": {
      "ref": "star-trail-logo",
      "vsPositive": 1,
      "vsNegative": 1,
      "fakeVotes": 0,
      "perModel": {
        "claude": {
          "vsPositive": 1,
          "vsNegative": 1
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
      "framesSha256": "f2b6cd634c67c3f0b0da5eb27b499e6a356e8a7fb86b45d01d573149417b3e38",
      "bundleSha256": "5e76fb9cd099467b19ab221ef9c08de646deb2a0a2ce256258adcd19514bf578",
      "pass": true
    }
  },
  "renditions": {
    "16:9": {
      "poster": "https://cdn.21st.dev/video-previews/star-trail-logo/16x9/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/star-trail-logo/16x9/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/star-trail-logo/16x9/detail.mp4",
      "bg": "#102329",
      "posterFrame": 135,
      "size": [
        1920,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "471a5d28e119ea6e4310bfc187b03b039052c9fde2be79dfb67e90b1ace14ebc",
        "loop": "8214843c593f4b73fa5f83982aaa38a3a4461d0ac80942833fb85618a022b423",
        "detail": "5a778fe04306f6e635273b7028480458db70d7ac0410942b11b67c105ee1d5be"
      }
    },
    "9:16": {
      "poster": "https://cdn.21st.dev/video-previews/star-trail-logo/9x16/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/star-trail-logo/9x16/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/star-trail-logo/9x16/detail.mp4",
      "bg": "#102329",
      "posterFrame": 135,
      "size": [
        1080,
        1920
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "308f0045e81b7f472fe9030bf0693fe8b853cc62d6afe214d179e1fb7634796d",
        "loop": "b97edec856191fb22b052f3ad52d498ed4b5c424e39a4e3a16188cd97be50ca8",
        "detail": "422426b317ac692779f85b77554b57559061b19d194e869505479799fa98bebb"
      }
    },
    "1:1": {
      "poster": "https://cdn.21st.dev/video-previews/star-trail-logo/1x1/poster.jpg",
      "loop": "https://cdn.21st.dev/video-previews/star-trail-logo/1x1/loop.mp4",
      "detail": "https://cdn.21st.dev/video-previews/star-trail-logo/1x1/detail.mp4",
      "bg": "#102329",
      "posterFrame": 135,
      "size": [
        1080,
        1080
      ],
      "durationInFrames": 180,
      "sha256": {
        "poster": "847d7f26e2434c953700fbb5071115af5a23dfe7a1f06d63586804fd1fdb3a37",
        "loop": "5b5e6c33359ad34fcb8fccdca5c00fa21d977784478ec221eaeccaf5d4c6d5a2",
        "detail": "8b7a9be7a0e89438aad8f95d651a222a516ddd1191ec1a25167c7e72edc1fce0"
      }
    }
  },
  "bundle": {
    "url": "https://cdn.21st.dev/video-bundles/5e76fb9cd099467b19ab221ef9c08de646deb2a0a2ce256258adcd19514bf578/index.mjs",
    "sha256": "5e76fb9cd099467b19ab221ef9c08de646deb2a0a2ce256258adcd19514bf578",
    "bytes": 160208,
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
    "at": "2026-10-09T21:09:13.357Z",
    "kit": "0.1.0",
    "licenseKeyPresent": false
  }
};
