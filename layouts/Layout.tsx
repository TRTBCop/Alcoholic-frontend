
import AppFooter from '@components/Common/AppFooter';
import styles from './Layout.module.scss';

const Layout: React.FC<{ children: JSX.Element | JSX.Element[] }>= ({ children }) => {
    return (
        <>
            <header className={styles.header}>
                <section>Header</section>
            </header>
            <main>
                {children}
            </main>
            <footer className={styles.footer}>
                <AppFooter/>
            </footer>
        </>
    );
}

export default Layout;