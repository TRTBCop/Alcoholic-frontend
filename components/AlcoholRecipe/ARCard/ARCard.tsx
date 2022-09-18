import styles from './ARCard.module.scss';

interface ARCardTypeProps {
  id: number;
  recipeName : string;
  createAt: string;
  recipeImg: string;
  hashTags?: string[];
}



interface ARCardProps extends ARCardTypeProps{
  onClick: ()=>void;
}


const ARCard: React.FC<ARCardProps> = ({onClick, ...props }) => {
    return (
      <div className={styles.card} onClick={onClick}>
        <div className={styles.titleBox}>
          <div className={styles.labelBox}>
            <span className={styles.label}>new</span>
          </div>
          <p className={styles.title}>{props.recipeName}</p>
        </div>
        <div className={styles.imageBox}>
          <img className={styles.imageBox} src={props.recipeImg}/>
        </div>
        <div className={styles.hashtagBox}>
          {props.hashTags && props.hashTags.map((item) => (
            <div key={item} className={styles.hashtag}># {item}</div>
          ))}
        </div>
      </div>
    );
  };


export default ARCard;

