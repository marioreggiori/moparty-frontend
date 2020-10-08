import React, { useEffect } from 'react';
import { ISearchFilterItem } from './interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlay, faSearch } from '@fortawesome/free-solid-svg-icons';
import { searchFilterItems } from './data';
import { useRecoilState, useRecoilValue } from 'recoil';
import { searchFilterState, searchState, searchResultState } from './state';
import Track, { TrackControlButton } from './components/track';

export default (props: any) => {
  const [search, setSearch] = useRecoilState(searchState);

  return (
    <div id="explorer">
      <div id="search">
        <div id="search_icon">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <input id="search_input" placeholder="Suchen ..." value={search} onChange={ev => setSearch(ev.target.value)} />
        <SearchFilter />
      </div>
      <SearchResult />
    </div>

  );
}

const SearchFilter = (props: any) => {
  const [filter, setFilter] = useRecoilState(searchFilterState);

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
  const [searchResult, setSearchResult] = useRecoilState(searchResultState)

  useEffect(() => {
    (async () => {
      const res = await fetch('/result.json')
        .then(res => res.json());
      setSearchResult(res);
    })()
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