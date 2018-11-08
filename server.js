const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));
//Store all HTML files in view folder.

app.get('/', (req, res) => res.redirect('index.html'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))