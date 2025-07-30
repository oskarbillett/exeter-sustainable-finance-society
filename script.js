function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    mobileNav.classList.toggle('active');
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const mobileNav = document.getElementById('mobileNav');
        const menuBtn = document.querySelector('.mobile-menu-btn');
        
        if (mobileNav && menuBtn && 
            !mobileNav.contains(event.target) && 
            !menuBtn.contains(event.target)) {
            mobileNav.classList.remove('active');
        }
    });

    // Set active navigation link based on current page
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        
        // Handle index.html or empty path as home
        if ((currentPage === 'index.html' || currentPage === '' || currentPage === '/') && 
            (href === 'index.html' || href === '/' || href === '')) {
            link.classList.add('active');
        } else if (href === currentPage) {
            link.classList.add('active');
        }
    });
});