const navbarLink = document.querySelector(".navbar-links");
const navToggle = document.querySelector(".nav-toggle");


navToggle.addEventListener("click", () => {
    const visibility = navbarLink.getAttribute("data-visible");
     if (visibility === "false"){
        navbarLink.setAttribute("data-visible", true);
     }
     else if (visibility === "true"){
        navbarLink.setAttribute("data-visible", false);
     } 
})

