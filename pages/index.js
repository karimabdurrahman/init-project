import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>durra hiding spot 3.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Valar Moghulis" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
