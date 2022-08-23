import styles from './AlcoholHistoryMainCard.module.css';

interface AlcoholHistoryMainCardProps {
  alcohol_name: string;
  alcohol_type: string;
  drunked: number;
  alcohol_intake: number;
  write_date: string;
  alcohol_image: string;
}

const AlcoholHistoryMainCard: React.FC<AlcoholHistoryMainCardProps> = props => {
  return (
    <li className={styles.hsMainCard}>
      <div className={styles.hsMainCardTxt}>
        <h5>
          {props.alcohol_name} <span>{props.alcohol_type}</span>
        </h5>
        <p>
          마신 양 : {props.drunked}ml
          <br />
          알코올 섭취량 : {props.alcohol_intake}
        </p>
        <span>{props.write_date}</span>
      </div>
      <div className={styles.hsMainCardImg}>
        <img src={props.alcohol_image} />
      </div>
    </li>
  );
};

export default AlcoholHistoryMainCard;
