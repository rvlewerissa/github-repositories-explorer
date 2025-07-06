# GitHub User Search Application

A React application that integrates with GitHub API, allowing users to search for up to 5 users with a username similar to the value entered in a text input. Upon selecting a user, the application displays all repositories for that user.

## Features

- **Limited results**: Display maximum of 5 matching users
- **Repository display**: Show all repositories for selected user with clickable cards
- **Error handling**: Graceful handling of API errors and rate limits
- **Loading states**: Clear feedback during data fetching with skeleton loaders
- **Mobile-first**: Optimized for mobile devices with desktop enhancements
- **Type safety**: Full TypeScript coverage

## Technology Stack

- **Build Tool**: Vite
- **Static Type Checker**: TypeScript
- **UI Framework**: React
- **Styling**: Tailwind CSS
- **State Management / Fetching Library**: TanStack Query

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

The application uses a **feature-based folder structure** to organize code by business domains rather than technical layers. This approach improves maintainability and makes it easier to locate related functionality.

```
src/
├── features/           # Feature-specific modules
│   ├── user-search/    # User search functionality
│   └── repositories/   # Repository display functionality
├── shared/             # Reusable components and utilities
│   ├── components/     # Shared UI components
│   ├── types/          # TypeScript type definitions
│   └── constants/      # App-wide constants
├── lib/               # Third-party library configurations
├── styles/            # Global styles
└── App.tsx           # Main application component
```

## API Integration

The application integrates with GitHub's public API:

- **Search users**: `GET https://api.github.com/search/users?q={query}&per_page=5`
- **Get user repositories**: `GET https://api.github.com/users/{username}/repos`

No authentication is required for these public endpoints, but rate limiting applies.

## Performance Considerations

- **Query caching**: TanStack Query provides intelligent caching and background updates
- **Lazy loading**: Repository data is only fetched when user accordion is expanded
- **Optimized re-renders**: Components use React.memo where appropriate
