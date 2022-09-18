import { AlcoholDetailInfoProps } from '@api/model/alcType';
import styles from './ATInfoDetail.module.scss';


const AlcoholTypeDetailInfo: React.FC<AlcoholDetailInfoProps> = ({ ...detailInfo }) => {

    return (
        <section className={styles.container}>
            <p className={styles.title}>상세정보</p>
            <p className={styles.basic}>원산지 : {detailInfo.origin}</p>
            <p className={styles.basic}>제조사 : {detailInfo.manufacturer}</p>
            <p className={styles.basic}>색  : {detailInfo.color}</p>
            <p className={styles.basic}>맛 : {detailInfo.taste}</p>
            <div className={styles.basic}>관련레시피 : {detailInfo.recipes && detailInfo.recipes.map((v) => (
                    <span key={v.id} className={styles.recipe}>#{v.name.replaceAll(' ', '_')} </span>
                ))}
            </div>
        </section>
    )

};

export default AlcoholTypeDetailInfo;