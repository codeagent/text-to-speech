# About

The goal of the project is to give fast and free text-to-speach service, so that you can get audio synthesis of text without any cors restrictions.
The inner machinery is simple google translate api: ``https://translate.google.com/translate_tts``


# Installation

1. Clone the repo: ``git clone https://github.com/codeagent/text-to-speech.git``
2. Install NPM-packages: ``npm install``
3. Start local server: ``npm start``

# Usage

Service uses two ``GET`` paramets: ``text`` -expression to synthesize and ``lang`` - language to synthesize text to.

Example: ``GET http://localhost:5000?text=Please+synthesize+me&lang=en``

Response we will get is raw audio/mpeg stream.


# Restrictions

The are some restrictions: imposed by google service maximum number of characters in string,
single voice, restricted number of supported languages, etc.

# Live demo

Also, you can checkout live demo ``https://text-to-speech.onrender.com/``


