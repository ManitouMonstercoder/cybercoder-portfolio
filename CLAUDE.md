# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev`
- **Build for production**: `npm run build`
- **Lint code**: `npm run lint`
- **Preview production build**: `npm run preview`

## Project Architecture

This is a React TypeScript portfolio website built with Vite, showcasing cybersecurity and data visualization projects. The application uses a single-page architecture with client-side routing.

### Key Components Structure

- **App.tsx**: Main application component with React Router setup, defines all routes
- **Home component** (in App.tsx): Landing page with portfolio overview, skills, and project showcase
- **Project detail pages**: Dedicated components for each featured project
  - NetworkSecurityProject.tsx
  - VulnerabilityScanner.tsx  
  - DataVizProject.tsx
  - VisitorMetricsProject.tsx

### Technology Stack

- **Frontend**: React 18 with TypeScript
- **Build tool**: Vite
- **Styling**: Tailwind CSS with custom dark theme
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Linting**: ESLint with TypeScript support

### Styling Approach

The application uses a consistent dark theme with cyan accent colors:
- Primary background: gray-900/gray-800
- Card backgrounds: gray-700/gray-800  
- Accent color: cyan-400/cyan-600
- All components follow this design system for visual consistency

### Project Structure Patterns

- Each project detail page follows the same layout pattern:
  - Navigation with back button
  - Hero section with project title and tech tags
  - Detailed project sections
  - Contact/LinkedIn message handling
- Icons from Lucide React are used consistently throughout
- Responsive design with mobile-first approach using Tailwind breakpoints

### Configuration Files

- **vite.config.ts**: Vite configuration with React plugin and lucide-react optimization
- **tailwind.config.js**: Tailwind CSS configuration
- **eslint.config.js**: ESLint configuration with TypeScript and React rules
- **tsconfig.json**: TypeScript project references setup