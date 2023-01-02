const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const synthesizer = require('./synthesizer');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log("server is running on port", server.address().port);
});

app.get('/', async function(req, res) {
  try {
    const stream = await synthesizer.synthesize(req.query.text, req.query.lang);
    stream.pipe(res)
    res.setHeader('content-type', 'audio/mpeg');
  } catch (err) {
    console.error(`failed to synthesize text `, err.message);
    res.status(err.statusCode || 500).json({'message': err.message});
  }
});
