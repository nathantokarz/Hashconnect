import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'
import dynamic from 'next/dynamic'
const HomePage = dynamic(() => import('../src/HomePage'))

const Home: NextPage = () => {

  return (
    <div className={styles.main}>
      <Head>
        <title>Hashconnect Test Site</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
            <HomePage />
        </div>
      </main>
    </div>
  )
}

export default Home
