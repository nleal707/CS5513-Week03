import Head from 'next/head';
import Link from 'next/link';
import styles from '../../components/layout.module.css';
import utilStyles from '../../styles/utils.module.css';
 
export default function FirstPost() {
  return (
    <div className={styles.container}>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <section className={utilStyles.headingMd}>
      <p>This is my first post.</p>
      </section>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </div>
  );
}