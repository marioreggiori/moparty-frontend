import React, { useEffect } from 'react';
import { ISearchFilterItem } from './interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlay, faSearch } from '@fortawesome/free-solid-svg-icons';
import { searchFilterItems } from './data';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { searchFilterState, searchState, searchResultState } from './state';
import Track, { TrackControlButton } from './components/track';

let searchDelayTimeout: any;

export default (props: any) => {
  const [search, setSearch] = useRecoilState(searchState);
  const [filter, setFilter] = useRecoilState(searchFilterState);
  const setSearchResult = useSetRecoilState(searchResultState);

  const onChange = (ev: any) => {
    const val = ev.target.value;
    setSearch(val);
    clearTimeout(searchDelayTimeout);
    searchDelayTimeout = setTimeout(async () => {
      if (val.trim()) {
        // todo update searchResultState
        // await fetch(`/search/?searchquery=${encodeURIComponent(val)}&backend=${Object.keys(filter).filter(key => !!filter[key]).join('&backend=')}`)
        //   .then(res => res.json())
        //   .then(setSearchResult);
      }
    }, 2000);
  }

  return (
    <div id="explorer">
      <div id="search">
        <div id="search_icon">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <input id="search_input" placeholder="Suchen ..." value={search} onChange={onChange} />
        <SearchFilter filter={filter} setFilter={setFilter} />
      </div>
      <SearchResult />
    </div>

  );
}

const SearchFilter = ({ filter, setFilter }: any) => {
  return (
    <div id="search_filter">
      {searchFilterItems.map((item) => {
        return <SearchFilterItem {...item} active={filter[item.key]} onClick={(ev: any) => setFilter(Object.assign({}, filter, { [item.key]: !filter[item.key] }))} />
      })}
    </div>
  )
}

const SearchFilterItem = ({ icon, onClick, active, label, color }: ISearchFilterItem) => {
  return (
    <div className="search_filter_item" data-active={active} onClick={onClick} title={label} style={{ backgroundColor: color }}>
      <FontAwesomeIcon icon={icon} />
    </div>
  )
}

const SearchResult = (props: any) => {
  const filter = useRecoilValue(searchFilterState);
  const [searchResult, setSearchResult] = useRecoilState(searchResultState);

  // todo remove effect (only for testing)
  useEffect(() => {
    fetch('/result.json')
      .then(res => res.json())
      .then(setSearchResult);
  }, [])

  return (
    <div id="search_result">
      {searchFilterItems.map(({ key, label, color, icon }) => {
        const res: any[] = searchResult[key];
        return (
          <div key={key} data-enabled={filter[key] === true} className="search_result_source" style={{
            '--accent-color': color,
          } as React.CSSProperties}>
            <div className="headline">
              <div className="icon">
                <FontAwesomeIcon icon={icon} />
              </div>
              <b>{label}</b> ({res.length} Treffer)
            </div>
            <div className="search_result_source_list">
              <div className="search_result_source_list_inner">
                {filter[key] === true && res.map((track, index) => {
                  return (
                    <Track key={index} {...track}>
                      <TrackControlButton icon={faHeart} title="Wünschen" onClick={(ev: any) => {
                        console.log('Wünschen');
                      }} />
                      <TrackControlButton icon={faPlay} title="Probehören" onClick={(ev: any) => {
                        console.log('Probehören');
                      }} />
                    </Track>
                  )
                })}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}