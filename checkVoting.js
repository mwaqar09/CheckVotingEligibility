// Function to check voting eligibility
function checkVotingEligibility(age) {
    if (age >= 18) {
        return "Congratulations, you are eligible to vote!";
    } else {
        return "Sorry, you are not eligible to vote yet.";
    }
}

// Function to handle button click event
function checkEligibility() {
    // Get the age entered by the user
    var age = parseInt(document.getElementById("age").value);

    // Call the checkVotingEligibility function
    var eligibilityMessage = checkVotingEligibility(age);

    // Display the result on the page
    document.getElementById("result").textContent = eligibilityMessage;
}

// Attach the checkEligibility function to the button click event
document.getElementById("checkButton").addEventListener("click", checkEligibility);
