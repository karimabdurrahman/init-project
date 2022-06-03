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
          Bang, lagi dimana bang? <p><a href="instagram.com/durrahidingspot">Redirect</a></p>
        </p>
      </main>

      <Footer />
    </div>
  )
}
