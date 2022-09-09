import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import axios from 'axios'

const Home: NextPage = (props) => {
  console.log('props', props);
  


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <h1>TAWTAW</h1>
      </main>

      <Footer />

    </div>
  )
}

export async function getStaticProps() {
  const { data } = await axios.get(`${ process.env.NEXT_PUBLIC_WP_SITE_URL}/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer`)

  return {
    props: {
      data: data || {},
    },
    revalidate: 1,
  }
}

export default Home
