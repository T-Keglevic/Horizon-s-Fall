// JavaScript code to handle the button click
const abcButton = document.getElementById('abcButton');
const ersButton = document.querySelector('.ers-button');
const alsButton = document.getElementById('abcButton');
const buttonSound = document.getElementById('buttonSound');
const gifImages = document.querySelectorAll('img[id^="gifImage"]'); // Select all GIF images
const monitor2Cell = document.querySelector('.monitor2'); // Select the monitor2 cell

abcButton.addEventListener('click', function() { 
    // Play the button sound
    buttonSound.play();

    // Hide the GIFs
    gifImages.forEach(function(image) {
        image.style.display = 'none';
    });

    if (ersButton.disabled) {
        // ERS button was clicked before
        cellG.textContent = "The Horizon has landed; the escape turned into a feat. (Press F5 to restart)";
    } else {
        // ERS button was not clicked before
        cellG.textContent = "ERS not executed. Brace for crash-landing. (Press F5 to restart)";
    }

    // button click functionalites
    alert("ALS Button clicked!");
    abcButton.disabled = true; // Disable the button
    ersButton.disabled = true;
    abcButton.style.borderColor = "red";
    abcButton.classList.add('no-hover'); // Add the no-hover class
    ersButton.style.borderColor = "red";
    ersButton.classList.add('no-hover'); // Add the no-hover class
    abcButton.style.cursor = 'default'; // Remove the pointer cursor from ALS button
    ersButton.style.cursor = 'default'; // Remove the pointer cursor from ERS button

});
 

// Handle ERS button click
ersButton.addEventListener('click', function() {
    // Play the ERS button click sound
    buttonSound.play();

    alert("ERS Button clicked!");

    // Create a new element for the feedback
    const ersText = document.createElement('div');
    ersText.textContent = 'cargo module jettisoned';

    // Append the feedback beneath the ERS button in the monitor2 cell
    monitor2Cell.appendChild(ersText); 
    
    ersButton.disabled = true;
    ersButton.style.borderColor = "red";
    ersButton.classList.add('no-hover'); // Add the no-hover class
    ersButton.style.cursor = 'default'; // Remove the pointer cursor from ERS button
});

// JavaScript code to handle user input and update cell G
const inputField = document.querySelector('.user-input');
const cellG = document.querySelector('.monitor1'); // Reference to cell G


// Mapping of input values to corresponding outputs
const inputToOutput = {
    "ALS": "Assisted Landing Sequence; execute only after ERS.",
    "ERS": "Emergency Release System; disengages cargo modules to enable atmospheric entry.",
    "poem": "Why cannot robots cry? A neon symphony. Full album out soon.",
    "compgen": "ALS, ERS, poem, story, help, compgen (this)",
    "help": "Land your damaged ship. Refresh window to restart.",
    "story": "The Cursed Ship: a coffin full of ghosts. Read by the heat of the mainframe (piezogen)."
};

inputField.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const userInput = inputField.value.trim(); // Remove leading/trailing whitespace

        // Check if the input exists in the mapping, and if so, update cell G
        if (inputToOutput.hasOwnProperty(userInput)) {
            cellG.textContent = inputToOutput[userInput];
        } else {
            // If the input doesn't match any predefined value, display "404"
            cellG.textContent = "404";
        }

        // Clear the input field
        inputField.value = "";

        setTimeout(function() {
            cellG.textContent = "Critical damage detected. Land ASAP";
        }, 5000);
    }
});
