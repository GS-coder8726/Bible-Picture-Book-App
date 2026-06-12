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
`, { runScripts: "dangerously" });

dom.window.console.error = function() {
    console.log("ERR", arguments);
};
dom.window.onerror = function(msg) {
    console.log("ONERROR", msg);
};

const fs = require('fs');
const appJs = fs.readFileSync('./webapp/app.js', 'utf8');

try {
    dom.window.eval(appJs);
    console.log("EVAL SUCCESS");
    console.log("HTML:", dom.window.document.getElementById('books-grid').innerHTML.substring(0, 50));
} catch(e) {
    console.log("CATCH", e);
}
