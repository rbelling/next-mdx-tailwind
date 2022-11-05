import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
      <>
        <Head>
          <title>Next.js + Markdown</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="min-h-full min-w-full flex flex-col p-4">
          <h1 className="text-red-500">Hi there!</h1>
        </main>
      </>
  )
}
