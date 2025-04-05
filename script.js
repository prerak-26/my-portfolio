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

(function() {
    emailjs.init({
      publicKey: "gvqCsxhJWcQApHO3K",
    });
  })();
  
  const contactForm = document.getElementById('prerak-contact-form');
  const contactAlert = document.querySelector('.submit-text');
  
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
  
    console.log(emailjs);
  
    emailjs.sendForm('service_k1zm0zc', 'template_rj15i0q', contactForm)
      .then(() => {
        console.log('SUCCESS');
        contactAlert.innerHTML = "<span>Your message sent successfully!</span><i class='ri-checkbox-circle-fill'></i>";
        contactForm.reset();

        setTimeout(() => {
            contactAlert.innerHTML = '';
        }, 5000);
      }, (error) => {
        contactAlert.innerHTML = "<span>Message not sent</span><i class='ri-error-warning-fill'></i>";
        contactAlert.title = error;
      });
  });
