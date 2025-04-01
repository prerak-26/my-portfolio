const header = document.querySelector("header")

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0)
})

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    if (menu.classList.contains('ri-function-line')) {
        menu.classList.remove('ri-function-line');
        menu.classList.add('ri-close-fill'); // Switch to close icon
    } else {
        menu.classList.remove('ri-close-fill');
        menu.classList.add('ri-function-line'); // Switch back to menu icon
    }
    
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('ri-close-fill');
    menu.classList.add('ri-function-line'); // Ensure reset on scroll
    navlist.classList.remove('active');
};
