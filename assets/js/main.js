document.addEventListener('DOMContentLoaded', function () {
    function createBinaryRain() {
        const container = document.getElementById('binaryRain');
        if (!container) return;

        for (let i = 0; i < 50; i++) {
            const digit = document.createElement('div');
            digit.className = 'binary-digit';
            digit.textContent = Math.random() > 0.5 ? '1' : '0';
            digit.style.left = `${Math.random() * 100}%`;
            digit.style.animationDuration = `${Math.random() * 5 + 5}s`;
            digit.style.animationDelay = `${Math.random() * 5}s`;
            container.appendChild(digit);
        }
    }
    createBinaryRain();

    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    let menuOpen = false;

    function toggleMobileMenu() {
        menuOpen = !menuOpen;
        if (mobileMenu) {
            mobileMenu.classList.toggle('hidden');
        }
        if (menuToggle) {
            if (menuOpen) {
                menuToggle.classList.add('active');
            } else {
                menuToggle.classList.remove('active');
            }
        }
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', function (e) {
            e.stopPropagation();
            toggleMobileMenu();
        });
    }

    document.addEventListener('click', function (e) {
        if (menuOpen && mobileMenu && !mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            toggleMobileMenu();
        }
    });

    const mobileNavItems = document.querySelectorAll('.mobile-nav-item, .mobile-contact-btn');
    mobileNavItems.forEach(item => {
        item.addEventListener('click', function () {
            toggleMobileMenu();

            if (this.classList.contains('mobile-contact-btn')) {
                setTimeout(() => {
                    alert('Fitur kontak akan membuka form atau halaman kontak. Tambahkan fungsi sesuai kebutuhan.');
                }, 300);
            }
        });
    });
    const allNavLinks = document.querySelectorAll('a[href^="#"]');
    allNavLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                if (menuOpen) {
                    toggleMobileMenu();
                }
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    const contactButtons = document.querySelectorAll('.contact-btn');
    contactButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            createParticleBurst(this);
            setTimeout(() => {
                alert('Fitur kontak akan membuka form atau halaman kontak. Tambahkan fungsi sesuai kebutuhan.');
            }, 500);
        });
    });
    function createParticleBurst(element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle-spark';
            particle.style.left = `${centerX}px`;
            particle.style.top = `${centerY}px`;
            particle.style.animationDuration = '1s';
            particle.style.animationDelay = `${i * 0.05}s`;

            document.body.appendChild(particle);
            setTimeout(() => {
                particle.remove();
            }, 1000);
        }
    }
    window.addEventListener('scroll', function () {
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('.nav-item');

        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop - 150 && window.scrollY < sectionTop + sectionHeight - 150) {
                currentSection = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            const href = item.getAttribute('href');

            if (href === `#${currentSection}`) {
                item.classList.add('active');
            }
        });
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.classList.add('shadow-xl', 'shadow-cyan-500/10');
        } else {
            nav.classList.remove('shadow-xl', 'shadow-cyan-500/10');
        }
    });
    const interactiveElements = document.querySelectorAll('.group');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', function () {
            this.classList.add('hover-active');
        });

        el.addEventListener('mouseleave', function () {
            this.classList.remove('hover-active');
        });
    });
    console.log('%c⚡ CYBERNAV ULTIMATE v2.4 ⚡', 'color: #00f3ff; font-size: 18px; font-weight: bold; text-shadow: 0 0 10px #00f3ff');
    console.log('%cNavigation System: ONLINE', 'color: #00ff00; font-size: 14px');
    console.log('%cCyber Effects: MAXIMUM', 'color: #ff00ff; font-size: 14px');
    console.log('%cMobile Menu: OPTIMIZED', 'color: #9d00ff; font-size: 14px');
});
document.getElementById('backToTop')?.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in-up');
        }
    });
}, observerOptions);

document.querySelectorAll('footer > div > div > div').forEach(section => {
    observer.observe(section);
});
