import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Home.module.scss";

interface IChildren {
  children: React.ReactNode;
}

const MainLayout = ({ children }:IChildren) => {
  return (
    <>
      <Head>
        <title>AutoHelp</title>
        <link rel="icon" href="icons/favicon.ico" />
      </Head>
      <div className={styles.hero_pattern}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
