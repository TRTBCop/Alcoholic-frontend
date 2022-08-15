import styles from './AlcoholHistoryTitle.module.css';

interface AlcoholHistoryTitleProps {
  titleName: string;
}

const AlcoholHistoryTitle: React.FC<AlcoholHistoryTitleProps> = props => {
  return (
    <section className={styles.hs_title_section}>
      <div className="container">
        <h2>{props.titleName}</h2>
      </div>
    </section>
  );
};

export default AlcoholHistoryTitle;
