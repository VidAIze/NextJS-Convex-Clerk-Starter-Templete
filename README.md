# Next Stack

A modern, full-stack blog application built with Next.js, Convex, and Clerk. Features dark mode support, real-time updates, and authentication.

## Latest Version

Current stable version: `1.0.3`

### What's New
- 🔄 Automatic package manager detection (npm, yarn, pnpm)
- 📦 Automatic dependency installation
- 🧹 Cleaner project structure
- 🚀 Improved setup experience

## Features

- 🔐 Authentication with Clerk
- 📝 Real-time blog post creation and updates
- 🌓 Dark mode support with next-themes
- 🎨 Modern UI with Tailwind CSS
- 🚀 Real-time database with Convex
- 🔄 Optimistic updates
- 📱 Fully responsive design
- 👤 User profiles and avatars

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework
- [Convex](https://convex.dev/) - Backend database and real-time sync
- [Clerk](https://clerk.dev/) - Authentication and user management
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [next-themes](https://github.com/pacocoursey/next-themes) - Dark mode support

## Getting Started

### Prerequisites

- Node.js 18+ 
- A package manager:
  ```bash
  # Using npm (comes with Node.js)
  Already installed with Node.js

  # Using yarn (optional)
  npm install -g yarn

  # Using pnpm (recommended)
  npm install -g pnpm
  ```
- Convex account
- Clerk account

> **Note:** While all package managers are supported, we recommend pnpm for better dependency management and disk space efficiency.

### Installation

You can start a new project in two ways:

#### Method 1: Using Create Command (Recommended)
```bash
# Using npm
npx @vidaize/create-next-stack my-app

# Using yarn
yarn create @vidaize/next-stack my-app

# Using pnpm
pnpm create @vidaize/next-stack my-app

# Or use interactive mode (recommended)
npx @vidaize/create-next-stack
yarn create @vidaize/next-stack
pnpm create @vidaize/next-stack
```

The create command will:
1. Ask for your project name (if not provided)
2. Create a new directory for your project
3. Clone the template
4. Initialize a new git repository
5. Update the package.json with your project name
6. **Automatically install dependencies using your preferred package manager**

#### Method 2: Manual Installation

1. Clone the repository:
```bash
git clone https://github.com/VidAIze/next-stack-template.git
cd next-stack-template
```

2. Install dependencies:
```bash
pnpm install
```

3. Create a `.env.local` file in the root directory and add your environment variables:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

4. Initialize Convex:
```bash
pnpm dlx convex dev
```

5. Start the development server:
```bash
pnpm dev
```

The application should now be running at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── blog/              # Blog page
│   ├── dashboard/         # Dashboard page
│   ├── sign-in/          # Sign in page
│   └── sign-up/          # Sign up page
├── components/            # React components
│   ├── loading.tsx       # Loading states
│   ├── theme-menu.tsx    # Theme switcher
│   └── providers/        # Context providers
├── convex/               # Convex backend
│   ├── schema.ts        # Database schema
│   ├── posts.ts         # Post-related functions
│   └── users.ts         # User-related functions
├── hooks/               # Custom React hooks
└── lib/                # Utility functions
```

## Features in Detail

### Authentication
- Secure authentication with Clerk
- Protected routes and API endpoints
- User profile management

### Blog System
- Create and read blog posts
- Real-time updates
- Author information display
- Formatted dates
- Responsive layout

### Theme System
- System theme detection
- Light and dark mode support
- Persistent theme preference
- Smooth theme transitions

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Package Installation

### Using as a Template (via Package)

You can also use this project as a template by installing it as a package:

```bash
# Using pnpm (recommended)
pnpm add @vidaize/next-stack

# Using npm
npm install @vidaize/next-stack
```

This will install the template as a dependency in your project. You can then:
1. Copy the files from `node_modules/@vidaize/next-stack` to your project
2. Modify the configuration files as needed
3. Update dependencies in your `package.json`

> **Note:** For most users, we recommend using the create command (Method 1 in Installation) as it provides a smoother setup experience.
