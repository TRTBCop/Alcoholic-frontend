
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
                <section>Footer 내용인데 이건 돌려막기 할거니까 나중에 같이 이야기 해봅시다</section>
            </footer>
        </>
    );
}

export default Layout;