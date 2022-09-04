import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";

import styles from './ARSearchBar.module.scss'

const ARSearchBar = () => {
    const [inputText, setInputText] = useState("");

    const onReset = () => {
        setInputText('');
    };

    const onSearch=()=>{
        setInputText('');
    };

    return(
        <div className={styles.searchBarBox}>
            <div className={styles.searchBar}>
                <input className={styles.searchBarInput} type="text" placeholder="Search" onKeyDown={onSearch} />
                <FontAwesomeIcon icon={faSearch} onClick={onSearch}/>
                <FontAwesomeIcon icon={faXmark} onClick={onReset}/>
            </div>
        </div>
    )
};

export default ARSearchBar;