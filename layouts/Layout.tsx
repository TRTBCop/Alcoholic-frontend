import AppFooter from '@components/Common/AppFooter';
import styles from './Layout.module.scss';
import AppHeader from '@components/Common/AppHeader';

const Layout: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }) => {
  return (
    <>
      <AppHeader headerType="default" />
      <main>{children}</main>
      <AppFooter/>
    </>
  );
};

export default Layout;
