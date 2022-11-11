import { serialize } from 'next-mdx-remote/serialize';
import Intro from '@/components/Intro';

export default async function Home() {
  const source = 'Some **mdx** text, with a component <Intro />';
  const markdownContent = await serialize(source);

  return (
    <main>
      <h1 className="text-green-500" data-testid="heading">
        Hi There!
      </h1>
      <Intro {...markdownContent} />
    </main>
  );
}
