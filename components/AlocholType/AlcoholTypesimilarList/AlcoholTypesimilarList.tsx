import styles from './AlcoholTypesimilarList.module.css';


interface AlcoholTypeInfoProps {
    name: string;
    category: string;
    degree: number;
    drinkSize: number;
    image: string;
    minPrice?: number;
    maxPrice?: number;
    hashtags?: string[];
}

const AlcoholTypesimilarList: React.FC<{ list: AlcoholTypeInfoProps[] }> = ({ list }) => {

    return (
        <section className={styles.container}>
            <div className={styles.title}>이 술과 비슷한 술</div>
            <div className={styles.cardList}>
                {list?.map((info) => (
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

export default AlcoholTypesimilarList;