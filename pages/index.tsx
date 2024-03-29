import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";

import styles from "../styles/Home.module.css";
import main from "./script/canvas";
import { SphereContainer } from "./components/sphere";
// import Scene from './components/basicParticles';
import Scene from './components/custom-geometry-particles';
import Slide from './components/slide';

const Home: NextPage = () => {
  useEffect(() => {
    // main();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Exodus</title>
        <meta name="description" content="Jake Lee portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Exodus in CodeSandbox! by
          <em> Sangoh Lee</em>
        </h1>
        {/* <SphereContainer /> */}
        <div className={styles['scene-container']}>
          {/* <Slide /> */}
          <Scene />
        </div>
        <canvas id="scene" />
        <p id="copy">
          난 내 예술로 사람들을 어루만지고 싶다.
          그들이 이렇게 말하길 바란다.
          그는 마음이 깊은 사람이구나, 마음이 따뜻한 사람이구나.
        </p>
        <small>— 빈센트 반 고흐, 러빙 빈센트</small>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>.
        </p>

        <p>
          Tip: use the inspector (next to the address bar) to open components!
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
