import { ReactNode } from 'react';
import styles from './AhButton.module.scss';

interface AhButtonProps {
  children: ReactNode;
  buttonType: string;
  clickEvent?: () => void;
}

const AlcoholHistoryDetailModal: React.FC<AhButtonProps> = (props) => {
  return (
    <button className={styles[props.buttonType]} onClick={props.clickEvent}>{ props.children }</button>
  );
};

export default AlcoholHistoryDetailModal;
