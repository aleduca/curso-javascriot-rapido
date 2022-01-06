function person(firstName, lastName) {
	let fullName = firstName + ' ' + lastName;

	function info() {
		console.log(fullName);
	}

	return info;
}

const p = person('Alexandre', 'Cardoso');

p();
p();
p();
p();
