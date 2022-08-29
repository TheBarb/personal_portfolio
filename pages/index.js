import Head from 'next/head'
import Image from 'next/image'
import RadioButton from '../Components/RadioButton/RadioButton'
import styles from '../styles/Home.module.scss'

export default function Home({restaurants = []}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/radiobutton.svg" />
      </Head>

      <main className={styles.main}>
        
        <RadioButton/>
        <Image src="/sphere.svg" alt="sphere" width={72} height={16} />
        <h1 className={styles.title}>
          Die Entwicklerin werden, <br/>die ich immer gesucht habe 
          {/*<a href="https://nextjs.org">Next.js!</a>*/}
        </h1>
      <ul>
      {restaurants.map((restaurant) => (
        <li>{restaurant.name}</li>
        ))}
      </ul>
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}


/*
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.

export async function getStaticProps(context) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://localhost:1337/api/restaurants')
  const restaurants = await res.json()
  console.log(restaurants)

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return { props: { restaurants: data ?? [], error: error ?? null, preview: !!context?.preview } };
  
}
*/
