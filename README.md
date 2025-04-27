# GitHub → DeepWiki Shortcut

A Chrome extension that allows you to quickly jump from GitHub to DeepWiki with the same URL path.

## Features

- Provides a keyboard shortcut to navigate from GitHub pages to the corresponding DeepWiki pages
- Works exclusively on GitHub domains (github.com)
- Simple and lightweight

## Installation

### From Chrome Web Store
*(Coming soon)*

### Manual Installation
1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" (toggle in the top-right corner)
4. Click "Load unpacked" and select the directory containing this extension
5. The extension is now installed and ready to use

## Usage

When browsing a GitHub repository, file, or any GitHub page:

- On Mac: Press `Command+Shift+D`
- On Windows/Linux: Press `Ctrl+Shift+D`

The extension will convert the current GitHub URL to the corresponding DeepWiki URL and navigate to it automatically.

For example:
- From: `https://github.com/username/repository/blob/main/file.js`
- To: `https://deepwiki.com/username/repository/blob/main/file.js`

## Development

### Prerequisites
- Node.js and npm installed

### Setup
1. Clone this repository
2. Install dependencies: `npm install`
3. Build the extension: `npm run build`
4. Load the extension in Chrome using the "Load unpacked" option in `chrome://extensions/`

### Project Structure
- `manifest.json`: Extension configuration
- `src/background.js`: Main background script that handles the URL conversion
- `dist/`: Directory containing compiled code
- `icon48.png`: Extension icon

## License

[MIT License](LICENSE)

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.
