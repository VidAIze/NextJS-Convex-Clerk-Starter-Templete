# Next Stack

A modern, production-ready starter template for building full-stack applications with Next.js, Convex, and Clerk. Features real-time updates, authentication, dark mode, and best practices out of the box.

<div align="center">

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FVidAIze%2Fnext-stack-template)
[![GitHub](https://img.shields.io/github/license/VidAIze/next-stack-template)](https://github.com/VidAIze/next-stack-template/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/VidAIze/next-stack-template)](https://github.com/VidAIze/next-stack-template/stargazers)

📦 [View on GitHub](https://github.com/VidAIze/next-stack-template) · 🔄 `git clone https://github.com/VidAIze/next-stack-template.git`

</div>

## Overview

Next Stack is designed to help you build production-ready applications faster. It combines the best tools in the React ecosystem:

- 🏗️ **Next.js 14** - The React framework for production
- 🔄 **Convex** - Real-time database with automatic sync
- 🔐 **Clerk** - Authentication and user management
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🌓 **next-themes** - Dark mode with system preference detection

## Latest Version

Current stable version: `1.0.3`

### What's New
- 🔄 Automatic package manager detection (npm, yarn, pnpm)
- 📦 Automatic dependency installation
- 🧹 Cleaner project structure
- 🚀 Improved setup experience

## Key Features

### Authentication & Security
- 🔒 Secure authentication with Clerk
- 🛡️ Protected routes and API endpoints
- 👤 User profiles and avatars
- 🔑 Role-based access control

### Real-time Features
- ⚡ Real-time data updates
- 📝 Live blog post creation
- 🔄 Optimistic updates
- 🚀 Automatic cache management

### Developer Experience
- 📱 Responsive design system
- 🌓 Dark mode with system detection
- 🎯 TypeScript support
- 🧪 Best practices built-in

### Performance
- ⚡ Fast page loads
- 🔄 Efficient real-time sync
- 📦 Optimized bundle size
- 🚀 Edge-ready

## Quick Start

### Using Create Command (Recommended)
```bash
# Interactive mode with your preferred package manager
npx @vidaize/create-next-stack
# or
yarn create @vidaize/next-stack
# or
pnpm create @vidaize/next-stack

# Or specify project name directly
pnpm create @vidaize/next-stack my-app
```

### Manual Setup
```bash
# Clone the repository
git clone https://github.com/VidAIze/next-stack-template.git

# Install dependencies with your preferred package manager
pnpm install

# Set up environment variables
cp .env.example .env.local

# Start the development server
pnpm dev
```

## Documentation

### Environment Setup
Required environment variables:
\`\`\`env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
NEXT_PUBLIC_CONVEX_URL=your_convex_url
\`\`\`

### Project Structure
```
├── app/                    # Next.js app directory
│   ├── blog/              # Blog features
│   ├── dashboard/         # Admin dashboard
│   └── auth/             # Authentication pages
├── components/            # React components
├── convex/               # Backend & database
├── lib/                 # Utility functions
└── public/              # Static assets
```

### Best Practices
- 🔄 Use Convex queries for real-time data
- 🛡️ Implement proper auth checks
- 📱 Follow responsive design patterns
- ⚡ Optimize for performance

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## Support

- 📚 [Documentation](https://github.com/VidAIze/next-stack-template/wiki)
- 🐛 [Issue Tracker](https://github.com/VidAIze/next-stack-template/issues)
- 💬 [Discussions](https://github.com/VidAIze/next-stack-template/discussions)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Convex](https://convex.dev/)
- [Clerk](https://clerk.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [next-themes](https://github.com/pacocoursey/next-themes)

---

<div align="center">

**[Get Started](https://github.com/VidAIze/next-stack-template#quick-start)** · 
**[Documentation](https://github.com/VidAIze/next-stack-template/wiki)** · 
**[Report Bug](https://github.com/VidAIze/next-stack-template/issues)** · 
**[Request Feature](https://github.com/VidAIze/next-stack-template/issues)**

</div>
