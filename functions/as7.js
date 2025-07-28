// assignment7.js - BookMyShow DOM Practice
console.log("BookMyShow page script loaded!");

// --- The 3 Steps to Make a Page Interactive ---

// TODO: Step 1 - FIND the HTML elements we want to control.
// We find them by their unique ID and store them in variables.
const bookingStatusText = document.getElementById("booking-status");
const bookButton = document.getElementById("book-button");

console.log("Found the status text element:", bookingStatusText);
console.log("Found the button element:", bookButton);


// TODO: Step 2 - CHANGE something as soon as the page loads.
// Let's make the status text more inviting.
bookingStatusText.textContent = "Select your seats and click 'Book Tickets'.";


// TODO: Step 3 - LISTEN for a user action (a click).
// This code will ONLY run when the user clicks our button.
bookButton.addEventListener('click', function() {
    console.log("Book Tickets button was clicked!");
    
    // When the button is clicked, let's change the page!
    bookingStatusText.textContent = "Tickets Confirmed! Enjoy the show!";
    bookingStatusText.style.color = "green";
    
    // Let's also change the button to show it worked.
    bookButton.textContent = "Booking Successful!";
    bookButton.style.backgroundColor = "grey";
});

console.log("Page is now interactive. Try clicking the 'Book Tickets' button!");