import clsx from 'clsx';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSpinner, faXmark } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { useCallback, useEffect, useRef, useState } from 'react';

import { PopperWrap } from '~/components/Popper';
import { useDebounce } from '~/hooks';
import { searchHeaderApi } from '~/services/searchServices';
import RenderAccount from './RenderAccount';

function Search() {
    const inputSearch = useRef();
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showSearchResult, setShowSearchResult] = useState(true);
    const [showLoading, setShowLoading] = useState(false);
    const searchText = useDebounce(searchValue, 700);

    useEffect(() => {
        if (!searchText.trim()) {
            setSearchResult([]);
            return;
        }
        const callApiSearch = async () => {
            setShowLoading(true);
            const result = await searchHeaderApi(searchText);
            setSearchResult(result);
            setShowLoading(false);
        };
        callApiSearch();
    }, [searchText]);

    const handleHiddenSearch = useCallback(() => {
        setSearchResult([]);
        setSearchValue('');
    }, []);

    const handleChange = (e) => {
        const searchText = e.target.value;
        if (!searchText.startsWith(' ')) {
            setSearchValue(searchText);
        }
    };

    return (
        <HeadlessTippy
            visible={showSearchResult && searchResult.length > 0}
            interactive
            render={(attrs) => (
                <div className={clsx(styles.popperSearch)} tabIndex="-1" {...attrs}>
                    <PopperWrap>
                        <div className={clsx(styles.titleAccount)}>
                            <h3>Tai khoan</h3>
                        </div>
                        <RenderAccount
                            searchResult={searchResult}
                            handleHiddenSearch={handleHiddenSearch}
                        />
                    </PopperWrap>
                </div>
            )}
            onClickOutside={() => {
                setShowSearchResult(false);
            }}
        >
            <div className={clsx(styles.search)}>
                <input
                    value={searchValue}
                    ref={inputSearch}
                    type="text"
                    placeholder="Tim kiem"
                    onChange={handleChange}
                    onFocus={() => {
                        setShowSearchResult(true);
                    }}
                />
                {showLoading && (
                    <button className={clsx(styles.spinnerInput)}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </button>
                )}
                {!!searchValue && !showLoading && (
                    <button
                        onClick={() => {
                            setSearchValue('');
                            setSearchResult([]);
                            inputSearch.current.focus();
                        }}
                        className={clsx(styles.closeInput)}
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                )}
                <button
                    className={clsx(styles.searchInput)}
                    onMouseDown={(event) => {
                        event.preventDefault();
                    }}
                >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
