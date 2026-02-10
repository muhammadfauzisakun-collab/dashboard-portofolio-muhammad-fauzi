// script.js - JavaScript Lengkap untuk Website Portofolio Luxury

// Smooth Scrolling untuk Navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Lightbox untuk Portfolio dengan Deskripsi
function openLightbox(src, desc) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    const descEl = document.getElementById('lightbox-desc');
    img.src = src;
    descEl.textContent = desc;
    lightbox.style.display = 'block';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Klik di luar lightbox untuk menutup
document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) {
        closeLightbox();
    }
});

// Filter Portfolio
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.gallery .item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Hapus class active dari semua button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Tambah class active ke button yang diklik
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.classList.contains(filterValue)) {
                item.style.display = 'block';
                item.style.animation = 'fadeIn 0.5s ease-in-out';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Animasi Progress Bar pada Skills (jalankan saat scroll ke section)
const skillsSection = document.getElementById('skills');
const progressBars = document.querySelectorAll('.progress');

function animateProgressBars() {
    progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
    });
}

let skillsAnimated = false;
window.addEventListener('scroll', () => {
    const sectionTop = skillsSection.offsetTop;
    const sectionHeight = skillsSection.offsetHeight;
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    
    if (scrollY + windowHeight > sectionTop + sectionHeight / 2 && !skillsAnimated) {
        animateProgressBars();
        skillsAnimated = true;
    }
});

// Slider Testimonials
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove('active');
        if (i === index) {
            testimonial.classList.add('active');
        }
    });
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
    showTestimonial(currentTestimonial);
}

// Auto-slide testimonials setiap 5 detik
setInterval(nextTestimonial, 5000);

// Form Contact dengan Validasi dan Simulasi Submit
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Validasi sederhana
    if (name === '' || email === '' || message === '') {
        alert('Harap isi semua field!');
        return;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Email tidak valid!');
        return;
    }
    
    // Simulasi pengiriman (ganti dengan AJAX ke backend jika perlu)
    alert('Pesan telah dikirim! Terima kasih atas kontaknya.');
    contactForm.reset();
});

// Scroll Reveal Animations (untuk elemen yang muncul saat scroll)
const revealElements = document.querySelectorAll('.about, .portfolio, .skills, .testimonials, .contact');

function revealOnScroll() {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('reveal');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Jalankan sekali saat load

// Parallax Effect pada Hero (opsional, jika video tidak digunakan, bisa diganti dengan gambar)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
        heroVideo.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Animasi Teks Hero (fadeInUp sudah di CSS, tapi bisa ditambah JS jika perlu)
document.addEventListener('DOMContentLoaded', () => {
    const heroText = document.querySelector('.hero h2');
    heroText.style.opacity = '0';
    setTimeout(() => {
        heroText.style.opacity = '1';
        heroText.style.transform = 'translateY(0)';
    }, 500);
});

// Tooltip pada Skills (muncul saat hover)
const skills = document.querySelectorAll('.skill');
skills.forEach(skill => {
    skill.addEventListener('mouseenter', () => {
        const tooltip = skill.querySelector('.tooltip');
        tooltip.style.display = 'block';
    });
    skill.addEventListener('mouseleave', () => {
        const tooltip = skill.querySelector('.tooltip');
        tooltip.style.display = 'none';
    });
});

// Responsivitas Navigasi (Toggle Menu untuk Mobile - tambahkan jika perlu)
const nav = document.querySelector('nav ul');
const toggleBtn = document.createElement('button');
toggleBtn.textContent = '☰';
toggleBtn.classList.add('nav-toggle');
toggleBtn.style.display = 'none'; // Sembunyikan default, tampilkan di mobile via CSS
document.querySelector('header .container').appendChild(toggleBtn);

toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});



// CSS untuk nav-toggle (tambahkan ke styles.css jika belum ada):
// .nav-toggle { display: none; background: #D4AF37; color: #000; border: none; padding: 10px; cursor: pointer; }
// @media (max-width: 768px) { .nav-toggle { display: block; } nav ul { display: none; } nav ul.active { display: block; } }

// Catatan: Jika ingin menambahkan lebih banyak fitur seperti analytics atau integrasi API, beri tahu saya!