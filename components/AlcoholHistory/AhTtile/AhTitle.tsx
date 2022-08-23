import styles from './AhTitle.module.scss';

interface AlcoholHistoryTitleProps {
  titleName: string;
}

const AlcoholHistoryTitle: React.FC<AlcoholHistoryTitleProps> = props => {
  return (
    <section className={styles.ahTitleSection}>      
        <h2>{props.titleName}</h2>      
    </section>
  );
};

export default AlcoholHistoryTitle;
