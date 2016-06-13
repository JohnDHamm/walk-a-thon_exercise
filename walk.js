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

function submitForm () {
	var donorName = donorNameInput.value;
	var donorEmail = donorEmailInput.value;
	var donationAmount = amountInput.value;
	var donationType = form.elements["donationType"].value;
	clearForm();

	var newDonor = {"name": donorName, "email": donorEmail, "pledge": donationAmount, "pledge_type": donationType};
	var newList = donors.addDonor(newDonor);
	displayTable(newList);
}

function displayTable(list) {
	console.log("list", list.length);
	tableEl.innerHTML = "";
	tableEl.innerHTML += `
		<tr>
			<th scope="col">Name</th>
			<th scope="col">Email</th>
			<th scope="col">Pledge</th>
			<th scope="col">Pledge Type</th>
		</tr>`;
	for (i = 0; i < list.length; i++) {
		tableEl.innerHTML += `
			<tr>
				<td>${list[i].name}</td>
				<td>${list[i].email}</td>
				<td>${list[i].pledge}</td>
				<td>${list[i].pledge_type}</td>
			</tr>`;
	};
}


// You should also create an additional JavaScript file that handles interacting with the form elements and determining which method should be called.