# Eric Njanga Portfolio

This is the portfolio of **Eric Njanga**, built using [Next.js](https://nextjs.org/) and styled with the [IBM Carbon Design System](https://carbondesignsystem.com/).

It consumes a custom-built [React component library](https://github.com/ericnjanga/enjanga-next-3-components-lib) designed specifically for this project.

> 📦 The component library is live on [Chromatic](https://6856ac512f4faa67a7d9c5c2-rnaolxiygb.chromatic.com/) for real-time previews and documentation.

---

## 🚀 Stack & Features

- **Next.js (React)** – Fast, production-ready React framework
- **TypeScript** – Strongly typed JavaScript for better maintainability
- **IBM Carbon Design System** – Accessible, modular design framework
- **Eric Njanga Component Library** – Reusable, styled UI components
- **SASS (SCSS)** – Modular and customizable styling
- **Contentful (CMS)** – Headless CMS for managing content
- **i18n** – Multi-language support (English & French)
- **Accessibility (a11y)** – Following WCAG 2.2 standards

---

## 📁 Project Structure

```txt
src/
├── app/                # Next.js App Router pages & layouts
│   ├── [ContentId]/    # Dynamic routes for CMS content
│   │   └── page.tsx
│   ├── about/          # Example static page
│   │   └── page.tsx
│   └── page.tsx        # Root homepage
│
├── components/         # Local React components
│   └── ExampleComponent/
│       ├── ExampleComponent.tsx
│       └── ExampleComponent.scss
│
├── hooks/              # Custom React hooks
│   ├── useExample.ts
│   └── useFeature.ts
│
├── libs/               # Utility libraries & scripts
│   ├── contentful.ts   # CMS integration
│   └── api.ts
│
├── styles/             # Global SCSS styles & utilities
│   ├── _variables.scss
│   ├── _mixins.scss
│   └── globals.scss
│
├── types/              # TypeScript types & interfaces
│   └── cms.d.ts
│
└── utils/              # Helper functions
    ├── formatDate.ts
    └── logger.ts
```

---

## 📦 Getting Started

### Prerequisites

- Node.js (LTS recommended)
- Yarn or npm
- Contentful (configured space & API keys)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/ericnjanga/ericnjanga-portfolio.git
cd ericnjanga-portfolio
yarn install
# or
npm install
```

### Running the Development Server

```bash
yarn dev
# or
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Building for Production

```bash
yarn build
yarn start
```

---

## 🧪 Testing

This project uses **Jest** and **React Testing Library** for unit and integration tests.

Run tests:

```bash
yarn test
```

Run tests in watch mode:

```bash
yarn test:watch
```

Accessibility and visual testing are validated in Storybook via the component library.

---

## 📚 Component Library

This project relies heavily on the [Eric Njanga Component Library](https://www.npmjs.com/package/enjanga-next-3-components-lib).  
Some examples of components in use:

- [CustomTile](https://6856ac512f4faa67a7d9c5c2-rnaolxiygb.chromatic.com/?path=/docs/external-components-customtile--overview)
- [Banner](https://6856ac512f4faa67a7d9c5c2-rnaolxiygb.chromatic.com/?path=/docs/external-components-banner--overview)
- [CMSRichText](https://6856ac512f4faa67a7d9c5c2-rnaolxiygb.chromatic.com/?path=/docs/external-components-cmsrichtext--overview)
- [FeatureText](https://6856ac512f4faa67a7d9c5c2-rnaolxiygb.chromatic.com/?path=/docs/external-components-featuretext--overview)
- **More…** (see Chromatic for the full list)

### What is being used

- **Design tokens** – spacing, colors, typography
- **Prebuilt components** – styled and accessible out-of-the-box
- **Storybook** – documentation and visual previews

---

## 📄 License

This project is licensed under the **Apache License 2.0** – see the [LICENSE](./LICENSE) file for details.
