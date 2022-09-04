import styles from './ATSearchBar.module.scss';
import data from './ListData.json';
import { ChangeEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SearchData {
    id: number;
    text: string;
}

const ResultList: React.FC<{ data: SearchData[], props: any}> = ({ data, props }) => {
        //create a new array by filtering the original array
        const filteredData = data.filter((el) => {
            //if no input the return the original
            if (props === '') return null;
            //return the item which contains the user input
            else return el.text.toLowerCase().includes(props)
        })
    return (
        <ul className={styles.searchList}>
            {filteredData?.map((item: SearchData) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    )
}

const SearchBar: React.FC = () => {
    const [inputText, setInputText] = useState("");
    function inputChanged(e: ChangeEvent<HTMLInputElement>): void {
        let lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    }
    return (
        <div className={styles.searchBarBox}>
            <div className={styles.searchBar}>
                <input type="text" placeholder="Search" className={styles.searchInput} onChange={inputChanged} />
                <button className={styles.searchButton} > 검색
                    </button>
            </div>
            <ResultList data={data} props={inputText} />
        </div>
    )
};

export default SearchBar;