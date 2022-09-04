import styles from './AhMainCard.module.scss';

interface AhMainCardProps {
  alcohol_name: string;
  alcohol_type: string;
  drunked: number;
  alcohol_intake: number;
  write_date: string;
  alcohol_image: string;
}

const AlcoholHistoryMainCard: React.FC<AhMainCardProps> = props => {
  return (
    <>
      <div className={styles.ahMainCardTxt}>
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
      <div className={styles.ahMainCardImg}>
        <img src={props.alcohol_image} />
      </div>
    </>
  );
};

export default AlcoholHistoryMainCard;
