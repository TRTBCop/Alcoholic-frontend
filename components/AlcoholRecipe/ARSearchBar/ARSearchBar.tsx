import { ChangeEvent, KeyboardEventHandler, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";

import styles from './ARSearchBar.module.scss'
import { useRouter } from 'next/router';

const ARSearchBar : React.FC  = () => {
    const router = useRouter();
    const [inputText, setInputText] = useState("");

    useEffect(() => {
       
        return () => {
            console.log('컴포넌트가 화면에서 사라짐');
          };
          
    }, [inputText]);

    const clickSearch = (event: React.MouseEvent<HTMLElement>) => {
        if (inputText ==='') return;
        router.push({
            pathname: `/alcoholrecipe/search`,
            query: { idword: inputText },
        });
    }

    const keyDownSearch = (event: React.KeyboardEvent<HTMLElement>) => {
        if(inputText ==="") {
            return console.log("빈칸");
        }
        if(event.key==="Enter"){
            router.push({
                pathname: `/alcoholrecipe/search`,
                query: { word: inputText },
            });
        }
    };

    function inputChanged (e: ChangeEvent<HTMLInputElement>){
        setInputText(e.target.value);
    };
    return(
        <div className={styles.searchBarBox}>
            <div className={styles.searchBar}>
                <button onClick={clickSearch}>                
                    <FontAwesomeIcon className={styles.Icon} icon={faSearch} />
                </button>
                <input 
                    className={styles.searchBarInput} 
                    type="text" 
                    placeholder="Search" 
                    onChange={inputChanged} 
                    onKeyDown={keyDownSearch}
                    maxLength={20}
                    value={inputText}
                />
            </div>
        </div>
    )
};

export default ARSearchBar;
