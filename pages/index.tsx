import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '../components/Hero/Hero';

const Home: NextPage = () => (
  <div>
    <Head>
      <title>JuanG</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Hero />
    </main>
  </div>
);

export default Home;
