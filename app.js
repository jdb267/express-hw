const express = require('express');
const morgan = require('morgan');
const other = require('./other');

const app = express();
app.use(morgan('dev'));

app.get('/', (req, res) => {
  const posts = other.list();

  const html = `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <title>Albums</title>
  </head>
  <body>
  <h1>Jay-Z Album Sales</h1>
    <ul>
        ${posts
          .map(
            (post) =>
              `<li><a href="http://localhost:5500/albums/${post.id}">${post.album}</a></li>`
          )
          .join('')}
    </ul>
  </body>
</html>
    `;

  res.send(html);
});

app.get('/albums/:id', (req, res) => {
  //   console.log(req.params.id); // --> '7'
  const post = other.find(req.params.id);

  const html = `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <title>${post.album}</title>
  </head>
  <body>
  <h1>${post.album}</h1>
    <ul>
        ${Object.keys(post)
          .map((ele) => `<li>${ele}: ${post[ele]}</li>`)
          .join('')}
    </ul>
    <a href="http://localhost:5500/">Back to Albums</a>
  </body>
</html>
    `;
  console.log(post);
  res.send(html);
});

const PORT = 5500;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
