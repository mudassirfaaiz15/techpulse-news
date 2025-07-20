const newsContainer = document.getElementById('news-container');

async function fetchNews() {
  const res = await fetch('https://newsdata.io/api/1/news?apikey=YOUR_API_KEY&q=ai+technology&language=en');
  const data = await res.json();

  newsContainer.innerHTML = data.results.map(article => `
    <div class="article">
      <h2>${article.title}</h2>
      <p>${article.description || ''}</p>
      <a class="read-more" href="news/article-template.html?url=${encodeURIComponent(article.link)}" target="_blank">Read More</a>
    </div>
  `).join('');
}

fetchNews();
