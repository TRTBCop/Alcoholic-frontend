import styles from './ATCard.module.scss';

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

interface AlcoholCardProps extends AlcoholCardTypeProps{
    onClick: ()=>void;
    type: 'sm' | 'md' | 'lg';
}


const ATCard: React.FC<AlcoholCardProps> = ({ type, onClick, ...info }: AlcoholCardProps) => {
    function changeNumberToMoney (num: number) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    return (
        <div className={styles.card} onClick={onClick}>
            {/* <div className={styles.alcoholImageBox} > */}
            <img className={styles.alcoholImage} src={info.image} />
            {/* </div> */}
            <div className={styles.alcoholInfoBox} >
                <p className={styles.title}>{info.name}</p>
                <p className={styles.basic}>{info.category}</p>
                <p className={styles.basic}>{info.degree}%</p>
                <p className={styles.basic}>{info.minPrice && changeNumberToMoney(info.minPrice)} ~ {info.maxPrice && changeNumberToMoney(info.maxPrice)}</p>
                <div className={styles.hashtagBox}>
                    {info.hashtags && info.hashtags.map((v,i) => (<div key={i} className={styles.hashtag}># {v}</div>))}
                </div>
            </div>
        </div>
    )

};

export default ATCard;