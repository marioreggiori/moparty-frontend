import React, { useState } from 'react';

import Track, { TrackControlButton } from './components/track';
import { faArrowUp, faHeart, faHistory, faPlay, faSignOutAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
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
        <PlaylistSwitchButton active={selectedPlaylist === PlaylistType.Next} icon={faPlay} playlist={PlaylistType.Next} select={setSelectedPlaylist} />
        <PlaylistSwitchButton active={selectedPlaylist === PlaylistType.History} icon={faHistory} playlist={PlaylistType.History} select={setSelectedPlaylist} />
        <a id="logout" href="/accounts/logout" title="Sign out"><FontAwesomeIcon icon={faSignOutAlt} /></a>
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
      <div className="header">My Wish List</div>
      {wishList.length === 0 && <EmptyPlaylist />}
      {wishList.map((track, index) => {
        return <Track key={index} {...track} />
      })}
      <div className="header">My Playlist</div>
      <QueueSpotifyPlaylist />
      {playList.length === 0 && <EmptyPlaylist />}
      {playList.map((track, index) => {
        return (
          <Track key={index} {...track}>
            {index > 0 && (
              <TrackControlButton icon={faArrowUp} title="hochschieben" onClick={async ev => {
                // todo move up in playlist
              }} />
            )}
            <TrackControlButton icon={faTrash} title="löschen" onClick={async ev => {
              // todo delete from playlist
            }} />
          </Track>
        )
      })}
    </>
  );
}

const QueueSpotifyPlaylist = (props: any) => {
  const [spotifyUri, setSpotifyUri] = useState('');
  const [invalid, setInvalid] = useState(false);
  const onSubmit = (ev: any) => {
    ev.preventDefault();
    let match = spotifyUri.match(/^(?:spotify:playlist:|https:\/\/open\.spotify\.com\/playlist\/)?([a-zA-Z0-9]{22})$/);
    if (match) {
      // todo [test] send match[1]
      fetch(`/user_playlist/set?id=${match[1]}`);
      // todo fetch updated userplaylist
      setSpotifyUri('');
    } else {
      setSpotifyUri('');
      setInvalid(true);
    }
  }

  const onChange = (ev: any) => {
    setSpotifyUri(ev.target.value);
    setInvalid(false);
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input value={spotifyUri} autoComplete="off" onChange={onChange} className="queue_spotify_playlist_input" placeholder={invalid ? "Spotify URI not valid" : "Enter Spotify Playlist URI"} />
      </form>
    </>
  );
}

const NextPlaylist = (props: any) => {
  const upNext = useRecoilValue(upNextListState);
  return (
    <>
      <div className="header">Play Next</div>
      {upNext.length === 0 && <EmptyPlaylist />}
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
      <div className="padding_center">currently not available</div>
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


const EmptyPlaylist = (props: any) => {
  return (
    <div className="padding_center">empty</div>
  );
}