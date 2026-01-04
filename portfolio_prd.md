# Portfolio Website - Product Requirements Document

## Project Overview

A modern, performant portfolio website built with Astro, TypeScript, and Tailwind CSS, featuring a clean component-based architecture and proper type safety.

## Tech Stack

- **Framework**: Astro (Static Site Generation)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Code Quality**: ESLint + Prettier
- **Deployment**: (firebase hosting)

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Projects.astro
│   │   ├── ProjectCard.astro
│   │   ├── Skills.astro
│   │   ├── Contact.astro
│   │   └── Button.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── types/
│   │   ├── index.ts
│   │   ├── project.ts
│   │   └── skill.ts
│   ├── data/
│   │   ├── projects.ts
│   │   └── skills.ts
│   └── styles/
│       └── global.css
├── public/
│   ├── favicon.svg
│   └── images/
├── .eslintrc.cjs
├── .prettierrc
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## Core Requirements

### 1. Type Definitions (`src/types/`)

**File: `src/types/project.ts`**
```typescript
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}
```

**File: `src/types/skill.ts`**
```typescript
export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}
```

**File: `src/types/index.ts`**
```typescript
export * from './project';
export * from './skill';

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  location: string;
  socialLinks: SocialLink[];
}
```

### 2. Component Architecture

All components should be built as Astro components (`.astro` files) following these principles:

- **Single Responsibility**: Each component handles one specific UI concern
- **Type Safety**: Use TypeScript interfaces for props
- **Reusability**: Components should be composable and reusable
- **Accessibility**: Semantic HTML with proper ARIA labels

#### Component Specifications

**Layout.astro**
- Purpose: Main layout wrapper for all pages
- Props: `title: string`, `description?: string`
- Features: SEO meta tags, global styles, common structure

**Header.astro**
- Purpose: Site navigation and branding
- Features: Logo, navigation links, mobile menu toggle
- Behavior: Sticky header with scroll behavior

**Hero.astro**
- Purpose: Landing section with introduction
- Features: Name, tagline, CTA buttons, profile image
- Animation: Fade-in on load

**About.astro**
- Purpose: Personal introduction and background
- Features: Bio text, professional summary
- Layout: Text with optional side image

**Projects.astro**
- Purpose: Container for project showcase
- Features: Section title, filter options (optional), project grid
- Children: Multiple ProjectCard components

**ProjectCard.astro**
- Purpose: Individual project display
- Props: `project: Project` (from types)
- Features: Image, title, description, tech tags, links
- Interaction: Hover effects, responsive design

**Skills.astro**
- Purpose: Technical skills display
- Props: `skills: SkillCategory[]`
- Features: Categorized skill lists, visual indicators
- Layout: Grid or grouped by category

**Contact.astro**
- Purpose: Contact information and form
- Features: Email, social links, contact form (optional)
- Validation: TypeScript-based form validation

**Button.astro**
- Purpose: Reusable button component
- Props: `variant: 'primary' | 'secondary' | 'outline'`, `href?: string`, `type?: 'button' | 'submit'`
- Features: Consistent styling, multiple variants

**Footer.astro**
- Purpose: Site footer with copyright and links
- Features: Copyright notice, social links, back-to-top button

### 3. Page Structure

**index.astro**
```astro
---
import Layout from '../layouts/Layout.astro';
import Header from '../components/Header.astro';
import Hero from '../components/Hero.astro';
import About from '../components/About.astro';
import Projects from '../components/Projects.astro';
import Skills from '../components/Skills.astro';
import Contact from '../components/Contact.astro';
import Footer from '../components/Footer.astro';

import { projects } from '../data/projects';
import { skillCategories } from '../data/skills';
---

<Layout title="Your Name - Portfolio" description="Full-stack developer portfolio">
  <Header />
  <main>
    <Hero />
    <About />
    <Projects projects={projects} />
    <Skills skillCategories={skillCategories} />
    <Contact />
  </main>
  <Footer />
</Layout>
```

### 4. Data Management

**src/data/projects.ts**
```typescript
import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Project Name',
    description: 'Brief project description',
    technologies: ['Astro', 'TypeScript', 'Tailwind'],
    imageUrl: '/images/project1.jpg',
    githubUrl: 'https://github.com/username/project',
    liveUrl: 'https://project.com',
    featured: true,
  },
  // Add more projects
];
```

**src/data/skills.ts**
```typescript
import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', category: 'frontend', level: 'advanced' },
      { name: 'Astro', category: 'frontend', level: 'intermediate' },
      { name: 'Tailwind CSS', category: 'frontend', level: 'advanced' },
    ],
  },
  // Add more categories
];
```

### 5. Styling Guidelines

**Tailwind Configuration**
- Use custom color palette in `tailwind.config.mjs`
- Define consistent spacing scale
- Typography utilities for consistent text styling
- Animation utilities for micro-interactions

**Global Styles** (`src/styles/global.css`)
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  
  body {
    @apply bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50;
  }
}

@layer components {
  .section {
    @apply py-16 md:py-24;
  }
  
  .container {
    @apply max-w-6xl mx-auto px-4 sm:px-6 lg:px-8;
  }
}
```

### 6. Configuration Files

**astro.config.mjs**
```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
});
```

**.eslintrc.cjs**
```javascript
module.exports = {
  extends: [
    'plugin:astro/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
  ],
};
```

**.prettierrc**
```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80,
  "plugins": ["prettier-plugin-astro"],
  "overrides": [
    {
      "files": "*.astro",
      "options": {
        "parser": "astro"
      }
    }
  ]
}
```

**tsconfig.json**
```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"],
      "@types/*": ["src/types/*"],
      "@data/*": ["src/data/*"]
    }
  }
}
```

## Design Requirements

### Visual Design
- **Color Scheme**: Modern, professional palette with good contrast
- **Typography**: Clear hierarchy with readable font sizes (16px base minimum)
- **Spacing**: Consistent use of Tailwind spacing scale
- **Responsive**: Mobile-first approach, breakpoints at 640px, 768px, 1024px, 1280px

### Sections
1. **Hero**: Full viewport height, centered content, CTA buttons
2. **About**: Two-column layout on desktop, single column on mobile
3. **Projects**: Grid layout (1 col mobile, 2 cols tablet, 3 cols desktop)
4. **Skills**: Categorized display with visual indicators
5. **Contact**: Centered content with form and social links

### Interactions
- Smooth scrolling between sections
- Hover effects on interactive elements
- Loading animations on page load
- Responsive navigation menu

## Technical Requirements

### Performance
- Lighthouse score target: 95+ for all metrics
- Optimize images (use Astro's image optimization)
- Minimize JavaScript bundle size
- Lazy load images below the fold

### Accessibility
- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Color contrast ratio minimum 4.5:1

### SEO
- Meta tags in Layout component
- Open Graph tags for social sharing
- Structured data (JSON-LD)
- Sitemap generation

### Browser Support
- Modern browsers (last 2 versions)
- Progressive enhancement approach
- Graceful degradation for older browsers

## Development Workflow

### Setup Commands
```bash
npm create astro@latest
npm install -D tailwindcss @astrojs/tailwind
npm install -D typescript
npm install -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-astro
npm install -D prettier prettier-plugin-astro
```

### Scripts
```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "lint": "eslint . --ext .js,.ts,.astro",
    "format": "prettier --write ."
  }
}
```

## Success Criteria

- All TypeScript types properly defined in separate files
- Clean component structure with single responsibility
- Fully responsive across all device sizes
- Passes ESLint and Prettier checks without errors
- Fast page load times (< 2s)
- Accessible to screen readers and keyboard navigation
- Professional, modern design aesthetic

## Future Enhancements (Optional)

- Dark mode toggle
- Blog section using Astro content collections
- Animations with View Transitions API
- Contact form with backend integration
- Analytics integration
- Multi-language support (i18n)

---

**Document Version**: 1.0  
**Last Updated**: December 2025