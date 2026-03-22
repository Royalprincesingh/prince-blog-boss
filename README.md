# 🚀 Prince Singh Blog Boss

A modern, fast, and feature-rich blog built with **Astro**, **TypeScript**, and **Firebase**. This project showcases best practices in modern web development with SEO optimization, RSS feeds, and a clean admin dashboard.

**Live Site:** [blog-boss.tech](https://blog-boss.tech)

---

## ✨ Features

- 📝 **Markdown & MDX Support** - Write content in Markdown with dynamic components
- 🎨 **Modern Design** - Responsive, accessible UI with Lucide Icons
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🔍 **SEO Optimized** - Automatic sitemap generation and RSS feeds
- ⚡ **Lightning Fast** - Static site generation for optimal performance
- 🏷️ **Categories & Tags** - Organize content with tags
- 📊 **Admin Dashboard** - Manage blog content
- 🔥 **Firebase Integration** - Push-button deployment
- 📅 **Formatted Dates** - Beautiful date formatting across the site

---

## 📂 Project Structure

```
blog/
├── src/
│   ├── components/        # Reusable Astro components
│   │   ├── BaseHead.astro      # SEO meta tags
│   │   ├── Header.astro        # Navigation header
│   │   ├── Footer.astro        # Site footer
│   │   └── FormattedDate.astro # Date formatting
│   ├── content/
│   │   └── blog/              # Blog post markdown files
│   ├── layouts/
│   │   ├── BaseLayout.astro   # Main layout wrapper
│   │   └── BlogPost.astro     # Blog post layout
│   ├── pages/
│   │   ├── index.astro        # Homepage
│   │   ├── about.astro        # About page
│   │   ├── contact.astro      # Contact page
│   │   ├── blog/
│   │   │   ├── index.astro           # Blog archive
│   │   │   └── [...slug].astro       # Individual blog posts
│   │   ├── categories/
│   │   │   ├── index.astro           # Categories listing
│   │   │   └── [tag].astro           # Posts by category
│   │   ├── admin/
│   │   │   ├── index.astro           # Admin panel
│   │   │   ├── dashboard.astro       # Dashboard
│   │   │   └── new.astro             # Create new post
│   │   └── rss.xml.js         # RSS feed
│   ├── styles/
│   │   └── global.css         # Global styles
│   └── consts.ts              # Site constants
├── public/
│   ├── assets/                # Static assets
│   └── fonts/                 # Custom fonts
├── astro.config.mjs           # Astro configuration
├── package.json               # Dependencies
└── firebase.json              # Firebase config
```

---

## 🛠️ Tech Stack

- **Framework:** [Astro 4.5.9](https://astro.build) - Static site generator
- **Language:** TypeScript 5.4
- **Content:** Markdown & MDX
- **Icons:** [Lucide Astro](https://lucide.dev)
- **Fonts:** Inter & Outfit (via Fontsource)
- **Deployment:** Firebase Hosting
- **Integrations:**
  - @astrojs/mdx - Dynamic markdown components
  - @astrojs/rss - RSS feed generation
  - @astrojs/sitemap - XML sitemap

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Royalprincesingh/prince-blog-boss.git
   cd prince-blog-boss
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   npm start
   ```
   
   The site will be available at `http://localhost:3000`

---

## 📝 Creating Blog Posts

### Option 1: Manual Creation
Create a new `.md` file in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "Short description of your post"
pubDate: 2024-03-22
author: "Prince Singh"
image: "https://example.com/image.jpg"
tags: ["astro", "blog"]
---

Your content here...
```

### Option 2: Using the Post Generator
```bash
npm run post
```

This will prompt you for post details and create the file automatically using the `boss-post.js` script.

---

## 🏗️ Build & Deploy

### Build for Production
```bash
npm run build
```

This generates a static site in the `dist/` directory.

### Preview Build
```bash
npm run preview
```

### Deploy to Firebase
```bash
npm run deploy
```

This runs the build and deploys to Firebase Hosting.

---

## 📚 Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm start` | Alias for dev |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run post` | Create new blog post |
| `npm run deploy` | Build and deploy to Firebase |
| `npm run astro` | Run Astro CLI directly |

---

## 🎨 Customization

### Site Configuration
Edit `astro.config.mjs` to change site settings:
```javascript
export default defineConfig({
  site: 'https://your-domain.com',
  // ... other config
});
```

### Site Constants
Update `src/consts.ts` for site metadata:
```typescript
export const SITE_TITLE = "Your Blog Title";
export const SITE_DESCRIPTION = "Your description";
// ... other constants
```

### Styling
Global styles are in `src/styles/global.css`. Modify components individually in each `.astro` file.

---

## 📊 Admin Panel

Access the admin dashboard at `/admin` to:
- View all published posts
- Access the dashboard
- Create new posts via the web interface

---

## 🔍 SEO Features

- ✅ Automatic XML sitemap generation
- ✅ RSS feed at `/rss.xml`
- ✅ Meta tags for social sharing
- ✅ OpenGraph images
- ✅ Canonical URLs

---

## 🐛 Troubleshooting

### Port already in use
```bash
npm run dev -- --port 3001
```

### Clear cache before build
```bash
npm run build -- --experimental-reloading
```

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👨‍💻 Author

**Prince Singh**
- GitHub: [@Royalprincesingh](https://github.com/Royalprincesingh)
- Portfolio: [blog-boss.tech](https://blog-boss.tech)

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

## 📮 Support

For issues, questions, or suggestions, please open an issue on GitHub or visit the contact page on the blog.

---

**Made with ❤️ using Astro**
