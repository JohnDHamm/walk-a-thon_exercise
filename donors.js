// The donor information should be stored as JS objects that contain their content type as keys and the submitted information as the value. {name: "John Donut", pledge: 70}

var donors = (function (donors) {
	var donorList = [];

	donors.addDonor = function(newDonor){
		donorList.push(newDonor);
	};

	donors.getDonorList = function() {
		return donorList;
	}

})(donors || {});






// All donor information objects should be stored in a private array in an IIFE

// Make sure the donor array cannot be accessed by the other modules except through an accessor (getter) method.

// The IIFE should expose, in its public interface, a method named addDonor that accepts a single argument. That argument's value should be the user information object.
