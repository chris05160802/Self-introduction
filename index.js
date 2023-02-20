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

    document.querySelectorAll(".GoToTop").forEach((item) =>
	    item.addEventListener("click", () => {
		    hamburger.classList.remove("active");
		    navMenu.classList.remove("active");
	    })
    );
    
    // Get the button
    let mybutton = document.getElementById("top");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
     mybutton.style.display = "none";
    }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    }
  });

