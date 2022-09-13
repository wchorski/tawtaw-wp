import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import  Footer  from 'components/Footer'
import  Header  from 'components/Header'
import axios from 'axios'

const Home: NextPage = ({data}: any) => {

  const {header, footer} = data
  

  return (

    <>
      <Header data={header}/>

      <main>
        <h1>TAWTAW</h1>
      </main>

      <Footer data={footer}/>
    </>
  )
}

export async function getStaticProps() {
  const { data } = await axios.get(`${ process.env.NEXT_PUBLIC_WP_SITE_URL}/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer`)

  return {
    props: data || {},
    revalidate: 1,
  }
}

export default Home
