import { useState } from 'react';
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

  const formatDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month >= 10 ? month : '0' + month}-${day >= 10 ? day : '0' + day}`
  };

  const [currentDate] = useState(formatDate);

  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.titleBox}>
        {
          currentDate == props.createAt 
          ?<div className={styles.labelBox}><span className={styles.label}>new</span></div>
          : <div className={styles.labelBoxEmpty}>  </div>
        }
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

