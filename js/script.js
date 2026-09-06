// const contactForm = document.getElementById("contact-form");

// contactForm.addEventListener("submit", function (event) {
//     event.preventDefault();

//     const name = document.getElementById("name").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const message = document.getElementById("message").value.trim();

//     if (name === "") {
//         alert("Please enter your name.");
//         return;
//     }

//     if (email === "") {
//         alert("Please enter your email.");
//         return;
//     }

//     if (message === "") {
//         alert("Please enter your message.");
//         return;
//     }

//     alert("Thank you! Your message has been submitted.");

//     contactForm.reset();
// });


const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "") {
        formMessage.textContent = "Please enter your name.";
        return;
    }

    if (email === "") {
        formMessage.textContent = "Please enter your email.";
        return;
    }

    if (message === "") {
        formMessage.textContent = "Please enter your message.";
        return;
    }

    formMessage.textContent = "Thank you! Your message has been submitted.";

    contactForm.reset();
});

//

const scrollTopButton = document.getElementById("scroll-top");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }
});

scrollTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});