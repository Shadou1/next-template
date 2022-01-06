# Next.js + Tailwind Template

## Features

Next.js Template with essential (according to [creditable* sources](https://github.com/Shadou1)) packages to start developing.

### Core
- [Next.js](https://nextjs.org/) - React fullstack framework.
- [Tailwind](https://tailwindcss.com/) - Utility-first CSS framework.
- [Typescript](https://www.typescriptlang.org/) - For sane Javascript development.
- [SWR](https://swr.vercel.app/) - Server-state management.

### Linting
- [ESLint](https://eslint.org/) with [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint).

### Other packages
- [React Hook Form](https://react-hook-form.com/) - Painless form management.
- [Tabler Icons](https://github.com/tabler/tabler-icons) - High-quality SVG icons.

## About this template

Use created CSS files to declare your base styles, component styles, and fonts. SWR is used to manage server-state easily and efficiently. React Hook Form simplifies form management.

### Project structure

You don't have to follow these guidelines exactly.

```
├── features
│   └── feature
│       ├── feature.ts - "Feature code (hooks)"
│       ├── Feature.tsx - "Main React component"
│       ├── types.ts - "TypeScript Types"
│       ├── featureAPI.ts - "API (GET, POST) functions of this feature"
│       └── sub-feature
│           └── "Other related features"
├── pages
│   ├── api
│   │   └── "API routes"
│   ├── _app.tsx
│   ├── index.tsx
│   └── "Other pages"
├── styles
│   ├── base.css
│   ├── components.css
│   ├── fonts.css
│   └── globals.css - "All other css files are imported (postcss-import plugin) here"
├── assets
│   ├── fonts
│   └── "Other static assets (images, icons)"
```