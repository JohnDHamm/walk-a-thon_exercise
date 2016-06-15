// The donor information should be stored as JS objects that contain their content type as keys and the submitted information as the value. {name: "John Donut", pledge: 70}

var donors = (function (donor) {
	var donorList = []; //array to hold all donator objects

	donor.addDonor = function(newDonor){ //accepts new donator object and pushes to list array
		donorList.push(newDonor);
	};

	donor.getDonorList = function(){
		return donorList;
	};

	return donor;

})(donors || {});






// All donor information objects should be stored in a private array in an IIFE

// Make sure the donor array cannot be accessed by the other modules except through an accessor (getter) method.

// The IIFE should expose, in its public interface, a method named addDonor that accepts a single argument. That argument's value should be the user information object.
