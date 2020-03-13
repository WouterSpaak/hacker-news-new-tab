# HackerNews in new tabs

I like opening links on HackerNews in new tabs. This extension does that.

## Installing

Because you need to pay a $5 startup fee to publish to the Chrome Web Store, and I can't be bothered, you'll have to install from source.

### Prerequisites

You'll need [NodeJS](https://nodejs.org) and it has to be available on the `PATH`.

1. Clone the repo
2. Run `npm install`
3. Run `npm run build-release`
4. Open `chrome://extensions` and toggle `Developer Mode`.
5. Select `Load unpacked` and load the `build` folder.
