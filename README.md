# 📟 KEMiCZA // Kemal Sinanagic

> **Retro-futuristic terminal portfolio and blog built with a modern stack.**

A high-performance personal website blending 80s cyberpunk aesthetics with state-of-the-art web technology. Featuring a CRT-style interface, glitch effects, and a seamless editing experience via Keystatic.

## 🚀 Tech Stack

- **Framework**: [Astro 5.x](https://astro.build/) (Static Site Generation)
- **UI Architecture**: [React 19](https://react.dev/) Components
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/) with custom cyberpunk theme
- **Content Management**: [Keystatic](https://keystatic.com/) (Local-first Git-based CMS)
- **Syntax Highlighting**: [Shiki](https://shiki.style/) with `synthwave-84` theme
- **Typography**: [VT323](https://fonts.google.com/specimen/VT323) from Google Fonts

## ✨ Features

- **Cyberpunk UI**: CRT scanlines, neon gradients, and interactive glitch animations.
- **Terminal Aesthetics**: VT323 monospaced typography and shell-like navigation.
- **Integrated Blog**: Full markdown support with high-quality syntax highlighting for code blocks.
- **Project Showcase**: Structured portfolio to display active, in-progress, and archived work.
- **Demoscene Vibes**: Micro-animations and transitions inspired by classic demo culture.
- **Local-First CMS**: Edit content locally via `localhost:4321/keystatic` and push directly to Git.

## 🛠️ Project Structure

```text
/
├── .github/          # CI/CD Workflows (Planned)
├── public/           # Static assets (images, fonts)
├── src/
│   ├── components/   # React & Astro components (CodeBlock, BlogRenderer)
│   ├── content/      # Markdown & YAML content (posts, projects, bio)
│   ├── layouts/      # Main application layout with CRT effects
│   ├── pages/        # File-based routing
│   └── styles/       # Global CSS with Tailwind 4 theme config
├── keystatic.config.ts # CMS configuration
└── astro.config.mjs   # Astro framework configuration
```

## 🧞 Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Installs project dependencies |
| `npm run dev` | Starts local dev server + Keystatic at `localhost:4321` |
| `npm run build` | Generates a static production build in `./dist/` |
| `npm run preview` | Previews the production build locally |

## 🌐 Hosting & Deployment

This project is optimized for static hosting on **GitHub Pages**, **Vercel**, or **Netlify**. 

> [!NOTE]
> For production deployment, ensure `site` in `astro.config.mjs` is updated to your custom domain or GitHub URL.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

**[KEMiCZA](https://github.com/KEMiCZA)** // Built with coffee and scanlines.
