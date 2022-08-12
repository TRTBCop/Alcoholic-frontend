import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import {useRouter} from 'next/router'

const Home: NextPage = () => {
  const router = useRouter();
  

    
  return (
    <a onClick={() => router.push({
      pathname: '/alcoholtype',
    })}>alcoholType보기</a>
  );
  
}

export default Home
