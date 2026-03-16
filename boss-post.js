import fs from 'fs';
import path from 'path';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const ask = (query) => new Promise((resolve) => rl.question(query, resolve));

async function createPost() {
  console.log('\n--- 🚀 BLOG-BOSS NEW POST CREATOR ---\n');

  const title = await ask('Enter Blog Title: ');
  const description = await ask('Enter Short Description: ');
  const tags = await ask('Enter Tags (comma separated): ');
  const heroImage = await ask('Hero Image URL (or leave blank): ');

  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

  const date = new Date().toISOString().split('T')[0];
  
  const content = `---
title: '${title}'
description: '${description}'
pubDate: '${date}'
heroImage: '${heroImage || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085'}'
tags: [${tags.split(',').map(t => `'${t.trim()}'`).join(', ')}]
---

# ${title}

Write your content here...
`;

  const fileName = `${slug}.md`;
  const filePath = path.join(process.cwd(), 'src', 'content', 'blog', fileName);

  fs.writeFileSync(filePath, content);

  console.log(`\n✅ Success! New post created at: src/content/blog/${fileName}`);
  console.log(`\n💡 Pro Tip: Now edit the file to add your full content, then run 'npm run deploy'`);
  
  rl.close();
}

createPost();
