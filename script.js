function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    mobileNav.classList.toggle('active');
}

function showEvents(year) {
    // Hide all event grids
    const eventGrids = document.querySelectorAll('[id^="events-"]');
    eventGrids.forEach(grid => {
        grid.style.display = 'none';
    });
    
    // Show selected year's events
    const selectedGrid = document.getElementById('events-' + year);
    if (selectedGrid) {
        selectedGrid.style.display = 'grid';
    }
    
    // Update active tab
    const tabs = document.querySelectorAll('.year-tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Find the clicked tab and make it active
    const clickedTab = [...tabs].find(tab => tab.textContent.trim() === year);
    if (clickedTab) {
        clickedTab.classList.add('active');
    }
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
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        
        // Handle different path scenarios
        if (currentPath === '/' || currentPath === '/index.html' || currentPath.endsWith('index.html')) {
            if (href === '/' || href === 'index.html') {
                link.classList.add('active');
            }
        } else if (currentPath === href || currentPath === href + '.html') {
            link.classList.add('active');
        }
    });
});