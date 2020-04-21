"use strict";


const htmlTag = document.querySelector('html');
const bodyTag = document.querySelector('body');
const myNav = document.querySelector('nav');
const myElement = document.querySelector('nav li a h3');
const myHeading = document.querySelector('h3');
const loading = document.querySelector('.loading');
const mainpage = document.querySelector('.mainpage');

let scrolled = () => {
	let dec = scrollY / (bodyTag.scrollHeight - innerHeight);
	return Math.floor(dec * 1000);
}


addEventListener('scroll', () => {
	myNav.style.setProperty('background-color', scrolled() > 50? "var(--color1)" : "var(--color2)");
	myNav.style.setProperty('box-shadow', scrolled() > 50? "var(--box-shadow2)" : "var(--box-shadow1)");
	myHeading.style.setProperty('color', scrolled() > 50? "var(--color3)" : "var(--color1)");  
})

 function openNav() {
            document.getElementById("myNav").style.width = "100%";
        }

        /* Close when someone clicks on the "x" symbol inside the overlay */
        function closeNav() {
            document.getElementById("myNav").style.width = "0%";
        }


function init() {
	setTimeout(() => {
		loading.style.opacity = 0;
		loading.style.opacity = 'none';

		mainpage.style.display = 'block';
		setTimeout(() => (mainpage.style.opacity = 2), 0)
		

	}, 4000);
}

init();