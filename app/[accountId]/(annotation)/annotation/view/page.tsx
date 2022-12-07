import Link from 'next/link';
import styles from './page.module.css';

export default function AnnotationView() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Annotation View 🏙
        </h1>
        <p><Link href="/pingu/annotation/edit">Go to Edit</Link></p>
      </main>
    </div>
  )
}
