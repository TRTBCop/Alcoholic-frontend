import { AlcoholTypeProps } from '@api/model/alcType';
import styles from './ATInfo.module.scss';

const AlcoholTypeInfo: React.FC<AlcoholTypeProps> = ({ ...info }: AlcoholTypeProps) => {
    function changeNumberToMoney (num: number) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    return (
        <section className={styles.container}>
            <img className={styles.alcoholImage} src={info.image} />
            <div className={styles.alcoholInfoBox} >
                <p className={styles.title}>{info.name}</p>
                <p className={styles.basic}>{info.category}</p>
                <p className={styles.basic}>{info.degree}%</p>
                <p className={styles.basic}>{info.drinkSize}ml
                    (<span>
                        {info.minPrice && changeNumberToMoney(info.minPrice)}₩~ {info.maxPrice && changeNumberToMoney(info.maxPrice)}₩
                    </span>)
                </p>
            </div>
        </section>
    )

};

export default AlcoholTypeInfo;