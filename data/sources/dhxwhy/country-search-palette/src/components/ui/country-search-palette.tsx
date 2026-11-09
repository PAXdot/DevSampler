"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import createGlobe from "cobe";
import type { Globe } from "cobe";
import { Check, Clock3, Globe2, History, Search, X } from "lucide-react";
import * as Flags from "country-flag-icons/react/3x2";

export interface CountryOption {
  /** ISO 3166-1 alpha-2 code, e.g. "KR". */
  code: string;
  name: string;
  /** Extra search terms, e.g. ["UK", "Britain"]. */
  keywords?: string[];
}

export type Continent = "Africa" | "Americas" | "Asia" | "Europe" | "Oceania";

export interface CountrySearchPaletteProps {
  /** Selected ISO code (controlled). */
  value?: string | null;
  /** Initially selected ISO code when `value` is not controlled. */
  defaultValue?: string | null;
  onValueChange?: (code: string, country: CountryOption) => void;
  /** Replace the built-in list of 250 countries and territories. */
  countries?: CountryOption[];
  /** Codes pinned to the top while the search box is empty. */
  suggested?: string[];
  /** Suggest the country from the browser's language settings, e.g. ko-KR → South Korea. */
  detectRegion?: boolean;
  /** Continent filter chips (UN M49 regions as published by Unicode CLDR). */
  showContinents?: boolean;
  /** A globe that turns to the highlighted country. Without WebGL the flag is shown instead. */
  showGlobe?: boolean;
  /** Recent picks kept at the top while the search box is empty. 0 turns them off. */
  recentLimit?: number;
  /** Search text (controlled). */
  search?: string;
  onSearchChange?: (search: string) => void;
  /** Trigger text while nothing is selected. */
  placeholder?: string;
  searchPlaceholder?: string;
  /** Open with ⌘K / Ctrl+K. */
  shortcut?: boolean;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
  /** React 19 passes `ref` as a regular prop; it points at the trigger button. */
  ref?: React.ComponentProps<"button">["ref"];
}

type FlagSvg = (props: React.ComponentProps<"svg">) => React.ReactNode;
type FlagTable = { [code: string]: FlagSvg | undefined };
type RGB = [number, number, number];
type LatLng = [number, number];

type CountryRow = [code: string, name: string, keywords?: string[]];

// English short names from CLDR (Intl.DisplayNames), plus everyday aliases.
const COUNTRY_ROWS: CountryRow[] = [
  ["AD", "Andorra"],
  ["AE", "United Arab Emirates", ["UAE","Emirates"]],
  ["AF", "Afghanistan"],
  ["AG", "Antigua & Barbuda"],
  ["AI", "Anguilla"],
  ["AL", "Albania"],
  ["AM", "Armenia"],
  ["AO", "Angola"],
  ["AQ", "Antarctica"],
  ["AR", "Argentina"],
  ["AS", "American Samoa"],
  ["AT", "Austria"],
  ["AU", "Australia"],
  ["AW", "Aruba"],
  ["AX", "Åland Islands"],
  ["AZ", "Azerbaijan"],
  ["BA", "Bosnia & Herzegovina"],
  ["BB", "Barbados"],
  ["BD", "Bangladesh"],
  ["BE", "Belgium"],
  ["BF", "Burkina Faso"],
  ["BG", "Bulgaria"],
  ["BH", "Bahrain"],
  ["BI", "Burundi"],
  ["BJ", "Benin"],
  ["BL", "St. Barthélemy"],
  ["BM", "Bermuda"],
  ["BN", "Brunei"],
  ["BO", "Bolivia"],
  ["BQ", "Caribbean Netherlands", ["Bonaire"]],
  ["BR", "Brazil", ["Brasil"]],
  ["BS", "Bahamas"],
  ["BT", "Bhutan"],
  ["BV", "Bouvet Island"],
  ["BW", "Botswana"],
  ["BY", "Belarus"],
  ["BZ", "Belize"],
  ["CA", "Canada"],
  ["CC", "Cocos (Keeling) Islands"],
  ["CD", "Congo - Kinshasa", ["DRC","Democratic Republic of the Congo"]],
  ["CF", "Central African Republic"],
  ["CG", "Congo - Brazzaville", ["Republic of the Congo"]],
  ["CH", "Switzerland", ["Schweiz","Suisse"]],
  ["CI", "Côte d'Ivoire", ["Ivory Coast"]],
  ["CK", "Cook Islands"],
  ["CL", "Chile"],
  ["CM", "Cameroon"],
  ["CN", "China", ["PRC"]],
  ["CO", "Colombia"],
  ["CR", "Costa Rica"],
  ["CU", "Cuba"],
  ["CV", "Cape Verde", ["Cabo Verde"]],
  ["CW", "Curaçao"],
  ["CX", "Christmas Island"],
  ["CY", "Cyprus"],
  ["CZ", "Czechia", ["Czech Republic"]],
  ["DE", "Germany", ["Deutschland"]],
  ["DJ", "Djibouti"],
  ["DK", "Denmark"],
  ["DM", "Dominica"],
  ["DO", "Dominican Republic"],
  ["DZ", "Algeria"],
  ["EC", "Ecuador"],
  ["EE", "Estonia"],
  ["EG", "Egypt"],
  ["EH", "Western Sahara", ["Sahrawi"]],
  ["ER", "Eritrea"],
  ["ES", "Spain", ["España"]],
  ["ET", "Ethiopia"],
  ["FI", "Finland"],
  ["FJ", "Fiji"],
  ["FK", "Falkland Islands"],
  ["FM", "Micronesia", ["Federated States of Micronesia"]],
  ["FO", "Faroe Islands"],
  ["FR", "France"],
  ["GA", "Gabon"],
  ["GB", "United Kingdom", ["UK","Britain","England"]],
  ["GD", "Grenada"],
  ["GE", "Georgia"],
  ["GF", "French Guiana"],
  ["GG", "Guernsey"],
  ["GH", "Ghana"],
  ["GI", "Gibraltar"],
  ["GL", "Greenland"],
  ["GM", "Gambia"],
  ["GN", "Guinea"],
  ["GP", "Guadeloupe"],
  ["GQ", "Equatorial Guinea"],
  ["GR", "Greece"],
  ["GS", "South Georgia & South Sandwich Islands"],
  ["GT", "Guatemala"],
  ["GU", "Guam"],
  ["GW", "Guinea-Bissau"],
  ["GY", "Guyana"],
  ["HK", "Hong Kong SAR China", ["Hong Kong"]],
  ["HM", "Heard & McDonald Islands"],
  ["HN", "Honduras"],
  ["HR", "Croatia"],
  ["HT", "Haiti"],
  ["HU", "Hungary"],
  ["ID", "Indonesia"],
  ["IE", "Ireland"],
  ["IL", "Israel"],
  ["IM", "Isle of Man"],
  ["IN", "India"],
  ["IO", "British Indian Ocean Territory"],
  ["IQ", "Iraq"],
  ["IR", "Iran", ["Persia"]],
  ["IS", "Iceland"],
  ["IT", "Italy"],
  ["JE", "Jersey"],
  ["JM", "Jamaica"],
  ["JO", "Jordan"],
  ["JP", "Japan", ["Nippon"]],
  ["KE", "Kenya"],
  ["KG", "Kyrgyzstan"],
  ["KH", "Cambodia"],
  ["KI", "Kiribati"],
  ["KM", "Comoros"],
  ["KN", "St. Kitts & Nevis"],
  ["KP", "North Korea", ["DPRK"]],
  ["KR", "South Korea", ["Korea"]],
  ["KW", "Kuwait"],
  ["KY", "Cayman Islands"],
  ["KZ", "Kazakhstan"],
  ["LA", "Laos", ["Lao"]],
  ["LB", "Lebanon"],
  ["LC", "St. Lucia"],
  ["LI", "Liechtenstein"],
  ["LK", "Sri Lanka"],
  ["LR", "Liberia"],
  ["LS", "Lesotho"],
  ["LT", "Lithuania"],
  ["LU", "Luxembourg"],
  ["LV", "Latvia"],
  ["LY", "Libya"],
  ["MA", "Morocco"],
  ["MC", "Monaco"],
  ["MD", "Moldova"],
  ["ME", "Montenegro"],
  ["MF", "St. Martin"],
  ["MG", "Madagascar"],
  ["MH", "Marshall Islands"],
  ["MK", "North Macedonia", ["Macedonia"]],
  ["ML", "Mali"],
  ["MM", "Myanmar (Burma)", ["Burma"]],
  ["MN", "Mongolia"],
  ["MO", "Macao SAR China", ["Macau"]],
  ["MP", "Northern Mariana Islands"],
  ["MQ", "Martinique"],
  ["MR", "Mauritania"],
  ["MS", "Montserrat"],
  ["MT", "Malta"],
  ["MU", "Mauritius"],
  ["MV", "Maldives"],
  ["MW", "Malawi"],
  ["MX", "Mexico"],
  ["MY", "Malaysia"],
  ["MZ", "Mozambique"],
  ["NA", "Namibia"],
  ["NC", "New Caledonia"],
  ["NE", "Niger"],
  ["NF", "Norfolk Island"],
  ["NG", "Nigeria"],
  ["NI", "Nicaragua"],
  ["NL", "Netherlands", ["Holland"]],
  ["NO", "Norway"],
  ["NP", "Nepal"],
  ["NR", "Nauru"],
  ["NU", "Niue"],
  ["NZ", "New Zealand"],
  ["OM", "Oman"],
  ["PA", "Panama"],
  ["PE", "Peru"],
  ["PF", "French Polynesia"],
  ["PG", "Papua New Guinea"],
  ["PH", "Philippines"],
  ["PK", "Pakistan"],
  ["PL", "Poland"],
  ["PM", "St. Pierre & Miquelon"],
  ["PN", "Pitcairn Islands"],
  ["PR", "Puerto Rico"],
  ["PS", "Palestinian Territories", ["Palestine"]],
  ["PT", "Portugal"],
  ["PW", "Palau"],
  ["PY", "Paraguay"],
  ["QA", "Qatar"],
  ["RE", "Réunion"],
  ["RO", "Romania"],
  ["RS", "Serbia"],
  ["RU", "Russia", ["Russian Federation"]],
  ["RW", "Rwanda"],
  ["SA", "Saudi Arabia"],
  ["SB", "Solomon Islands"],
  ["SC", "Seychelles"],
  ["SD", "Sudan"],
  ["SE", "Sweden"],
  ["SG", "Singapore"],
  ["SH", "St. Helena", ["Saint Helena"]],
  ["SI", "Slovenia"],
  ["SJ", "Svalbard & Jan Mayen"],
  ["SK", "Slovakia"],
  ["SL", "Sierra Leone"],
  ["SM", "San Marino"],
  ["SN", "Senegal"],
  ["SO", "Somalia"],
  ["SR", "Suriname"],
  ["SS", "South Sudan"],
  ["ST", "São Tomé & Príncipe"],
  ["SV", "El Salvador"],
  ["SX", "Sint Maarten"],
  ["SY", "Syria", ["Syrian Arab Republic"]],
  ["SZ", "Eswatini", ["Swaziland"]],
  ["TC", "Turks & Caicos Islands"],
  ["TD", "Chad"],
  ["TF", "French Southern Territories"],
  ["TG", "Togo"],
  ["TH", "Thailand"],
  ["TJ", "Tajikistan"],
  ["TK", "Tokelau"],
  ["TL", "Timor-Leste", ["East Timor"]],
  ["TM", "Turkmenistan"],
  ["TN", "Tunisia"],
  ["TO", "Tonga"],
  ["TR", "Türkiye", ["Turkey"]],
  ["TT", "Trinidad & Tobago"],
  ["TV", "Tuvalu"],
  ["TW", "Taiwan", ["Republic of China"]],
  ["TZ", "Tanzania"],
  ["UA", "Ukraine"],
  ["UG", "Uganda"],
  ["UM", "U.S. Outlying Islands", ["United States Minor Outlying Islands"]],
  ["US", "United States", ["USA","America"]],
  ["UY", "Uruguay"],
  ["UZ", "Uzbekistan"],
  ["VA", "Vatican City", ["Vatican","Holy See"]],
  ["VC", "St. Vincent & Grenadines"],
  ["VE", "Venezuela"],
  ["VG", "British Virgin Islands"],
  ["VI", "U.S. Virgin Islands"],
  ["VN", "Vietnam", ["Viet Nam"]],
  ["VU", "Vanuatu"],
  ["WF", "Wallis & Futuna"],
  ["WS", "Samoa"],
  ["XK", "Kosovo"],
  ["YE", "Yemen"],
  ["YT", "Mayotte"],
  ["ZA", "South Africa"],
  ["ZM", "Zambia"],
  ["ZW", "Zimbabwe"],
];

export const COUNTRIES: CountryOption[] = COUNTRY_ROWS.map(([code, name, keywords]) =>
  keywords ? { code, name, keywords } : { code, name },
);

/**
 * [latitude, longitude] for every ISO 3166-1 country or territory (plus XK)
 * that has a flag in `country-flag-icons`. Capital cities where the pin reads
 * better than the geographic center, otherwise Google's public country
 * centroids (https://developers.google.com/public-data/docs/canonical/countries_csv),
 * and Wikidata (CC0) for codes missing there.
 */
export const COUNTRY_COORDINATES: { [code: string]: LatLng | undefined } = {
  AD: [42.5063, 1.5218], // Andorra
  AE: [24.4539, 54.3773], // United Arab Emirates
  AF: [33.9391, 67.71], // Afghanistan
  AG: [17.1274, -61.8468], // Antigua and Barbuda
  AI: [18.2206, -63.0686], // Anguilla
  AL: [41.3275, 19.8187], // Albania
  AM: [40.1792, 44.4991], // Armenia
  AO: [-8.839, 13.2894], // Angola
  AQ: [-75.251, -0.0714], // Antarctica
  AR: [-34.6037, -58.3816], // Argentina
  AS: [-14.271, -170.1322], // American Samoa
  AT: [48.2082, 16.3738], // Austria
  AU: [-35.2809, 149.13], // Australia
  AW: [12.5211, -69.9683], // Aruba
  AX: [60.0986, 19.9444], // Åland Islands
  AZ: [40.4093, 49.8671], // Azerbaijan
  BA: [43.8563, 18.4131], // Bosnia and Herzegovina
  BB: [13.1132, -59.5988], // Barbados
  BD: [23.8103, 90.4125], // Bangladesh
  BE: [50.8503, 4.3517], // Belgium
  BF: [12.3714, -1.5197], // Burkina Faso
  BG: [42.6977, 23.3219], // Bulgaria
  BH: [26.2285, 50.586], // Bahrain
  BI: [-3.3761, 29.3599], // Burundi
  BJ: [6.4969, 2.6283], // Benin
  BL: [17.8986, -62.8492], // Saint Barthélemy
  BM: [32.3214, -64.7574], // Bermuda
  BN: [4.9031, 114.9398], // Brunei
  BO: [-16.4897, -68.1193], // Bolivia
  BQ: [12.1833, -68.2333], // Caribbean Netherlands
  BR: [-15.7975, -47.8919], // Brazil
  BS: [25.048, -77.3554], // Bahamas
  BT: [27.4728, 89.639], // Bhutan
  BV: [-54.4232, 3.4132], // Bouvet Island
  BW: [-24.6282, 25.9231], // Botswana
  BY: [53.7098, 27.9534], // Belarus
  BZ: [17.251, -88.759], // Belize
  CA: [45.4215, -75.6972], // Canada
  CC: [-12.1642, 96.871], // Cocos [Keeling] Islands
  CD: [-4.0383, 21.7587], // Congo [DRC]
  CF: [6.6111, 20.9394], // Central African Republic
  CG: [-4.2634, 15.2429], // Congo
  CH: [46.948, 7.4474], // Switzerland
  CI: [6.8276, -5.2893], // Côte d'Ivoire
  CK: [-21.2367, -159.7777], // Cook Islands
  CL: [-33.4489, -70.6693], // Chile
  CM: [3.848, 11.5021], // Cameroon
  CN: [35.8617, 104.1954], // China
  CO: [4.711, -74.0721], // Colombia
  CR: [9.9281, -84.0907], // Costa Rica
  CU: [21.5218, -77.7812], // Cuba
  CV: [14.9315, -23.5087], // Cabo Verde
  CW: [12.108, -68.935], // Curaçao
  CX: [-10.4475, 105.6904], // Christmas Island
  CY: [35.1856, 33.3823], // Cyprus
  CZ: [50.0755, 14.4378], // Czech Republic
  DE: [52.52, 13.405], // Germany
  DJ: [11.5721, 43.1456], // Djibouti
  DK: [55.6761, 12.5683], // Denmark
  DM: [15.3017, -61.3881], // Dominica
  DO: [18.4861, -69.9312], // Dominican Republic
  DZ: [36.7538, 3.0588], // Algeria
  EC: [-0.1807, -78.4678], // Ecuador
  EE: [59.437, 24.7536], // Estonia
  EG: [30.0444, 31.2357], // Egypt
  EH: [24.2155, -12.8858], // Western Sahara
  ER: [15.1794, 39.7823], // Eritrea
  ES: [40.4168, -3.7038], // Spain
  ET: [9.145, 40.4897], // Ethiopia
  FI: [60.1699, 24.9384], // Finland
  FJ: [-18.1416, 178.4419], // Fiji
  FK: [-51.7963, -59.5236], // Falkland Islands [Islas Malvinas]
  FM: [6.9248, 158.161], // Micronesia
  FO: [61.8926, -6.9118], // Faroe Islands
  FR: [48.8566, 2.3522], // France
  GA: [0.4162, 9.4673], // Gabon
  GB: [51.5074, -0.1278], // United Kingdom
  GD: [12.0561, -61.7486], // Grenada
  GE: [41.7151, 44.8271], // Georgia
  GF: [3.9339, -53.1258], // French Guiana
  GG: [49.4657, -2.5853], // Guernsey
  GH: [5.6037, -0.187], // Ghana
  GI: [36.1377, -5.3454], // Gibraltar
  GL: [71.7069, -42.6043], // Greenland
  GM: [13.4549, -16.579], // Gambia
  GN: [9.6412, -13.5784], // Guinea
  GP: [16.996, -62.0676], // Guadeloupe
  GQ: [3.7523, 8.7742], // Equatorial Guinea
  GR: [37.9838, 23.7275], // Greece
  GS: [-54.4296, -36.5879], // South Georgia and the South Sandwich Islands
  GT: [14.6349, -90.5069], // Guatemala
  GU: [13.4443, 144.7937], // Guam
  GW: [11.8637, -15.598], // Guinea-Bissau
  GY: [6.8013, -58.1551], // Guyana
  HK: [22.3193, 114.1694], // Hong Kong
  HM: [-53.0818, 73.5042], // Heard Island and McDonald Islands
  HN: [14.065, -87.1715], // Honduras
  HR: [45.815, 15.9819], // Croatia
  HT: [18.5944, -72.3074], // Haiti
  HU: [47.4979, 19.0402], // Hungary
  ID: [-6.2088, 106.8456], // Indonesia
  IE: [53.3498, -6.2603], // Ireland
  IL: [31.7683, 35.2137], // Israel
  IM: [54.2361, -4.5481], // Isle of Man
  IN: [28.6139, 77.209], // India
  IO: [-6.3432, 71.8765], // British Indian Ocean Territory
  IQ: [33.3152, 44.3661], // Iraq
  IR: [32.4279, 53.688], // Iran
  IS: [64.1466, -21.9426], // Iceland
  IT: [41.9028, 12.4964], // Italy
  JE: [49.2144, -2.1313], // Jersey
  JM: [18.0179, -76.8099], // Jamaica
  JO: [31.9454, 35.9284], // Jordan
  JP: [35.6762, 139.6503], // Japan
  KE: [-1.2921, 36.8219], // Kenya
  KG: [42.8746, 74.5698], // Kyrgyzstan
  KH: [11.5564, 104.9282], // Cambodia
  KI: [1.3382, 172.9784], // Kiribati
  KM: [-11.7172, 43.2473], // Comoros
  KN: [17.3026, -62.7177], // Saint Kitts and Nevis
  KP: [40.3399, 127.5101], // North Korea
  KR: [37.5665, 126.978], // South Korea
  KW: [29.3759, 47.9774], // Kuwait
  KY: [19.5135, -80.567], // Cayman Islands
  KZ: [51.1694, 71.4491], // Kazakhstan
  LA: [17.9757, 102.6331], // Laos
  LB: [33.8938, 35.5018], // Lebanon
  LC: [14.0101, -60.987], // Saint Lucia
  LI: [47.141, 9.5209], // Liechtenstein
  LK: [6.9271, 79.8612], // Sri Lanka
  LR: [6.2907, -10.7605], // Liberia
  LS: [-29.3142, 27.4833], // Lesotho
  LT: [54.6872, 25.2797], // Lithuania
  LU: [49.6116, 6.1319], // Luxembourg
  LV: [56.9496, 24.1052], // Latvia
  LY: [26.3351, 17.2283], // Libya
  MA: [33.9716, -6.8498], // Morocco
  MC: [43.7384, 7.4246], // Monaco
  MD: [47.0105, 28.8638], // Moldova
  ME: [42.4304, 19.2594], // Montenegro
  MF: [18.0667, -63.0847], // Saint Martin
  MG: [-18.8792, 47.5079], // Madagascar
  MH: [7.1164, 171.1858], // Marshall Islands
  MK: [41.9973, 21.428], // North Macedonia
  ML: [17.5707, -3.9962], // Mali
  MM: [21.914, 95.9562], // Myanmar [Burma]
  MN: [47.8864, 106.9057], // Mongolia
  MO: [22.1987, 113.5439], // Macau
  MP: [17.3308, 145.3847], // Northern Mariana Islands
  MQ: [14.6415, -61.0242], // Martinique
  MR: [18.0735, -15.9582], // Mauritania
  MS: [16.7425, -62.1874], // Montserrat
  MT: [35.8989, 14.5146], // Malta
  MU: [-20.1609, 57.5012], // Mauritius
  MV: [4.1755, 73.5093], // Maldives
  MW: [-13.9626, 33.7741], // Malawi
  MX: [19.4326, -99.1332], // Mexico
  MY: [3.139, 101.6869], // Malaysia
  MZ: [-25.9692, 32.5732], // Mozambique
  NA: [-22.5609, 17.0658], // Namibia
  NC: [-20.9043, 165.618], // New Caledonia
  NE: [13.5116, 2.1254], // Niger
  NF: [-29.0408, 167.9547], // Norfolk Island
  NG: [9.0765, 7.3986], // Nigeria
  NI: [12.8654, -85.2072], // Nicaragua
  NL: [52.3676, 4.9041], // Netherlands
  NO: [59.9139, 10.7522], // Norway
  NP: [27.7172, 85.324], // Nepal
  NR: [-0.5228, 166.9315], // Nauru
  NU: [-19.0544, -169.8672], // Niue
  NZ: [-41.2866, 174.7756], // New Zealand
  OM: [23.588, 58.3829], // Oman
  PA: [8.9824, -79.5199], // Panama
  PE: [-12.0464, -77.0428], // Peru
  PF: [-17.6797, -149.4068], // French Polynesia
  PG: [-9.4438, 147.1803], // Papua New Guinea
  PH: [14.5995, 120.9842], // Philippines
  PK: [33.6844, 73.0479], // Pakistan
  PL: [52.2297, 21.0122], // Poland
  PM: [46.9419, -56.2711], // Saint Pierre and Miquelon
  PN: [-24.7036, -127.4393], // Pitcairn Islands
  PR: [18.2208, -66.5901], // Puerto Rico
  PS: [31.9038, 35.2034], // Palestine
  PT: [38.7223, -9.1393], // Portugal
  PW: [7.515, 134.5825], // Palau
  PY: [-25.2637, -57.5759], // Paraguay
  QA: [25.2854, 51.531], // Qatar
  RE: [-21.1151, 55.5364], // Réunion
  RO: [44.4268, 26.1025], // Romania
  RS: [44.7866, 20.4489], // Serbia
  RU: [61.524, 105.3188], // Russia
  RW: [-1.9403, 29.8739], // Rwanda
  SA: [24.7136, 46.6753], // Saudi Arabia
  SB: [-9.4295, 160.0388], // Solomon Islands
  SC: [-4.6191, 55.4513], // Seychelles
  SD: [12.8628, 30.2176], // Sudan
  SE: [59.3293, 18.0686], // Sweden
  SG: [1.3521, 103.8198], // Singapore
  SH: [-24.1435, -10.0307], // Saint Helena
  SI: [46.0569, 14.5058], // Slovenia
  SJ: [77.5536, 23.6703], // Svalbard and Jan Mayen
  SK: [48.1486, 17.1077], // Slovakia
  SL: [8.4657, -13.2317], // Sierra Leone
  SM: [43.9424, 12.4578], // San Marino
  SN: [14.7167, -17.4677], // Senegal
  SO: [5.1521, 46.1996], // Somalia
  SR: [5.852, -55.2038], // Suriname
  SS: [4.8539, 31.5825], // South Sudan
  ST: [0.3365, 6.7273], // São Tomé and Príncipe
  SV: [13.6929, -89.2182], // El Salvador
  SX: [18.0242, -63.0433], // Sint Maarten
  SY: [34.8021, 38.9968], // Syria
  SZ: [-26.3054, 31.1367], // Eswatini
  TC: [21.694, -71.7979], // Turks and Caicos Islands
  TD: [12.1348, 15.0557], // Chad
  TF: [-49.2804, 69.3486], // French Southern Territories
  TG: [6.1256, 1.2254], // Togo
  TH: [13.7563, 100.5018], // Thailand
  TJ: [38.5598, 68.774], // Tajikistan
  TK: [-8.9674, -171.8559], // Tokelau
  TL: [-8.5569, 125.5603], // Timor-Leste
  TM: [37.9601, 58.3261], // Turkmenistan
  TN: [36.8065, 10.1815], // Tunisia
  TO: [-21.2148, -175.1982], // Tonga
  TR: [39.9334, 32.8597], // Türkiye
  TT: [10.6549, -61.5019], // Trinidad and Tobago
  TV: [-8.5199, 179.1979], // Tuvalu
  TW: [25.033, 121.5654], // Taiwan
  TZ: [-6.163, 35.7516], // Tanzania
  UA: [50.4501, 30.5234], // Ukraine
  UG: [0.3476, 32.5825], // Uganda
  UM: [19.3, 166.6333], // U.S. Outlying Islands
  US: [37.0902, -95.7129], // United States
  UY: [-34.9011, -56.1645], // Uruguay
  UZ: [41.2995, 69.2401], // Uzbekistan
  VA: [41.9029, 12.4534], // Vatican City
  VC: [13.1587, -61.2248], // Saint Vincent and the Grenadines
  VE: [6.4238, -66.5897], // Venezuela
  VG: [18.4207, -64.64], // British Virgin Islands
  VI: [18.3358, -64.8963], // U.S. Virgin Islands
  VN: [21.0285, 105.8542], // Vietnam
  VU: [-17.7333, 168.3273], // Vanuatu
  WF: [-13.7688, -177.1561], // Wallis and Futuna
  WS: [-13.8506, -171.7514], // Samoa
  XK: [42.6026, 20.903], // Kosovo
  YE: [15.5527, 48.5164], // Yemen
  YT: [-12.8275, 45.1662], // Mayotte
  ZA: [-25.7479, 28.2293], // South Africa
  ZM: [-15.3875, 28.3228], // Zambia
  ZW: [-17.8292, 31.0522], // Zimbabwe
};

// UN M49 continents from Unicode CLDR 48 territoryContainment (002 Africa, 019 Americas, 142 Asia,
// 150 Europe, 009 Oceania — its QO "Outlying Oceania" group is where CLDR files Antarctica).
const CONTINENT_CODES = {
  Africa: "AO BF BI BJ BW CD CF CG CI CM CV DJ DZ EG EH ER ET GA GH GM GN GQ GW IO KE KM LR LS LY MA MG ML MR MU MW MZ NA NE NG RE RW SC SD SH SL SN SO SS ST SZ TD TF TG TN TZ UG YT ZA ZM ZW",
  Americas: "AG AI AR AW BB BL BM BO BQ BR BS BV BZ CA CL CO CR CU CW DM DO EC FK GD GF GL GP GS GT GY HN HT JM KN KY LC MF MQ MS MX NI PA PE PM PR PY SR SV SX TC TT US UY VC VE VG VI",
  Asia: "AE AF AM AZ BD BH BN BT CN CY GE HK ID IL IN IQ IR JO JP KG KH KP KR KW KZ LA LB LK MM MN MO MV MY NP OM PH PK PS QA SA SG SY TH TJ TL TM TR TW UZ VN YE",
  Europe: "AD AL AT AX BA BE BG BY CH CZ DE DK EE ES FI FO FR GB GG GI GR HR HU IE IM IS IT JE LI LT LU LV MC MD ME MK MT NL NO PL PT RO RS RU SE SI SJ SK SM UA VA XK",
  Oceania: "AQ AS AU CC CK CX FJ FM GU HM KI MH MP NC NF NR NU NZ PF PG PN PW SB TK TO TV UM VU WF WS",
} as const;

export const CONTINENTS: Continent[] = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const CONTINENT_OF: { [code: string]: Continent | undefined } = {};
for (const continent of CONTINENTS) {
  for (const code of CONTINENT_CODES[continent].split(" ")) CONTINENT_OF[code] = continent;
}

export function continentOf(code: string) {
  return CONTINENT_OF[code.toUpperCase()] ?? null;
}

const OPEN_MS = 180;
const CLOSE_MS = 120;
const FLIGHT_MS = 620;
const GLIDE_PER_SECOND = 6.5;
const GLOBE_RADIUS = 0.8;
const PIN_ALTITUDE = 0.16;
const TEXTURE_RETRY_MS = [150, 600, 1500];
const CLOCK_MS = 30_000;
const FLAG_TABLE = Flags as unknown as FlagTable;

type Row = { key: string; section: string; country: CountryOption; native: string | null };
type Rect = { left: number; top: number; width: number; height: number };
type Flight = { id: number; code: string; from: Rect };
type ClockInfo = { time: string; offset: string } | { zones: number; from: string; to: string } | null;
type GlobeLive = {
  phi: number;
  theta: number;
  targetPhi: number;
  targetTheta: number;
  location: LatLng | null;
  size: number;
  reduced: boolean;
  settled: boolean;
};

function cx(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

// Folds accents and full-width forms but keeps letters of every script, so 日本, Россия and
// 대한민국 stay searchable. NFKD also splits Hangul syllables into jamo, which lets a half-typed
// "대ㅎ" match 대한민국 while the IME is still composing.
function fold(text: string) {
  return text
    .normalize("NFKD")
    .replace(/\p{M}+/gu, "")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim()
    .toLowerCase();
}

const nativeNames: { [code: string]: string | null } = {};
const nativeLanguages: { [code: string]: string | undefined } = {};
const displayNames: { [language: string]: Intl.DisplayNames | null } = {};

function likelyLocale(code: string) {
  try {
    return new Intl.Locale("und", { region: code }).maximize();
  } catch {
    return null;
  }
}

// The country's own name in its most likely language (CLDR likely subtags), e.g. JP → 日本.
export function nativeCountryName(code: string, englishName: string) {
  const key = code.toUpperCase();
  if (key in nativeNames) return nativeNames[key] ?? null;
  let result: string | null = null;
  const language = likelyLocale(key)?.language;
  if (language && language !== "und") {
    if (!(language in displayNames)) {
      try {
        displayNames[language] = new Intl.DisplayNames([language], { type: "region", fallback: "none" });
      } catch {
        displayNames[language] = null;
      }
    }
    const name = displayNames[language]?.of(key);
    if (name && fold(name) !== fold(englishName)) {
      result = name;
      nativeLanguages[key] = language;
    }
  }
  nativeNames[key] = result;
  return result;
}

function nativeLanguage(code: string) {
  return nativeLanguages[code.toUpperCase()];
}

function timeZonesOf(code: string) {
  const locale = likelyLocale(code) as (Intl.Locale & { getTimeZones?: () => string[]; timeZones?: string[] }) | null;
  if (!locale) return [];
  try {
    const zones = typeof locale.getTimeZones === "function" ? locale.getTimeZones() : locale.timeZones;
    return Array.isArray(zones) ? zones : [];
  } catch {
    return [];
  }
}

function offsetOf(zone: string, at: Date) {
  try {
    const parts = new Intl.DateTimeFormat("en-US", { timeZone: zone, timeZoneName: "shortOffset" }).formatToParts(at);
    return parts.find((part) => part.type === "timeZoneName")?.value ?? null;
  } catch {
    return null;
  }
}

// "GMT+5:30" → 330, "GMT-3" → -180, "GMT" → 0.
function offsetMinutes(label: string) {
  const match = /GMT([+-])(\d{1,2})(?::(\d{2}))?/.exec(label);
  if (!match) return 0;
  const minutes = Number(match[2]) * 60 + Number(match[3] ?? 0);
  return match[1] === "-" ? -minutes : minutes;
}

function clockFor(code: string, at: Date): ClockInfo {
  const zones = timeZonesOf(code);
  if (zones.length === 0) return null;
  if (zones.length === 1) {
    const zone = zones[0] as string;
    const offset = offsetOf(zone, at);
    if (!offset) return null;
    try {
      const time = new Intl.DateTimeFormat(undefined, { timeZone: zone, hour: "2-digit", minute: "2-digit" }).format(at);
      return { time, offset };
    } catch {
      return null;
    }
  }
  const offsets = zones.map((zone) => offsetOf(zone, at)).filter((label): label is string => !!label);
  if (offsets.length === 0) return null;
  const sorted = [...new Set(offsets)].sort((a, b) => offsetMinutes(a) - offsetMinutes(b));
  return { zones: zones.length, from: sorted[0] as string, to: sorted[sorted.length - 1] as string };
}

function browserRegion() {
  try {
    const tags = navigator.languages?.length ? navigator.languages : [navigator.language];
    for (const tag of tags) {
      const region = new Intl.Locale(tag).maximize().region;
      if (region) return region.toUpperCase();
    }
  } catch {
    return null;
  }
  return null;
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function rectOf(element: Element): Rect {
  const rect = element.getBoundingClientRect();
  return { left: rect.left, top: rect.top, width: rect.width, height: rect.height };
}

function toCartesian([lat, lng]: LatLng): RGB {
  const la = (lat * Math.PI) / 180;
  const lo = (lng * Math.PI) / 180 - Math.PI;
  const c = Math.cos(la);
  return [-c * Math.cos(lo), Math.sin(la), c * Math.sin(lo)];
}

// The rotation cobe applies on the GPU, so the DOM pin stays on the country.
function project([x, y, z]: RGB, phi: number, theta: number, altitude: number) {
  const cp = Math.cos(phi);
  const sp = Math.sin(phi);
  const ct = Math.cos(theta);
  const st = Math.sin(theta);
  const radius = GLOBE_RADIUS * (1 + altitude);
  const sx = (cp * x + sp * z) * radius;
  const sy = (sp * st * x + ct * y - cp * st * z) * radius;
  const depth = -sp * ct * x + st * y + cp * ct * z;
  return { x: (sx + 1) / 2, y: (1 - sy) / 2, depth };
}

// Solving project() for a centred point: sx = 0 and depth = 1 give phi = 3π/2 − λ and theta = φ.
function anglesFor([lat, lng]: LatLng) {
  const phi = (3 * Math.PI) / 2 - (lng * Math.PI) / 180;
  const theta = (lat * Math.PI) / 180;
  return { phi, theta };
}

function shortestTurn(from: number, to: number) {
  return Math.atan2(Math.sin(to - from), Math.cos(to - from));
}

let colorCanvas: HTMLCanvasElement | null = null;
const UNRESOLVED = "rgb(1, 2, 3)";

// Any CSS color (hsl(var(--x)), oklch, var(--x)…) → 0..1 RGB through a 1×1 canvas. An undefined
// custom property makes the probe inherit the sentinel instead of silently borrowing a color.
function resolveColor(scope: HTMLElement, candidates: string[]): RGB | null {
  const holder = document.createElement("span");
  holder.style.cssText = `display:none;color:${UNRESOLVED}`;
  const probe = document.createElement("span");
  holder.appendChild(probe);
  scope.appendChild(holder);
  let computed: string | null = null;
  for (const candidate of candidates) {
    probe.style.color = "";
    probe.style.color = candidate;
    const value = probe.style.color ? getComputedStyle(probe).color : UNRESOLVED;
    if (value !== UNRESOLVED) {
      computed = value;
      break;
    }
  }
  holder.remove();
  if (!computed) return null;
  colorCanvas ??= document.createElement("canvas");
  colorCanvas.width = colorCanvas.height = 1;
  const context = colorCanvas.getContext("2d", { willReadFrequently: true });
  if (!context) return null;
  context.clearRect(0, 0, 1, 1);
  context.fillStyle = computed;
  context.fillRect(0, 0, 1, 1);
  const [r = 0, g = 0, b = 0, a = 0] = context.getImageData(0, 0, 1, 1).data;
  return a === 0 ? null : [r / 255, g / 255, b / 255];
}

function themeToken(name: string) {
  return [`var(--${name})`, `hsl(var(--${name}))`, `var(--color-${name})`];
}

function mix(a: RGB, b: RGB, t: number): RGB {
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
}

function luminance([r, g, b]: RGB) {
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function useThemeTick(active: boolean) {
  const [tick, setTick] = React.useState(0);
  React.useEffect(() => {
    if (!active) return;
    const bump = () => setTick((value) => value + 1);
    const observer = new MutationObserver(bump);
    for (const element of [document.documentElement, document.body]) {
      observer.observe(element, { attributes: true, attributeFilter: ["class", "style", "data-theme", "data-mode"] });
    }
    const scheme = window.matchMedia("(prefers-color-scheme: dark)");
    scheme.addEventListener("change", bump);
    return () => {
      observer.disconnect();
      scheme.removeEventListener("change", bump);
    };
  }, [active]);
  return tick;
}

function searchCountries(countries: CountryOption[], query: string, natives: { [code: string]: string | null }) {
  const q = fold(query);
  if (!q) return countries;
  const exact: CountryOption[] = [];
  const starts: CountryOption[] = [];
  const rest: CountryOption[] = [];
  for (const country of countries) {
    const code = country.code.toLowerCase();
    const names = [fold(country.name), fold(natives[country.code] ?? "")].filter(Boolean);
    const aliases = (country.keywords ?? []).map(fold);
    const terms = [...names, code, ...aliases];
    if (code === q || names.includes(q) || aliases.includes(q)) exact.push(country);
    else if (names.some((name) => name.startsWith(q))) starts.push(country);
    else if (terms.some((term) => term.includes(q) || term.split(" ").some((word) => word.startsWith(q)))) rest.push(country);
  }
  return exact.concat(starts, rest);
}

export function CountryFlag({ code, className }: { code: string; className?: string }) {
  const Flag = FLAG_TABLE[code.toUpperCase()];
  if (!Flag) {
    return (
      <span
        aria-hidden
        data-flag={code}
        className={cx("inline-flex items-center justify-center rounded-[2px] bg-muted text-[9px] font-medium text-muted-foreground", className)}
      >
        {code.toUpperCase()}
      </span>
    );
  }
  return (
    <span data-flag={code} aria-hidden className={cx("inline-flex shrink-0 overflow-hidden rounded-[2px] ring-1 ring-border", className)}>
      <Flag className="h-full w-full" />
    </span>
  );
}

function GlobePreview({
  country,
  native,
  enabled,
  now,
}: {
  country: CountryOption | null;
  native: string | null;
  enabled: boolean;
  now: number;
}) {
  const hostRef = React.useRef(null as HTMLDivElement | null);
  const canvasHostRef = React.useRef(null as HTMLDivElement | null);
  const pinRef = React.useRef(null as HTMLDivElement | null);
  const globeRef = React.useRef(null as Globe | null);
  const kickRef = React.useRef(() => {});
  const live = React.useRef({
    phi: 0,
    theta: 0.3,
    targetPhi: 0,
    targetTheta: 0.3,
    location: null,
    size: 0,
    reduced: false,
    settled: true,
  } as GlobeLive);
  const [state, setState] = React.useState("pending" as "pending" | "ready" | "unavailable");
  const [size, setSize] = React.useState(0);
  const themeTick = useThemeTick(enabled);
  const location = country ? COUNTRY_COORDINATES[country.code.toUpperCase()] ?? null : null;
  const code = country?.code.toUpperCase() ?? "";

  React.useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const measure = () => setSize(Math.floor(Math.min(host.clientWidth, host.clientHeight)));
    const observer = new ResizeObserver(measure);
    observer.observe(host);
    measure();
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    const host = canvasHostRef.current;
    const s = live.current;
    if (!enabled || !host || size === 0) return;
    s.size = size;
    s.reduced = prefersReducedMotion();
    const canvas = document.createElement("canvas");
    canvas.setAttribute("aria-hidden", "true");
    canvas.style.cssText = "width:100%;height:100%;display:block";
    host.appendChild(canvas);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const globe = createGlobe(canvas, {
      devicePixelRatio: dpr,
      width: size,
      height: size,
      phi: s.phi,
      theta: s.theta,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 12000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [1, 1, 1],
      glowColor: [0.5, 0.5, 0.5],
      markers: [],
      markerElevation: 0,
    });
    const gl = (canvas.getContext("webgl2") ?? canvas.getContext("webgl")) as WebGLRenderingContext | null;
    globeRef.current = globe;
    let raf = 0;
    let last = 0;

    const placePin = () => {
      const pin = pinRef.current;
      if (!pin) return;
      if (!s.location) {
        pin.style.opacity = "0";
        return;
      }
      const point = project(toCartesian(s.location), s.phi, s.theta, PIN_ALTITUDE);
      const visible = Math.max(0, Math.min(1, point.depth / 0.25));
      pin.style.opacity = String(Math.round(visible * 100) / 100);
      pin.style.transform = `translate3d(${point.x * s.size}px, ${point.y * s.size}px, 0) translate(-50%, -100%)`;
    };

    const frame = (time: number) => {
      raf = 0;
      const dt = last ? Math.min((time - last) / 1000, 0.1) : 1 / 60;
      last = time;
      const turn = shortestTurn(s.phi, s.targetPhi);
      const tilt = s.targetTheta - s.theta;
      if (s.reduced || (Math.abs(turn) < 0.002 && Math.abs(tilt) < 0.002)) {
        s.phi = s.targetPhi;
        s.theta = s.targetTheta;
        s.settled = true;
      } else {
        const step = 1 - Math.exp(-dt * GLIDE_PER_SECOND);
        s.phi += turn * step;
        s.theta += tilt * step;
        s.settled = false;
      }
      globe.update({ phi: s.phi, theta: s.theta });
      placePin();
      const holder = hostRef.current;
      if (holder) {
        holder.dataset.phi = s.phi.toFixed(4);
        holder.dataset.theta = s.theta.toFixed(4);
        holder.dataset.settled = String(s.settled);
      }
      if (!s.settled && !document.hidden) raf = requestAnimationFrame(frame);
      else last = 0;
    };

    kickRef.current = () => {
      if (!raf) raf = requestAnimationFrame(frame);
    };
    kickRef.current();
    const retries = TEXTURE_RETRY_MS.map((ms) => window.setTimeout(() => kickRef.current(), ms));
    const onLost = (event: Event) => {
      event.preventDefault();
      setState("unavailable");
    };
    canvas.addEventListener("webglcontextlost", onLost);
    setState(gl ? "ready" : "unavailable");

    return () => {
      cancelAnimationFrame(raf);
      retries.forEach((id) => window.clearTimeout(id));
      canvas.removeEventListener("webglcontextlost", onLost);
      kickRef.current = () => {};
      globe.destroy();
      gl?.getExtension("WEBGL_lose_context")?.loseContext();
      globeRef.current = null;
      host.replaceChildren();
      setState("pending");
    };
  }, [enabled, size]);

  React.useEffect(() => {
    const s = live.current;
    s.location = location;
    if (location) {
      const { phi, theta } = anglesFor(location);
      s.targetPhi = s.phi + shortestTurn(s.phi, phi);
      s.targetTheta = theta;
    }
    s.settled = false;
    if (hostRef.current) hostRef.current.dataset.settled = "false";
    globeRef.current?.update({ markers: location ? [{ location, size: 0.06 }] : [] });
    kickRef.current();
  }, [location, state]);

  React.useEffect(() => {
    const root = hostRef.current;
    const globe = globeRef.current;
    if (!root || !globe || state !== "ready") return;
    const background = resolveColor(root, themeToken("popover")) ?? resolveColor(root, themeToken("background"));
    const onDark = background ? luminance(background) < 0.5 : document.documentElement.classList.contains("dark");
    const base = background ?? (onDark ? [0.04, 0.04, 0.04] : [1, 1, 1]);
    const foreground = resolveColor(root, themeToken("foreground")) ?? (onDark ? [0.98, 0.98, 0.98] : [0.04, 0.04, 0.04]);
    const primary = resolveColor(root, themeToken("primary")) ?? foreground;
    globe.update({
      dark: onDark ? 1 : 0,
      diffuse: onDark ? 1.2 : 0.25,
      mapBrightness: onDark ? 6 : 3,
      baseColor: mix(base, foreground, onDark ? 0.28 : 0.1),
      glowColor: mix(base, foreground, onDark ? 0.42 : 0.2),
      markerColor: primary,
    });
    kickRef.current();
  }, [state, themeTick]);

  const clock = country && now > 0 ? clockFor(country.code, new Date(now)) : null;
  const continent = country ? continentOf(country.code) : null;
  const showGlobe = enabled && state !== "unavailable";

  return (
    <div
      data-slot="country-preview"
      data-preview-code={code || undefined}
      className="flex min-w-0 items-center gap-3 border-b border-border px-4 py-3 sm:col-start-2 sm:row-span-4 sm:row-start-1 sm:flex-col sm:items-stretch sm:gap-4 sm:border-b-0 sm:border-l sm:bg-muted/30 sm:px-5 sm:py-6"
    >
      <div
        ref={hostRef}
        data-globe-state={enabled ? state : "off"}
        data-focus={code || undefined}
        className="relative size-[84px] shrink-0 sm:mx-auto sm:size-[196px]"
      >
        {showGlobe && <div aria-hidden className="absolute inset-[10%] rounded-full bg-muted ring-1 ring-border" />}
        <div ref={canvasHostRef} className={cx("absolute inset-0 transition-opacity duration-300", showGlobe && state === "ready" ? "opacity-100" : "opacity-0")} />
        {showGlobe && state === "ready" && country && (
          <div ref={pinRef} data-globe-pin className="pointer-events-none absolute left-0 top-0 flex flex-col items-center opacity-0 will-change-transform">
            <CountryFlag code={country.code} className="h-3 w-[18px] shadow-md outline outline-1 outline-foreground/30 sm:h-4 sm:w-6" />
            <span className="h-2 w-px bg-foreground/50 sm:h-3" />
          </div>
        )}
        {!showGlobe && country && (
          <div className="absolute inset-0 flex items-center justify-center">
            <CountryFlag code={country.code} className="h-12 w-[72px] shadow-lg sm:h-20 sm:w-[120px]" />
          </div>
        )}
        {!country && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Globe2 className="size-8 text-muted-foreground/50" />
          </div>
        )}
      </div>

      <div className="min-w-0 flex-1 space-y-1.5 sm:flex-none sm:space-y-3">
        {country ? (
          <>
            <div className="flex min-w-0 items-center gap-2.5">
              <CountryFlag code={country.code} className="hidden h-4 w-6 sm:inline-flex" />
              <span className="truncate text-sm font-medium sm:text-base">{country.name}</span>
            </div>
            {native && (
              <p data-native dir="auto" lang={nativeLanguage(country.code)} className="truncate text-xs text-muted-foreground sm:text-sm">
                {native}
              </p>
            )}
            <div className="flex flex-wrap items-center gap-1.5 text-[10px] text-muted-foreground sm:text-[11px]">
              <span className="rounded-md border border-border px-1.5 py-0.5 font-mono">{country.code.toUpperCase()}</span>
              {continent && <span className="rounded-md border border-border px-1.5 py-0.5">{continent}</span>}
            </div>
            {clock && (
              <p data-local-time className="flex items-center gap-1.5 text-[11px] tabular-nums text-muted-foreground sm:text-xs">
                <Clock3 className="size-3.5 shrink-0" />
                {"time" in clock ? (
                  <span>
                    <span className="text-foreground">{clock.time}</span> · {clock.offset}
                  </span>
                ) : (
                  <span>
                    {clock.zones} time zones · <span className="whitespace-nowrap">{clock.from} – {clock.to}</span>
                  </span>
                )}
              </p>
            )}
          </>
        ) : (
          <p className="text-xs text-muted-foreground">No country in view</p>
        )}
      </div>
    </div>
  );
}

export function CountrySearchPalette({
  value,
  defaultValue = null,
  onValueChange,
  countries = COUNTRIES,
  suggested,
  detectRegion = true,
  showContinents = true,
  showGlobe = true,
  recentLimit = 3,
  search,
  onSearchChange,
  placeholder = "Search for your country...",
  searchPlaceholder = "Search in any language...",
  shortcut = true,
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  className,
  ref,
}: CountrySearchPaletteProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
  const open = controlledOpen ?? uncontrolledOpen;
  const [innerValue, setInnerValue] = React.useState(defaultValue);
  const current = value !== undefined ? value : innerValue;
  const [innerSearch, setInnerSearch] = React.useState("");
  const query = search ?? innerSearch;
  const [continent, setContinent] = React.useState(null as Continent | null);
  const [highlighted, setHighlighted] = React.useState(0);
  const [recent, setRecent] = React.useState([] as string[]);
  const [detected, setDetected] = React.useState(null as string | null);
  const [mounted, setMounted] = React.useState(false);
  const [closing, setClosing] = React.useState(false);
  const [flight, setFlight] = React.useState(null as Flight | null);
  const [now, setNow] = React.useState(0);
  const id = React.useId();
  const triggerRef = React.useRef(null as HTMLButtonElement | null);
  const inputRef = React.useRef(null as HTMLInputElement | null);
  const panelRef = React.useRef(null as HTMLDivElement | null);
  const backdropRef = React.useRef(null as HTMLDivElement | null);
  const listRef = React.useRef(null as HTMLDivElement | null);
  const flyerRef = React.useRef(null as HTMLDivElement | null);
  const lastFocus = React.useRef(null as CountryOption | null);

  const setTriggerRef = (node: HTMLButtonElement | null) => {
    triggerRef.current = node;
    if (typeof ref === "function") ref(node);
    else if (ref) ref.current = node;
  };

  const byCode = React.useMemo(() => {
    const table: { [code: string]: CountryOption | undefined } = {};
    for (const country of countries) table[country.code.toUpperCase()] = country;
    return table;
  }, [countries]);
  const selected = current ? byCode[current.toUpperCase()] : undefined;

  const natives = React.useMemo(() => {
    const table: { [code: string]: string | null } = {};
    if (!open) return table;
    for (const country of countries) table[country.code] = nativeCountryName(country.code, country.name);
    return table;
  }, [open, countries]);

  const counts = React.useMemo(() => {
    const table: { [name: string]: number } = {};
    for (const country of countries) {
      const name = continentOf(country.code);
      if (name) table[name] = (table[name] ?? 0) + 1;
    }
    return table;
  }, [countries]);

  const rows = React.useMemo(() => {
    const inContinent = (country: CountryOption) => !continent || continentOf(country.code) === continent;
    const toRow = (section: string) => (country: CountryOption): Row => ({
      key: `${section}-${country.code}`,
      section,
      country,
      native: natives[country.code] ?? null,
    });
    if (query.trim()) return searchCountries(countries, query, natives).filter(inContinent).map(toRow("Results"));
    if (continent) return countries.filter(inContinent).map(toRow(continent));
    const pinned: Row[] = [];
    const seen = new Set([""]);
    const pin = (section: string, codes: (string | null | undefined)[]) => {
      for (const raw of codes) {
        const country = raw ? byCode[raw.toUpperCase()] : undefined;
        if (!country || seen.has(country.code)) continue;
        seen.add(country.code);
        pinned.push(toRow(section)(country));
      }
    };
    pin("From your browser", detectRegion ? [detected] : []);
    pin("Recent", recentLimit > 0 ? recent : []);
    pin("Suggested", suggested ?? []);
    return pinned.concat(countries.map(toRow("All countries")));
  }, [query, continent, countries, natives, byCode, detectRegion, detected, recent, recentLimit, suggested]);

  const focusRow = rows[highlighted] ?? rows[0];
  if (focusRow) lastFocus.current = focusRow.country;
  const focusCountry = focusRow?.country ?? lastFocus.current;

  const setOpen = React.useCallback(
    (next: boolean) => {
      if (controlledOpen === undefined) setUncontrolledOpen(next);
      onOpenChange?.(next);
    },
    [controlledOpen, onOpenChange],
  );

  const setQuery = (next: string) => {
    if (search === undefined) setInnerSearch(next);
    onSearchChange?.(next);
  };

  const close = React.useCallback(() => {
    const panel = panelRef.current;
    const backdrop = backdropRef.current;
    if (panel && backdrop && !prefersReducedMotion()) {
      setClosing(true);
      const options = { duration: CLOSE_MS, easing: "ease-in", fill: "forwards" as const };
      const fade = backdrop.animate([{ opacity: 1 }, { opacity: 0 }], options);
      panel.animate([{ opacity: 1, transform: "none" }, { opacity: 0, transform: "scale(0.97) translateY(-6px)" }], options);
      const done = () => {
        setClosing(false);
        setOpen(false);
      };
      fade.finished.then(done, done);
    } else {
      setOpen(false);
    }
  }, [setOpen]);

  const choose = (row: Row, index: number) => {
    const { country } = row;
    const flag = listRef.current?.querySelector(`[data-index="${index}"] [data-flag]`) ?? null;
    if (flag && !prefersReducedMotion()) setFlight({ id: Date.now(), code: country.code, from: rectOf(flag) });
    if (value === undefined) setInnerValue(country.code);
    if (recentLimit > 0) setRecent((list) => [country.code, ...list.filter((code) => code !== country.code)].slice(0, recentLimit));
    onValueChange?.(country.code, country);
    close();
  };

  React.useEffect(() => setMounted(true), []);

  React.useEffect(() => {
    if (!shortcut) return;
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k" && !event.altKey && !event.shiftKey) {
        event.preventDefault();
        if (open) close();
        else setOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [shortcut, open, close, setOpen]);

  React.useEffect(() => {
    if (!open) {
      if (search === undefined) setInnerSearch("");
      setContinent(null);
      setHighlighted(0);
      return;
    }
    setDetected(browserRegion());
    setNow(Date.now());
    const clock = window.setInterval(() => setNow(Date.now()), CLOCK_MS);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    inputRef.current?.focus({ preventScroll: true });
    const panel = panelRef.current;
    const backdrop = backdropRef.current;
    if (panel && backdrop && !prefersReducedMotion()) {
      const options = { duration: OPEN_MS, easing: "cubic-bezier(0.22, 1, 0.36, 1)" };
      backdrop.animate([{ opacity: 0 }, { opacity: 1 }], options);
      panel.animate([{ opacity: 0, transform: "scale(0.96) translateY(-10px)" }, { opacity: 1, transform: "none" }], options);
    }
    const trigger = triggerRef.current;
    return () => {
      window.clearInterval(clock);
      document.body.style.overflow = overflow;
      if (document.activeElement === document.body || document.activeElement === null) trigger?.focus({ preventScroll: true });
    };
  }, [open]);

  React.useEffect(() => {
    setHighlighted(0);
  }, [query, continent]);

  React.useEffect(() => {
    if (!open) return;
    const item = listRef.current?.querySelector(`[data-index="${highlighted}"]`) as HTMLElement | null;
    item?.scrollIntoView({ block: "nearest" });
  }, [open, highlighted]);

  React.useLayoutEffect(() => {
    const flyer = flyerRef.current;
    const target = triggerRef.current?.querySelector("[data-trigger-flag]") ?? null;
    if (!flight || !flyer || !target) {
      if (flight && !target) setFlight(null);
      return;
    }
    const to = rectOf(target);
    const dx = to.left - flight.from.left;
    const dy = to.top - flight.from.top;
    const scale = to.width / Math.max(1, flight.from.width);
    const lift = Math.min(-36, dy * 0.25 - 36);
    const animation = flyer.animate(
      [
        { transform: "translate(0, 0) scale(1)", opacity: 1 },
        { transform: `translate(${dx * 0.55}px, ${dy * 0.55 + lift}px) scale(${1 + (scale - 1) * 0.5 + 0.35})`, opacity: 1, offset: 0.55 },
        { transform: `translate(${dx}px, ${dy}px) scale(${scale})`, opacity: 1 },
      ],
      { duration: FLIGHT_MS, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "forwards" },
    );
    const land = () => setFlight((currentFlight) => (currentFlight?.id === flight.id ? null : currentFlight));
    animation.finished.then(land, land);
    return () => animation.cancel();
  }, [flight]);

  const onInputKeyDown: React.ComponentProps<"input">["onKeyDown"] = (event) => {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setHighlighted((index) => Math.min(index + 1, rows.length - 1));
        break;
      case "ArrowUp":
        event.preventDefault();
        setHighlighted((index) => Math.max(index - 1, 0));
        break;
      case "Home":
        event.preventDefault();
        setHighlighted(0);
        break;
      case "End":
        event.preventDefault();
        setHighlighted(Math.max(0, rows.length - 1));
        break;
      case "Enter": {
        event.preventDefault();
        const row = rows[highlighted];
        if (row) choose(row, highlighted);
        break;
      }
      case "Escape":
        event.preventDefault();
        close();
        break;
    }
  };

  const onPanelKeyDown: React.ComponentProps<"div">["onKeyDown"] = (event) => {
    if (event.key !== "Tab") return;
    const focusable = Array.from(panelRef.current?.querySelectorAll("input, button") ?? []) as HTMLElement[];
    const enabled = focusable.filter((element) => !element.hasAttribute("disabled") && element.offsetParent !== null);
    if (enabled.length === 0) return;
    const position = enabled.indexOf(document.activeElement as HTMLElement);
    const next = event.shiftKey ? (position <= 0 ? enabled.length - 1 : position - 1) : position === enabled.length - 1 ? 0 : position + 1;
    event.preventDefault();
    enabled[next]?.focus();
  };

  const optionId = (index: number) => `${id}-option-${index}`;
  const resultCount = query.trim() || continent ? rows.length : countries.length;
  const summary = query.trim()
    ? `${resultCount} ${resultCount === 1 ? "result" : "results"}`
    : `${resultCount} ${resultCount === 1 ? "country" : "countries"}`;
  const flying = flight !== null;

  return (
    <>
      <button
        ref={setTriggerRef}
        type="button"
        data-slot="country-search-trigger"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className={cx(
          "group flex w-full items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-left text-sm text-card-foreground shadow-xs transition-colors",
          "hover:border-ring/60 hover:bg-accent/40 focus-visible:[outline:2px_solid_transparent] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          className,
        )}
      >
        <Search className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
        {selected ? (
          <span className="flex min-w-0 flex-1 items-center gap-2.5">
            <span data-trigger-flag className={cx("inline-flex transition-opacity", flying && "opacity-0")}>
              <CountryFlag code={selected.code} className="h-3.5 w-5" />
            </span>
            <span className="truncate">{selected.name}</span>
          </span>
        ) : (
          <span className="flex-1 truncate text-muted-foreground">{placeholder}</span>
        )}
        {shortcut && (
          <kbd className="hidden items-center gap-0.5 rounded-md border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] font-medium text-muted-foreground sm:inline-flex">
            <span className="text-xs">⌘</span>K
          </kbd>
        )}
      </button>

      {mounted &&
        open &&
        createPortal(
          <div className="fixed inset-0 z-50 flex items-start justify-center px-3 pt-[max(0.75rem,5svh)] sm:px-4" data-slot="country-search-overlay">
            <div ref={backdropRef} className="absolute inset-0 bg-background/70 backdrop-blur-sm" onClick={close} />
            <div
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-label="Choose a country"
              data-slot="country-search-panel"
              data-state={closing ? "closing" : "open"}
              onKeyDown={onPanelKeyDown}
              className={cx(
                "relative grid h-[min(640px,calc(100svh-1.5rem))] w-full max-w-[720px] grid-rows-[auto_auto_auto_minmax(0,1fr)_auto] overflow-hidden rounded-2xl border border-border bg-popover text-popover-foreground shadow-2xl",
                "sm:h-[min(540px,calc(100svh-2rem))] sm:grid-cols-[minmax(0,1fr)_240px] sm:grid-rows-[auto_auto_minmax(0,1fr)_auto]",
                !showGlobe && "grid-rows-[auto_auto_minmax(0,1fr)_auto] sm:grid-cols-1",
              )}
            >
              <div className="border-b border-border sm:col-start-1 sm:row-start-1">
                <div className="flex items-center px-4">
                  <Search className="size-5 shrink-0 text-muted-foreground" />
                  <input
                    ref={inputRef}
                    type="text"
                    role="combobox"
                    aria-expanded="true"
                    aria-controls={`${id}-listbox`}
                    aria-activedescendant={rows[highlighted] ? optionId(highlighted) : undefined}
                    aria-autocomplete="list"
                    autoComplete="off"
                    spellCheck={false}
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    onKeyDown={onInputKeyDown}
                    placeholder={searchPlaceholder}
                    className="min-w-0 flex-1 bg-transparent px-3 py-4 text-base outline-none placeholder:text-muted-foreground sm:text-sm"
                  />
                  {query ? (
                    <button
                      type="button"
                      aria-label="Clear search"
                      onClick={() => {
                        setQuery("");
                        inputRef.current?.focus();
                      }}
                      className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                    >
                      <X className="size-4" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      aria-label="Close"
                      onClick={close}
                      className="rounded-md border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground transition-colors hover:text-foreground"
                    >
                      esc
                    </button>
                  )}
                </div>
              </div>

              {showGlobe && <GlobePreview country={focusCountry} native={focusCountry ? natives[focusCountry.code] ?? null : null} enabled={!closing} now={now} />}

              <div className="flex min-w-0 items-center gap-2 border-b border-border px-3 py-2 sm:col-start-1 sm:row-start-2">
                {showContinents ? (
                  <div role="group" aria-label="Filter by continent" className="flex min-w-0 flex-1 gap-1 overflow-x-auto [scrollbar-width:none]">
                    {[null, ...CONTINENTS].map((name) => {
                      const active = continent === name;
                      const count = name ? counts[name] ?? 0 : countries.length;
                      if (name && count === 0) return null;
                      return (
                        <button
                          key={name ?? "all"}
                          type="button"
                          data-continent={name ?? "All"}
                          aria-pressed={active}
                          onClick={() => {
                            setContinent(name);
                            inputRef.current?.focus({ preventScroll: true });
                          }}
                          className={cx(
                            "shrink-0 rounded-full border px-2.5 py-1 text-[11px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                            active ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                          )}
                        >
                          {name ?? "All"} <span className={cx("tabular-nums", active ? "opacity-80" : "opacity-60")}>{count}</span>
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <span className="flex-1" />
                )}
              </div>

              <div ref={listRef} id={`${id}-listbox`} role="listbox" aria-label="Countries" className="min-h-0 overflow-y-auto overscroll-contain p-2 sm:col-start-1 sm:row-start-3">
                {rows.length > 0 ? (
                  rows.map((row, index) => {
                    const { country } = row;
                    const showHeading = index === 0 || rows[index - 1]?.section !== row.section;
                    const isSelected = selected?.code === country.code;
                    const isActive = highlighted === index;
                    return (
                      <React.Fragment key={row.key}>
                        {showHeading && (
                          <div role="presentation" className="flex items-center gap-1.5 px-3 pb-1 pt-2 text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                            {row.section === "Recent" && <History className="size-3" />}
                            {row.section}
                          </div>
                        )}
                        <div
                          id={optionId(index)}
                          role="option"
                          aria-selected={isSelected}
                          data-index={index}
                          data-code={country.code}
                          data-section={row.section}
                          data-active={isActive || undefined}
                          onPointerMove={() => {
                            if (!isActive) setHighlighted(index);
                          }}
                          onClick={() => choose(row, index)}
                          className={cx(
                            "flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors",
                            isActive ? "bg-accent text-accent-foreground" : "text-foreground/90",
                          )}
                        >
                          <CountryFlag code={country.code} className="h-3.5 w-5" />
                          <span className="flex min-w-0 flex-1 items-baseline gap-2">
                            <span className="truncate">{country.name}</span>
                            {row.native && (
                              <span dir="auto" lang={nativeLanguage(country.code)} className="truncate text-xs text-muted-foreground">
                                {row.native}
                              </span>
                            )}
                          </span>
                          <span className="font-mono text-[10px] text-muted-foreground">{country.code}</span>
                          {isSelected && <Check className="size-4 text-primary" aria-label="Selected" />}
                        </div>
                      </React.Fragment>
                    );
                  })
                ) : (
                  <div className="py-12 text-center">
                    <Globe2 className="mx-auto mb-3 size-10 text-muted-foreground/50" />
                    <p className="text-sm text-muted-foreground">No countries found</p>
                    <p className="mt-1 text-xs text-muted-foreground/70">Try another spelling, a local name or an ISO code</p>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between gap-3 border-t border-border px-4 py-2 text-[11px] text-muted-foreground sm:col-start-1 sm:row-start-4">
                <span aria-live="polite" className="flex items-center gap-1.5">
                  <Globe2 className="size-3.5" />
                  {summary}
                </span>
                <span aria-hidden className="flex items-center gap-2">
                  <span className="hidden sm:inline">
                    <kbd className="font-mono">↑↓</kbd> move
                  </span>
                  <span>
                    <kbd className="font-mono">↵</kbd> select
                  </span>
                  <span className="hidden sm:inline">
                    <kbd className="font-mono">esc</kbd> close
                  </span>
                </span>
              </div>
            </div>
          </div>,
          document.body,
        )}

      {mounted &&
        flight &&
        createPortal(
          <div
            ref={flyerRef}
            data-country-flight={flight.code}
            aria-hidden
            className="pointer-events-none fixed z-[60] origin-top-left"
            style={{ left: flight.from.left, top: flight.from.top, width: flight.from.width, height: flight.from.height }}
          >
            <CountryFlag code={flight.code} className="h-full w-full shadow-lg" />
          </div>,
          document.body,
        )}
    </>
  );
}

export default CountrySearchPalette;
