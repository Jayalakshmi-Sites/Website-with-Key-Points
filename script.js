
// MOBILE NAVIGATION

const menuBtn = document.getElementById("menuBtn");

const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function() {

    navbar.classList.toggle("active");

    const isOpen = navbar.classList.contains("active");

    menuBtn.setAttribute("aria-expanded", isOpen);

});


// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll("#navbar a").forEach(function(link) {

    link.addEventListener("click", function() {

        navbar.classList.remove("active");

        menuBtn.setAttribute("aria-expanded", "false");

    });

});


// CONTACT FORM

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const service = document.getElementById("service").value;

    const message = document.getElementById("message").value.trim();

    const consent = document.getElementById("consent").checked;

    const formMessage = document.getElementById("formMessage");


    if (!name || !email || !phone || !service || !message) {

        formMessage.textContent = "Please complete all fields.";

        return;

    }

    if (!consent) {

        formMessage.textContent =
            "Please agree to be contacted.";

        return;

    }


    console.log("Customer Details");

    console.log("Name:", name);

    console.log("Email:", email);

    console.log("Phone:", phone);

    console.log("Selected Service:", service);

    console.log("Message:", message);


    formMessage.textContent =
        "Thank you " + name +
        "! Your enquiry has been received in this demo.";

    contactForm.reset();

});


// NEWSLETTER FORM

const newsletterForm =
    document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const email =
        document.getElementById("newsletterEmail").value.trim();

    if (email === "") {

        alert("Please enter your email address.");

        return;

    }

    alert("Thank you for subscribing!");

    console.log("Newsletter Subscriber:", email);

    newsletterForm.reset();

});


// BACK TO TOP BUTTON

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});


topBtn.addEventListener("click", function() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// AUTOMATIC COPYRIGHT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();
