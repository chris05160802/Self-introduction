window.addEventListener('DOMContentLoaded', (event) => {
    mainFunc()
})

function mainFunc() {
    const element = document.getElementById("menu")
    
}

document.addEventListener("DOMContentLoaded", function(){
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".menuList");

    hamburger.addEventListener("click", () => {
	    hamburger.classList.toggle("active");
	    navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach((item) =>
	    item.addEventListener("click", () => {
		    hamburger.classList.remove("active");
		    navMenu.classList.remove("active");
	    })
    );

  });

