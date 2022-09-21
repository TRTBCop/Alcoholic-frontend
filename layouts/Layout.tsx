import AppFooter from '@components/common/AppFooter';
import styles from './Layout.module.scss';
import AppHeader from '@components/common/AppHeader';

const Layout: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }) => {
  return (
    <>
      <AppHeader headerType="default" />
      <main>{children}</main>
      <footer className={styles.footer}>
        <AppFooter/>
      </footer>
    </>
  );
};

export default Layout;
