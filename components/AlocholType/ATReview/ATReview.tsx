import { AlcoholTypeReview, AlcoholTypeReviewsProps } from '@api/model/alcType';
import { useEffect, useState } from 'react';
import styles from './ATReview.module.scss';

const AlcoholeTypeReview: React.FC<AlcoholTypeReviewsProps> = ({ likesCount, hatesCount, hashtags, reviews }) => {
    const [likesReviews, setLikesReviews] = useState<AlcoholTypeReview[]>();
    const [hatesReviews, setHatesReviews] = useState<AlcoholTypeReview[]>();
    useEffect(() => {
        const likes = reviews?.filter(review => review.liked);
        const hates = reviews?.filter(review => !review.liked);
        setLikesReviews(likes);
        setHatesReviews(hates);
    }, []);
    console.log(`hashtags : ${hashtags}`);
    return (
        <section className={styles.container}>
            <div className={styles.title}>술 리뷰</div>
            <p className={styles.comment}>먼저 맛을 봐 본 사람들의 후기를 봐볼까요?</p>
            <div className={styles.hashtagList}> 
                {hashtags?.map((v) => (
                    <div className={styles.hashtag}># {v.replaceAll(' ', '_')}</div>
                ))}
            </div>
            <div className={styles.reviewListBox}>
                <div className={[styles.reviewBox, styles.likesReviewBox].join(" ")}>
                    <div className={styles.reviewCategoryTitle}>이 술이 <span>좋았던 사람</span>은 <span>{likesCount}</span>명이예요 😍</div>
                    <div>
                        {likesReviews?.map((v) => (
                            <div className={styles.review}>
                                <div className={styles.reviewUsername}>{v.username}</div>
                                <div className={styles.reviewContent}>{v.content}</div>
                                <div className={styles.reviewCreatedAt}>{v.createdAt}</div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <button className={styles.reviewMoreButton}>더보기</button>
                    </div>
                </div>
                <div className={[styles.reviewBox, styles.hatesReviewBox].join(" ")}>
                    <div className={styles.reviewCategoryTitle}>이 술이 <span>별로였던 사람</span>은 <span>{hatesCount}</span>명이예요 😓</div>
                    <div>
                        {hatesReviews?.map((v) => (
                            <div className={styles.review}>
                                <div className={styles.reviewUsername}>{v.username}</div>
                                <div className={styles.reviewContent}>{v.content}</div>
                                <div className={styles.reviewCreatedAt}>{v.createdAt}</div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <button className={styles.reviewMoreButton}>더보기</button>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default AlcoholeTypeReview;