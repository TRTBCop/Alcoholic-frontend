import styles from './ATSearchBar.module.scss';
import data from './ListData.json';
import { ChangeEvent, useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface SearchData {
    id: number;
    text: string;
}


const SearchBar: React.FC = () => {
    /** search Input Ref */
    const inputuseRef = useRef<HTMLInputElement>(null);

    /** Control search Input's text */
    const [inputText, setInputText] = useState("");
    function inputChanged(e: ChangeEvent<HTMLInputElement>): void {
        let lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    }

    /** Fetching FilteredData  */
    const [filteredData, setFilteredData] = useState<SearchData[]>([]);
    useEffect(() => {
        setFilteredData(data.filter((el) => {
            if (inputText === '') return null;
            else return el.text.toLowerCase().includes(inputText)
        }));
    }, [inputText]);

    return (
        <div className={styles.searchBarBox}>
            <div className={styles.searchBar}>
                <input ref={inputuseRef} type="text" placeholder="Search" className={filteredData.length > 1 ? styles.searchInputActive : styles.searchInput} onChange={inputChanged} />
                <button className={styles.searchButton} > 
                    <FontAwesomeIcon icon={ faSearch }/>
                    </button>
            </div>
            {filteredData.length > 1 ? (
                <ul className={styles.searchListActive}>
                    {filteredData?.map((item: SearchData) => (
                        <li key={item.id} onClick={() => {
                            inputuseRef.current!.value = item.text;
                            setInputText(item.text);
                        }}>{item.text}</li>
                    ))}
                </ul>
            ):(<ul className={styles.searchList}> </ul>)}
        </div>
    )
};

export default SearchBar;