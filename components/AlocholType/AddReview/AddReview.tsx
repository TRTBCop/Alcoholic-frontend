import styles from './AddReview.module.scss';
import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { postAlcTypeReview } from '@api/alcType';

const MAX_TEXT_LENGTH = 200;

interface AddReviewProps {
    id: string,
    handleReviewCancel: () => void,
}

const AddReview: React.FC<AddReviewProps> = ({ id, handleReviewCancel }) => {
    const [reviewText, setReviewText] = useState('');
    const [textCount, setTextCount] = useState(0);
    const [isLike, setIsLike] = useState<boolean | null>(null); // undefined: not selected, true: like, false: dislike
    const [likeStyle, setLikeStyle] = useState([styles.thumbs, styles.up]);
    const [hateStyle, setHateStyle] = useState([styles.thumbs, styles.down]);

    useEffect(() => {
        const cnt = reviewText.length;
        setTextCount(cnt);
    }, [reviewText]);

    const setLike = (value:boolean) => {
        if (isLike !== null && isLike === value) {
            setIsLike(null);
            if(!value) {
                setLikeStyle([styles.thumbs, styles.up]);
                setHateStyle([styles.thumbs, styles.down]);
            } else {
                setLikeStyle([styles.thumbs, styles.up]);
                setHateStyle([styles.thumbs, styles.down]);
            }
        } else {
            setIsLike(value);
            if(value) {
                setLikeStyle([styles.thumbs, styles.up, styles.upSelected]);
                setHateStyle([styles.thumbs, styles.down]);
            } else {
                setLikeStyle([styles.thumbs, styles.up]);
                setHateStyle([styles.thumbs, styles.down, styles.downSelected]);
            }
        }
    }

    async function handleReviewSubmit() {
        const data = {
            id: id,
            text: reviewText,
            isLike: isLike,
        }
        await postAlcTypeReview(data);
        alert('리뷰가 등록되었습니다.');
        // console.log(Object.entries(data)+"submit");
        handleReviewCancel();
    }


    const pageMainRef = useRef(null);
    useLayoutEffect(() => {
        if (pageMainRef.current) {
            const pageMain = pageMainRef.current as HTMLElement;
            pageMain.style.height = window.innerHeight + "px";
        }
    }, []);
    return (
        <div ref={pageMainRef} className={styles.modalContainer}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <p className={styles.title}>리뷰 작성하기</p>
                    <p className={[styles.count, textCount> MAX_TEXT_LENGTH ? styles.over : styles.count].join(" ")}>{textCount}/{MAX_TEXT_LENGTH}</p> 
                </div>
                <textarea id={'reviewTextArea'} className={styles.textarea} onChange={(e)=>setReviewText(e.target.value)} />
                <div>
                    <div className={styles.flewRow}>
                        <FontAwesomeIcon onClick={() => setLike(true)}  icon={faThumbsUp} className={likeStyle.join(" ")} />
                        <FontAwesomeIcon onClick={() => setLike(false)} icon={faThumbsDown} className={hateStyle.join(" ")} />
                    </div>
                    <div className={styles.flewRow && styles.right}>
                        <button className={[styles.btn,styles.cancelBtn].join(" ")} onClick={handleReviewCancel}>취소하기</button>
                        <button className={[styles.btn,styles.uploadBtn].join(" ")} onClick={handleReviewSubmit}>올리기</button>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default AddReview;