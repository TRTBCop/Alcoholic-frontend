import { AlcoholTypeProps } from '@api/model/alcType';
import { NextPage } from 'next';
import styles from './ATSimilarList.module.scss';

const ATSimilarList: React.FC<{ similarList: AlcoholTypeProps[] }> = ({similarList}) => {
    return (
        <section className={styles.container}>
            <div className={styles.title}>이 술과 비슷한 술</div>
            <p className={styles.comment}>비슷한 술을 찾고 계신가요? 사용자들이 지금 보고 있는 술과 함께 본 술이예요</p>
            <div className={styles.cardList}>
                {similarList?.map((info) => (
                    <div className={styles.card}>
                        <div className={styles.leftBox} >
                            <img className={styles.image} src={info.image}></img>
                        </div>
                        <div className={styles.rightBox} >
                            <p className={styles.name}>{info.name}</p>
                            <p className={styles.basic}>{info.category}</p>
                            <p className={styles.basic}>{info.degree}%</p>
                            <p className={styles.basic}>{info.drinkSize}ml</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )

};

export default ATSimilarList;