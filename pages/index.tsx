import type { NextPage } from 'next'
import Head from 'next/head'
import PostBox from '../components/PostBox'



const Home: NextPage = () => {
  return (
    <div className='max-w-sxl my-7 mx-auto'>
      <Head>
        <title>Reddit Clone by Lucas Ribeiro Pires</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostBox />
    </div>
  )
}

export default Home
