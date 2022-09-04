import type { NextPage } from 'next'
import {useRouter} from 'next/router'

const Home: NextPage = () => {
  const router = useRouter();
  

    // 임시 페이지라서 대충 끄적여만 둡니다.
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '30px', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <a onClick={() => router.push({
        pathname: '/alcoholtype',
      })}>
        alcoholType 보기
      </a>
      <a onClick={() => router.push({
        pathname: '/alcoholhistory',
      })}>
        alcoholHistory 보기
      </a>
      <a onClick={() => router.push({
        pathname: '/alcoholrecipe',
      })}>
        alcoholrecipe 보기
      </a>
    </div>
  );
  
}

export default Home
