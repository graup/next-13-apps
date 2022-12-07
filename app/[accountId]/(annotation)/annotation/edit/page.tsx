import Link from 'next/link';
import styles from './page.module.css';

export default function AnnotationEdit() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Annotation Edit ✍️
        </h1>
        <p><Link href="/pingu/annotation/view">Go to View</Link></p>
      </main>
    </div>
  )
}
