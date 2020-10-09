import React from 'react';
import { ISearchFilterItem } from './interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlay, faSearch } from '@fortawesome/free-solid-svg-icons';
import { searchFilterItems } from './data';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { searchFilterState, searchState, searchResultState, searchIsLoadingState, wishListState } from './state';
import Track, { TrackControlButton } from './components/track';


export default (props: any) => {
  const [search, setSearch] = useRecoilState(searchState);
  const [filter, setFilter] = useRecoilState(searchFilterState);
  const setSearchResult = useSetRecoilState(searchResultState);
  const setSearchIsLoading = useSetRecoilState(searchIsLoadingState);

  const onSubmit = async (ev: any) => {
    ev.preventDefault();
    setSearchResult({});
    if (!search.trim()) return;
    setSearchIsLoading(true);

    let url = `/search/?searchquery=${encodeURIComponent(search)}&backend=${Object.keys(filter).filter(key => !!filter[key]).join('&backend=')}`

    // use local dataset for dev
    if (process.env.NODE_ENV === 'development') {
      url = '/result.json';
    }

    await fetch(url)
      .then(res => res.json())
      .then(setSearchResult)
      .then(_ => setSearchIsLoading(false));
  }

  return (
    <div id="explorer">
      <div id="search">
        <div id="search_icon">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <form id="search_form" onSubmit={onSubmit}>
          <input id="search_input" autoComplete="off" placeholder="Suchen ... (mit ENTERTaste bestätigen)" value={search} onChange={ev => setSearch(ev.target.value)} />
        </form>
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
  const searchResult: any = useRecoilValue(searchResultState);
  const searchIsLoading = useRecoilValue(searchIsLoadingState);
  const [wishList, setWishList]: any = useRecoilState(wishListState);


  return (
    <div id="search_result" data-loading={searchIsLoading}>
      {searchFilterItems.map(({ key, label, color, icon }) => {
        const res: any[] = searchResult[key] || [];
        return (
          <div key={key} data-enabled={filter[key] === true} className="search_result_source" style={{
            '--accent-color': color,
          } as React.CSSProperties}>
            <div className="headline">
              <div className="icon">
                <FontAwesomeIcon icon={icon} />
              </div>
              <b>{label}</b> ({searchIsLoading ? 'loading ...' : (res.length.toString() + ' found')})
            </div>
            <div className="search_result_source_list">
              <div className="search_result_source_list_inner">
                {filter[key] === true && res.map((track, index) => {
                  return (
                    <Track key={index} {...track}>
                      <TrackControlButton icon={faHeart} title="Wünschen" onClick={async ev => {
                        // todo [test] add to wishlist and update from response
                        await fetch(`/user_wishlist/add?uri=${track.data.uri}`)
                        setWishList([...wishList, track]);
                      }} />
                      <TrackControlButton icon={faPlay} title="Probehören" onClick={async ev => {
                        // todo listen sample and update from response
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