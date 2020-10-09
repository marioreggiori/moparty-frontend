import React, { useEffect } from 'react';

import Explorer from './explorer';
import Playlists from './playlists';
import NowPlaying from './now_playing';
import { useSetRecoilState } from 'recoil';
import { upNextListState, currentSongState } from './state';

export default (props: any) => {
  const setUpNext = useSetRecoilState(upNextListState);
  const setCurrentSong = useSetRecoilState(currentSongState);

  useEffect(() => {
    setInterval(async () => {
      try {
        await fetch('/up_next')
          .then(res => res.json())
          .then(data => setUpNext(data.tracks));
      } catch (e) {

      }

      try {
        await fetch('/track/now_playing')
          .then(res => res.json())
          .then(data => setCurrentSong(data));
      } catch (e) {

      }
    }, 5000);
  }, [setUpNext, setCurrentSong]);

  return (
    <div id="app">
      <div id="main">
        <Explorer />
        <NowPlaying />
      </div>
      <Playlists />
    </div>
  )
}





