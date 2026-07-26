/* ===============================
   EmailJS Initialization
================================= */

(function () {
    emailjs.init({
        publicKey: "Exbg3ipmF0LrzJLuo",
    });
})();

/* ==================================================
   AOS INITIALIZATION
================================================== */

AOS.init({
    duration: 800,
    once: false,
    offset: 100
});

/* ==================================================
   LOADER
================================================== */

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);

    }, 2000);
});

/* ==================================================
   TYPING EFFECT
================================================== */

const typingElement = document.querySelector(".typing-text");

const words = [
    "Web Developer",
    "Full Stack Developer",
    "Prompt Engineer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {
        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
            isDeleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();

/* ==================================================
   DARK / LIGHT MODE
================================================== */

/* ==================================================
   DARK / LIGHT MODE
================================================== */

const themeToggle = document.getElementById("theme-toggle");

const body = document.body;

const savedTheme = localStorage.getItem("theme");

/* Load Saved Theme */

if (savedTheme === "light") {

    body.classList.add("light-mode");

    themeToggle.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

} else {

    themeToggle.innerHTML =
        '<i class="fa-regular fa-moon"></i>';

}

/* Toggle Theme */

themeToggle.addEventListener("click", () => {

    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {

        localStorage.setItem("theme", "light");

        themeToggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        localStorage.setItem("theme", "dark");

        themeToggle.innerHTML =
            '<i class="fa-regular fa-moon"></i>';

    }

});

/* ==================================================
   SETTINGS PANEL
================================================== */

const settingsBtn = document.getElementById("settings-btn");

const colorSwitcher = document.getElementById("color-switcher");

/* Open / Close Settings */

settingsBtn.addEventListener("click", (e) => {

    e.stopPropagation();

    settingsBtn.classList.toggle("rotate");

    colorSwitcher.classList.toggle("show");

});

/* Close When Clicking Outside */

document.addEventListener("click", () => {

    settingsBtn.classList.remove("rotate");

    colorSwitcher.classList.remove("show");

});

colorSwitcher.addEventListener("click", (e) => {

    e.stopPropagation();

});

/* ==================================================
   MOBILE MENU
================================================== */

const menuBtn =
    document.querySelector(".menu-btn");

const navLinks =
    document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-link")
    .forEach(link => {

        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });

    });

/* ==================================================
   SCROLL PROGRESS BAR
================================================== */

const progressBar =
    document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    progressBar.style.width =
        progress + "%";
});

/* ==================================================
   ACTIVE NAVIGATION HIGHLIGHTING
================================================== */

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop
            &&
            pageYOffset <
            sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {
            link.classList.add("active");
        }
    });

});

/* ==================================================
   STICKY NAVBAR EFFECT
================================================== */

const header =
    document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(0,0,0,0.85)";

        header.style.backdropFilter =
            "blur(15px)";

    } else {

        header.style.background =
            "rgba(0,0,0,0.4)";
    }
});

/* ==================================================
   SCROLL TO TOP BUTTON
================================================== */

const scrollBtn =
    document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";
    }
});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* ==================================================
   CONTACT FORM VALIDATION
================================================== */

const contactForm =
    document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const inputs =
        contactForm.querySelectorAll(
            "input, textarea"
        );

    let valid = true;

    inputs.forEach(input => {

        if (
            input.value.trim() === ""
        ) {

            input.style.border =
                "1px solid red";

            valid = false;

        } else {

            input.style.border =
                "";
        }
    });

    if (!valid) {

        alert(
            "Please fill in all fields."
        );

        return;
    }

    const emailField =
        contactForm.querySelector(
            'input[type="email"]'
        );

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
        !emailRegex.test(
            emailField.value
        )
    ) {

        alert(
            "Please enter a valid email address."
        );

        return;
    }

    alert(
        "Message sent successfully!"
    );

    contactForm.reset();

});

/* ==================================================
   PARTICLES.JS
================================================== */
function getCurrentPrimaryColor() {
    return getComputedStyle(document.documentElement)
        .getPropertyValue("--primary")
        .trim();
}
if (typeof particlesJS !== "undefined") {

    particlesJS("particles-js", {
        particles: {

            number: {
                value: 70,
                density: {
                    enable: true,
                    value_area: 800
                }
            },

            color: {
                value: getCurrentPrimaryColor()
            },

            shape: {
                type: "circle"
            },

            opacity: {
                value: 0.5,
                random: true
            },

            size: {
                value: 3,
                random: true
            },

            line_linked: {
                enable: true,
                distance: 150,
                color: getCurrentPrimaryColor(),
                opacity: 0.3,
                width: 1
            },

            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out"
            }
        },

        interactivity: {

            detect_on: "canvas",

            events: {

                onhover: {
                    enable: true,
                    mode: "repulse"
                },

                onclick: {
                    enable: true,
                    mode: "push"
                },

                resize: true
            },

            modes: {

                repulse: {
                    distance: 120
                },

                push: {
                    particles_nb: 4
                }
            }
        },

        retina_detect: true
    });
}

/* ==================================================
   SKILL CARD ANIMATION
================================================== */

const skillCards =
    document.querySelectorAll(".skill-card");

skillCards.forEach(card => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.style.transform =
                "translateY(-10px) scale(1.05)";
        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "translateY(0) scale(1)";
        }
    );

});

/* ==================================================
   PROJECT CARD TILT EFFECT
================================================== */

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        (e) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            const rotateX =
                ((y / rect.height) - 0.5) * -10;

            const rotateY =
                ((x / rect.width) - 0.5) * 10;

            card.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;
        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "perspective(1000px) rotateX(0) rotateY(0)";
        }
    );

});

/* ==================================================
   COUNTER ANIMATION
================================================== */

const counters =
    document.querySelectorAll(".stat-card h3");

const animateCounter = (counter) => {

    const target =
        parseInt(
            counter.innerText
        );

    let count = 0;

    const speed =
        target / 80;

    const update = () => {

        if (count < target) {

            count += speed;

            counter.innerText =
                Math.ceil(count) + "+";

            requestAnimationFrame(update);

        } else {

            counter.innerText =
                target + "+";
        }
    };

    update();
};

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    animateCounter(
                        entry.target
                    );

                    observer.unobserve(
                        entry.target
                    );
                }
            });

        },
        {
            threshold: 0.5
        }
    );

counters.forEach(counter => {
    observer.observe(counter);
});

/* ==================================================
   SMOOTH REVEAL ANIMATION
================================================== */

const revealElements =
    document.querySelectorAll(
        ".project-card, .skill-card, .timeline-item"
    );

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "revealed"
                    );
                }
            });

        },
        {
            threshold: 0.15
        }
    );

revealElements.forEach(el => {
    revealObserver.observe(el);
});

/* ==================================================
   HERO PARALLAX EFFECT
================================================== */

window.addEventListener(
    "mousemove",
    (e) => {

        const image =
            document.querySelector(
                ".image-wrapper"
            );

        if (!image) return;

        const x =
            (window.innerWidth / 2 -
                e.pageX) / 40;

        const y =
            (window.innerHeight / 2 -
                e.pageY) / 40;

        image.style.transform =
            `translate(${x}px, ${y}px)`;
    }
);

/* ==================================================
   CONSOLE SIGNATURE
================================================== */

console.log(`
=====================================
 GPS Portfolio Website
 Gideon P Stanley
 Full Stack Developer
=====================================
`);
/* ==================================================
   COLOR SWITCHER
================================================== */

const colorButtons =
    document.querySelectorAll(".color-btn");

function updateThemeColor(color){

    document.documentElement
        .style.setProperty(
            "--primary",
            color
        );

    localStorage.setItem(
        "portfolioColor",
        color
    );

    updateParticles(color);
}
/* Load Saved Color */

const savedColor =
    localStorage.getItem(
        "portfolioColor"
    );

if(savedColor){

    document.documentElement
        .style.setProperty(
            "--primary",
            savedColor
        );

    setTimeout(() => {

        updateParticles(savedColor);

    }, 500);
}
/* Color Button Click */

colorButtons.forEach(btn => {

    btn.addEventListener(
        "click",
        () => {

            const selectedColor =
                btn.dataset.color;

            updateThemeColor(
                selectedColor
            );
        }
    );

});
/* ==================================================
   UPDATE PARTICLE COLOR
================================================== */

function updateParticles(color){

    if(typeof pJSDom !== "undefined" &&
       pJSDom.length > 0){

        pJSDom[0].pJS.particles.color.value =
            color;

        pJSDom[0].pJS.particles.line_linked.color =
            color;

        pJSDom[0].pJS.fn.particlesRefresh();
    }
}
/* ==================================================
   CONTACT FORM (EMAILJS)
================================================== */

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.sendForm(
        "service_sk2tzve",
        "template_o9e2qby",
        this
    )

    .then(() => {

        alert("Message sent successfully!");

        contactForm.reset();

    })

    .catch((error) => {

        console.error("EmailJS Error:", error);

        alert("Failed to send message.");

    });

});