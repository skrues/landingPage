// =========================
// MOBILE NAVIGATION
// =========================

const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section[id]");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("show");

});


// Close mobile menu when clicking a link

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

    });

});

// =========================
// ACTIVE NAVIGATION
// =========================


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});


window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            const activeLink = document.querySelector(
                `.nav-link[href="#${section.id}"]`
            );

            if (activeLink) {
                activeLink.classList.add("active");
            }

        }

    });

});




// =========================
// TESTIMONIAL SLIDER
// =========================

const testimonials = [

    {
        text: `"Nexora provided excellent service and support. The project was completed on time and the results exceeded our expectations!"`,
        name: "Sarah Johnson",
        role: "CEO, Tech Solutions",
        initials: "SJ"
    },

    {
        text: `"Very professional and easy to work with. They understood our needs and delivered a beautiful website."`,
        name: "Michael Brown",
        role: "Marketing Manager",
        initials: "MB"
    },

    {
        text: `"Highly recommended! Great communication and amazing results. Will definitely work with them again."`,
        name: "Emily Davis",
        role: "Business Owner",
        initials: "ED"
    }

];


let currentTestimonial = 0;


const testimonialText = document.querySelector("#testimonialText");
const clientName = document.querySelector("#clientName");
const clientRole = document.querySelector("#clientRole");
const clientAvatar = document.querySelector(".client-avatar");


function showTestimonial(index) {

    const testimonial = testimonials[index];
    testimonialText.textContent = testimonial.text;
    clientName.textContent = testimonial.name;
    clientRole.textContent = testimonial.role;
    clientAvatar.textContent = testimonial.initials;

}


document.querySelector("#nextBtn").addEventListener("click", () => {

    currentTestimonial++;

    if (currentTestimonial >= testimonials.length) {
        currentTestimonial = 0;
    }

    showTestimonial(currentTestimonial);

});


document.querySelector("#prevBtn").addEventListener("click", () => {

    currentTestimonial--;

    if (currentTestimonial < 0) {
        currentTestimonial = testimonials.length - 1;
    }

    showTestimonial(currentTestimonial);

});

