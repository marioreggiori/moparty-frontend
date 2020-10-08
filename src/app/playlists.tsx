import React from 'react';

import { tracks } from './data';
import Track, { TrackControlButton } from './components/track';
import { faArrowUp, faTrash } from '@fortawesome/free-solid-svg-icons';


export default (props: any) => {
  return (
    <div id="playlists">
      <div className="header">Meine Wunschliste</div>
      {tracks.map((track, index) => {
        return <Track key={index} {...track} />
      })}
      <div className="header">Up Next</div>
      {[...tracks, ...tracks, ...tracks].map((track, index) => {
        return (
          <Track key={index} {...track}>
            <TrackControlButton icon={faArrowUp} title="hochschieben" />
            <TrackControlButton icon={faTrash} title="löschen" />
          </Track>
        )
      })}
    </div>
  )
}

