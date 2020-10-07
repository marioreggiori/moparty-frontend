import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSoundcloud, faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export default (props: any) => {
  const [search, setSearch] = useState('');

  return (
    <div id="search">
      <input id="search_input" placeholder="Suchen ..." value={search} onChange={ev => setSearch(ev.target.value)} />
      <SearchFilter />
    </div>
  );
}

interface SearchFilterItem {
  key: string;
  label: string;
  icon: IconProp;
  active?: boolean;
  onClick?: any;
}

const search_filter_items: SearchFilterItem[] = [
  { key: "local", label: "Lokal", icon: faFolder },
  { key: "spotify", label: "Spotify", icon: faSpotify },
  { key: "youtube", label: "YouTube", icon: faYoutube },
  { key: "soundcloud", label: "SoundCloud", icon: faSoundcloud },
];

const SearchFilter = (props: any) => {
  const [filter, setFilter] = useState(Object.assign({}, ...search_filter_items.map(item => ({ [item.key]: true }))));

  return (
    <div id="search_filter">
      {search_filter_items.map((item) => {
        return <SearchFilterItem {...item} active={filter[item.key]} onClick={(ev: any) => setFilter(Object.assign({}, filter, { [item.key]: !filter[item.key] }))} />
      })}
    </div>
  )
}

const SearchFilterItem = ({ icon, onClick, active, label }: SearchFilterItem) => {
  return (
    <div className="search_filter_item" data-active={active} onClick={onClick} title={label}>
      <FontAwesomeIcon icon={icon} />
    </div>
  )
}