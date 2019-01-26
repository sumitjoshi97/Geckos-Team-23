# Words - tooltip dictionary

A firefox/chrome extension to view defintions as you browse the web.

Project is based on the need that users, many a times, search for the meaning of a word and it's possible for them to forget it when they come across the same word again.

## Getting Started

The words browser extension relies on merriam webster dictionary api to query word's defintions. You will need to register an API key to start local development.
To get started local development, create a file in the root of the repo named .env with the following content:

> DICT_API_KEY='api-key-here'

### Installation

1.  fork and clone the repo
2.  run yarn in root directory
3.  enter DICT_API in env file
4.  run gulp
5.  load extension from dict folder in chrome or firefox
