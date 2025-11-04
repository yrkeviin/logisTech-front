import React from 'react'
import styles from './Header.module.css'

export default function Header() {
  return (
    <div className={styles.header}>
        <img className={styles.logo} src="/image/logoAdm.png" alt="" />

        <h1>LOGISTECH</h1>

        <ul>
            <li><a href="">Teste</a></li>
            <li><a href="">Teste</a></li>
            <li><a href="">Teste</a></li>
            <li><a href="">Teste</a></li>
        </ul>
    </div>
  )
}
