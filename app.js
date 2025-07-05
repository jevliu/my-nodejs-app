const express = require('express');
const fs = require('fs');
const path = require('path');
const marked = require('marked');

const app = express();
const articlesDir = path.join(__dirname, 'articles');

// 确保 articles 目录存在
if (!fs.existsSync(articlesDir)) {
  fs.mkdirSync(articlesDir);
}

app.get('/', (req, res) => {
  fs.readdir(articlesDir, (err, files) => {
    if (err) return res.status(500).send('无法读取文章目录');
    const links = files
      .filter(f => f.endsWith('.md'))
      .map(f => `<li><a href="/article/${encodeURIComponent(f)}">${f.replace('.md', '')}</a></li>`)
      .join('');
    res.send(`<h1>我的Node学习笔记</h1><ul>${links}</ul><p><a href="/commands">常用命令文档</a></p>`);
  });
});

app.get('/article/:name', (req, res) => {
  const filePath = path.join(articlesDir, req.params.name);
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return res.status(404).send('文章不存在');
    res.send(`
      <a href="/">返回首页</a>
      <hr>
      ${marked.parse(data)}
    `);
  });
});

// 保留 /commands 路由，展示命令文档
app.get('/commands', (req, res) => {
  const filePath = path.join(__dirname, 'docker_nodejs_commands.md');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('无法读取命令文档');
      return;
    }
    const html = marked.parse(data);
    res.send(`
      <html>
      <head><title>Docker & Node.js 常用命令速查</title></head>
      <body>${html}</body>
      </html>
    `);
  });
});

app.listen(3000, () => {
  console.log('Blog running at http://localhost:3000/');
});