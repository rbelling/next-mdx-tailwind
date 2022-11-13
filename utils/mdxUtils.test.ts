import {getMarkdown} from "./mdxUtils";

// Un-skip when errors around es module `estree-walker` issues are resolved. Try uncommenting periodically after updating deps
test.skip('getMarkdown', async () => {
  const result = await getMarkdown('example.mdx');
  expect(result).toMatchInlineSnapshot();
});
