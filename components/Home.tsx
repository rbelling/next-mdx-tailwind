'use client';
import Markdown from '@/components/Markdown';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import ArticleIntro from '@/components/ArticleIntro';

const components = {
  ArticleIntro,
};

const Home = (props: MDXRemoteSerializeResult) => {
  const updatedProps: MDXRemoteSerializeResult = {
    ...props,
    scope: {
      ...props.scope,
      ...props.frontmatter,
      date: new Date().toDateString(),
    },
  };

  return <Markdown {...updatedProps} components={components} />;
};

export default Home;
