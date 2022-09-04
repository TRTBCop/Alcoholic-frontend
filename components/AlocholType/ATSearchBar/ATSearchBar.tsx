import ResultList from '../ATResultList';
import styles from './ATSearchBar.module.scss';
import data from './ListData.json';
import { ChangeEvent, useState } from 'react';

const SearchBar = () => {
    const [inputText, setInputText] = useState("");
    function inputChanged(e: ChangeEvent<HTMLInputElement>): void {
        let lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    }
    return (
        <div className={styles.searchBarBox}>
            <div className={styles.searchBar}>
                <input type="text" placeholder="Search" className={styles.searchInput} onChange={inputChanged} />
                <button className={styles.searchButton} name={'fuck'}>fuck</button>
            </div>
            <ResultList data={data} props={inputText} />
        </div>
    )
};

export default SearchBar;