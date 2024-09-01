// Function to display the dialog box
function showDialog() {
    alert("You hired Us");
}

// Function to initialize the button click event
function initializeButton() {
    // Get the button by its ID
    const hireMeBtn = document.getElementById('hireMeBtn');

    // Add click event listener to the button
    hireMeBtn.onclick = function () {
        showDialog();
    }
}

// Initialize the button click functionality when the document is loaded
document.addEventListener('DOMContentLoaded', initializeButton);
