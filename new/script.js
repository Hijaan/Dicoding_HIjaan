document.addEventListener('DOMContentLoaded', function() {
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const navLinks = document.querySelector('.nav-links');
            const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
            
            // Mobile menu toggle
            mobileMenuBtn.addEventListener('click', () => {
                navLinks.classList.toggle('open');
            });
            
            // Desktop dropdown toggle
            dropdownToggles.forEach(toggle => {
                // Desktop hover functionality
                toggle.addEventListener('mouseenter', () => {
                    // Only trigger on desktop (width > 768px)
                    if (window.innerWidth > 768) {
                        toggle.parentElement.classList.add('dropdown-hover');
                    }
                });
                
                // Mobile click functionality
                toggle.addEventListener('click', (e) => {
                    if (window.innerWidth <= 768) {
                        e.preventDefault();
                        const dropdown = toggle.parentElement;
                        dropdown.classList.toggle('open');
                        
                        // Close other dropdowns if they're open
                        dropdownToggles.forEach(otherToggle => {
                            if (otherToggle !== toggle && otherToggle.parentElement.classList.contains('open')) {
                                otherToggle.parentElement.classList.remove('open');
                            }
                        });
                    }
                });
            });
            
            // Close dropdown when clicking outside (desktop)
            document.addEventListener('click', (e) => {
                if (window.innerWidth > 768 && !e.target.closest('.dropdown')) {
                    document.querySelectorAll('.dropdown').forEach(dropdown => {
                        dropdown.classList.remove('dropdown-hover');
                    });
                }
            });
            
            // Handle window resize
            window.addEventListener('resize', () => {
                if (window.innerWidth > 768) {
                    navLinks.classList.remove('open');
                    document.querySelectorAll('.dropdown').forEach(dropdown => {
                        dropdown.classList.remove('open');
                    });
                }
            });
        });