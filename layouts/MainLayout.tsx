import styles from './Layout.module.scss';

const Layout: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }) => {
  return (
    <>
      {/* <header className={styles.header}>
        <section>Header1</section>
      </header> */}
      <main>{children}</main>
    </>
  );
};

export default Layout;
