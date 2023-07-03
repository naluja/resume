const nav = document.querySelector(".navbar")
const navLinks = nav.querySelectorAll(".nav-link")
const navList = nav.querySelector(".collapse")
const navBtn = nav.querySelector("button")
const year = document.querySelector(".year")

const addShadow = () => {
	if (window.scrollY >= 200) {
		nav.classList.add("white-bc")
	} else {
		nav.classList.remove("white-bc")
	}
}
const hideNav = () => {
    
    navList.classList.remove("show")
    navBtn.classList.add("collapsed")
}


document.addEventListener("DOMContentLoaded", function () {
	window.addEventListener("scroll", addShadow)

    navLinks.forEach(item => item.addEventListener("click", hideNav))
   
})

