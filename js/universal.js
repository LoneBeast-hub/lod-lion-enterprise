document.addEventListener("DOMContentLoaded", function () {
    // variables
    const header = document.getElementById("header");
    const menuBar = document.getElementById("menu-bar");
    const nav = document.getElementById("nav");
    const navbarHeight = header.clientHeight;
  
    // functions
    const toggleNav = () => {
        // toggle nav links
        nav.classList.toggle("show");
        if(nav.classList.contains('show')) {
            menuBar.innerHTML = `<ion-icon name="close-outline"></ion-icon>`
        } else {
            menuBar.innerHTML = `<ion-icon name="menu-outline"></ion-icon>`
        }
    }

    // listeners
    // window.addEventListener("scroll", function () {
    //   if (window.scrollY >= navbarHeight) {
    //     header.classList.add("sticky");
    //   } else {
    //     header.classList.remove("sticky");
    //   }
    // });

    menuBar.addEventListener('click', toggleNav);
  });
  