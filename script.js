document.addEventListener("DOMContentLoaded", function () {
	const form = document.querySelector(".form-margin-bottom");

	form.addEventListener("submit", function (event) {
		event.preventDefault();

		let email = document.getElementById("exampleInputEmail1").value;

		if (!email) {
			email = prompt("Unesite vašu email adresu:");
		}

		if (email) {
			alert(`Poštovani, ${email} primili smo vašu poruku.`);
			form.reset();
		} else {
			alert("Niste unijeli email adresu.");
		}
	});
});
