console.log("=== 🎟️ BookMyShow Helper Tools ===");
function welcomeUser(username){
    console.log("Hello"+username+"! Find best movies in the town!");

}

function totalBookingCost(numberOfTickets){
    const ticketPrice=200;
    const BookingFee = 35;
    const total= (numberOfTickets*ticketPrice)+ BookingFee;
    return total;

}


function ShowBookingSummary(movieTitle, NoofTickets){
    let finalCost =totalBookingCost(NoofTickets);
    console.log("\n--- Booking Confirmed! ---");
    console.log("Movie:", movieTitle);
    console.log("Tickets:", ticketCount);
    console.log("Total Amount Paid: ₹" + finalCost);
    console.log("Enjoy the show!");
}