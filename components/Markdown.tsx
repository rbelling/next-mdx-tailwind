'use client';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';
import 'highlight.js/styles/shades-of-purple.css'

const Markdown = (props: MDXRemoteProps) => {
  return (
    /* The `.prose` class is used by Tailwind Typography to add beautiful typographic defaults */
    <article className="wrapper prose">
      <MDXRemote {...props} />
    </article>
  );
};

export default Markdown;
