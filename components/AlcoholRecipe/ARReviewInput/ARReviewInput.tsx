import { ChangeEvent, useState } from 'react';
import React from 'react';

import styles from './ARReviewInput.module.scss'

interface ArReviewProps {
    reviewCount? : number |null;
}

const ARReviewInInput :React.FC<ArReviewProps> = ({reviewCount})=>{
    
    const [inputText, setInputText] = useState("");


    function inputChanged (e: ChangeEvent<HTMLTextAreaElement>){
        setInputText(e.target.value);
    };

    

    const onCreate = () => {
        {/**댓글 생성 요청 */}
    };

    return(
        <div className={styles.container}>
            <h1>댓글<span> {reviewCount} </span></h1>
            <div className={styles.inputBox}>
                <textarea className={styles.reviewInput} placeholder="댓글 입력" value={inputText} onChange={inputChanged}></textarea>
                <button className={styles.reviewButton} onClick={onCreate}>등록</button>
            </div>
        </div>
    )
};

export default ARReviewInInput;

