import next from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="/feedbacks/create">
        <a> Oblig9</a>
      </Link>
    </div>
  )
}
