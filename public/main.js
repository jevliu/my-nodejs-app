// 获取文章列表
fetch('/api/articles')
  .then(res => res.json())
  .then(list => {
    const ul = document.getElementById('article-list');
    ul.innerHTML = '';
    list.forEach(name => {
      const li = document.createElement('li');
      li.textContent = name;
      li.onclick = () => loadArticle(name);
      ul.appendChild(li);
    });
  });

function loadArticle(name) {
  fetch('/api/article/' + encodeURIComponent(name))
    .then(res => res.json())
    .then(data => {
      document.getElementById('article-content').innerHTML = data.content;
    });
} 