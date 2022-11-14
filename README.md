
![Badge](https://img.shields.io/badge/Next-000000?logo=next.js&style=for-the-badge)
![Badge](https://img.shields.io/badge/TypeScript-black?logo=typescript&style=for-the-badge)
![Badge](https://img.shields.io/badge/Node.js-green?logo=node.js&style=for-the-badge)

![Badge](https://img.shields.io/badge/React-teal?logo=react&style=for-the-badge)
![Badge](https://img.shields.io/badge/Markdown-light?logo=markdown&style=for-the-badge)
![Badge](https://img.shields.io/badge/tailwindcss-lightblue.svg?logo=tailwind-css&style=for-the-badge)

![Badge](https://img.shields.io/badge/-jest-%23C21325?logo=jest&style=for-the-badge)
![Badge](https://img.shields.io/badge/eslint-3A33D1?logo=eslint&style=for-the-badge)
![Badge](https://img.shields.io/badge/prettier-1A2C34?logo=prettier&style=for-the-badge)
![Badge](https://img.shields.io/badge/netlify-%23000000.svg?logo=netlify&style=for-the-badge)




# next-mdx-tailwind

Next.js boilerplate to easily work with Markdown content styled with Tailwind.

---

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
- [Jest](https://jestjs.io) testing pre-configured
- [Prettier](https://prettier.io)
- [Eslint](http://eslint.org)

## Getting Started
Make sure you have [`pnpm`](https://pnpm.io/) installed globally.
- `pnpm i`
- `pnpm dev` to launch the app locally