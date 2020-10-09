import React, { useEffect } from 'react';

import Explorer from './explorer';
import Playlists from './playlists';
import NowPlaying from './now_playing';
import { useSetRecoilState } from 'recoil';
import { upNextListState, currentSongState, playListState, wishListState } from './state';

export default (props: any) => {
  const setUpNext = useSetRecoilState(upNextListState);
  const setCurrentSong = useSetRecoilState(currentSongState);
  const setWishList = useSetRecoilState(wishListState);
  const setPlayList = useSetRecoilState(playListState);

  useEffect(() => {
    setInterval(async () => {

      try {
        await fetch('/up_next')
          .then(res => res.json())
          .then(data => setUpNext(data.tracks));
      } catch (e) { }

      try {
        await fetch('/track/now_playing')
          .then(res => res.json())
          .then(data => setCurrentSong(data));
      } catch (e) { }

      try {
        await fetch('/user_wishlist/my')
          .then(res => res.json())
          .then(data => setWishList(data.tracks));
      } catch (e) { }

      try {
        await fetch('/user_playlist/my')
          .then(res => res.json())
          .then(data => setPlayList(data.tracks));
      } catch (e) { }

    }, 10000);


  }, [setUpNext, setCurrentSong, setWishList, setPlayList]);

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





