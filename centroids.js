const countryCentroids = {
    "AE": { latitude: 23.4241, longitude: 53.8478 }, // United Arab Emirates
    "AG": { latitude: 17.0608, longitude: -61.7964 }, // Antigua and Barbuda
    "AI": { latitude: 18.2206, longitude: -63.0685 }, // Anguilla
    "AL": { latitude: 41.1533, longitude: 20.1683 }, // Albania
    "AM": { latitude: 40.0691, longitude: 45.0382 }, // Armenia
    "AN": { latitude: 12.2260, longitude: -68.7500 }, // Netherlands Antilles
    "AR": { latitude: -38.4161, longitude: -63.6167 }, // Argentina
    "AT": { latitude: 47.5162, longitude: 14.5501 }, // Austria
    "AU": { latitude: -25.2744, longitude: 133.7751 }, // Australia
    "AW": { latitude: 12.5211, longitude: -69.9687 }, // Aruba
    "AZ": { latitude: 40.1431, longitude: 47.5769 }, // Azerbaijan
    "BA": { latitude: 43.8486, longitude: 18.3564 }, // Bosnia and Herzegovina
    "BB": { latitude: 13.1939, longitude: -59.5432 }, // Barbados
    "BD": { latitude: 23.6850, longitude: 90.3563 }, // Bangladesh
    "BE": { latitude: 50.8503, longitude: 4.3517 }, // Belgium
    "BF": { latitude: 12.2383, longitude: -1.5616 }, // Burkina Faso
    "BG": { latitude: 42.7339, longitude: 25.4858 }, // Bulgaria
    "BH": { latitude: 25.9304, longitude: 50.6379 }, // Bahrain
    "BI": { latitude: -3.3731, longitude: 29.9189 }, // Burundi
    "BJ": { latitude: 9.5370, longitude: 2.4150 }, // Benin
    "BL": { latitude: 17.8948, longitude: -62.8481 }, // Saint Barthelemy
    "BM": { latitude: 32.3214, longitude: -64.7574 }, // Bermuda
    "BN": { latitude: 4.5353, longitude: 114.7277 }, // Brunei
    "BO": { latitude: -16.5000, longitude: -68.1193 }, // Bolivia
    "BQ": { latitude: 12.2001, longitude: -68.2385 }, // Bonaire, Sint Eustatius and Saba
    "BR": { latitude: -14.2350, longitude: -51.9253 }, // Brazil
    "BS": { latitude: 25.0343, longitude: -77.3963 }, // Bahamas
    "BT": { latitude: 27.5149, longitude: 90.4336 }, // Bhutan
    "BV": { latitude: -54.4232, longitude: 3.4132 }, // Bouvet Island
    "BW": { latitude: -22.3285, longitude: 24.6849 }, // Botswana
    "BY": { latitude: 53.9045, longitude: 27.5590 }, // Belarus
    "BZ": { latitude: 17.1899, longitude: -88.4976 }, // Belize
    "CA": { latitude: 56.1304, longitude: -106.3468 }, // Canada
    "CC": { latitude: -12.4646, longitude: 96.8782 }, // Cocos (Keeling) Islands
    "CD": { latitude: -4.0383, longitude: 21.7587 }, // Democratic Republic of the Congo
    "CF": { latitude: 4.3663, longitude: 18.5540 }, // Central African Republic
    "CG": { latitude: -0.2280, longitude: 15.8277 }, // Republic of the Congo
    "CH": { latitude: 46.8182, longitude: 8.2275 }, // Switzerland
    "CI": { latitude: 7.5399, longitude: -5.5471 }, // Côte d'Ivoire
    "CK": { latitude: -21.2362, longitude: -159.7777 }, // Cook Islands
    "CL": { latitude: -35.6751, longitude: -71.5375 }, // Chile
    "CM": { latitude: 7.3697, longitude: 12.3547 }, // Cameroon
    "CN": { latitude: 35.8617, longitude: 104.1954 }, // China
    "CO": { latitude: 4.5709, longitude: -74.2973 }, // Colombia
    "CR": { latitude: 9.9281, longitude: -84.0907 }, // Costa Rica
    "CU": { latitude: 21.5216, longitude: -77.7812 }, // Cuba
    "CV": { latitude: 16.0020, longitude: -24.0133 }, // Cape Verde
    "CW": { latitude: 12.1696, longitude: -68.9999 }, // Curacao
    "CX": { latitude: -10.5000, longitude: 105.0000 }, // Christmas Island
    "CY": { latitude: 35.1264, longitude: 33.4299 }, // Cyprus
    "CZ": { latitude: 49.8175, longitude: 15.4730 }, // Czech Republic
    "DE": { latitude: 51.1657, longitude: 10.4515 }, // Germany
    "DJ": { latitude: 11.8251, longitude: 42.5903 }, // Djibouti
    "DK": { latitude: 56.2639, longitude: 9.5018 }, // Denmark
    "DM": { latitude: 15.4149, longitude: -61.3709 }, // Dominica
    "DO": { latitude: 18.7357, longitude: -70.1627 }, // Dominican Republic
    "DZ": { latitude: 28.0339, longitude: 1.6596 }, // Algeria
    "EC": { latitude: -1.8312, longitude: -78.1834 }, // Ecuador
    "EE": { latitude: 58.5953, longitude: 25.0136 }, // Estonia
    "EG": { latitude: 26.8206, longitude: 30.8025 }, // Egypt
    "EH": { latitude: 23.5840, longitude: -13.2024 }, // Western Sahara
    "ER": { latitude: 15.1792, longitude: 39.7823 }, // Eritrea
    "ES": { latitude: 40.4637, longitude: -3.7492 }, // Spain
    "ET": { latitude: 9.1450, longitude: 40.4897 }, // Ethiopia
    "FI": { latitude: 61.9241, longitude: 25.7482 }, // Finland
    "FJ": { latitude: -17.7134, longitude: 178.0650 }, // Fiji
    "FM": { latitude: 7.4256, longitude: 150.5508 }, // Micronesia
    "FO": { latitude: 61.8926, longitude: -6.9118 }, // Faroe Islands
    "FR": { latitude: 46.6034, longitude: 1.8883 }, // France
    "GA": { latitude: -0.8037, longitude: 11.6094 }, // Gabon
    "GB": { latitude: 55.3781, longitude: -3.4360 }, // United Kingdom
    "GD": { latitude: 12.1165, longitude: -61.6790 }, // Grenada
    "GE": { latitude: 42.3154, longitude: 43.3569 }, // Georgia
    "GF": { latitude: 3.9339, longitude: -53.1258 }, // French Guiana
    "GG": { latitude: 49.4657, longitude: -2.5854 }, // Guernsey
    "GH": { latitude: 7.8751, longitude: -0.1969 }, // Ghana
    "GI": { latitude: 36.1370, longitude: -5.3450 }, // Gibraltar
    "GL": { latitude: 71.7069, longitude: -42.6043 }, // Greenland
    "GM": { latitude: 13.4432, longitude: -15.3102 }, // Gambia
    "GN": { latitude: 9.9456, longitude: -9.6966 }, // Guinea
    "GP": { latitude: 16.9954, longitude: -62.0670 }, // Guadeloupe
    "GQ": { latitude: 1.6500, longitude: 10.2679 }, // Equatorial Guinea
    "GR": { latitude: 39.0742, longitude: 21.8243 }, // Greece
    "GT": { latitude: 15.7835, longitude: -90.2308 }, // Guatemala
    "GU": { latitude: 13.4443, longitude: 144.7937 }, // Guam
    "GW": { latitude: 11.8037, longitude: -15.1804 }, // Guinea-Bissau
    "GY": { latitude: 4.8604, longitude: -58.9302 }, // Guyana
    "HK": { latitude: 22.3964, longitude: 114.1095 }, // Hong Kong
    "HM": { latitude: -53.1000, longitude: 72.6167 }, // Heard Island and McDonald Islands
    "HN": { latitude: 15.1999, longitude: -86.2419 }, // Honduras
    "HR": { latitude: 45.1, longitude: 15.2 }, // Croatia
    "HT": { latitude: 18.9712, longitude: -72.2850 }, // Haiti
    "HU": { latitude: 47.1625, longitude: 19.5033 }, // Hungary
    "ID": { latitude: -0.7893, longitude: 113.9213 }, // Indonesia
    "IE": { latitude: 53.4129, longitude: -8.2439 }, // Ireland
    "IL": { latitude: 31.0461, longitude: 34.8516 }, // Israel
    "IM": { latitude: 54.2361, longitude: -4.5481 }, // Isle of Man
    "IN": { latitude: 20.5937, longitude: 78.9629 }, // India
    "IO": { latitude: -6.3432, longitude: 71.8765 }, // British Indian Ocean Territory
    "IQ": { latitude: 33.2232, longitude: 43.6793 }, // Iraq
    "IR": { latitude: 32.4279, longitude: 53.6880 }, // Iran
    "IS": { latitude: 64.9631, longitude: -19.0208 }, // Iceland
    "IT": { latitude: 41.8719, longitude: 12.5674 }, // Italy
    "JE": { latitude: 49.2144, longitude: -2.1312 }, // Jersey
    "JM": { latitude: 18.1096, longitude: -77.2975 }, // Jamaica
    "JO": { latitude: 30.5852, longitude: 36.2384 }, // Jordan
    "JP": { latitude: 36.2048, longitude: 138.2529 }, // Japan
    "KE": { latitude: -0.0236, longitude: 37.9062 }, // Kenya
    "KG": { latitude: 41.2044, longitude: 74.7661 }, // Kyrgyzstan
    "KH": { latitude: 12.5657, longitude: 104.9910 }, // Cambodia
    "KI": { latitude: -3.3704, longitude: -168.7340 }, // Kiribati
    "KM": { latitude: -11.8750, longitude: 43.8722 }, // Comoros
    "KN": { latitude: 17.3578, longitude: -62.7820 }, // Saint Kitts and Nevis
    "KP": { latitude: 40.3399, longitude: 127.5101 }, // North Korea
    "KR": { latitude: 35.9078, longitude: 127.7669 }, // South Korea
    "KW": { latitude: 29.3117, longitude: 47.4818 }, // Kuwait
    "KY": { latitude: 19.3133, longitude: -81.2546 }, // Cayman Islands
    "KZ": { latitude: 48.0196, longitude: 66.9237 }, // Kazakhstan
    "LA": { latitude: 19.8563, longitude: 102.4955 }, // Laos
    "LB": { latitude: 33.8547, longitude: 35.8623 }, // Lebanon
    "LC": { latitude: 13.9094, longitude: -60.9789 }, // Saint Lucia
    "LI": { latitude: 47.1662, longitude: 9.5553 }, // Liechtenstein
    "LK": { latitude: 7.8731, longitude: 80.7718 }, // Sri Lanka
    "LR": { latitude: 6.4281, longitude: -9.4295 }, // Liberia
    "LS": { latitude: -29.6090, longitude: 28.2336 }, // Lesotho
    "LT": { latitude: 55.1694, longitude: 23.8813 }, // Lithuania
    "LU": { latitude: 49.6118, longitude: 6.1319 }, // Luxembourg
    "LV": { latitude: 56.8796, longitude: 24.6032 }, // Latvia
    "LY": { latitude: 26.3351, longitude: 17.2283 }, // Libya
    "MA": { latitude: 31.7917, longitude: -7.0926 }, // Morocco
    "MC": { latitude: 43.7384, longitude: 7.4246 }, // Monaco
    "MD": { latitude: 47.4116, longitude: 28.3699 }, // Moldova
    "ME": { latitude: 42.7087, longitude: 19.3744 }, // Montenegro
    "MF": { latitude: 18.0708, longitude: -63.0806 }, // Saint Martin
    "MG": { latitude: -18.7669, longitude: 46.8691 }, // Madagascar
    "MH": { latitude: 7.1095, longitude: 171.1851 }, // Marshall Islands
    "MK": { latitude: 41.6086, longitude: 21.7453 }, // North Macedonia
    "ML": { latitude: 17.5707, longitude: -3.9962 }, // Mali
    "MM": { latitude: 21.9139, longitude: 95.9560 }, // Myanmar
    "MN": { latitude: 46.8625, longitude: 103.8467 }, // Mongolia
    "MO": { latitude: 22.1987, longitude: 113.5439 }, // Macau
    "MP": { latitude: 14.8058, longitude: 145.5505 }, // Northern Mariana Islands
    "MQ": { latitude: 14.6415, longitude: -61.0242 }, // Martinique
    "MR": { latitude: 21.0079, longitude: -10.0691 }, // Mauritania
    "MS": { latitude: 16.7425, longitude: -62.1874 }, // Montserrat
    "MT": { latitude: 35.9375, longitude: 14.3754 }, // Malta
    "MU": { latitude: -20.348404, longitude: 57.552152 }, // Mauritius
    "MV": { latitude: 3.2028, longitude: 73.2207 }, // Maldives
    "MW": { latitude: -13.2543, longitude: 34.3015 }, // Malawi
    "MX": { latitude: 23.6345, longitude: -102.5528 }, // Mexico
    "MY": { latitude: 4.2105, longitude: 101.9758 }, // Malaysia
    "MZ": { latitude: -18.6657, longitude: 35.5296 }, // Mozambique
    "NA": { latitude: -22.9576, longitude: 18.4904 }, // Namibia
    "NC": { latitude: -20.9043, longitude: 165.6180 }, // New Caledonia
    "NE": { latitude: 17.6078, longitude: 8.0817 }, // Niger
    "NF": { latitude: -29.0402, longitude: 167.9547 }, // Norfolk Island
    "NG": { latitude: 9.0820, longitude: 8.6753 }, // Nigeria
    "NI": { latitude: 12.8654, longitude: -85.2072 }, // Nicaragua
    "NL": { latitude: 52.1326, longitude: 5.2913 }, // Netherlands
    "NO": { latitude: 60.4720, longitude: 8.4689 }, // Norway
    "NP": { latitude: 28.3949, longitude: 84.1240 }, // Nepal
    "NR": { latitude: -0.5228, longitude: 166.9315 }, // Nauru
    "NU": { latitude: -19.0540, longitude: -169.8689 }, // Niue
    "NZ": { latitude: -40.9006, longitude: 174.8860 }, // New Zealand
    "OM": { latitude: 21.5129, longitude: 55.9233 }, // Oman
    "PA": { latitude: 8.9824, longitude: -79.5200 }, // Panama
    "PE": { latitude: -9.1900, longitude: -75.0152 }, // Peru
    "PF": { latitude: -17.6797, longitude: -149.4068 }, // French Polynesia
    "PG": { latitude: -6.3149, longitude: 143.9555 }, // Papua New Guinea
    "PH": { latitude: 12.8797, longitude: 121.7740 }, // Philippines
    "PK": { latitude: 30.3753, longitude: 69.3451 }, // Pakistan
    "PL": { latitude: 51.9194, longitude: 19.1451 }, // Poland
    "PM": { latitude: 46.9419, longitude: -56.2711 }, // Saint Pierre and Miquelon
    "PN": { latitude: -25.0704, longitude: -130.4475 }, // Pitcairn Islands
    "PR": { latitude: 18.2208, longitude: -66.5901 }, // Puerto Rico
    "PT": { latitude: 39.3999, longitude: -8.2245 }, // Portugal
    "PW": { latitude: 7.5149, longitude: 134.5825 }, // Palau
    "PY": { latitude: -23.4429, longitude: -58.4438 }, // Paraguay
    "QA": { latitude: 25.276987, longitude: 51.520008 }, // Qatar
    "RE": { latitude: -21.1151, longitude: 55.5364 }, // Réunion
    "RO": { latitude: 45.9432, longitude: 24.9668 }, // Romania
    "RS": { latitude: 44.0165, longitude: 21.0059 }, // Serbia
    "RU": { latitude: 61.5240, longitude: 105.3188 }, // Russia
    "RW": { latitude: -1.9403, longitude: 29.8739 }, // Rwanda
    "SA": { latitude: 23.8859, longitude: 45.0792 }, // Saudi Arabia
    "SB": { latitude: -9.4280, longitude: 160.0079 }, // Solomon Islands
    "SC": { latitude: -4.6796, longitude: 55.4919 }, // Seychelles
    "SD": { latitude: 12.8628, longitude: 30.2176 }, // Sudan
    "SE": { latitude: 60.1282, longitude: 18.6435 }, // Sweden
    "SG": { latitude: 1.3521, longitude: 103.8198 }, // Singapore
    "SH": { latitude: -15.9650, longitude: -5.7036 }, // Saint Helena
    "SI": { latitude: 46.1512, longitude: 14.9955 }, // Slovenia
    "SJ": { latitude: 77.9999, longitude: 2.5000 }, // Svalbard and Jan Mayen
    "SK": { latitude: 48.6690, longitude: 19.6990 }, // Slovakia
    "SL": { latitude: 8.4606, longitude: -11.7799 }, // Sierra Leone
    "SM": { latitude: 43.9333, longitude: 12.4469 }, // San Marino
    "SN": { latitude: 14.4974, longitude: -14.4524 }, // Senegal
    "SO": { latitude: 5.1521, longitude: 46.1996 }, // Somalia
    "SR": { latitude: 3.9193, longitude: -56.0278 }, // Suriname
    "SS": { latitude: 4.8594, longitude: 31.5713 }, // South Sudan
    "ST": { latitude: -0.1860, longitude: 6.6131 }, // Sao Tome and Principe
    "SV": { latitude: 13.7942, longitude: -88.8965 }, // El Salvador
    "SX": { latitude: 18.0420, longitude: -63.0574 }, // Sint Maarten
    "SY": { latitude: 34.8021, longitude: 38.9968 }, // Syria
    "SZ": { latitude: -26.5225, longitude: 31.4659 }, // Eswatini
    "TC": { latitude: 21.7510, longitude: -71.1490 }, // Turks and Caicos Islands
    "TD": { latitude: 15.4542, longitude: 18.7322 }, // Chad
    "TF": { latitude: -49.2804, longitude: 69.3485 }, // French Southern Territories
    "TG": { latitude: 8.6195, longitude: 0.8248 }, // Togo
    "TH": { latitude: 15.8700, longitude: 100.9925 }, // Thailand
    "TJ": { latitude: 38.9697, longitude: 71.7869 }, // Tajikistan
    "TK": { latitude: -9.2000, longitude: -171.8558 }, // Tokelau
    "TL": { latitude: -8.8749, longitude: 125.7275 }, // East Timor
    "TM": { latitude: 38.9697, longitude: 59.5563 }, // Turkmenistan
    "TN": { latitude: 33.8869, longitude: 9.5375 }, // Tunisia
    "TO": { latitude: -21.1789, longitude: -175.1982 }, // Tonga
    "TR": { latitude: 38.9637, longitude: 35.2433 }, // Turkey
    "TT": { latitude: 10.6918, longitude: -61.2225 }, // Trinidad and Tobago
    "TV": { latitude: -7.1095, longitude: -179.1944 }, // Tuvalu
    "TZ": { latitude: -6.3690, longitude: 34.8888 }, // Tanzania
    "UA": { latitude: 48.3794, longitude: 31.1656 }, // Ukraine
    "UG": { latitude: 1.3733, longitude: 32.2903 }, // Uganda
    "UM": { latitude: 18.9629, longitude: -71.5852 }, // U.S. Minor Outlying Islands
    "US": { latitude: 37.0902, longitude: -95.7129 }, // United States
    "UY": { latitude: -32.5228, longitude: -55.7659 }, // Uruguay
    "UZ": { latitude: 41.3775, longitude: 64.5851 }, // Uzbekistan
    "VA": { latitude: 41.9028, longitude: 12.4534 }, // Vatican City
    "VC": { latitude: 12.5850, longitude: -61.4280 }, // Saint Vincent and the Grenadines
    "VE": { latitude: 6.4238, longitude: -66.5897 }, // Venezuela
    "VG": { latitude: 18.4207, longitude: -64.6399 }, // British Virgin Islands
    "VI": { latitude: 18.3358, longitude: -64.8963 }, // U.S. Virgin Islands
    "VN": { latitude: 14.0583, longitude: 108.2772 }, // Vietnam
    "VU": { latitude: -15.3763, longitude: 166.9591 }, // Vanuatu
    "WF": { latitude: -13.7687, longitude: -177.1560 }, // Wallis and Futuna
    "WS": { latitude: -13.7590, longitude: -172.1046 }, // Samoa
    "YE": { latitude: 15.5527, longitude: 48.5164 }, // Yemen
    "YT": { latitude: -12.7852, longitude: 45.2140 }, // Mayotte
    "ZA": { latitude: -30.5595, longitude: 22.9375 }, // South Africa
    "ZM": { latitude: -13.1339, longitude: 27.8493 }, // Zambia
    "ZW": { latitude: -19.0154, longitude: 29.1549 } // Zimbabwe
};


const usStatesCoordinates = {
    "AL": { latitude: 32.8060, longitude: -86.7911 }, // Alabama
    "AK": { latitude: 61.3704, longitude: -152.4044 }, // Alaska
    "AZ": { latitude: 33.7298, longitude: -111.4312 }, // Arizona
    "AR": { latitude: 34.9697, longitude: -92.3731 }, // Arkansas
    "CA": { latitude: 36.1162, longitude: -119.6816 }, // California
    "CO": { latitude: 39.0598, longitude: -105.3111 }, // Colorado
    "CT": { latitude: 41.5978, longitude: -72.7554 }, // Connecticut
    "DE": { latitude: 39.3185, longitude: -75.5071 }, // Delaware
    "FL": { latitude: 27.7663, longitude: -81.6868 }, // Florida
    "GA": { latitude: 33.0406, longitude: -83.6431 }, // Georgia
    "HI": { latitude: 21.0943, longitude: -157.4983 }, // Hawaii
    "ID": { latitude: 44.2405, longitude: -114.4788 }, // Idaho
    "IL": { latitude: 40.3495, longitude: -88.9861 }, // Illinois
    "IN": { latitude: 39.8494, longitude: -86.2583 }, // Indiana
    "IA": { latitude: 42.0115, longitude: -93.2105 }, // Iowa
    "KS": { latitude: 39.0595, longitude: -98.3280 }, // Kansas
    "KY": { latitude: 37.6681, longitude: -84.6701 }, // Kentucky
    "LA": { latitude: 31.1695, longitude: -91.8671 }, // Louisiana
    "ME": { latitude: 44.6939, longitude: -69.3813 }, // Maine
    "MD": { latitude: 39.0639, longitude: -76.8021 }, // Maryland
    "MA": { latitude: 42.2302, longitude: -71.5301 }, // Massachusetts
    "MI": { latitude: 43.3266, longitude: -84.5361 }, // Michigan
    "MN": { latitude: 45.6945, longitude: -93.9002 }, // Minnesota
    "MS": { latitude: 32.7416, longitude: -89.6787 }, // Mississippi
    "MO": { latitude: 38.4561, longitude: -92.2884 }, // Missouri
    "MT": { latitude: 46.9219, longitude: -110.4544 }, // Montana
    "NE": { latitude: 41.4925, longitude: -99.9018 }, // Nebraska
    "NV": { latitude: 38.3135, longitude: -117.0554 }, // Nevada
    "NH": { latitude: 43.4525, longitude: -71.5639 }, // New Hampshire
    "NJ": { latitude: 40.2989, longitude: -74.5210 }, // New Jersey
    "NM": { latitude: 34.8405, longitude: -106.2485 }, // New Mexico
    "NY": { latitude: 42.1657, longitude: -74.9481 }, // New York
    "NC": { latitude: 35.6301, longitude: -79.8064 }, // North Carolina
    "ND": { latitude: 47.5289, longitude: -99.7840 }, // North Dakota
    "OH": { latitude: 40.3888, longitude: -82.7649 }, // Ohio
    "OK": { latitude: 35.5653, longitude: -96.9289 }, // Oklahoma
    "OR": { latitude: 43.9335, longitude: -120.5583 }, // Oregon
    "PA": { latitude: 40.5908, longitude: -77.2098 }, // Pennsylvania
    "RI": { latitude: 41.6809, longitude: -71.5118 }, // Rhode Island
    "SC": { latitude: 33.8569, longitude: -80.9450 }, // South Carolina
    "SD": { latitude: 44.2998, longitude: -99.4388 }, // South Dakota
    "TN": { latitude: 35.7478, longitude: -86.6923 }, // Tennessee
    "TX": { latitude: 31.0545, longitude: -97.5635 }, // Texas
    "UT": { latitude: 40.1500, longitude: -111.8624 }, // Utah
    "VT": { latitude: 44.0459, longitude: -72.7107 }, // Vermont
    "VA": { latitude: 37.7693, longitude: -78.1699 }, // Virginia
    "WA": { latitude: 47.4009, longitude: -121.4905 }, // Washington
    "WV": { latitude: 38.4912, longitude: -80.9545 }, // West Virginia
    "WI": { latitude: 44.2685, longitude: -89.6165 }, // Wisconsin
    "WY": { latitude: 43.0759, longitude: -107.2903 }  // Wyoming
};
