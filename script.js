// ================= NAVIGATION =================

const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");
const navClose = document.querySelector("#nav-close");


// OPEN MENU

navToggle.addEventListener("click", () => {

    navMenu.classList.add("show-menu");

});


// CLOSE MENU

navClose.addEventListener("click", () => {

    navMenu.classList.remove("show-menu");

});


// CLOSE MENU WHEN CLICKING NAV LINK

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show-menu");

    });

});


// ================= ACTIVE NAV LINK =================

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navLinks.forEach(link => {

                link.classList.remove("active");

            });

            const activeLink = document.querySelector(
                `.nav-link[href="#${sectionId}"]`
            );

            if (activeLink) {

                activeLink.classList.add("active");

            }

        }

    });

});


// ================= CONTACT FORM =================

const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);

    try {
        const response = await fetch(contactForm.action, {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            alert("Message sent successfully!");
            contactForm.reset();
        } else {
            alert("Something went wrong. Please try again.");
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    }
});