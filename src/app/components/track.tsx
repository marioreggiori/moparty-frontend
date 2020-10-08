import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ITrack } from '../interfaces';


export default ({ children, title, artist, album, lenght }: ITrack) => {
  return (
    <div className="track">
      <div className="left">
        <div className="cover" />
      </div>
      <div className="middle">
        <div className="title">{title}</div>
        <div className="artist">{artist}</div>
      </div>
      <div className="right">
        {children}
      </div>
    </div>
  )
}

export const TrackControlButton = ({ icon, title, onClick }: any) => {
  return (
    <div className="track_control_button" title={title} onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </div>
  )
}
