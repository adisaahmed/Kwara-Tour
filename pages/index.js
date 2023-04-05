import React from "react";
import Header from "./components/Header";
import Head from 'next/head';
import MainBody from "./components/MainBody";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kwara Tour</title>
      </Head>

      <Header />
      <MainBody />
    </>
  );
}
