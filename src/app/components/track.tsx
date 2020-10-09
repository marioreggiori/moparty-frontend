import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default ({ data: { name: title, artists }, image, children }: any) => {
  let coverStyle: any = {};
  if (image) {
    // todo: remove decode for double encode
    try{
      coverStyle.backgroundImage = `url('${image}')`;
    }catch(e){
      
    }
  }
  return (
    <div className="track">
      <div className="left">
        <div className="cover" style={coverStyle} />
      </div>
      <div className="middle">
        <div className="title">{title}</div>
        <div className="artist">{artists.map((artist: any) => artist.name).join(', ')}</div>
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
