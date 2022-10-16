import layoutStyles from '@layouts/Layout.module.scss';
import LoginForm from '@components/LoginForm';
import { NextPage } from 'next';

const LoginPage: NextPage = () => {
  return (
    <section>
      <div className={layoutStyles.md}>
        <LoginForm />
      </div>
    </section>
  );
};

export default LoginPage;
