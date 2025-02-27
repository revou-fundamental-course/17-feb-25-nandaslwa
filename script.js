// AUTO SLIDE BANNER
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    slides.forEach(slide => slide.classList.remove("active"));
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add("active");
}

setInterval(showSlides, 3000);

// FORM VALIDATION
document.getElementById("contactForm").addEventListener("submit", function (event) {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
        alert("Harap isi semua field.");
        event.preventDefault();
    }
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form terkirim sebelum validasi
    
    let isValid = true;

    // Ambil nilai input
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const section = document.getElementById("section").value;

    // Validasi Nama
    if (name === "") {
        document.getElementById("name-error").classList.remove("hidden");
        isValid = false;
    } else {
        document.getElementById("name-error").classList.add("hidden");
    }

    // Validasi Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailPattern.test(email)) {
        document.getElementById("email-error").classList.remove("hidden");
        isValid = false;
    } else {
        document.getElementById("email-error").classList.add("hidden");
    }

    // Validasi Select Option
    if (section === "") {
        document.getElementById("section-error").classList.remove("hidden");
        isValid = false;
    } else {
        document.getElementById("section-error").classList.add("hidden");
    }

    // Jika semua valid, kirim form
    if (isValid) {
        alert("Form submitted successfully!");
        // Bisa tambahkan logic kirim data ke server di sini
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

    // Auto-slide setiap 3 detik
    setInterval(nextSlide, 3000);

    // Tampilkan slide pertama saat halaman dimuat
    showSlide(currentIndex);
});

document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll("#slider .slide");
    let index = 0;

    function nextSlide() {
        slides[index].classList.add("hidden"); // Sembunyikan gambar saat ini
        index = (index + 1) % slides.length;  // Pindah ke gambar berikutnya
        slides[index].classList.remove("hidden"); // Tampilkan gambar baru
    }

    setInterval(nextSlide, 3000); // Ganti gambar setiap 3 detik
});


