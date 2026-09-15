const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = +counter.getAttribute("data-target");

            let count = 0;

            const speed = target / 50;

            const updateCounter = () => {

                if(count < target){

                    count += speed;

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(updateCounter);

                }else{

                    if(target === 8){

                        counter.innerText = "8+";

                    }else{

                        counter.innerText = target;

                    }

                }

            }

            updateCounter();

            observer.unobserve(counter);

        }

    });

});

counters.forEach(counter => {

    observer.observe(counter);

});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

});
window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progressBar").style.width = progress + "%";

});
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    let scroll = window.pageYOffset;

    hero.style.backgroundPositionY = scroll * 0.5 + "px";

});
window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        },800);

    },1800);

});
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const text = document.getElementById("message").value.trim();

    if(name === ""){
        message.innerText = "❌ Please enter your name.";
        message.style.color = "red";
        return;
    }

    if(!/^[0-9]{10}$/.test(phone)){
        message.innerText = "❌ Enter a valid 10-digit phone number.";
        message.style.color = "red";
        return;
    }

    if(!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)){
        message.innerText = "❌ Enter a valid email address.";
        message.style.color = "red";
        return;
    }

    if(text === ""){
        message.innerText = "❌ Please enter your message.";
        message.style.color = "red";
        return;
    }

    message.innerText = "✅ Form Submitted Successfully!";
    message.style.color = "limegreen";

    form.reset();

});
const testimonials = [
    {
        text: "Aangan gave us the perfect weekend escape surrounded by nature.",
        name: "- Rahul Patel"
    },
    {
        text: "Beautiful location, peaceful environment and premium amenities.",
        name: "- Priya Shah"
    },
    {
        text: "The master plan and greenery exceeded our expectations.",
        name: "- Amit Mehta"
    }
];

let testimonialIndex = 0;

const testimonialText = document.getElementById("testimonialText");
const testimonialName = document.getElementById("testimonialName");

setInterval(() => {

    testimonialIndex++;

    if (testimonialIndex >= testimonials.length) {
        testimonialIndex = 0;
    }

    testimonialText.innerText = testimonials[testimonialIndex].text;
    testimonialName.innerText = testimonials[testimonialIndex].name;

}, 4000);
const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        if(answer.style.maxHeight){

            answer.style.maxHeight = null;

        }else{

            answer.style.maxHeight = answer.scrollHeight + "px";

        }

    });

});
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (centerY - y) / 18;
        const rotateY = (x - centerX) / 18;

        card.style.transition = "transform 0.08s linear";

        card.style.transform =
        `perspective(1200px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.04)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transition = "transform .45s ease";

        card.style.transform =
        "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)";

    });

});
const glowCards = document.querySelectorAll(".card");

glowCards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--x", x + "px");
        card.style.setProperty("--y", y + "px");

    });

});
