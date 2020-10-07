import React from 'react';

interface Track {
  title: string;
  artist: string;
  album: string;
  lenght: number;
}

const tracks: Track[] = [
  { title: "Little Dark Age", artist: "MGMT", album: "Oracular Spectacular", lenght: 100 },
  { title: "Little Dark Age", artist: "MGMT", album: "Oracular Spectacular", lenght: 100 },
  { title: "Little Dark Age", artist: "MGMT", album: "Oracular Spectacular", lenght: 100 },
  { title: "Little Dark Age", artist: "MGMT", album: "Oracular Spectacular", lenght: 100 },
  { title: "Little Dark Age", artist: "MGMT", album: "Oracular Spectacular", lenght: 100 },
  { title: "Little Dark Age", artist: "MGMT", album: "Oracular Spectacular", lenght: 100 },
  { title: "Little Dark Age", artist: "MGMT", album: "Oracular Spectacular", lenght: 100 },
  { title: "Little Dark Age", artist: "MGMT", album: "Oracular Spectacular", lenght: 100 },
  { title: "Little Dark Age", artist: "MGMT", album: "Oracular Spectacular", lenght: 100 },
  { title: "Little Dark Age", artist: "MGMT", album: "Oracular Spectacular", lenght: 100 },
  { title: "Little Dark Age", artist: "MGMT", album: "Oracular Spectacular", lenght: 100 },
  { title: "Little Dark Age", artist: "MGMT", album: "Oracular Spectacular", lenght: 100 },
  { title: "Little Dark Age", artist: "MGMT", album: "Oracular Spectacular", lenght: 100 },
  { title: "Little Dark Age", artist: "MGMT", album: "Oracular Spectacular", lenght: 100 },
  { title: "Little Dark Age", artist: "MGMT", album: "Oracular Spectacular", lenght: 100 },
  { title: "Little Dark Age", artist: "MGMT", album: "Oracular Spectacular", lenght: 100 },
  { title: "Little Dark Age", artist: "MGMT", album: "Oracular Spectacular", lenght: 100 },
  { title: "Little Dark Age", artist: "MGMT", album: "Oracular Spectacular", lenght: 100 },
  { title: "Little Dark Age", artist: "MGMT", album: "Oracular Spectacular", lenght: 100 },
]

export default (props: any) => {
  return (
    <div id="playlists">
      {tracks.map((track, index) => {
        return <Track key={index} {...track} />
      })}
    </div>
  )
}

const Track = ({ title, artist, album, lenght }: Track) => {
  return (
    <div className="track">
      <div className="title">{title}</div>
      <div className="artist">{artist}</div>
      <div className="album">{album}</div>
    </div>
  )
}