### Basic Structure

-   Other than config files, the main folders are 'dist' and 'src'
-   src
    -   The 'webpack.config.js' file that builds everything expects three TS files here:
        -   'src/background/background.ts' : Builds into 'dist/js/background.js' (see https://developer.chrome.com/extensions/background_pages)
        -   'src/browserAction/browserAction.ts' : Builds into 'dist/js/browserAction.js' (see https://developer.chrome.com/extensions/user_interface)
        -   'src/inject/inject.ts' : Builds into 'dist/js/inject.js' (see https://developer.chrome.com/extensions/content_scripts)
-   dist
    -   The Manifest, HTML, CSS, images, built JS, and JS Libraries are all here. Once everything is built and complete, this is the folder that is loaded into Chrome as the extension. Anything that is _not_ custom JS will be edited here.

### Usage

-   There are 'tests' already setup. Once this is installed navigate to the installation directory and:

    1. Install the npm modules: `npm install`
    2. Re-build TS files: `npm run build`
    3. In Chrome go to `chrome://extensions`
    4. Ensure _Developer mode_ is enabled
    5. Click _Load unpacked_
    6. In the file explorer navigate to the install location > Select the _dist_ folder > click _Select folder_
    7. Once the Extension shows up in the list, click on _background page_ within its tile > In the _Console_ you should see "BackgroundTest is running!"
    8. Right-click on the Extension's icon in the Extension list at the top-right of Chrome > click _Inspect popup_ > You should see some text and an image in the popup and in the DevTools window's Console tab you should see "BrowserActionTest is running!"
    9. Lastly, in the main browser's Window, press F12 to open the DevTools and navigate to any page (ie 'https://www.google.com/') > In the DevTools Console tab you should see 'InjectTest is running!'

### External References Used

-   Setting up Webpack with TS: https://developerhandbook.com/webpack/webpack-typescript-from-scratch/
-   Setting up Prettier/ESLint: https://medium.com/app-sapiens/how-to-make-vs-code-work-with-eslint-typescript-and-prettier-3deca7a28cb8
