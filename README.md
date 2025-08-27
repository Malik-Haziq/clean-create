# clean-create

🚀 Create clean project templates with zero boilerplate code. Interactive CLI for React, Next.js & more - just the essentials, ready to code.

## Why clean-create?

Tired of deleting demo code every time you start a new project? **clean-create** gives you production-ready templates with zero fluff - just clean, minimal setups that let you jump straight into building.

## Features

✨ **Zero Boilerplate** - No "Hello World" examples or demo components  
🎯 **Interactive Setup** - Smart prompts for your preferences  
⚡ **Lightning Fast** - Get coding in under 30 seconds  
🛠️ **Modern Tooling** - Vite, TypeScript, Tailwind - all pre-configured  
📱 **Framework Support** - React, Next.js (Vue, Svelte coming soon)  
🎨 **Styling Options** - Tailwind CSS or plain CSS  
💎 **Production Ready** - Best practices baked in

## Quick Start

```bash
npx clean-create react my-app
```

That's it! Answer 2 quick questions and you're ready to code.

## Usage

### Basic Syntax

```bash
npx clean-create <framework> <project-name>
```

### Supported Frameworks

- `react` - React with Vite
- `nextjs` - Next.js with App Router

### Interactive Prompts

After running the command, you'll be asked:

1. **Language**: TypeScript or JavaScript
2. **Styling**: Tailwind CSS or Plain CSS

## Examples

### React Project

```bash
npx clean-create react my-react-app
cd my-react-app
npm run dev
```

### Next.js Project

```bash
npx clean-create nextjs my-nextjs-app
cd my-nextjs-app
npm run dev
```

## What You Get

### React Templates Include:

- ⚡ **Vite** for blazing fast development
- 🔷 **TypeScript** support (optional)
- 🎨 **Tailwind CSS** pre-configured (optional)
- 📦 **Clean project structure**
- 🛠️ **Modern build tools**

### Next.js Templates Include:

- 🚀 **Next.js 14** with App Router
- 🔷 **TypeScript** support (optional)
- 🎨 **Tailwind CSS** pre-configured (optional)
- 📁 **Clean app directory structure**
- ⚡ **ESLint** configuration

## Template Structure

### React Project Structure

```
my-app/
├── src/
│   ├── App.tsx         # Clean main component
│   ├── main.tsx        # Entry point
│   └── index.css       # Minimal styles
├── index.html          # HTML template
├── package.json        # Dependencies
├── vite.config.ts      # Vite configuration
└── tailwind.config.js  # Tailwind config (if selected)
```

### Next.js Project Structure

```
my-app/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── package.json        # Dependencies
├── next.config.js      # Next.js configuration
└── tailwind.config.ts  # Tailwind config (if selected)
```

## Available Scripts

All generated projects include these npm scripts:

### React Projects

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

### Next.js Projects

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Comparison

| Tool             | Demo Code | TypeScript  | Tailwind    | Setup Time |
| ---------------- | --------- | ----------- | ----------- | ---------- |
| **clean-create** | ❌ None   | ✅ Optional | ✅ Optional | 30s        |
| Create React App | ✅ Lots   | ❌ Manual   | ❌ Manual   | 5min+      |
| Vite Templates   | ✅ Some   | ✅ Separate | ❌ Manual   | 2min       |
| Next.js CLI      | ✅ Some   | ✅ Optional | ❌ Manual   | 2min       |

## Requirements

- **Node.js** 18+
- **npm** 7+ (or yarn/pnpm)

## Roadmap

🔮 **Coming Soon:**

- Vue 3 templates
- Svelte templates
- Express.js templates
- Custom template marketplace
- Project presets (full-stack combinations)
- Plugin system

## Contributing

We'd love your help! Here's how to contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Adding New Templates

1. Create template directory: `templates/framework/variant/`
2. Add all necessary files
3. Update `SUPPORTED_FRAMEWORKS` in `lib/create-project.js`
4. Test thoroughly
5. Submit PR

## Issues & Support

- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/yourusername/clean-create/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/yourusername/clean-create/discussions)
- 📧 **Email**: your-email@domain.com

## License

MIT © [Your Name](https://github.com/yourusername)

---

**Made with ❤️ for developers who want to code, not configure.**

### Star the project if it helped you! ⭐

[![GitHub stars](https://img.shields.io/github/stars/yourusername/clean-create.svg?style=social&label=Star)](https://github.com/yourusername/clean-create)
