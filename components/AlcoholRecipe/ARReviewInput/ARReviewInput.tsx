import styles from './ARReview.module.scss'


const ARReviewInInput = ()=>{

    const onCreate = () => {
        {/**댓글 생성 요청 */}
    };

    return(
        <div className={styles.container}>
            <p>댓글<span>3</span></p>
            <div className={styles.inputBox}>
                <input className={styles.reviewInput} type="text" placeholder="댓글 입력"></input>
                <button className={styles.reviewButton} onClick={onCreate}>등록</button>
            </div>
        </div>
    )
};

export default ARReviewInInput;