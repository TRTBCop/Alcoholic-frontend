import styles from './AlcoholHistoryTitle.module.css';

interface AlcoholHistoryTitleProps {
  titleName: string;
}

const AlcoholHistoryTitle: React.FC<AlcoholHistoryTitleProps> = props => {
  return (
    <section className={styles.hsTitleSection}>      
        <h2>{props.titleName}</h2>      
    </section>
  );
};

export default AlcoholHistoryTitle;
