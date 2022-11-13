import Home from '@/components/Home';
import { getMarkdown } from '@/utils/mdxUtils';

export default async function Index() {
  const markdown = await getMarkdown<
    Record<string, unknown>,
    { title: string; description: string }
  >('example.mdx');

  return <Home {...markdown} />;
}
