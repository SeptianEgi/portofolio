// JavaScript untuk interaktivitas portofolio
document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Smooth scrolling untuk navigasi
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Tutup menu mobile setelah mengklik link
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            }
        });
    });
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Ambil nilai form
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Validasi form sederhana
        if (!name || !email || !subject || !message) {
            alert('Harap lengkapi semua field!');
            return;
        }
        
        // Di sini biasanya akan ada kode untuk mengirim data ke server
        // Untuk contoh ini, kita hanya akan menampilkan alert
        alert(`Terima kasih ${name}! Pesan Anda telah berhasil dikirim. Saya akan membalas ke email ${email} segera.`);
        
        // Reset form
        contactForm.reset();
    });
    
   // Animasi skill bars saat di-scroll
const skillBars = document.querySelectorAll('.skill-level');

function animateSkillBars() {
    skillBars.forEach(skillBar => {
        skillBar.classList.add('animated');
    });
}

// Observer untuk memicu animasi saat section skills masuk ke viewport
const skillsSection = document.getElementById('skills');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillBars();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

if (skillsSection) {
    observer.observe(skillsSection);
}
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Animasi teks ketik untuk hero section (opsional)
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }
    
    // Uncomment kode di bawah jika ingin menggunakan efek mengetik
    /*
    const heroTitle = document.querySelector('.hero-content h1');
    const originalText = heroTitle.textContent;
    typeWriter(heroTitle, originalText, 100);
    */
    
    // Dark mode toggle (opsional)
    const darkModeToggle = document.createElement('button');
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    darkModeToggle.classList.add('dark-mode-toggle');
    darkModeToggle.style.position = 'fixed';
    darkModeToggle.style.bottom = '20px';
    darkModeToggle.style.right = '20px';
    darkModeToggle.style.zIndex = '1000';
    darkModeToggle.style.background = 'var(--primary-color)';
    darkModeToggle.style.color = 'white';
    darkModeToggle.style.border = 'none';
    darkModeToggle.style.borderRadius = '50%';
    darkModeToggle.style.width = '50px';
    darkModeToggle.style.height = '50px';
    darkModeToggle.style.cursor = 'pointer';
    darkModeToggle.style.boxShadow = 'var(--shadow)';
    
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            this.innerHTML = '<i class="fas fa-sun"></i>';
            this.style.background = 'var(--secondary-color)';
        } else {
            this.innerHTML = '<i class="fas fa-moon"></i>';
            this.style.background = 'var(--primary-color)';
        }
    });
    
    // Uncomment baris di bawah jika ingin menambahkan tombol dark mode
    // document.body.appendChild(darkModeToggle);
    
    // CSS untuk dark mode
    const darkModeCSS = `
        body.dark-mode {
            --primary-color: #1a2530;
            --secondary-color: #2980b9;
            --light-color: #2c3e50;
            --dark-color: #ecf0f1;
            --text-color: #ecf0f1;
            background-color: #1a2530;
        }
        
        body.dark-mode header {
            background-color: var(--primary-color);
        }
        
        body.dark-mode .nav-links a {
            color: var(--dark-color);
        }
        
        body.dark-mode .skill-category,
        body.dark-mode .project-card,
        body.dark-mode .contact-item {
            background-color: #2c3e50;
            color: var(--text-color);
        }
        
        body.dark-mode .form-control {
            background-color: #2c3e50;
            border-color: #34495e;
            color: var(--text-color);
        }
    `;
    
    // Uncomment baris di bawah jika ingin menambahkan dark mode
    /*
    const style = document.createElement('style');
    style.textContent = darkModeCSS;
    document.head.appendChild(style);
    */
});

// Fungsi untuk menampilkan waktu real-time
function updateTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    const timeString = now.toLocaleDateString('id-ID', options);
    
    // Uncomment baris di bawah jika ingin menampilkan waktu di footer
    /*
    const timeElement = document.querySelector('footer p');
    if (timeElement) {
        timeElement.innerHTML = `&copy; 2023 Ahmad Fauzi. All Rights Reserved. <br> ${timeString}`;
    }
    */
}

// Update waktu setiap detik
setInterval(updateTime, 1000);
updateTime(); // Panggil sekali saat pertama kali load
// Fungsi untuk kontak yang bisa diklik
function sendEmail() {
    const email = 'Septian84462334@gmail.com';
    const subject = 'Halo Septian - Portofolio';
    const body = 'Halo Septian, saya tertarik dengan portofolio Anda...';
    
    // Buka email client
    window.open(`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    
    // Optional: Show confirmation
    showNotification('Membuka aplikasi email...', 'success');
}

function callPhone() {
    const phone = '+6281283877809';
    
    // Untuk WhatsApp
    const whatsappUrl = `https://wa.me/${phone.replace('+', '')}`;
    
    // Tanya user mau telepon atau WhatsApp
    if (confirm('Mau menghubungi via WhatsApp atau Telepon?\n\nKlik OK untuk WhatsApp\nKlik Cancel untuk Telepon')) {
        window.open(whatsappUrl, '_blank');
        showNotification('Membuka WhatsApp...', 'success');
    } else {
        window.open(`tel:${phone}`);
        showNotification('Membuka aplikasi telepon...', 'success');
    }
}

function openMaps() {
    const address = 'Bekasi, Indonesia';
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    
    window.open(mapsUrl, '_blank');
    showNotification('Membuka Google Maps...', 'success');
}

// Fungsi notifikasi
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">&times;</button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#2196F3'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 15px;
        animation: slideIn 0.3s ease;
    `;
    
    // Add close button style
    notification.querySelector('button').style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 18px;
        cursor: pointer;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 3000);
}

// CSS untuk animasi notifikasi
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(notificationStyles);

// Update form submission dengan notifikasi
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Validasi form
        if (!name || !email || !subject || !message) {
            showNotification('Harap lengkapi semua field!', 'error');
            return;
        }
        
        // Simulasi pengiriman (di production, ini akan mengirim ke server)
        showNotification(`Terima kasih ${name}! Pesan Anda berhasil dikirim.`, 'success');
        
        // Reset form
        contactForm.reset();
    });
}

// Tambahan: Copy to clipboard function
function copyToClipboard(text, type) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification(`${type} berhasil disalin!`, 'success');
    }).catch(() => {
        showNotification('Gagal menyalin, silakan copy manual.', 'error');
    });
}

// Optional: Add copy functionality on right-click
document.addEventListener('DOMContentLoaded', function() {
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach(item => {
        item.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            const text = this.querySelector('.clickable-link').textContent;
            const type = this.querySelector('h3').textContent;
            copyToClipboard(text.trim(), type);
        });
    });
});