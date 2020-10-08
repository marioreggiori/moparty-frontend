import React from 'react';

import Explorer from './explorer';
import Playlists from './playlists';


export default (props: any) => {
  return (
    <div id="app">
      <div id="main">
        <Explorer />
        <div id="now_playing"></div>
      </div>
      <Playlists />
    </div>
  )
}





