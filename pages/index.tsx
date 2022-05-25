import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <Head>
        <title>Hi mom</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>Count: {count}</p>
        <div>
          <button onClick={() => setCount((currentCount) => currentCount + 1)}>
            Increase Count
          </button>
          <button onClick={() => setCount((currentCount) => currentCount - 1)}>
            Decrease Count
          </button>
        </div>
        <br />
        <img src="https://picsum.photos/300" alt="" />
      </main>
    </div>
  );
};

export default Home;
