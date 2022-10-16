import { AlcoholTypeReview, AlcoholTypeReviewsProps } from '@api/model/alcType';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from './ATReview.module.scss';

const AlcoholeTypeReview: React.FC<AlcoholTypeReviewsProps & { id: string, infinite?: boolean, moveToWrite: ()=>void }> = ({ id, likesCount, hatesCount, hashtags, reviews, infinite = false, moveToWrite }) => {
    const router = useRouter();
    /** Initialize likes & hates */
    const [likesReviews, setLikesReviews] = useState<AlcoholTypeReview[]>();
    const [hatesReviews, setHatesReviews] = useState<AlcoholTypeReview[]>();
    useEffect(() => {
        const likes = reviews?.filter(review => review.liked);
        const hates = reviews?.filter(review => !review.liked);
        setLikesReviews(likes);
        setHatesReviews(hates);
    }, []);

    return (
        <section className={styles.container}>
            <div className={styles.title}>술 리뷰</div>
            <p className={styles.comment}>먼저 맛을 봐 본 사람들의 후기를 봐볼까요?</p>
            <div className={styles.hashtagList}> 
                {hashtags?.map((v) => (
                    <div key={v} className={styles.hashtag}># {v.replaceAll(' ', '_')}</div>
                ))}
            </div>
            <div className={styles.reviewMoreBox}>
                {infinite ? (
                    <a className={styles.reviewMoreButton} onClick={(e) => {
                        e.preventDefault();
                        moveToWrite();
                    }}>✏️ 리뷰쓰기</a>
                    ):(
                        <a className={styles.reviewMoreButton} onClick={(e) => {
                            e.preventDefault();
                            router.push({
                                pathname: `/alcoholtype/detail/${id}/reviews`,
                            })
                        }}>🗨️ 리뷰 더보기</a>
                )}
            </div>
            <div className={styles.reviewListBox}>
                <div className={[styles.reviewBox, styles.likesReviewBox].join(" ")}>
                    <div className={styles.reviewCategoryTitle}>이 술이 <span>좋았던 사람</span>은 <span>{likesCount}</span>명이예요 😍</div>
                    <div>
                        {likesReviews?.map((v) => (
                            <div key={v.id} className={styles.review}>
                                <div className={styles.reviewUsername}>{v.username}</div>
                                <div className={styles.reviewContent}>{v.content}</div>
                                <div className={styles.reviewCreatedAt}>{v.createdAt}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={[styles.reviewBox, styles.hatesReviewBox].join(" ")}>
                    <div className={styles.reviewCategoryTitle}>이 술이 <span>별로였던 사람</span>은 <span>{hatesCount}</span>명이예요 😓</div>
                    <div>
                        {hatesReviews?.map((v) => (
                            <div key={v.id} className={styles.review}>
                                <div className={styles.reviewUsername}>{v.username}</div>
                                <div className={styles.reviewContent}>{v.content}</div>
                                <div className={styles.reviewCreatedAt}>{v.createdAt}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {!infinite && (
                <button className={styles.addReviewBtn} onClick={moveToWrite}>
                    나도 리뷰쓰기 <FontAwesomeIcon icon={faPencil} />
                </button>
            )}
        </section>
    )
};

export default AlcoholeTypeReview;