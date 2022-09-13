import AppHeader from '@components/Common/AppHeader';

const Layout: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }) => {
  return (
    <>
      <AppHeader headerType="main" />
      <main>{children}</main>
    </>
  );
};

export default Layout;
