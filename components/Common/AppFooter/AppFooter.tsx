import { useRouter } from 'next/router';
import styles from './AppFooter.module.scss';
import mainLogo from '../../../public/assets/img/AlcoholicLogo_white.png'

interface AppHeaderProps {

}
  
  const AppFooter: React.FC<AppHeaderProps> = () => {
    const router = useRouter();

    const ClickPage = () =>{
        router.push('/');
    }

    return (
      <>
        <div className={styles.container}>
            <div className={styles.mainLogoBox} onClick={ClickPage}>
                <img src={mainLogo.src} alt="AlcoholicLogo"/>
            </div>
            <div className={styles.infoBox}>
                <p>
                    <span>(주) 알콜홀릭 | 대표자: 수</span>
                    <br/>
                    <span>이메일 : trtbcop@gmail.com</span>   
                </p>
                <br/>
                <p >COPYRIGHTⓒ 2022. TRTBCop. ALL RIGHTS RESERVED.</p>
            </div>
        </div>
      </>
    );
  };
  
  export default AppFooter;