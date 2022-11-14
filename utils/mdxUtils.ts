import fs from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm'

// POSTS_PATH is useful when you want to get the path to a specific file
const POSTS_PATH = path.join(process.cwd(), 'posts');

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));

/**
 * Parses a local markdown file in the `POSTS_PATH` folder, and returns the serialized result
 * @see https://frontmatter.codes/docs/markdown
 */
export async function getMarkdown<
  Variables extends Record<string, unknown>,
  FrontMatterData extends Record<string, string>
>(filePath: string, variables?: Variables) {
  const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
  const result = await serialize(source, {
    scope: variables,
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeHighlight],
    },
  });
  return result as MDXRemoteSerializeResult<Variables, FrontMatterData>;
}
