let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    slides.forEach(slide => slide.classList.remove("active"));
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add("active");
}

setInterval(showSlides, 3000);

document.getElementById("contactForm").addEventListener("submit", function (event) {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
        alert("Harap isi semua field.");
        event.preventDefault();
    }
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    let isValid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const section = document.getElementById("section").value;

    if (name === "") {
        document.getElementById("name-error").classList.remove("hidden");
        isValid = false;
    } else {
        document.getElementById("name-error").classList.add("hidden");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailPattern.test(email)) {
        document.getElementById("email-error").classList.remove("hidden");
        isValid = false;
    } else {
        document.getElementById("email-error").classList.add("hidden");
    }

    if (section === "") {
        document.getElementById("section-error").classList.remove("hidden");
        isValid = false;
    } else {
        document.getElementById("section-error").classList.add("hidden");
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slider img");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) {
                slide.classList.add("active");
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    document.getElementById("next").addEventListener("click", nextSlide);
    document.getElementById("prev").addEventListener("click", prevSlide);

    setInterval(nextSlide, 3000);

    showSlide(currentIndex);
});

document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll("#slider .slide");
    let index = 0;

    function nextSlide() {
        slides[index].classList.add("hidden"); 
        index = (index + 1) % slides.length;  
        slides[index].classList.remove("hidden"); 
    }

    setInterval(nextSlide, 3000); 
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    let isValid = true;

    // Ambil nilai input
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let section = document.getElementById("section").value;

    // Validasi Name
    if (name === "") {
        document.getElementById("name-error").classList.remove("hidden");
        isValid = false;
    } else {
        document.getElementById("name-error").classList.add("hidden");
    }

    // Validasi Email (Format harus benar)
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
        document.getElementById("email-error").classList.remove("hidden");
        isValid = false;
    } else {
        document.getElementById("email-error").classList.add("hidden");
    }

    // Validasi Dropdown harus dipilih
    if (section === "") {
        document.getElementById("section-error").classList.remove("hidden");
        isValid = false;
    } else {
        document.getElementById("section-error").classList.add("hidden");
    }

    // Jika ada error, hentikan form dari submit
    if (!isValid) {
        event.preventDefault();
    }
});
    console.log("Script is loaded!"); // Debugging: pastikan script berjalan

    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah form terkirim sebelum validasi
        console.log("Form submitted! Validating...");

        let isValid = true;

        // Validasi Nama
        const nameInput = document.getElementById("name");
        const nameError = document.getElementById("name-error");
        if (nameInput.value.trim() === "") {
            nameError.classList.remove("hidden");
            nameInput.classList.add("border-red-500");
            console.log("Name is invalid");
            isValid = false;
        } else {
            nameError.classList.add("hidden");
            nameInput.classList.remove("border-red-500");
        }

        // Validasi Email
        const emailInput = document.getElementById("email");
        const emailError = document.getElementById("email-error");
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex validasi email
        if (!emailPattern.test(emailInput.value.trim())) {
            emailError.classList.remove("hidden");
            emailInput.classList.add("border-red-500");
            console.log("Email is invalid");
            isValid = false;
        } else {
            emailError.classList.add("hidden");
            emailInput.classList.remove("border-red-500");
        }

        // Validasi Select (Dropdown)
        const sectionInput = document.getElementById("section");
        const sectionError = document.getElementById("section-error");
        if (sectionInput.value === "") {
            sectionError.classList.remove("hidden");
            sectionInput.classList.add("border-red-500");
            console.log("Section is invalid");
            isValid = false;
        } else {
            sectionError.classList.add("hidden");
            sectionInput.classList.remove("border-red-500");
        }

        // Jika valid, form dikirim
        if (isValid) {
            console.log("Form is valid! Submitting...");
            alert("Form successfully submitted!");
            form.reset(); // Reset form setelah submit
        } else {
            console.log("Form is not valid! Submission stopped.");
        }
    });
