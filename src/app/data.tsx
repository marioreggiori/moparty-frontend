import { ISearchFilterItem, ITrack } from './interfaces';
import { faSoundcloud, faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';

export const searchFilterItems: ISearchFilterItem[] = [
  { key: "local", label: "Lokal", icon: faFolder, color: '#ffc107' },
  { key: "spotify", label: "Spotify", icon: faSpotify, color: '#1db954' },
  { key: "youtube", label: "YouTube", icon: faYoutube, color: '#ff0000' },
  { key: "soundcloud", label: "SoundCloud", icon: faSoundcloud, color: '#fe5000' },
];

export const tracks: ITrack[] = [
  { title: "Little Dark Age", artist: "MGMT", album: "Oracular Spectacular", lenght: 100 },
  { title: "Little Dark Age", artist: "MGMT", album: "Oracular Spectacular", lenght: 100 },
  { title: "Little Dark Age", artist: "MGMT", album: "Oracular Spectacular", lenght: 100 },
  { title: "Little Dark Age", artist: "MGMT", album: "Oracular Spectacular", lenght: 100 },
  { title: "Little Dark Age", artist: "MGMT", album: "Oracular Spectacular", lenght: 100 },
  { title: "Little Dark Age", artist: "MGMT", album: "Oracular Spectacular", lenght: 100 },
  { title: "Little Dark Age", artist: "MGMT", album: "Oracular Spectacular", lenght: 100 },
  { title: "Little Dark Age", artist: "MGMT", album: "Oracular Spectacular", lenght: 100 },
];