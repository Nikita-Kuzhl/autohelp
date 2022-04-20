import Head from "next/head";
import Image from 'next/image'
import Header from "../components/Header/index";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>AutoHelp</title>
        <link rel="icon" href="icons/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/Kanit-Regular.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <div className={styles.hero_pattern}>
        <Header />
      </div>
    </div>
  );
}
