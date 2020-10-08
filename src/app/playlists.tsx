import React, { useState } from 'react';

import Track, { TrackControlButton } from './components/track';
import { faArrowUp, faHeart, faHistory, faList, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useRecoilValue } from 'recoil';
import { historyListState, playListState, upNextListState, wishListState } from './state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

enum PlaylistType {
  User,
  Next,
  History,
}

export default (props: any) => {
  const [selectedPlaylist, setSelectedPlaylist] = useState(PlaylistType.User);

  const content = selectedPlaylist === PlaylistType.User
    ? <UserPlaylist />
    : (selectedPlaylist === PlaylistType.Next
      ? <NextPlaylist />
      : <HistoryPlaylist />
    )

  return (
    <div id="playlists">
      <div id="playlist_switch">
        <PlaylistSwitchButton active={selectedPlaylist === PlaylistType.User} icon={faHeart} playlist={PlaylistType.User} select={setSelectedPlaylist} />
        <PlaylistSwitchButton active={selectedPlaylist === PlaylistType.Next} icon={faList} playlist={PlaylistType.Next} select={setSelectedPlaylist} />
        <PlaylistSwitchButton active={selectedPlaylist === PlaylistType.History} icon={faHistory} playlist={PlaylistType.History} select={setSelectedPlaylist} />
      </div>
      <div id="playlist_content">
        {content}
      </div>
    </div>
  )
}

const UserPlaylist = (props: any) => {
  const wishList = useRecoilValue(wishListState);
  const playList = useRecoilValue(playListState);
  return (
    <>
      <div className="header">Meine Wunschliste</div>
      {wishList.map((track, index) => {
        return <Track key={index} {...track} />
      })}
      <div className="header">Meine Playlist</div>
      <QueueSpotifyPlaylist />
      {playList.map((track, index) => {
        return (
          <Track key={index} {...track}>
            {index > 0 && (
              <TrackControlButton icon={faArrowUp} title="hochschieben" />
            )}
            <TrackControlButton icon={faTrash} title="löschen" />
          </Track>
        )
      })}
    </>
  );
}

const QueueSpotifyPlaylist = (props: any) => {
  const [spotifyUri, setSpotifyUri] = useState('');
  const onSubmit = (ev: any) => {
    ev.preventDefault();
    console.log(spotifyUri);
    setSpotifyUri('');
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input value={spotifyUri} onChange={ev => setSpotifyUri(ev.target.value)} className="queue_spotify_playlist_input" placeholder="Spotify URI eingeben" />
      </form>
    </>
  );
}

const NextPlaylist = (props: any) => {
  const upNext = useRecoilValue(upNextListState);
  return (
    <>
      <div className="header">Play Next</div>
      {upNext.map((track, index) => {
        return <Track key={index} {...track} />
      })}
    </>
  );
}

const HistoryPlaylist = (props: any) => {
  const history = useRecoilValue(historyListState);
  return (
    <>
      <div className="header">History</div>
      {history.map((track, index) => {
        return <Track key={index} {...track} />
      })}
    </>
  );
}

const PlaylistSwitchButton = ({ icon, select, playlist, active }: any) => {
  return (
    <div className="playlist_switch_button" data-active={active} onClick={ev => select(playlist)}>
      <FontAwesomeIcon icon={icon} />
    </div>
  )
}