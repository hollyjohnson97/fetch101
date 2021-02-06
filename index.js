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