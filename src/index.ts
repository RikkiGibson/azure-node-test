import express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.status(200);
	res.end('<html><body>This is my <b>node.js</b> <i>TypeScript</i> app!</html></body>');
});

app.listen(port, function() {
	console.log(`azure-node-test listening on port ${port}...`);
});
