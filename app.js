import express from 'express';
import { html } from './config.js';
import router from './api/users/routes.js';

const PORT = 3000;
const app = express();

app.use(express.static('frontEnd/public'));
app.use(express.static('frontEnd/libs'));
app.use(express.json());
app.use('/api', router);

/** DO NOT CHANGE THIS ROUTE - it serves our front-end */
app.get('/', function (req, res) {
  res.sendFile(html);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
