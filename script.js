
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

function removeNavBar (event) {
	let background = document.querySelector(".item1");
	if(event.target.outerWidth < 400) {
		background.style.backgroundImage = storage[tracker][0];
		console.log(background.style.backgroundImage);
	}
	if (event.target.outerWidth >= 400) {
		background.style.backgroundImage = storage[tracker][1];
	}

	if(event.target.outerWidth >= 800) {
		let img = document.querySelector("#icon").src;
		console.log(img);
		if (img.indexOf("images/icon-close.svg") != -1) {
			document.querySelector("#icon").src = "images/icon-hamburger.svg";
		}

		let logo = document.querySelector("#logo");
		logo.classList.remove("invisible");

		let header = document.querySelector(".header");
		header.classList.remove("header-transform")

		let navBar = document.getElementsByTagName("ul")[0];
		navBar.classList.add("nav");
		navBar.classList.remove("nav-bar-pop-up");
		let navLinks = document.getElementsByTagName("a");
		for (let link of navLinks) {
		link.classList.remove("linkstyle");
		}	
	}
}


let tracker = 0;
let storage = [["url(images/mobile-image-hero-1.jpg)","url(images/desktop-image-hero-1.jpg)", document.querySelector(".slide1")],
				["url(images/mobile-image-hero-2.jpg)","url(images/desktop-image-hero-2.jpg)", document.querySelector(".slide2")],
				["url(images/mobile-image-hero-3.jpg)","url(images/desktop-image-hero-3.jpg)", document.querySelector(".slide3")]];

function forwardArrowPress () {
	tracker++;
	if (tracker == 3) tracker = 0;
	
	let background = document.querySelector(".item1");
	if (window.outerWidth >= 600 ) {
		background.style.backgroundImage = storage[tracker][1];
	}
	else{
		background.style.backgroundImage = storage[tracker][0];
	}

	for (let i = 0; i < storage.length; i++) {
		if (i != tracker) {
			storage[i][2].classList.add("invisible")
		}
		else {
			storage[i][2].classList.remove("invisible")
		}
	}
}

function backArrowPress () {
	tracker--;
	if (tracker == -1) tracker = 2;

	let background = document.querySelector(".item1");
	if (window.outerWidth < 600 ) {
		background.style.backgroundImage = storage[tracker][0];
	}
	else{
		background.style.backgroundImage = storage[tracker][1];
	}

	for (let i = 0; i < storage.length; i++) {
		if (i != tracker) {
			storage[i][2].classList.add("invisible")
		}
		else {
			storage[i][2].classList.remove("invisible")
		}
	}
	
}

let icon = document.querySelector("#icon"); 
icon.addEventListener("click", navBarPopup);

window.addEventListener("resize", removeNavBar);

let item1BackArrow = document.getElementsByTagName("button")[0];
let item1ForwardArrow = document.getElementsByTagName("button")[1];
let item2BackArrow = document.getElementsByTagName("button")[2];
let item2ForwardArrow = document.getElementsByTagName("button")[3];

item1BackArrow.addEventListener("click", backArrowPress);
item1ForwardArrow.addEventListener("click", forwardArrowPress);
item2BackArrow.addEventListener("click", backArrowPress);
item2ForwardArrow.addEventListener("click", forwardArrowPress);
