import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
 
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Nick. I'm a full stack web developer.</p>
        <p>
          Read <Link href="/posts/first-post">this page!</Link>
        </p>
      </section>
    </Layout>
  );
}