
function navBarPopup () {
	toggleImage();

	let logo = document.querySelector("#logo");
	logo.classList.toggle("invisible");

	let header = document.querySelector(".header")
	header.classList.toggle("header-transform")

	let navBar = document.getElementsByTagName("ul")[0];
	navBar.classList.toggle("nav");
	navBar.classList.toggle("nav-bar-pop-up");
	let navLinks = document.getElementsByTagName("a");
	for (let link of navLinks) {
		link.classList.toggle("linkstyle")
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