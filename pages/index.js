import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

// * .env.local - database passwords, stripe secret key...
// * .env.development.local - stripe client key
// * .env.production.local

// * ===== getServerSideProps() =====
// export function getServerSideProps(context) {
//   // * env variables
//   // console.log(process.env.SECRET_VARIAbLE);

//   // * context
//   console.log(context);
//   // context.res.statusCode = 418;
//   // context.res.write(JSON.stringify({ something: 'cool' }));
//   // context.res.end();

//   // * redirect
//   // return {
//   //   redirect: {
//   //     destination: 'https://google.com',
//   //     permanent: false,
//   //   },
//   // };

//   // * in 'if' can be logical condition (no data found, etc.)
//   // if (2 === 2) {
//   //   return { notFound: true };
//   // }

//   return {
//     props: {},
//   };
// }
// * ===== getServerSideProps() =====

// * ===== getStaticProps() =====
// A) Build pages on build time
// Example: 20 static routes, 35 dynamic routes (eCommerce store -> 35 products)

// B) Incrementally/Lazily build website
// 35M dynamic routes (/store/[id]) -> ahead of time = 0 pages
// /store/1 -> getStaticProps (like getServerSideProps)
// /store/999 -> getStaticProps -> saved for other people
// /store/999 -> served immediately as static page

export function getStaticProps(context) {
  console.log(context);

  // db calls

  return {
    props: {},
    revalidate: 10,
  };
}
// time: 0 5 6 6 6 6 8 9 9  9  9 10 15 15 15
// time: 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15

// * ===== getStaticProps() =====

export default function Home() {
  console.log(
    'env value =',
    process.env.SECRET_VARIABLE,
    process.env.NEXT_PUBLIC_VARIABLE
  );
  console.log('check env var =', process.env.SPECIFICITY);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href='https://nextjs.org/docs' className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href='https://nextjs.org/learn' className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href='https://github.com/vercel/next.js/tree/canary/examples'
            className={styles.card}>
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}>
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'>
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
