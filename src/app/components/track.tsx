import { faCheck, faExclamationCircle, faRecordVinyl, faSync, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { ITrackControlButtonProps } from '../interfaces';

export default ({ data: { name: title, artists, album: { name: album } }, image, children }: any) => {
  let coverStyle: any = {};
  if (image) {
    // todo: remove decode for double encode
    try {
      coverStyle.backgroundImage = `url('${image}')`;
    } catch (e) {

    }
  }
  return (
    <div className="track">
      <div className="left">
        <div className="cover" style={coverStyle} />
      </div>
      <div className="middle">
        <div className="title">{title}</div>
        <div className="album">
          <div className="track_icon"><FontAwesomeIcon icon={faRecordVinyl} /></div>{album}
        </div>
        <div className="artist">
          <div className="track_icon"><FontAwesomeIcon icon={faUserFriends} /></div>{artists.map((artist: any) => artist.name).join(', ')}
        </div>
      </div>
      <div className="right">
        {children}
      </div>
    </div>
  )
}



export const TrackControlButton = ({ icon, title, onClick }: ITrackControlButtonProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const click = async (ev: any) => {
    if (loading || error || success) return;
    setLoading(true);
    try {
      await onClick(ev);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);
    } catch (e) {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
    setLoading(false);
  }

  return (
    <div className="track_control_button" title={title} onClick={click} data-disabled={loading || error || success}>
      {loading
        ? <FontAwesomeIcon icon={faSync} spin />
        : error
          ? <FontAwesomeIcon icon={faExclamationCircle} />
          : success
            ? <FontAwesomeIcon icon={faCheck} />
            : <FontAwesomeIcon icon={icon} />
      }
    </div>
  )
}
