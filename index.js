const express = require('express');
const app = express();
const DB = require('./database.js');

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// GetMyFortunes
apiRouter.get('/fortunes', (_req, res) => {
  res.send(fortunes);
});

// Get new fortune
apiRouter.get('/newfortune', (_req, res) => {
    const newfortune = DB.getNewFortune();
    res.send(newfortune);
    console.log(newfortune);
});


apiRouter.post('/updatefortunes', (req, res) => {
  fortunes = updateFortunes(req.body, fortunes);
  res.send(fortunes);
});

apiRouter.post('/fortune', async (req, res) => {
    DB.addFortune(req.body);
  });

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
