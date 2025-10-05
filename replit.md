# Unisphere Browser - Полнофункциональный Веб-Браузер

## Обзор

Unisphere Browser - это полнофункциональный веб-браузер с минималистичным дизайном в стиле liquid-glass эстетики с анимированными фонами. Приложение предоставляет чистый, современный интерфейс для веб-навигации с быстрым доступом к популярным сайтам и функцией поиска. Построен на React, TypeScript и современных веб-технологиях.

### Новые возможности

**Полноценный браузер с прокси-сервером:**
- Загрузка любых веб-сайтов через встроенный прокси-сервер
- Обход CORS и X-Frame-Options ограничений
- Поддержка множественных вкладок
- История навигации (вперед/назад)
- Обновление страниц

**Анимации и визуальные эффекты:**
- Анимированный логотип UniSphere с зернистым оранжевым текстом и плавающими частицами
- Эффекты свечения и пульсации на всех интерактивных элементах
- Плавные переходы и анимации hover-эффектов
- Анимированный фон с градиентными сферами
- Эффект мерцания на поисковой строке

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Core Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, configured for optimized bundling and hot module replacement
- **React Router** for client-side routing with a catch-all 404 page
- **Tailwind CSS** for utility-first styling with custom design tokens for the liquid-glass aesthetic

**UI Component System**
- **Radix UI** primitives for accessible, unstyled components (dialogs, dropdowns, sheets, tooltips, etc.)
- **shadcn/ui** component architecture with custom theming
- Custom components for browser-specific functionality:
  - `BrowserTab` - Tab management UI
  - `BrowserNavBar` - Navigation controls with URL/search input
  - `BrowserHomePage` - Start page with animated grid background
  - `BrowserMenu` - Side navigation menu
  - `SettingsMenu` - Application settings interface
  - `AnimatedGrid` - Canvas-based animated background

**Design System**
- Dark-themed liquid glass aesthetic with HSL color definitions
- Custom CSS variables for glass effects, borders, and glowing accents
- Grainy, ethereal, transparent visual style
- Color palette: Purple (`280 70% 65%`), Pink (`320 70% 65%`), Orange (`35 80% 60%`), Cyan (`180 70% 60%`)

**State Management**
- React hooks (`useState`, `useEffect`, `useRef`) for local component state
- Custom hooks for mobile detection (`use-mobile`)
- TanStack Query (React Query) for server state management (future API integration)

### Backend Architecture

**Server Setup**
- **Express.js** HTTP server with TypeScript
- **Development Mode**: Vite middleware integration for HMR and asset serving
- **Production Mode**: Static file serving from `dist/public` directory
- Custom request/response logging middleware for API routes

**API Structure**
- RESTful API endpoints under `/api` prefix:
  - `GET /api/examples` - Retrieve all examples
  - `GET /api/examples/:id` - Retrieve single example by ID
  - `POST /api/examples` - Create new example
- Zod schema validation for request payloads (`exampleInsertSchema`)
- Type-safe request/response handling with shared TypeScript types

**Data Storage**
- In-memory storage implementation (`MemStorage`) as the current data layer
- Interface-based design (`IStorage`) allows for future database integration
- Auto-incrementing ID generation for entities

**Module Resolution**
- Path aliases configured via TypeScript:
  - `@/*` → client source files
  - `@db/*` → database/storage layer
  - `@shared/*` → shared types and schemas
- ESNext module system with bundler resolution

### Mobile Support

**Capacitor Integration**
- Multi-platform support (iOS, Android) via Capacitor 7.4.3
- Configured to point to production URL with badge hiding
- HTTP plugin enabled for network requests
- Web directory: `dist` for compiled output

## External Dependencies

### UI & Component Libraries
- **Radix UI** - Comprehensive suite of accessible, unstyled UI primitives (accordion, alert-dialog, avatar, checkbox, collapsible, context-menu, dialog, dropdown-menu, hover-card, label, menubar, navigation-menu, popover, progress, radio-group, scroll-area, select, separator, slider, switch, tabs, toast, toggle, tooltip)
- **React Hook Form** (`@hookform/resolvers`) - Form validation and management
- **cmdk** - Command palette interface component
- **embla-carousel-react** - Carousel/slider functionality
- **vaul** - Drawer component library
- **input-otp** - OTP input component
- **react-day-picker** - Date picker component
- **recharts** - Charting library for data visualization
- **class-variance-authority** - Type-safe variant styling
- **tailwind-merge** & **clsx** - Utility for merging Tailwind classes

### Development Tools
- **TypeScript** with multiple tsconfig files for different contexts (app, node, server)
- **ESLint** with React hooks and React Refresh plugins
- **PostCSS** with Tailwind CSS and Autoprefixer
- **tsx** - TypeScript execution for server runtime
- **lovable-tagger** - Development-only component tagging plugin

### Build & Runtime
- **Vite** - Fast build tool with SWC React plugin
- **Express** - Web server framework
- **TanStack React Query** - Async state management
- **Zod** - Runtime type validation
- **date-fns** - Date utility library
- **sonner** - Toast notification system
- **next-themes** - Theme management (imported but may need configuration)

### Mobile Platform
- **Capacitor** - Native mobile runtime
  - Core package for cross-platform APIs
  - CLI for build and deployment
  - Android platform support
  - iOS platform support

### Type Definitions
- `@types/express` - TypeScript definitions for Express.js
- Various Radix UI type packages included with their respective components