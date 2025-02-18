const text = "job opportunities and internship"; // The text to animate
const typingTextElement = document.querySelector("#typingText");

let index = 0; // Character index
let isErasing = false; // Typing or erasing state
let delay = 100; // Speed of typing and erasing

function typeAndErase() {
    if (!isErasing && index < text.length) {
        // Typing forward
        typingTextElement.textContent = text.substring(0, index + 1); // Include current character
        index++;
        delay = 100; // Typing speed
    } else if (isErasing && index > 0) {
        // Erasing backward
        typingTextElement.textContent = text.substring(0, index - 1); // Remove current character
        index--;
        delay = 50; // Erasing speed
    }

    if (!isErasing && index === text.length) {
        // Pause after typing is complete
        isErasing = true;
        delay = 1000; // Pause after typing complete
    } else if (isErasing && index === 0) {
        // Pause after erasing is complete
        isErasing = false;
        delay = 500; // Pause after erasing complete
    }

    setTimeout(typeAndErase, delay);
}

if (typingTextElement) {
    window.onload = typeAndErase;
}

