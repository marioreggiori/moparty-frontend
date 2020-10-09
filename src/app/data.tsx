import { ISearchFilterItem } from './interfaces';
import { faSoundcloud, faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';

export const searchFilterItems: ISearchFilterItem[] = [
  { key: "local", label: "Server", icon: faFolder, color: '#f9a825' },
  { key: "spotify", label: "Spotify", icon: faSpotify, color: '#1db954' },
  { key: "youtube", label: "YouTube", icon: faYoutube, color: '#ff0000' },
  { key: "soundcloud", label: "SoundCloud", icon: faSoundcloud, color: '#fe5000' },
];

export const tracks: any[] = [
  {
    "uri": "spotify:track:5le2nCdR2TuFzW1GieMNqe",
    "data": {
      "__model__": "Track",
      "uri": "spotify:track:5le2nCdR2TuFzW1GieMNqe",
      "name": "Muse Confusing",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "spotify:artist:0M1OLX3nC4aeHw04XjQIBL",
          "name": "jeremi mcgrath"
        }
      ],
      "album": {
        "__model__": "Album",
        "uri": "spotify:album:0jt4bFbf2OBeiNqKNX7fM3",
        "name": "Muse Confusing",
        "artists": [
          {
            "__model__": "Artist",
            "uri": "spotify:artist:0M1OLX3nC4aeHw04XjQIBL",
            "name": "jeremi mcgrath"
          }
        ]
      },
      "track_no": 1,
      "disc_no": 1,
      "length": 139633
    },
    "image": "{'__model__': 'Image', 'uri': 'https://i.scdn.co/image/ab67616d0000b27313c48a8812745bb56b08ccfa', 'width': 640, 'height': 640}"
  },
  {
    "uri": "spotify:track:3skn2lauGk7Dx6bVIt5DVj",
    "data": {
      "__model__": "Track",
      "uri": "spotify:track:3skn2lauGk7Dx6bVIt5DVj",
      "name": "Starlight",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
          "name": "Muse"
        }
      ],
      "album": {
        "__model__": "Album",
        "uri": "spotify:album:0lw68yx3MhKflWFqCsGkIs",
        "name": "Black Holes and Revelations",
        "artists": [
          {
            "__model__": "Artist",
            "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
            "name": "Muse"
          }
        ]
      },
      "track_no": 2,
      "disc_no": 1,
      "length": 240213
    },
    "image": "{'__model__': 'Image', 'uri': 'https://i.scdn.co/image/ab67616d0000b27328933b808bfb4cbbd0385400', 'width': 640, 'height': 640}"
  },
  {
    "uri": "spotify:track:7mtYsNBYTDPa8Mscf166hg",
    "data": {
      "__model__": "Track",
      "uri": "spotify:track:7mtYsNBYTDPa8Mscf166hg",
      "name": "Muse",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "spotify:artist:7yOMgA7bsjT5JY93SsFRrJ",
          "name": "Afro Nostalgia"
        }
      ],
      "album": {
        "__model__": "Album",
        "uri": "spotify:album:0OtJgnqGIlNFgP3nFi32s5",
        "name": "Muse (You Inspire Me)",
        "artists": [
          {
            "__model__": "Artist",
            "uri": "spotify:artist:7yOMgA7bsjT5JY93SsFRrJ",
            "name": "Afro Nostalgia"
          }
        ]
      },
      "track_no": 6,
      "disc_no": 1,
      "length": 123216
    },
    "image": "{'__model__': 'Image', 'uri': 'https://i.scdn.co/image/ab67616d0000b273a4d0259c12310fe71f61172b', 'width': 640, 'height': 640}"
  },
  {
    "uri": "spotify:track:0It6VJoMAare1zdV2wxqZq",
    "data": {
      "__model__": "Track",
      "uri": "spotify:track:0It6VJoMAare1zdV2wxqZq",
      "name": "Undisclosed Desires",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
          "name": "Muse"
        }
      ],
      "album": {
        "__model__": "Album",
        "uri": "spotify:album:0eFHYz8NmK75zSplL5qlfM",
        "name": "The Resistance",
        "artists": [
          {
            "__model__": "Artist",
            "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
            "name": "Muse"
          }
        ]
      },
      "track_no": 3,
      "disc_no": 1,
      "length": 235000
    },
    "image": "{'__model__': 'Image', 'uri': 'https://i.scdn.co/image/ab67616d0000b273b6d4566db0d12894a1a3b7a2', 'width': 640, 'height': 640}"
  },
  {
    "uri": "spotify:track:383QXk8nb2YrARMUwDdjQS",
    "data": {
      "__model__": "Track",
      "uri": "spotify:track:383QXk8nb2YrARMUwDdjQS",
      "name": "Psycho",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
          "name": "Muse"
        }
      ],
      "album": {
        "__model__": "Album",
        "uri": "spotify:album:2wart5Qjnvx1fd7LPdQxgJ",
        "name": "Drones",
        "artists": [
          {
            "__model__": "Artist",
            "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
            "name": "Muse"
          }
        ]
      },
      "track_no": 3,
      "disc_no": 1,
      "length": 316717
    },
    "image": "{'__model__': 'Image', 'uri': 'https://i.scdn.co/image/ab67616d0000b273808846f0223d97d5963c420d', 'width': 640, 'height': 640}"
  },
  {
    "uri": "spotify:track:7xyYsOvq5Ec3P4fr6mM9fD",
    "data": {
      "__model__": "Track",
      "uri": "spotify:track:7xyYsOvq5Ec3P4fr6mM9fD",
      "name": "Hysteria",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
          "name": "Muse"
        }
      ],
      "album": {
        "__model__": "Album",
        "uri": "spotify:album:0HcHPBu9aaF1MxOiZmUQTl",
        "name": "Absolution",
        "artists": [
          {
            "__model__": "Artist",
            "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
            "name": "Muse"
          }
        ]
      },
      "track_no": 8,
      "disc_no": 1,
      "length": 227440
    },
    "image": "{'__model__': 'Image', 'uri': 'https://i.scdn.co/image/ab67616d0000b2738cb690f962092fd44bbe2bf4', 'width': 640, 'height': 640}"
  },
  {
    "uri": "spotify:track:3sBpopPCelPx9fmxaNdMZb",
    "data": {
      "__model__": "Track",
      "uri": "spotify:track:3sBpopPCelPx9fmxaNdMZb",
      "name": "muse",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "spotify:artist:0RhZp1X2JrAwdy7z7NQIjy",
          "name": "cliffe"
        }
      ],
      "album": {
        "__model__": "Album",
        "uri": "spotify:album:0LEUp5kpnL7WTCiO2TODFb",
        "name": "isolation",
        "artists": [
          {
            "__model__": "Artist",
            "uri": "spotify:artist:0RhZp1X2JrAwdy7z7NQIjy",
            "name": "cliffe"
          }
        ]
      },
      "track_no": 6,
      "disc_no": 1,
      "length": 117366
    },
    "image": "{'__model__': 'Image', 'uri': 'https://i.scdn.co/image/ab67616d0000b273ff35e94786efc767ba8d38ec', 'width': 640, 'height': 640}"
  },
  {
    "uri": "spotify:track:7ouMYWpwJ422jRcDASZB7P",
    "data": {
      "__model__": "Track",
      "uri": "spotify:track:7ouMYWpwJ422jRcDASZB7P",
      "name": "Knights of Cydonia",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
          "name": "Muse"
        }
      ],
      "album": {
        "__model__": "Album",
        "uri": "spotify:album:0lw68yx3MhKflWFqCsGkIs",
        "name": "Black Holes and Revelations",
        "artists": [
          {
            "__model__": "Artist",
            "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
            "name": "Muse"
          }
        ]
      },
      "track_no": 11,
      "disc_no": 1,
      "length": 366213
    },
    "image": "{'__model__': 'Image', 'uri': 'https://i.scdn.co/image/ab67616d0000b27328933b808bfb4cbbd0385400', 'width': 640, 'height': 640}"
  },
  {
    "uri": "spotify:track:3eSyMBd7ERw68NVB3jlRmW",
    "data": {
      "__model__": "Track",
      "uri": "spotify:track:3eSyMBd7ERw68NVB3jlRmW",
      "name": "Pressure",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
          "name": "Muse"
        }
      ],
      "album": {
        "__model__": "Album",
        "uri": "spotify:album:5OZgDtx180ZZPMpm36J2zC",
        "name": "Simulation Theory (Super Deluxe)",
        "artists": [
          {
            "__model__": "Artist",
            "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
            "name": "Muse"
          }
        ]
      },
      "track_no": 3,
      "disc_no": 1,
      "length": 235600
    },
    "image": "{'__model__': 'Image', 'uri': 'https://i.scdn.co/image/ab67616d0000b2734cb163c1d111f77307c842b6', 'width': 640, 'height': 640}"
  },
  {
    "uri": "spotify:track:2takcwOaAZWiXQijPHIx7B",
    "data": {
      "__model__": "Track",
      "uri": "spotify:track:2takcwOaAZWiXQijPHIx7B",
      "name": "Time is Running Out",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
          "name": "Muse"
        }
      ],
      "album": {
        "__model__": "Album",
        "uri": "spotify:album:0HcHPBu9aaF1MxOiZmUQTl",
        "name": "Absolution",
        "artists": [
          {
            "__model__": "Artist",
            "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
            "name": "Muse"
          }
        ]
      },
      "track_no": 3,
      "disc_no": 1,
      "length": 237039
    },
    "image": "{'__model__': 'Image', 'uri': 'https://i.scdn.co/image/ab67616d0000b2738cb690f962092fd44bbe2bf4', 'width': 640, 'height': 640}"
  },
  {
    "uri": "spotify:track:0c4IEciLCDdXEhhKxj4ThA",
    "data": {
      "__model__": "Track",
      "uri": "spotify:track:0c4IEciLCDdXEhhKxj4ThA",
      "name": "Madness",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
          "name": "Muse"
        }
      ],
      "album": {
        "__model__": "Album",
        "uri": "spotify:album:3KuXEGcqLcnEYWnn3OEGy0",
        "name": "The 2nd Law",
        "artists": [
          {
            "__model__": "Artist",
            "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
            "name": "Muse"
          }
        ]
      },
      "track_no": 2,
      "disc_no": 1,
      "length": 281040
    },
    "image": "{'__model__': 'Image', 'uri': 'https://i.scdn.co/image/ab67616d0000b273fc192c54d1823a04ffb6c8c9', 'width': 640, 'height': 640}"
  },
  {
    "uri": "spotify:track:2UKARCqDrhkYDoVR4FN5Wi",
    "data": {
      "__model__": "Track",
      "uri": "spotify:track:2UKARCqDrhkYDoVR4FN5Wi",
      "name": "Plug in Baby",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
          "name": "Muse"
        }
      ],
      "album": {
        "__model__": "Album",
        "uri": "spotify:album:1Dh27pjT3IEdiRG9Se5uQn",
        "name": "Origin of Symmetry",
        "artists": [
          {
            "__model__": "Artist",
            "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
            "name": "Muse"
          }
        ]
      },
      "track_no": 5,
      "disc_no": 1,
      "length": 218000
    },
    "image": "{'__model__': 'Image', 'uri': 'https://i.scdn.co/image/ab67616d0000b2735225e9931a558f6d2f541a7d', 'width': 640, 'height': 640}"
  },
  {
    "uri": "spotify:track:5PK1JCSdr34gWgzYHgt3Jq",
    "data": {
      "__model__": "Track",
      "uri": "spotify:track:5PK1JCSdr34gWgzYHgt3Jq",
      "name": "Feeling Good",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
          "name": "Muse"
        }
      ],
      "album": {
        "__model__": "Album",
        "uri": "spotify:album:1Dh27pjT3IEdiRG9Se5uQn",
        "name": "Origin of Symmetry",
        "artists": [
          {
            "__model__": "Artist",
            "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
            "name": "Muse"
          }
        ]
      },
      "track_no": 10,
      "disc_no": 1,
      "length": 198800
    },
    "image": "{'__model__': 'Image', 'uri': 'https://i.scdn.co/image/ab67616d0000b2735225e9931a558f6d2f541a7d', 'width': 640, 'height': 640}"
  },
  {
    "uri": "spotify:track:0UbibsoAkjS0cvOIFGqVyc",
    "data": {
      "__model__": "Track",
      "uri": "spotify:track:0UbibsoAkjS0cvOIFGqVyc",
      "name": "Muse",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "spotify:artist:0n17Y3evgMMOxF8hITUGOr",
          "name": "OCAD"
        }
      ],
      "album": {
        "__model__": "Album",
        "uri": "spotify:album:4vfJfJWPbHpnfuvmIDqofC",
        "name": "The Truth",
        "artists": [
          {
            "__model__": "Artist",
            "uri": "spotify:artist:0n17Y3evgMMOxF8hITUGOr",
            "name": "OCAD"
          }
        ]
      },
      "track_no": 8,
      "disc_no": 1,
      "length": 260633
    },
    "image": "{'__model__': 'Image', 'uri': 'https://i.scdn.co/image/ab67616d0000b273553152aacf0038e115d4f5a0', 'width': 640, 'height': 640}"
  },
  {
    "uri": "spotify:track:3jPiv3uw7BUSkhdOuxUxkq",
    "data": {
      "__model__": "Track",
      "uri": "spotify:track:3jPiv3uw7BUSkhdOuxUxkq",
      "name": "Museum of Flight",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "spotify:artist:79JJCxCCfJ8HufX6w8q2k4",
          "name": "Damien Jurado"
        }
      ],
      "album": {
        "__model__": "Album",
        "uri": "spotify:album:7cgitojhkF1bHUTU3bTo8h",
        "name": "Maraqopa (Deluxe Edition)",
        "artists": [
          {
            "__model__": "Artist",
            "uri": "spotify:artist:79JJCxCCfJ8HufX6w8q2k4",
            "name": "Damien Jurado"
          }
        ]
      },
      "track_no": 9,
      "disc_no": 1,
      "length": 170906
    },
    "image": "{'__model__': 'Image', 'uri': 'https://i.scdn.co/image/ab67616d0000b273c98830088383a5f0b2e560bb', 'width': 640, 'height': 640}"
  },
  {
    "uri": "spotify:track:2VrJMuLt2m9HbifGrKWHqk",
    "data": {
      "__model__": "Track",
      "uri": "spotify:track:2VrJMuLt2m9HbifGrKWHqk",
      "name": "New Born",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
          "name": "Muse"
        }
      ],
      "album": {
        "__model__": "Album",
        "uri": "spotify:album:1Dh27pjT3IEdiRG9Se5uQn",
        "name": "Origin of Symmetry",
        "artists": [
          {
            "__model__": "Artist",
            "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
            "name": "Muse"
          }
        ]
      },
      "track_no": 1,
      "disc_no": 1,
      "length": 363266
    },
    "image": "{'__model__': 'Image', 'uri': 'https://i.scdn.co/image/ab67616d0000b2735225e9931a558f6d2f541a7d', 'width': 640, 'height': 640}"
  },
  {
    "uri": "spotify:track:3cMXfxjUrbSn0Ru514r1A0",
    "data": {
      "__model__": "Track",
      "uri": "spotify:track:3cMXfxjUrbSn0Ru514r1A0",
      "name": "Muse",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "spotify:artist:7B89xcoEzox2lf2KgiUMcR",
          "name": "Lomac Jack"
        }
      ],
      "album": {
        "__model__": "Album",
        "uri": "spotify:album:4Mp9DLStC6O8iJledimp6K",
        "name": "Bueno",
        "artists": [
          {
            "__model__": "Artist",
            "uri": "spotify:artist:7B89xcoEzox2lf2KgiUMcR",
            "name": "Lomac Jack"
          }
        ]
      },
      "track_no": 2,
      "disc_no": 1,
      "length": 270484
    },
    "image": "{'__model__': 'Image', 'uri': 'https://i.scdn.co/image/ab67616d0000b273e88de1f02b857e97e4eb15b4', 'width': 640, 'height': 640}"
  },
  {
    "uri": "spotify:track:0bJlWgjQ7l4JdTh2Mu5R8H",
    "data": {
      "__model__": "Track",
      "uri": "spotify:track:0bJlWgjQ7l4JdTh2Mu5R8H",
      "name": "Musette in D Major BWV Anh 126",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "spotify:artist:3CPcfo6XhPWZLjJGuA7ceL",
          "name": "Finn X"
        }
      ],
      "album": {
        "__model__": "Album",
        "uri": "spotify:album:5OLIetX5wC8y0z8J9sZWlx",
        "name": "Musette in D Major BWV Anh 126",
        "artists": [
          {
            "__model__": "Artist",
            "uri": "spotify:artist:3CPcfo6XhPWZLjJGuA7ceL",
            "name": "Finn X"
          }
        ]
      },
      "track_no": 1,
      "disc_no": 1,
      "length": 63366
    },
    "image": "{'__model__': 'Image', 'uri': 'https://i.scdn.co/image/ab67616d0000b273262f9008d392018477f583dd', 'width': 640, 'height': 640}"
  },
  {
    "uri": "spotify:track:2QiCEd0XkLX8t2uKMdoMcf",
    "data": {
      "__model__": "Track",
      "uri": "spotify:track:2QiCEd0XkLX8t2uKMdoMcf",
      "name": "Muse",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "spotify:artist:5a0etAzO5V26gvlbmHzT9W",
          "name": "Nicolas Jaar"
        }
      ],
      "album": {
        "__model__": "Album",
        "uri": "spotify:album:3bFGxO5DQrgQyub8eFfxwj",
        "name": "Pomegranates",
        "artists": [
          {
            "__model__": "Artist",
            "uri": "spotify:artist:5a0etAzO5V26gvlbmHzT9W",
            "name": "Nicolas Jaar"
          }
        ]
      },
      "track_no": 20,
      "disc_no": 1,
      "length": 343338
    },
    "image": "{'__model__': 'Image', 'uri': 'https://i.scdn.co/image/ab67616d0000b273c835fd1e990859f9c5808323', 'width': 640, 'height': 640}"
  },
  {
    "uri": "spotify:track:4HlMaLfq33EaGwbzbIUpbY",
    "data": {
      "__model__": "Track",
      "uri": "spotify:track:4HlMaLfq33EaGwbzbIUpbY",
      "name": "Muse",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "spotify:artist:0I7AkFWG8lvNK1ZNVEiF48",
          "name": "Dolcelo"
        }
      ],
      "album": {
        "__model__": "Album",
        "uri": "spotify:album:6r7hDAFUB1D3mWOLPHBi35",
        "name": "Orange Sand",
        "artists": [
          {
            "__model__": "Artist",
            "uri": "spotify:artist:0I7AkFWG8lvNK1ZNVEiF48",
            "name": "Dolcelo"
          }
        ]
      },
      "track_no": 1,
      "disc_no": 1,
      "length": 73900
    },
    "image": "{'__model__': 'Image', 'uri': 'https://i.scdn.co/image/ab67616d0000b2738be3ba94eec97c06bd274942', 'width': 640, 'height': 640}"
  },
  {
    "uri": "spotify:track:57lCa95tmjJ8EYdNTex8Kk",
    "data": {
      "__model__": "Track",
      "uri": "spotify:track:57lCa95tmjJ8EYdNTex8Kk",
      "name": "Thought Contagion",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
          "name": "Muse"
        }
      ],
      "album": {
        "__model__": "Album",
        "uri": "spotify:album:5OZgDtx180ZZPMpm36J2zC",
        "name": "Simulation Theory (Super Deluxe)",
        "artists": [
          {
            "__model__": "Artist",
            "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
            "name": "Muse"
          }
        ]
      },
      "track_no": 7,
      "disc_no": 1,
      "length": 206106
    },
    "image": "{'__model__': 'Image', 'uri': 'https://i.scdn.co/image/ab67616d0000b2734cb163c1d111f77307c842b6', 'width': 640, 'height': 640}"
  },
  {
    "uri": "spotify:track:10fmvZaahpvON7LttFiMnS",
    "data": {
      "__model__": "Track",
      "uri": "spotify:track:10fmvZaahpvON7LttFiMnS",
      "name": "Museum of Life",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "spotify:artist:5jZeLexrrwGNUy6nv7tzdr",
          "name": "C4C"
        }
      ],
      "album": {
        "__model__": "Album",
        "uri": "spotify:album:7MoM8L7oip2yRaQuOhJJTh",
        "name": "Looking for Memories EP",
        "artists": [
          {
            "__model__": "Artist",
            "uri": "spotify:artist:5jZeLexrrwGNUy6nv7tzdr",
            "name": "C4C"
          }
        ]
      },
      "track_no": 4,
      "disc_no": 1,
      "length": 149800
    },
    "image": "{'__model__': 'Image', 'uri': 'https://i.scdn.co/image/ab67616d0000b273fc8cfd639712f7067ffd61aa', 'width': 640, 'height': 640}"
  },
  {
    "uri": "spotify:track:1C2QJNTmsTxCDBuIgai8QV",
    "data": {
      "__model__": "Track",
      "uri": "spotify:track:1C2QJNTmsTxCDBuIgai8QV",
      "name": "Resistance",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
          "name": "Muse"
        }
      ],
      "album": {
        "__model__": "Album",
        "uri": "spotify:album:0eFHYz8NmK75zSplL5qlfM",
        "name": "The Resistance",
        "artists": [
          {
            "__model__": "Artist",
            "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
            "name": "Muse"
          }
        ]
      },
      "track_no": 2,
      "disc_no": 1,
      "length": 346693
    },
    "image": "{'__model__': 'Image', 'uri': 'https://i.scdn.co/image/ab67616d0000b273b6d4566db0d12894a1a3b7a2', 'width': 640, 'height': 640}"
  },
  {
    "uri": "spotify:track:7KSj20mcLsG2nIKSiVhkki",
    "data": {
      "__model__": "Track",
      "uri": "spotify:track:7KSj20mcLsG2nIKSiVhkki",
      "name": "Muse",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "spotify:artist:758yIKdhJhWL6oTuTSFVV6",
          "name": "Dirk Maassen"
        }
      ],
      "album": {
        "__model__": "Album",
        "uri": "spotify:album:3UOCNtDuNu02qo5zIlCQ4B",
        "name": "Avalanche",
        "artists": [
          {
            "__model__": "Artist",
            "uri": "spotify:artist:758yIKdhJhWL6oTuTSFVV6",
            "name": "Dirk Maassen"
          }
        ]
      },
      "track_no": 8,
      "disc_no": 1,
      "length": 234048
    },
    "image": "{'__model__': 'Image', 'uri': 'https://i.scdn.co/image/ab67616d0000b273227eb2d4908a0ec647955260', 'width': 640, 'height': 640}"
  },
  {
    "uri": "spotify:track:6kyxQuFD38mo4S3urD2Wkw",
    "data": {
      "__model__": "Track",
      "uri": "spotify:track:6kyxQuFD38mo4S3urD2Wkw",
      "name": "Unintended",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
          "name": "Muse"
        }
      ],
      "album": {
        "__model__": "Album",
        "uri": "spotify:album:6AyUVv7MnxxTuijp4WmrhO",
        "name": "Showbiz",
        "artists": [
          {
            "__model__": "Artist",
            "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
            "name": "Muse"
          }
        ]
      },
      "track_no": 7,
      "disc_no": 1,
      "length": 237026
    },
    "image": "{'__model__': 'Image', 'uri': 'https://i.scdn.co/image/ab67616d0000b27334dd1b3a44cccef2d3c8bfce', 'width': 640, 'height': 640}"
  },
  {
    "uri": "spotify:track:0dMYPDqcI4ca4cjqlmp9mE",
    "data": {
      "__model__": "Track",
      "uri": "spotify:track:0dMYPDqcI4ca4cjqlmp9mE",
      "name": "The Dark Side",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
          "name": "Muse"
        }
      ],
      "album": {
        "__model__": "Album",
        "uri": "spotify:album:5OZgDtx180ZZPMpm36J2zC",
        "name": "Simulation Theory (Super Deluxe)",
        "artists": [
          {
            "__model__": "Artist",
            "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
            "name": "Muse"
          }
        ]
      },
      "track_no": 2,
      "disc_no": 1,
      "length": 227213
    },
    "image": "{'__model__': 'Image', 'uri': 'https://i.scdn.co/image/ab67616d0000b2734cb163c1d111f77307c842b6', 'width': 640, 'height': 640}"
  },
  {
    "uri": "spotify:track:0RILico3Gbl5jxSNg3zLrJ",
    "data": {
      "__model__": "Track",
      "uri": "spotify:track:0RILico3Gbl5jxSNg3zLrJ",
      "name": "Dig Down",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
          "name": "Muse"
        }
      ],
      "album": {
        "__model__": "Album",
        "uri": "spotify:album:5OZgDtx180ZZPMpm36J2zC",
        "name": "Simulation Theory (Super Deluxe)",
        "artists": [
          {
            "__model__": "Artist",
            "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
            "name": "Muse"
          }
        ]
      },
      "track_no": 10,
      "disc_no": 1,
      "length": 228146
    },
    "image": "{'__model__': 'Image', 'uri': 'https://i.scdn.co/image/ab67616d0000b2734cb163c1d111f77307c842b6', 'width': 640, 'height': 640}"
  },
  {
    "uri": "spotify:track:6VlUOq88QamELxN8aTXA4j",
    "data": {
      "__model__": "Track",
      "uri": "spotify:track:6VlUOq88QamELxN8aTXA4j",
      "name": "Notenbüchlein für Anna Magdalena Bach (Arr. for guitar A. Lagoya): 26. Musette in D major, Anh.126",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "spotify:artist:5aIqB5nVVvmFsvSdExz408",
          "name": "Johann Sebastian Bach"
        },
        {
          "__model__": "Artist",
          "uri": "spotify:artist:4daNEEliCdZMA7umPOd0Bt",
          "name": "Alexandre Lagoya"
        }
      ],
      "album": {
        "__model__": "Album",
        "uri": "spotify:album:37SqTaSoHokmB1wECCN4lS",
        "name": "The World of Bach",
        "artists": [
          {
            "__model__": "Artist",
            "uri": "spotify:artist:5aIqB5nVVvmFsvSdExz408",
            "name": "Johann Sebastian Bach"
          }
        ]
      },
      "track_no": 37,
      "disc_no": 1,
      "length": 71053
    },
    "image": "{'__model__': 'Image', 'uri': 'https://i.scdn.co/image/ab67616d0000b27337430e6a2477c69911fa3487', 'width': 640, 'height': 640}"
  },
  {
    "uri": "spotify:track:7wVrvDD8P9RkkraHDE0won",
    "data": {
      "__model__": "Track",
      "uri": "spotify:track:7wVrvDD8P9RkkraHDE0won",
      "name": "Notenbüchlein für Anna Magdalena Bach (Arr. for guitar A. Lagoya): 26. Musette in D major, Anh.126",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "spotify:artist:5aIqB5nVVvmFsvSdExz408",
          "name": "Johann Sebastian Bach"
        },
        {
          "__model__": "Artist",
          "uri": "spotify:artist:4daNEEliCdZMA7umPOd0Bt",
          "name": "Alexandre Lagoya"
        }
      ],
      "album": {
        "__model__": "Album",
        "uri": "spotify:album:1XKHQ8RG4bhte1yP0m18Mu",
        "name": "Eternal Classical: Bach",
        "artists": [
          {
            "__model__": "Artist",
            "uri": "spotify:artist:5aIqB5nVVvmFsvSdExz408",
            "name": "Johann Sebastian Bach"
          }
        ]
      },
      "track_no": 36,
      "disc_no": 1,
      "length": 71053
    },
    "image": "{'__model__': 'Image', 'uri': 'https://i.scdn.co/image/ab67616d0000b2739ff5b50d637061e87e9799eb', 'width': 640, 'height': 640}"
  },
  {
    "uri": "spotify:track:5U52J9fjxwfOqgljWpgg3d",
    "data": {
      "__model__": "Track",
      "uri": "spotify:track:5U52J9fjxwfOqgljWpgg3d",
      "name": "Testament",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "spotify:artist:6LJBHROvHrYaH7BA0w0KDy",
          "name": "Sarah Lesch"
        }
      ],
      "album": {
        "__model__": "Album",
        "uri": "spotify:album:1MlYhNEvmF7XtQMVIWz4Ib",
        "name": "Von Musen & Matrosen",
        "artists": [
          {
            "__model__": "Artist",
            "uri": "spotify:artist:6LJBHROvHrYaH7BA0w0KDy",
            "name": "Sarah Lesch"
          }
        ]
      },
      "track_no": 10,
      "disc_no": 1,
      "length": 338199
    },
    "image": "{'__model__': 'Image', 'uri': 'https://i.scdn.co/image/ab67616d0000b27357c96a393c3503071b3fe57d', 'width': 640, 'height': 640}"
  },
  {
    "uri": "spotify:track:7AOIpGjtubeC0uSiMEhOyR",
    "data": {
      "__model__": "Track",
      "uri": "spotify:track:7AOIpGjtubeC0uSiMEhOyR",
      "name": "A Muse",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "spotify:artist:7e1ICztHM2Sc4JNLxeMXYl",
          "name": "dvsn"
        }
      ],
      "album": {
        "__model__": "Album",
        "uri": "spotify:album:3hVw6V8hze4yXUGfkO1gE2",
        "name": "A Muse",
        "artists": [
          {
            "__model__": "Artist",
            "uri": "spotify:artist:7e1ICztHM2Sc4JNLxeMXYl",
            "name": "dvsn"
          }
        ]
      },
      "track_no": 1,
      "disc_no": 1,
      "length": 222089
    },
    "image": "{'__model__': 'Image', 'uri': 'https://i.scdn.co/image/ab67616d0000b27328003b4327f0f4a2a53c95e8', 'width': 640, 'height': 640}"
  },
  {
    "uri": "spotify:track:0HBrtXJohbIW4IhPZ50GmH",
    "data": {
      "__model__": "Track",
      "uri": "spotify:track:0HBrtXJohbIW4IhPZ50GmH",
      "name": "The Bidding",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "spotify:artist:7lqaPghwYv2mE9baz5XQmL",
          "name": "Tally Hall"
        }
      ],
      "album": {
        "__model__": "Album",
        "uri": "spotify:album:2TN3NIEBmAOGWmvP96DFs5",
        "name": "Marvin's Marvelous Mechanical Museum",
        "artists": [
          {
            "__model__": "Artist",
            "uri": "spotify:artist:7lqaPghwYv2mE9baz5XQmL",
            "name": "Tally Hall"
          }
        ]
      },
      "track_no": 5,
      "disc_no": 1,
      "length": 160613
    },
    "image": "{'__model__': 'Image', 'uri': 'https://i.scdn.co/image/ab67616d0000b273b9ccb466665c2ac10dc0d628', 'width': 640, 'height': 640}"
  },
  {
    "uri": "spotify:track:5rupf5kRDLhhFPxH15ZmBF",
    "data": {
      "__model__": "Track",
      "uri": "spotify:track:5rupf5kRDLhhFPxH15ZmBF",
      "name": "Muscle Museum",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
          "name": "Muse"
        }
      ],
      "album": {
        "__model__": "Album",
        "uri": "spotify:album:6AyUVv7MnxxTuijp4WmrhO",
        "name": "Showbiz",
        "artists": [
          {
            "__model__": "Artist",
            "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
            "name": "Muse"
          }
        ]
      },
      "track_no": 2,
      "disc_no": 1,
      "length": 262973
    },
    "image": "{'__model__': 'Image', 'uri': 'https://i.scdn.co/image/ab67616d0000b27334dd1b3a44cccef2d3c8bfce', 'width': 640, 'height': 640}"
  },
  {
    "uri": "spotify:track:6nVIKrgE7lIlgLPbJ6l29f",
    "data": {
      "__model__": "Track",
      "uri": "spotify:track:6nVIKrgE7lIlgLPbJ6l29f",
      "name": "VORACITY",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "spotify:artist:1NRrtMvT3o1TI6I8XCuweq",
          "name": "MYTH & ROID"
        }
      ],
      "album": {
        "__model__": "Album",
        "uri": "spotify:album:3VBaCgrD7i77Y0P3wiOol1",
        "name": "MYTH & ROID ベストアルバム「MUSEUM-THE BEST OF MYTH & ROID-」",
        "artists": [
          {
            "__model__": "Artist",
            "uri": "spotify:artist:1NRrtMvT3o1TI6I8XCuweq",
            "name": "MYTH & ROID"
          }
        ]
      },
      "track_no": 11,
      "disc_no": 1,
      "length": 231704
    },
    "image": "{'__model__': 'Image', 'uri': 'https://i.scdn.co/image/ab67616d0000b273b6fd356bedebb4493fe5b84f', 'width': 640, 'height': 640}"
  },
  {
    "uri": "spotify:track:0RjG5JmdOWXAR68dGlKBA5",
    "data": {
      "__model__": "Track",
      "uri": "spotify:track:0RjG5JmdOWXAR68dGlKBA5",
      "name": "Hidden In the Sand",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "spotify:artist:7lqaPghwYv2mE9baz5XQmL",
          "name": "Tally Hall"
        }
      ],
      "album": {
        "__model__": "Album",
        "uri": "spotify:album:2TN3NIEBmAOGWmvP96DFs5",
        "name": "Marvin's Marvelous Mechanical Museum",
        "artists": [
          {
            "__model__": "Artist",
            "uri": "spotify:artist:7lqaPghwYv2mE9baz5XQmL",
            "name": "Tally Hall"
          }
        ]
      },
      "track_no": 15,
      "disc_no": 1,
      "length": 112960
    },
    "image": "{'__model__': 'Image', 'uri': 'https://i.scdn.co/image/ab67616d0000b273b9ccb466665c2ac10dc0d628', 'width': 640, 'height': 640}"
  },
  {
    "uri": "spotify:track:4rIy5oneG1Tjwd4oWY6rt7",
    "data": {
      "__model__": "Track",
      "uri": "spotify:track:4rIy5oneG1Tjwd4oWY6rt7",
      "name": "Nichts",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "spotify:artist:6LJBHROvHrYaH7BA0w0KDy",
          "name": "Sarah Lesch"
        }
      ],
      "album": {
        "__model__": "Album",
        "uri": "spotify:album:1MlYhNEvmF7XtQMVIWz4Ib",
        "name": "Von Musen & Matrosen",
        "artists": [
          {
            "__model__": "Artist",
            "uri": "spotify:artist:6LJBHROvHrYaH7BA0w0KDy",
            "name": "Sarah Lesch"
          }
        ]
      },
      "track_no": 4,
      "disc_no": 1,
      "length": 224608
    },
    "image": "{'__model__': 'Image', 'uri': 'https://i.scdn.co/image/ab67616d0000b27357c96a393c3503071b3fe57d', 'width': 640, 'height': 640}"
  },
  {
    "uri": "spotify:track:1kVm5oF3lmztkX3zimdbFP",
    "data": {
      "__model__": "Track",
      "uri": "spotify:track:1kVm5oF3lmztkX3zimdbFP",
      "name": "Merlot, Macht & Muse",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "spotify:artist:2fUZ5QodNiQntWefUy6Jfh",
          "name": "Alli Neumann"
        }
      ],
      "album": {
        "__model__": "Album",
        "uri": "spotify:album:7aXoimdFLEsyN99qYQV9Z4",
        "name": "Hohes Fieber",
        "artists": [
          {
            "__model__": "Artist",
            "uri": "spotify:artist:2fUZ5QodNiQntWefUy6Jfh",
            "name": "Alli Neumann"
          }
        ]
      },
      "track_no": 4,
      "disc_no": 1,
      "length": 207400
    },
    "image": "{'__model__': 'Image', 'uri': 'https://i.scdn.co/image/ab67616d0000b2731fb7f344c0bd56abb6b4f027', 'width': 640, 'height': 640}"
  },
  {
    "uri": "spotify:track:6Ok5DivyUJjsLVUUWLzz6o",
    "data": {
      "__model__": "Track",
      "uri": "spotify:track:6Ok5DivyUJjsLVUUWLzz6o",
      "name": "'Flawless' Do It Well Pt. 3 (feat. Summer Walker)",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "spotify:artist:7e1ICztHM2Sc4JNLxeMXYl",
          "name": "dvsn"
        },
        {
          "__model__": "Artist",
          "uri": "spotify:artist:57LYzLEk2LcFghVwuWbcuS",
          "name": "Summer Walker"
        }
      ],
      "album": {
        "__model__": "Album",
        "uri": "spotify:album:153lLZKTVw25BTcLuXB8ME",
        "name": "A Muse In Her Feelings",
        "artists": [
          {
            "__model__": "Artist",
            "uri": "spotify:artist:7e1ICztHM2Sc4JNLxeMXYl",
            "name": "dvsn"
          }
        ]
      },
      "track_no": 11,
      "disc_no": 1,
      "length": 231489
    },
    "image": "{'__model__': 'Image', 'uri': 'https://i.scdn.co/image/ab67616d0000b2733aba3bf1aad3ff1bb393e4b2', 'width': 640, 'height': 640}"
  },
  {
    "uri": "spotify:track:5VVWgWH8HFLAtM8lbttvn9",
    "data": {
      "__model__": "Track",
      "uri": "spotify:track:5VVWgWH8HFLAtM8lbttvn9",
      "name": "Stockholm Syndrome",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
          "name": "Muse"
        }
      ],
      "album": {
        "__model__": "Album",
        "uri": "spotify:album:0HcHPBu9aaF1MxOiZmUQTl",
        "name": "Absolution",
        "artists": [
          {
            "__model__": "Artist",
            "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
            "name": "Muse"
          }
        ]
      },
      "track_no": 5,
      "disc_no": 1,
      "length": 297000
    },
    "image": "{'__model__': 'Image', 'uri': 'https://i.scdn.co/image/ab67616d0000b2738cb690f962092fd44bbe2bf4', 'width': 640, 'height': 640}"
  },
  {
    "uri": "spotify:track:40pPI2TbaYSZlKfV44HRjn",
    "data": {
      "__model__": "Track",
      "uri": "spotify:track:40pPI2TbaYSZlKfV44HRjn",
      "name": "Supremacy",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
          "name": "Muse"
        }
      ],
      "album": {
        "__model__": "Album",
        "uri": "spotify:album:3KuXEGcqLcnEYWnn3OEGy0",
        "name": "The 2nd Law",
        "artists": [
          {
            "__model__": "Artist",
            "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
            "name": "Muse"
          }
        ]
      },
      "track_no": 1,
      "disc_no": 1,
      "length": 295373
    },
    "image": "{'__model__': 'Image', 'uri': 'https://i.scdn.co/image/ab67616d0000b273fc192c54d1823a04ffb6c8c9', 'width': 640, 'height': 640}"
  },
  {
    "uri": "spotify:track:1tjHKKI0r82IB5KL29whHs",
    "data": {
      "__model__": "Track",
      "uri": "spotify:track:1tjHKKI0r82IB5KL29whHs",
      "name": "Panic Station",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
          "name": "Muse"
        }
      ],
      "album": {
        "__model__": "Album",
        "uri": "spotify:album:3KuXEGcqLcnEYWnn3OEGy0",
        "name": "The 2nd Law",
        "artists": [
          {
            "__model__": "Artist",
            "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
            "name": "Muse"
          }
        ]
      },
      "track_no": 3,
      "disc_no": 1,
      "length": 184200
    },
    "image": "{'__model__': 'Image', 'uri': 'https://i.scdn.co/image/ab67616d0000b273fc192c54d1823a04ffb6c8c9', 'width': 640, 'height': 640}"
  },
  {
    "uri": "spotify:track:0j3obufLXq5toSs592dX9U",
    "data": {
      "__model__": "Track",
      "uri": "spotify:track:0j3obufLXq5toSs592dX9U",
      "name": "Bliss",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
          "name": "Muse"
        }
      ],
      "album": {
        "__model__": "Album",
        "uri": "spotify:album:1Dh27pjT3IEdiRG9Se5uQn",
        "name": "Origin of Symmetry",
        "artists": [
          {
            "__model__": "Artist",
            "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
            "name": "Muse"
          }
        ]
      },
      "track_no": 2,
      "disc_no": 1,
      "length": 251146
    },
    "image": "{'__model__': 'Image', 'uri': 'https://i.scdn.co/image/ab67616d0000b2735225e9931a558f6d2f541a7d', 'width': 640, 'height': 640}"
  },
  {
    "uri": "spotify:track:2daZovie6pc2ZK7StayD1K",
    "data": {
      "__model__": "Track",
      "uri": "spotify:track:2daZovie6pc2ZK7StayD1K",
      "name": "Dead Inside",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
          "name": "Muse"
        }
      ],
      "album": {
        "__model__": "Album",
        "uri": "spotify:album:2wart5Qjnvx1fd7LPdQxgJ",
        "name": "Drones",
        "artists": [
          {
            "__model__": "Artist",
            "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
            "name": "Muse"
          }
        ]
      },
      "track_no": 1,
      "disc_no": 1,
      "length": 262947
    },
    "image": "{'__model__': 'Image', 'uri': 'https://i.scdn.co/image/ab67616d0000b273808846f0223d97d5963c420d', 'width': 640, 'height': 640}"
  },
  {
    "uri": "spotify:track:069WyE1KC4IN8DLK3SI6c9",
    "data": {
      "__model__": "Track",
      "uri": "spotify:track:069WyE1KC4IN8DLK3SI6c9",
      "name": "Ariodante HWV 33 / Act 1: Musette I (Lentement) - Live",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "spotify:artist:1QL7yTHrdahRMpvNtn6rI2",
          "name": "George Frideric Handel"
        },
        {
          "__model__": "Artist",
          "uri": "spotify:artist:582DACpHBiVtsBpY3giwPB",
          "name": "Marc Minkowski"
        },
        {
          "__model__": "Artist",
          "uri": "spotify:artist:05OQwvgj7Q7jHJy38bma4R",
          "name": "Les Musiciens du Louvre"
        }
      ],
      "album": {
        "__model__": "Album",
        "uri": "spotify:album:6a33GLCMNd62tnW17vJaaG",
        "name": "Marc Minkowski conducts Handel",
        "artists": [
          {
            "__model__": "Artist",
            "uri": "spotify:artist:1QL7yTHrdahRMpvNtn6rI2",
            "name": "George Frideric Handel"
          },
          {
            "__model__": "Artist",
            "uri": "spotify:artist:582DACpHBiVtsBpY3giwPB",
            "name": "Marc Minkowski"
          }
        ]
      },
      "track_no": 156,
      "disc_no": 1,
      "length": 122026
    },
    "image": "{'__model__': 'Image', 'uri': 'https://i.scdn.co/image/ab67616d0000b273c91aec53360814de6832c49e', 'width': 640, 'height': 640}"
  },
  {
    "uri": "spotify:track:6OEtwluwqhlAiJnIYyrGsY",
    "data": {
      "__model__": "Track",
      "uri": "spotify:track:6OEtwluwqhlAiJnIYyrGsY",
      "name": "Ariodante HWV 33 / Act 1: Musette II (Andante) - Live",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "spotify:artist:1QL7yTHrdahRMpvNtn6rI2",
          "name": "George Frideric Handel"
        },
        {
          "__model__": "Artist",
          "uri": "spotify:artist:582DACpHBiVtsBpY3giwPB",
          "name": "Marc Minkowski"
        },
        {
          "__model__": "Artist",
          "uri": "spotify:artist:05OQwvgj7Q7jHJy38bma4R",
          "name": "Les Musiciens du Louvre"
        }
      ],
      "album": {
        "__model__": "Album",
        "uri": "spotify:album:6a33GLCMNd62tnW17vJaaG",
        "name": "Marc Minkowski conducts Handel",
        "artists": [
          {
            "__model__": "Artist",
            "uri": "spotify:artist:1QL7yTHrdahRMpvNtn6rI2",
            "name": "George Frideric Handel"
          },
          {
            "__model__": "Artist",
            "uri": "spotify:artist:582DACpHBiVtsBpY3giwPB",
            "name": "Marc Minkowski"
          }
        ]
      },
      "track_no": 157,
      "disc_no": 1,
      "length": 49306
    },
    "image": "{'__model__': 'Image', 'uri': 'https://i.scdn.co/image/ab67616d0000b273c91aec53360814de6832c49e', 'width': 640, 'height': 640}"
  },
  {
    "uri": "spotify:track:5YXr4AGfUQpLSxtFSsKUh6",
    "data": {
      "__model__": "Track",
      "uri": "spotify:track:5YXr4AGfUQpLSxtFSsKUh6",
      "name": "Map of the Problematique",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
          "name": "Muse"
        }
      ],
      "album": {
        "__model__": "Album",
        "uri": "spotify:album:0lw68yx3MhKflWFqCsGkIs",
        "name": "Black Holes and Revelations",
        "artists": [
          {
            "__model__": "Artist",
            "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
            "name": "Muse"
          }
        ]
      },
      "track_no": 4,
      "disc_no": 1,
      "length": 258066
    },
    "image": "{'__model__': 'Image', 'uri': 'https://i.scdn.co/image/ab67616d0000b27328933b808bfb4cbbd0385400', 'width': 640, 'height': 640}"
  },
  {
    "uri": "spotify:track:2qkmPUG7ARsRwhVICQVwQS",
    "data": {
      "__model__": "Track",
      "uri": "spotify:track:2qkmPUG7ARsRwhVICQVwQS",
      "name": "Mercy",
      "artists": [
        {
          "__model__": "Artist",
          "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
          "name": "Muse"
        }
      ],
      "album": {
        "__model__": "Album",
        "uri": "spotify:album:2wart5Qjnvx1fd7LPdQxgJ",
        "name": "Drones",
        "artists": [
          {
            "__model__": "Artist",
            "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI",
            "name": "Muse"
          }
        ]
      },
      "track_no": 4,
      "disc_no": 1,
      "length": 231973
    },
    "image": "{'__model__': 'Image', 'uri': 'https://i.scdn.co/image/ab67616d0000b273808846f0223d97d5963c420d', 'width': 640, 'height': 640}"
  }
];