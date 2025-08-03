# Overview

This is a mental health hospital landing page for Estância Morro Grande, a psychiatric hospital located in Ibiúna, São Paulo, Brazil. The application is built as a full-stack React application with Express.js backend, designed to provide information about the hospital's services, collect contact form submissions, and present a professional healthcare website with Portuguese language content.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Technology Stack:** React with TypeScript, using Vite as the build tool and development server. The frontend follows a component-based architecture with modern React patterns.

**UI Framework:** shadcn/ui components built on top of Radix UI primitives, providing accessible and customizable UI components. Tailwind CSS is used for styling with a custom design system including healthcare-specific color schemes.

**Routing:** Uses Wouter for client-side routing, providing a lightweight alternative to React Router. The application currently has a single main route for the home page.

**State Management:** React Query (TanStack Query) for server state management, providing caching, synchronization, and background updates for API calls. Local component state is managed with React hooks.

**Form Handling:** React Hook Form with Zod validation for type-safe form processing, particularly for the contact form functionality.

## Backend Architecture

**Technology Stack:** Express.js with TypeScript, providing a RESTful API server. The server uses modern ES modules and includes development-time features like hot reloading.

**Storage Layer:** Currently implements an in-memory storage solution as a fallback, with database schema defined using Drizzle ORM for PostgreSQL. The system is designed to easily switch to a persistent database.

**API Design:** RESTful endpoints for contact form submissions with proper validation, error handling, and response formatting. Uses JSON for data exchange.

**Development Tools:** Integration with Vite for hot module replacement during development, with proper environment separation between development and production.

## Data Storage Solutions

**Database:** PostgreSQL with Drizzle ORM as the query builder and schema management tool. The schema includes tables for users and contact requests with proper relationships and constraints.

**Migration Strategy:** Drizzle Kit for database migrations and schema management, allowing version-controlled database changes.

**Connection:** Neon Database serverless PostgreSQL for cloud-based database hosting, configured through environment variables.

## External Dependencies

**UI Components:** Radix UI primitives for accessible component foundations, shadcn/ui for pre-built component library, Tailwind CSS for utility-first styling.

**Development Tools:** TypeScript for type safety, Vite for build tooling, ESBuild for production builds, tsx for TypeScript execution in development.

**Forms and Validation:** React Hook Form for form state management, Zod for schema validation, @hookform/resolvers for integration between the two.

**Fonts and Assets:** Google Fonts (Inter) for typography, Unsplash images for placeholder content, Lucide React for consistent iconography.

**Database and ORM:** Drizzle ORM for type-safe database queries, @neondatabase/serverless for database connection, connect-pg-simple for session storage.

**Query Management:** TanStack React Query for server state management and caching.

**Date Handling:** date-fns for date manipulation and formatting utilities.

**Utilities:** clsx and tailwind-merge for conditional CSS classes, class-variance-authority for component variant management.