import styles from './page.module.css';

export default function Dataops({ params }: { params: { accountId: string } }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to {params.accountId} Dataops 🤖
        </h1>
      </main>
    </div>
  )
}
