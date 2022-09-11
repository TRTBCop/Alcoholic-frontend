import { AlcoholTypeProps } from '@api/model/alcType';
import { NextPage } from 'next';
import styles from './ATSimilarList.module.scss';

const ATSimilarList: React.FC<{ similarList: AlcoholTypeProps[] }> = ({similarList}) => {
    return (
        <section className={styles.container}>
            <div className={styles.title}>이 술과 비슷한 술</div>
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