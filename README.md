Insta Downloader 📥

A simple and efficient web application to download Instagram media (images/videos) by providing a post URL. Built with Node.js + Express (frontend/backend) — lightweight, fast, and ready to deploy.

🔍 Features

Download images or videos from Instagram posts

Simple UI — just paste the URL and click Download

Handles public Instagram posts

Supports modern browsers (desktop & mobile)

Minimal dependencies and easy to maintain

🛠 Tech Stack
Layer	Technology
Backend	Node.js, Express
Frontend	HTML, CSS, JavaScript
Deployment	Can be hosted on platforms like Vercel, Heroku, or your own server
📁 Repository Structure (example)
insta-downloader/
├── app.js
├── package.json
├── package-lock.json
├── public/         # static files (HTML, CSS, JS)
├── views/          # templates (if using templating engine)
└── README.md

🚀 Getting Started
Prerequisites

Node.js >= 14.x

npm (comes with Node.js)

Installation Steps

Clone the repository:

git clone https://github.com/Jhonsonyy/insta-downloader.git


Navigate into the project folder:

cd insta-downloader


Install dependencies:

npm install


Start the app (development mode):

node app.js


Or with nodemon if installed:

npx nodemon app.js


Open your browser and go to:

http://localhost:3000


(or whichever port you configured)

⚙️ Usage

Paste an Instagram post URL (public account) into the input box

Click “Download”

The app will fetch the media (image or video) and start download

Check your browser’s download folder for the file

🔒 Security & Limitations

Works only on public Instagram posts — private or protected accounts will not succeed

Respect Instagram’s terms of service — don’t use for massive scraping

No authentication required — use at your own risk

Future tasks could include rate-limiting, error handling improvements, thumbnail previews, etc.

📦 Deployment

You can deploy this app to many Node.js-friendly platforms:

Heroku

Vercel (Serverless)

DigitalOcean

AWS EC2 / Elastic Beanstalk

Render

Just ensure you set the correct port and allow public access.
