import Home from '@/components/Home';
import { getMarkdown } from '@/utils/mdxUtils';

export default async function Index() {
  const markdown = await getMarkdown('example.mdx');

  return <Home {...markdown} />;
}
