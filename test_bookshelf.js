const { JSDOM } = require("jsdom");
const dom = new JSDOM(`
<!DOCTYPE html>
<html>
<body>
    <div id="header"></div>
    <button id="back-btn"></button>
    <div id="bookshelf-container"></div>
    <div id="books-grid"></div>
    <div id="book-container"></div>
    <div id="scene-image"></div>
    <video id="scene-video"></video>
    <div id="scene-text"></div>
    <button id="prev-btn"></button>
    <button id="next-btn"></button>
    <div id="progress"></div>
    <div id="top-controls"></div>
    <button id="toggle-text-btn"></button>
    <button id="mute-btn"></button>
    <div class="glass-panel"></div>
    <div class="controls"></div>
    <div class="progress-bar-container"></div>
</body>
</html>
`);
global.document = dom.window.document;
global.window = dom.window;
global.Image = dom.window.Image;

require("./webapp/app.js");
console.log(document.getElementById('books-grid').innerHTML);
