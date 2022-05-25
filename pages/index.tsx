import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hi mom</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hi Mom</h1>
        <h1>
          Hi Mom from <code>feature/a</code>
        </h1>
      </main>
    </div>
  );
};

export default Home;
