# Next.js & shadcn/ui template

Welcome to this [Next.js](https://nextjs.org/) template repository, initiated using `create-next-app`. This template includes useful setup enhancements such as the integration of [shadcn/ui]('https://ui.shadcn.com/'), and setup for the [prettier-plugin-tailwindcss]('https://tailwindcss.com/blog/automatic-class-sorting-with-prettier') for sorting Tailwind CSS classes.

## Features

- shadcn/ui: Includes a [`theme-toggle`]('https://github.com/seangray-dev/nextjs-shadcn-template/blob/main/src/components/ui/theme-toggle.tsx') component for light and dark modes within the `site-navigation` component, leveraging [shadcn/ui]('https://ui.shadcn.com/') and [next/themes]('https://www.npmjs.com/package/next-themes').
- [Prettier Plugin for TailwindCSS]('https://tailwindcss.com/blog/automatic-class-sorting-with-prettier'): Automatically sorts Tailwind CSS classes for cleaner code.
- Pre-built Components: `site-footer` and `site-navigation` components are pre-configured in the `/components/layout` folder.

## Getting Started

### Fork and Set Up

[Fork this repo](https://github.com/seangray-dev/nextjs-shadcn-template/fork) to create your own copy under your GitHub account. This enables you to customize and update the template without altering the original project.

### Development

1. Clone Your Fork: Clone the forked repository to your local system using your preferred Git client.
2. Customize Your Setup: Adjust the existing components and settings according to your project's requirements.
3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
