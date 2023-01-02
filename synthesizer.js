
const googleTTS = require('google-tts-api');
const axios = require("axios");

const userAgents = require('./user-agents');

async function synthesize (text, lang) {
  const url = googleTTS.getAudioUrl(text, {
    lang: lang,
    slow: false,
    host: 'https://translate.google.com',
  });

  const userAgent =  userAgents[Math.floor(Math.random() * userAgents.length)];

  const response = await axios(url, {
    method: "get",
    headers: {"User-Agent": userAgent},
    responseType: 'stream'
  });

  return response.data;
}

module.exports = { synthesize };