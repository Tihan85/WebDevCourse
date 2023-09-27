// Get references to HTML elements
const codeInput = document.getElementById("codeInput");
const runButton = document.getElementById("runButton");
const outputDiv = document.getElementById("output");

// Function to capture console.log output
function captureConsoleLog() {
    var oldLog = console.log;
    console.log = function (message) {
        oldLog.apply(console, arguments); // Call the original console.log
        outputDiv.textContent += message + "\n"; // Display in the output element
    };
}

// Function to execute the provided JavaScript code
function runCode() {
    try {
        const code = codeInput.value;
        // Clear previous output
        outputDiv.textContent = "";
        // Capture console.log output
        captureConsoleLog();
        // Execute the code
        eval(code);
    } catch (error) {
        outputDiv.textContent = "Error: " + error.message;
    }
}

// Add a click event listener to the "Run Code" button
runButton.addEventListener("click", runCode);

// Initialize CodeMirror
var codeEditor = CodeMirror.fromTextArea(document.getElementById("codeInput"), {
    mode: "javascript",
    lineNumbers: true,
    theme: "default", // You can choose a theme
});
