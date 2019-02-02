# Words - tooltip dictionary

A firefox/chrome extension to view defintions as you browse the web.

Project is based on the need that users, many a times, search for the meaning of a word and it's possible for them to forget it when they come across the same word again.

## Getting Started

The words browser extension relies on [merriam webster dictionary api](https://dictionaryapi.com/products/index) to query word's defintions. You will need to register an API key to start local development.

To quickly start:
1.  fork and clone the repo
2.  run yarn in root directory
3.  enter `DICT_API` and give it your dictionary api key in `.env` file
4.  run `yarn run dev` (or `npm run dev`)
5.  load extension from `tmp` folder in chrome or firefox

More details in the [Prerequisites section](#prerequisites).

### Prerequisites

You first need a copy of the code in your local machine, make sure to fork and clone, you can clone by running this command.
```bash
$ git clone https://github.com/chingu-voyage7/Geckos-Team-23.gi
```

The app depends on `DICT_API` environment variable that hold the dictionary api key. So, make sure to change to the app's root directory and create a `.env`:
```bash
$ cd Geckos-Team-23
$ touch .env
```

Open the file and fill it with this variable:
```
# dictionary api key
DICT_API=<dictionary_api_key_goes_here>
```

### Installation

#### Run task runner

To generate needed assets for the app for development run this command (recommended):
```
$ yarn run dev
```
or through npm:
```
$ npm run dev
```
This will generate the assets in `tmp` folder in the app's root directory. It also makes gulp watch files for changes so you don't have to re-run it everytime you make a change.

#### Load extension

To install for chrome:

1. Open the Extension Management page by navigating to `chrome://extensions`.
  - The Extension Management page can also be opened by clicking on the Chrome menu, hovering over **More Tools** then selecting **Extensions**.
2. Enable Developer Mode by clicking the toggle switch next to **Developer mode**.
3. Click the **LOAD UNPACKED** button and select the extension directory, which in this case is the `tmp` folder in the app's directory.


To install for firefox:

1. Navigate to `about:addons`
2. You will see a menu with a gear icon ⚙️, click on it and select **Install addon from file...**