import React from 'react';
import { useRecoilValue } from 'recoil';
import { currentSongState, upNextListState } from './state';
import Track, { TrackControlButton } from './components/track';
import { faForward } from '@fortawesome/free-solid-svg-icons';

export default (props: any) => {
  const currentSong = useRecoilValue(currentSongState);
  const upNext = useRecoilValue(upNextListState).slice(0, !!currentSong ? 2 : 3);

  return (
    <div id="now_playing">
      {[currentSong, ...upNext].map((track, index) => {
        if (!track) return null;
        return (
          <Track key={index} {...track} >
            <TrackControlButton icon={faForward} title="Vote Skip" onClick={async (ev: any) => {
              // todo vote skip
            }} />
          </Track>
        )
      })}
    </div>
  )
}