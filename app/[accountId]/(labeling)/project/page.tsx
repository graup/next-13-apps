import Link from 'next/link'
import styles from './page.module.css'

export default function Project({ params }: { params: { accountId: string } }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to {params.accountId} Projects
        </h1>
        <ul>
          <li><Link href={`/${params.accountId}/project/1234`}>project 1234</Link></li>
          <li><Link href={`/${params.accountId}/project/54321`}>project 54321</Link></li>
        </ul>
      </main>
    </div>
  )
}
