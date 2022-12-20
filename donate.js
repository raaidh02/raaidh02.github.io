function inputValidation() {
    let fName = document.getElementById("fName").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let cardNumber = document.getElementById("cardNum").value;
    let cvv = document.getElementById("cvv").value;
    let cardholderName = document.getElementById("cardHolder").value;
    let monthInput = document.getElementById("monthInput").value;
    let yearInput = document.getElementById("yearInput").value;
    let fixedDonations = document.getElementById("fixedDonations").value;

    let emailFormat = /^[A-Za-z\d\.\_]+\@[A-Za-z\d\.\-]+\.[A-Za-z]{2,5}$/;
    let nameFormat = /^\b(?!.*\.{2})[a-zA-Z.]+(?:\s[a-zA-Z.]+)\b$/;
    let addressFormat = /^[A-Za-z\d\.\-\/\#\,\s]+$/;
    let cardFormat = /^[0-9]{16,16}$/;
    let cvcFormat = /^[0-9]{3,3}$/;
    let cardholderNamePattern = /^\b(?!.*\.{2})[a-zA-Z.]+(?:\s[a-zA-Z.]+)\b$/; 

    if (!fName.match(nameFormat)) {
        alert("Please enter a valid name");
        document.getElementById("fName").focus();
        return false;
    }
    if (!email.match(emailFormat)) {
        document.getElementById("email").focus();
        alert("Please enter a valid email");
        return false;
    }
    if (!address.match(addressFormat)) {
        alert("Please enter a valid address");
        document.getElementById("address").focus();
        return false;
    }
    if (fixedDonations == "") {
        alert("Please select the donation amount");
        return false;
    }
    if (!cardNumber.match(cardFormat)) {
        alert("Please enter a valid cardnumber");
        document.getElementById("cardNum").focus();
        return false;
    }
    if (!cardholderName.match(cardholderNamePattern)) {
        alert("Please enter a valid cardholder name");
        document.getElementById("cardHolder").focus();
        return false;
    }
    if (!cvv.match(cvcFormat)) {
        alert("Please enter a valid CVV");
        document.getElementById("cvv").focus();
        return false;
    }
    if (monthInput == "") {
        alert("Please select expiration month of your credit/debit card");
        document.getElementById("monthInput").focus();
        return false;
    }
    if (yearInput == "") {
        alert("Please select the expiration year of your credit/debit card");
        document.getElementById("yearInput").focus();
        return false;
    }
    alert("Thank you so much for your contribution! The receipt will be sent to your email address.")
    clearDonation();
}

// clear form after click the Donate button
function clearDonation() {
    const inputs = document.querySelectorAll('#name, #email, #address, #fixedDonations, #comment, #cardNum, #cardHolder, #monthInput, #yearInput, #cvv');

    inputs.forEach(input => {
        input.value = '';
    });
};
