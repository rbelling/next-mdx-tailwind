'use client';
import Markdown from '@/components/Markdown';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import Intro, { IntroProps } from '@/components/Home/Intro';

const components = {
  Intro,
};

const Home = (props: MDXRemoteSerializeResult) => {
  const updatedProps: MDXRemoteSerializeResult<IntroProps> = {
    ...props,
    scope: {
      ...props.scope,
      todaysDate: new Date().toDateString(),
    },
  };

  return (
    <>
      {props.frontmatter?.title && (
        <h1 className="title">{props.frontmatter.title}</h1>
      )}
      <Markdown {...updatedProps} components={components} />
    </>
  );
};

export default Home;
