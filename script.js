/*=toggle button=*/
let menu = document.querySelector('.menu');
let navbar = document.querySelector('.navbar');
const navButton = document.getElementById("nav-icon-button")
navButton.addEventListener("click", function () {
  navButton.querySelector('.menu-close').classList.toggle("hide")
  navButton.querySelector('.menu-open').classList.toggle("hide")
  navbar.classList.toggle('active')
})


/*=scroll sections active linl=*/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });
  navbar.classList.remove('active')
  navButton.querySelector('.menu-close').classList.add("hide")
  navButton.querySelector('.menu-open').classList.remove("hide")

}


// scroll reaveal//
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .contact', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


const typed = new Typed('.multiple-text', {
  strings: ['Frontend Developer', 'QA Analyst', 'Graphics Designer', 'Tech Enthusiast'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

const handleSubmit = (e) => {
  e.preventDefault();
  const name = document.getElementById("name")
  const email = document.getElementById("email")
  const message = document.getElementById("message")
  const sendButton = document.getElementById("send-button")
  sendButton.value = "Sending..."
  emailjs
    .send(
      "service_yup5jwf",
      "template_xxur3gg",
      {
        from_name: name.value,
        to_name: "Sirish",
        from_email: email.value,
        to_email: "thapacrish53gmail.com",
        message: message.value,
      },
      "ojPrvor0EO8derEyY"
    )
    .then(
      () => {
        name.value = ""
        message.value = ""
        email.value = ""
        sendButton.value = "Sent!"
        setTimeout(() => {
          sendButton.value = "Send"
        }, 2000)
      },
      (error) => {
        console.log(error);
        sendButton.value = "Try Again"
      }
    );
}


