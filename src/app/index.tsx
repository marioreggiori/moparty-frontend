import React, { useState } from 'react';

import Search from './search';
import Playlists from './playlists';


export default (props: any) => {
  return (
    <div id="app">
      <div id="main">
        <div id="explorer">
          <Search />
          <SearchResult />
        </div>
        <div id="now_playing"></div>
      </div>
      <Playlists />
    </div>
  )
}





const SearchResult = (props: any) => {
  return (
    <div>
      test
    </div>
  )
}