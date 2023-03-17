
function navBarPopup () {
	toggleImage();

	let logo = document.querySelector("#logo");
	logo.classList.toggle("invisible");

	let header = document.querySelector(".header")
	header.classList.toggle("header-transform")

	let navBar = document.getElementsByTagName("ul");
	console.log(navBar.classList);
	navBar.classList.toggle("inline");
	let navLinks = document.getElementsByTagName("li");
	for (let link of navLinks) {
		link.classList.toggle("nav-bar-pop-up")
	}

	function toggleImage () {
		let img = document.querySelector("#icon").src;
		if (img.indexOf("images/icon-hamburger.svg") == -1) {
			document.querySelector("#icon").src = "images/icon-hamburger.svg"
		}

		else {
			document.querySelector("#icon").src = "images/icon-close.svg"
		}
	}
}

let icon = document.querySelector("#icon") 
icon.addEventListener("click", navBarPopup)