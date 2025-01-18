# Next.js Blog Template with Convex and Clerk

A modern, full-stack blog application built with Next.js, Convex, and Clerk. Features dark mode support, real-time updates, and authentication.

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
- pnpm (recommended) or npm
- Convex account
- Clerk account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/VidAIze/NextJS-Convex-Clerk-Starter-Templete.git
cd NextJS-Convex-Clerk-Starter-Templete
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
