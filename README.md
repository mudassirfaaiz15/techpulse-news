🚀 TechPulse News 📰
A real-time tech news platform built to keep developers, AI enthusiasts, and software engineers instantly informed about the latest updates in Artificial Intelligence, Software Tools, and Developer Technologies — all in one sleek, responsive site.

🌟 Project Overview
TechPulse News is designed to be your daily tech companion. It fetches hourly updates from trusted APIs and delivers crisp, readable news cards with direct links to full articles. The goal is to empower tech professionals and students to stay ahead in the fast-evolving world of technology.

🔧 How I Built It
✅ Step-by-Step Development Process:
🧠 Planning & Conceptualization

Identified the niche: AI, Developer Tools, Software Industry

Chose a minimalist, fast-loading layout that works on all devices.

💻 Frontend Development

HTML for structure

CSS for styling (mobile responsive and clean UI)

JavaScript to dynamically fetch and inject news articles using newsdata.io API.

🌐 Real-time Integration

Used fetch() in JS to connect with the NewsData.io API.

Automatically loads relevant tech news headlines with “Read More” links.

📁 Project Structure

bash
Copy
Edit
techpulse-news/
├── index.html               # Main homepage
├── style.css                # Stylesheet
├── script.js                # Real-time news logic
├── news/article-template.html  # Full article viewer using iframe
├── assets/ (logo, hero image)
├── README.md
└── .gitignore
☁️ Deployment

Tested locally (just open index.html in your browser).

Hosted the site on GitHub Pages / Netlify for global access.

Lightweight enough to work on low bandwidth.

✨ Key Features
🕐 Live Real-Time News (updates every hour)

🧠 AI & Software Industry Focus

📱 Fully Responsive Design

🚀 Deployable via GitHub Pages / Netlify / Vercel

🔗 Direct Article View with Read More

📥 Easily extendable for more APIs (e.g., Hacker News, Reddit Dev, etc.)

📈 Outcomes & What I Learned
✅ Gained hands-on experience in:

Working with public APIs

Handling asynchronous JavaScript

Building a responsive frontend from scratch

Preparing projects for real-world deployment

Managing clean project structure and modularity

✅ Delivered a real-time product that's scalable and easy to upgrade with:

Categorization (e.g., AI, Dev Tools, Industry)

Search and filters

User login & subscriptions (for future roadmap)

🛠️ How to Run It Locally
bash
Copy
Edit
1. Clone or download the repo
2. Replace 'YOUR_API_KEY' in script.js with your NewsData.io API key
3. Open index.html in your browser
You can also deploy it live by uploading the entire folder.

🌍 Live Demo
https://technewsdaily.netlify.app/

