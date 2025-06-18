const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const ejs = require('ejs');
const Parser = require('rss-parser');
const parser = new Parser();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './public/pages');

// RSS Feed URL
const RSS_FEED_URL = 'https://thefactfile.org/feed/';

// Routes
app.get('/', async (req, res) => {
    try {
        const feed = await parser.parseURL(RSS_FEED_URL);
        res.render('index', { posts: feed.items });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching RSS feed');
    }
});

app.get('/search', (req, res) => {
    res.render('search', { posts: [] });
});

app.post('/search/title', async (req, res) => {
    try {
        const feed = await parser.parseURL(RSS_FEED_URL);
        const filteredPosts = feed.items.filter(item => 
            item.title.toLowerCase().includes(req.body.title.toLowerCase())
        );
        res.render('search', { posts: filteredPosts });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error searching posts');
    }
});

app.post('/search/category', async (req, res) => {
    try {
        const feed = await parser.parseURL(RSS_FEED_URL);
        const filteredPosts = feed.items.filter(item => 
            item.categories && item.categories.some(cat => 
                cat.toLowerCase().includes(req.body.category.toLowerCase())
            )
        );
        res.render('search', { posts: filteredPosts });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error searching categories');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});