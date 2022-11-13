'use client';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';

const Markdown = (props: MDXRemoteProps) => {
  return (
    <div className="wrapper">
      <MDXRemote {...props} />
    </div>
  );
};

export default Markdown;
