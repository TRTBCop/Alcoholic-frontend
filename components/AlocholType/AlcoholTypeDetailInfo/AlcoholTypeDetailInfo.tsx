import styles from './AlcoholTypeDetailInfo.module.css';

interface AlcoholTypeDetailInfoProps {
    origin: string,
    manufacturer: string,
    color: string,
    flavor: string,
    recipes: { id: number, name: string }[],
}

const AlcoholTypeDetailInfo: React.FC<AlcoholTypeDetailInfoProps> = ({ ...detailInfo }: AlcoholTypeDetailInfoProps) => {

    return (
        <section className={styles.container}>
            <p className={styles.title}>상세정보</p>
            <p className={styles.basic}>원산지 : {detailInfo.origin}</p>
            <p className={styles.basic}>제조사 : {detailInfo.manufacturer}</p>
            <p className={styles.basic}>색  : {detailInfo.color}</p>
            <p className={styles.basic}>맛 : {detailInfo.flavor}</p>
            <div className={styles.basic}>관련레시피 : {detailInfo.recipes && detailInfo.recipes.map((v) => (
                    <span key={v.id} className={styles.recipe}>#{v.name.replaceAll(' ', '_')} </span>
                ))}
            </div>
        </section>
    )

};

export default AlcoholTypeDetailInfo;