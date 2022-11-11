'use client';
import MdxRenderer from '@/components/MdxRenderer';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

const components = {
  Intro: () => <>I&apos;m a React component!</>,
};

const Intro = (props: MDXRemoteSerializeResult) => {
  return <MdxRenderer {...props} components={components} />;
};

export default Intro;
