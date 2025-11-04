import React from 'react'
import Header from "../components/Header/Header"
import styles from './page.module.css'

export default function HomeAdm() {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.dashboard}>
        <div className={styles.quadrados}>
          <div className={styles.quadrados1}>
            <div className={styles.quadrado}></div>
            <div className={styles.quadrado}></div>
          </div>

          <div className={styles.quadrados2}>
            <div className={styles.quadrado}></div>
            <div className={styles.quadrado}></div>
          </div>
        </div>

        <h1>Dashboard:</h1>
      </div>

    </div>
  )
}
