// Get references to HTML elements
const codeInput = document.getElementById("codeInput");
const runButton = document.getElementById("runButton");
const outputDiv = document.getElementById("output");

// Function to execute the provided JavaScript code
function runCode() {
    try {
        const code = codeInput.value;
        const result = eval(code);
        outputDiv.textContent = result;
    } catch (error) {
        outputDiv.textContent = "Error: " + error.message;
    }
}

// Add a click event listener to the "Run Code" button
runButton.addEventListener("click", runCode);
