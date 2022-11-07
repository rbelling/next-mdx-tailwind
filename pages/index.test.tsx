import { serialize } from 'next-mdx-remote/serialize';

export async function getStaticProps() {
  const source = 'Some **mdx** text, with a component';
  const mdxSource = await serialize(source);
  return { props: { source: mdxSource } };
}

describe('Home page', () => {
  // Skipping this until there's a solution for the `Cannot find module 'estree-walker'` error
  test.skip('getStaticProps', async () => {
    const result = await getStaticProps();
    expect(result).toMatchInlineSnapshot();
  });
});

export {};
