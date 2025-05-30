const axios = require('axios');
const cheerio = require('cheerio');

// Отримуємо URL з аргументу командного рядка
const url = process.argv[2];

if (!url) {
    console.error('Usage: node index.js <URL>');
    process.exit(1);
}

axios.get(url)
    .then(response => {
        const $ = cheerio.load(response.data);
        const title = $("title").text();
        console.log('Title:', title);
    })
    .catch(err => {
        console.error('Failed to fetch or parse page:', err.message);
        process.exit(1);
    });
