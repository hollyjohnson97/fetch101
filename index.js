/*
 * This is index.js
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

// Create a function `showMessage` that takes two parameters: an element and a string that is a URL.
// The function will fetch the URL and put the response text into the text content of the provided element.
async function showMessage(elem, url) {
    const response = await fetch(url);
    const text = await response.text();
    elem.textContent = text;
}

//Create a function `showList` that takes two parameters: an element and a string that is a URL.
// The function will fetch the URL, parse the retrieved data as JSON; the data is guaranteed to be an array of strings.
// The function will then, like the `filler` function in `ws_dom`, put the contents of the array as list items into
// the provided element
async function showList(elem, url) {
    const response = await fetch(url);
    const data = await response.json();
    for (const x of data) {
        const node = document.createElement("li");
        const textnode = document.createTextNode(x);
        node.appendChild(textnode);
        elem.appendChild(node);
    }
}

//Create a function `startShowingMessage` that takes two parameters: an element and a string that is a URL.
// The function will use `setInterval` to make the following task every 1s: fetch the URL and put the response text
// into the text content of the provided element.
function startShowingMessage(elem, url) {


    setInterval(async function() {
        const response = await fetch(url);
        const text = await response.text();
        elem.textContent = text;
    }, 1000);

}





















