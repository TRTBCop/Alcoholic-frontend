interface Props {
  children: React.ReactNode;
}

const AlcoholHistoryLayout: React.FC<Props> = props => {
  return (
    <div className="wrap">
      <header className="header">
        <div className="container"></div>
      </header>
      <main className="main">{props.children}</main>
      <footer className="footer">
        <div className="container">
          <section>Footer 내용인데 이건 돌려막기 할거니까 나중에 같이 이야기 해봅시다</section>
        </div>
      </footer>
    </div>
  );
};

export default AlcoholHistoryLayout;
