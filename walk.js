var donorNameInput = document.getElementById("donorName");
var donorEmailInput = document.getElementById("e-mail");
var amountInput = document.getElementById("donationAmount");
var form = document.getElementById("donorForm");

var submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", submitForm);

var clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", clearForm);

var tableEl = document.getElementById("donorTableContainer");


function clearForm () {
	donorNameInput.value = "";
	donorEmailInput.value = "";
	amountInput.value = "";
}

function submitForm () {
	var donorName = donorNameInput.value;
	var donorEmail = donorEmailInput.value;
	var donationAmount = amountInput.value;
	var donationType = form.elements["donationType"].value;

	newDonor = `{name: "${donorName}", email: "${donorEmail}", pledge: ${donationAmount}, pledge type: "${donationType}"}`;

	console.log("newDonor", newDonor);
	donors.addDonor(newDonor);
	var newList = donors.getDonorList();
	console.log("newList", newList);
}



// You should also create an additional JavaScript file that handles interacting with the form elements and determining which method should be called.