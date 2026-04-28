// Sidebar Navigation Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const sidebarLinks = document.querySelectorAll('.sidebar-nav > li > a[href="#"]');
    
    // Add click handlers to category links
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const parent = this.parentElement;
            parent.classList.toggle('expanded');
        });
    });
    
    // Auto-expand section containing active link
    const activeLink = document.querySelector('.sidebar-nav a.active');
    if (activeLink && activeLink.getAttribute('href') !== '#') {
        let currentElement = activeLink.parentElement;
        while (currentElement && currentElement !== document) {
            if (currentElement.tagName === 'LI' && currentElement.parentElement.classList.contains('sidebar-nav')) {
                // This is a top-level LI with a submenu
                currentElement.classList.add('expanded');
                break;
            }
            currentElement = currentElement.parentElement;
        }
    }
});
