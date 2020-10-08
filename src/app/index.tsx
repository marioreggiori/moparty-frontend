import React from 'react';

import Explorer from './explorer';
import Playlists from './playlists';
import NowPlaying from './now_playing';

export default (props: any) => {
  return (
    <div id="app">
      <div id="main">
        <Explorer />
        <NowPlaying/>
      </div>
      <Playlists />
    </div>
  )
}





