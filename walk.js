var donorNameInput = document.getElementById("donorName");
var donorEmailInput = document.getElementById("e-mail");
var amountInput = document.getElementById("donationAmount");
var form = document.getElementById("donorForm");

var submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", submitForm);

var clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", clearForm);

var tableEl = document.getElementById("donorTable");


function clearForm () {
	donorNameInput.value = "";
	donorEmailInput.value = "";
	amountInput.value = "";
}

// get data from form and add donor object to donor list array
function submitForm () {
	var donorName = donorNameInput.value;
	var donorEmail = donorEmailInput.value;
	var donationAmount = amountInput.value;
	var donationType = form.elements["donationType"].value;
	clearForm();

	var newDonor = {"name": donorName, "email": donorEmail, "pledge": donationAmount, "pledge_type": donationType};
	donors.addDonor(newDonor);

	var newList = donors.getDonorList(); //get list array and send to display function
	displayTable(newList);
}

// displaying the table
function displayTable(list) {
	console.log("list", list.length);
	tableEl.innerHTML = ""; //clear table

	// create table column headings
	var tableLabels = document.createElement("tr");
	tableLabels.innerHTML = `<th scope="col">Name</th>
			<th scope="col">Email</th>
			<th scope="col">Pledge</th>
			<th scope="col">Pledge Type</th>`;
	tableEl.appendChild(tableLabels);

	// create a tbody element for bootstrap (striping odd rows)
	var rowTableBody = document.createElement("tbody");
	tableEl.appendChild(rowTableBody);

	// //loop through array to add rows of data
	for (i = 0; i < list.length; i++) {
		var newDonorRow = document.createElement("tr");
		newDonorRow.innerHTML = `
				<td>${list[i].name}</td>
				<td>${list[i].email}</td>
				<td>${list[i].pledge}</td>
				<td>${list[i].pledge_type}</td>`;
		rowTableBody.appendChild(newDonorRow);
	};
}
