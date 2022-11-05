import Head from 'next/head';

export default function Home() {
  return (
    <main className="min-h-full min-w-full flex flex-col p-4">
      <Head>
        <title>Next.js + Markdown</title>
        <meta name="description" content="Next.js + Markdown" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-red-500" data-testid="heading">
        Hi there!
      </h1>
    </main>
  );
}
