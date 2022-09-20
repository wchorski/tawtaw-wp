import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import React from 'react'
import  Footer  from 'components/Footer'
import  Header  from 'components/Header'
import  Products  from 'components/Products'
import axios from 'axios'
import { LayoutCoffeeBreak } from "components/Layouts";

const Home: NextPage = ({headerFooter, products}: any) => {

  
  // const {header, footer} = headerFooter || {}  
  // console.log(header);
  

  return ( 

    <>
    <LayoutCoffeeBreak headerFooter={headerFooter || {}}>
      <Products products={products }/>
    </LayoutCoffeeBreak>
      {/* <div className="layout-cont">

        <Header data={header}/>

        <main>
          <div className="inner-cont">
            <h1>Main Content</h1>
          </div>
        </main>

        <Footer data={footer}/>
      </div> */}
    </>
  )
}

export async function getStaticProps() {
  const { data: headerFooterData }  = await axios.get(`${ process.env.NEXT_PUBLIC_WP_SITE_URL}/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer`)
  // const { data: productsData }      = await axios.get(`${ process.env.NEXT_PUBLIC_FRONTEND_URL}/api/get-products`)
  const { data: productsData }      = await axios.get(`${ process.env.NEXT_PUBLIC_WP_SITE_URL}/wp-json/wc/v3/products?consumer_key=${process.env.WC_CONSUMER_KEY}&consumer_secret=${process.env.WC_CONSUMER_SECRET}`)
  


  return {
    props: {
      headerFooter: headerFooterData?.data ?? {}, 
      // products: productsData?.products ?? {}
      products: productsData ?? {}
    },
    
    revalidate: 1,
  }
}

export default Home
