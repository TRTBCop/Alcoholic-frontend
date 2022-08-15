import styles from './AlcoholTypeInfo.module.css';

interface AlcoholCardTypeProps {
    name: string;
    category: string;
    degree: number;
    drinkSize: number;
    image: string;
    minPrice?: number;
    maxPrice?: number;
    hashtags?: string[];
}

const AlcoholTypeInfo: React.FC<AlcoholCardTypeProps> = ({ ...info }: AlcoholCardTypeProps) => {
    function changeNumberToMoney (num: number) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    return (
        <section className={styles.container}>
            <div className={styles.alcoholImageBox} >
                <img className={styles.alcoholImage} src={info.image}></img>
            </div>
            <div className={styles.alcoholInfoBox} >
                <p className={styles.title}>{info.name}</p>
                <p className={styles.basic}>{info.category}</p>
                <p className={styles.basic}>{info.degree}%</p>
                <p className={styles.basic}>{info.drinkSize}ml
                    (<span>
                        {info.minPrice && changeNumberToMoney(info.minPrice)}₩~ {info.maxPrice && changeNumberToMoney(info.maxPrice)}₩
                    </span>)
                </p>
                <div className={styles.hashtagBox}>
                    {info.hashtags && info.hashtags.map((v) => (<div className={styles.hashtag}># {v}</div>))}
                </div>
            </div>
        </section>
    )

};

export default AlcoholTypeInfo;