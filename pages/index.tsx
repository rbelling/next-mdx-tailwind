import Head from 'next/head';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import Intro from '../components/Intro';
import { useEffect, useState } from 'react';

const components = { Intro };
type HomeProps = {
  source: MDXRemoteSerializeResult;
};

export default function Home({ source }: HomeProps) {
  const [content, setContent] = useState(<p></p>);
  useEffect(() => {
    setContent(<MDXRemote {...source} components={components} />);
  }, [source]);

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
      {content}
    </main>
  );
}

export async function getStaticProps(): Promise<{ props: HomeProps }> {
  // TODO fetch from .md file, add tailwind typography
  const source = 'Some **mdx** text, with a component <Intro />';
  const mdxSource = await serialize(source);
  return { props: { source: mdxSource } };
}
