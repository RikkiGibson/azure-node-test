const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.status(200);
	res.end('This is my <b>node.js</b> app!');
});
