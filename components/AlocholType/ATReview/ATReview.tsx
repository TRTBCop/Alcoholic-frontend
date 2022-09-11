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
            <div className={styles.hashtagList}> 
                {hashtags?.map((v) => (
                    <div className={styles.hashtag}># {v.replaceAll(' ', '_')}</div>
                ))}
            </div>
            <div className={styles.reviewListBox}>
                <div className={styles.likesReviewBox}>
                    <div className={styles.reviewCategoryTitle}>이 술이 <span className={styles.likesColor}>좋았던 사람</span>은 {likesCount}명이예요</div>
                    <div className={styles.reviewBox}>
                        {likesReviews?.map((v) => (
                            <div className={styles.review}>
                                <div className={styles.reviewUsername}>{v.username}</div>
                                <div className={styles.reviewContent}>{v.content}</div>
                                <div className={styles.reviewCreatedAt}>{v.createdAt}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.hatesReviewBox}>
                    <div className={styles.reviewCategoryTitle}>이 술이 <span className={styles.hatesColor}>별로였던 사람</span>은 {hatesCount}명이예요</div>
                    <div className={styles.reviewBox}>
                        {hatesReviews?.map((v) => (
                            <div className={styles.review}>
                                <div className={styles.reviewUsername}>{v.username}</div>
                                <div className={styles.reviewContent}>{v.content}</div>
                                <div className={styles.reviewCreatedAt}>{v.createdAt}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default AlcoholeTypeReview;