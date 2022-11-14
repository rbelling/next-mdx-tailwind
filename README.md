**Modern Next.js boilerplate that supports Markdown content.**

## Features
- Next.js 13 using the [`app` folder beta](https://nextjs.org/blog/next-13#new-app-directory-beta)
- [TypeScript](https://www.typescriptlang.org/)
- [React 18, using Server Components](https://nextjs.org/docs/advanced-features/react-18/server-components) when appropriate
- [Tailwind CSS](https://tailwindcss.com/docs/box-sizing) available globally, configured with the add-on [`@tailwindcss/typography`](https://tailwindcss.com/docs/typography-plugin) to style Markdown automatically with beautiful defaults.
- Supports displaying markdown content using [`next-mdx-remote`](https://github.com/hashicorp/next-mdx-remote).
  - Supports [Github Flavored Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
  - Supports syntax highlighting in code blocks through [Rehype Highlight](https://github.com/rehypejs/rehype-highlight)
  - Markdown files allow embedding React components in the flow of the document.
  - Supports embedding meta data [in the Front Matter section of a post](https://github.com/vfile/vfile-matter#use)
- Uses [`pnpm`](https://pnpm.io/) as package manager

## Getting Started
Make sure you have [`pnpm`](https://pnpm.io/) installed globally.
- `pnpm i`
- `pnpm dev` to launch the app locally