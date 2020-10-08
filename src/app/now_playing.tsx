import React from 'react';
import { useRecoilValue } from 'recoil';
import { currentSongState, upNextListState } from './state';
import Track, { TrackControlButton } from './components/track';
import { faForward } from '@fortawesome/free-solid-svg-icons';
export default (props: any) => {
  const currentSong = useRecoilValue(currentSongState);
  const upNext = useRecoilValue(upNextListState).slice(0, 2);

  return (
    <div id="now_playing">
      {[currentSong, ...upNext].map((title, index) => {
        return (
          <Track key={index} {...title} >
            <TrackControlButton icon={faForward} />
          </Track>
        )
      })}
    </div>
  )
}