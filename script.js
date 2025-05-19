document.addEventListener('DOMContentLoaded', function() {
    // Smooth section transitions
    function toggleSection(sectionId) {
        // Hide all sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
            section.classList.add('hidden');
        });
        
        // Show selected section
        const activeSection = document.getElementById(sectionId);
        activeSection.classList.remove('hidden');
        activeSection.classList.add('active');
        
        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        document.querySelector(`.nav-link[href="#${sectionId}"]`).classList.add('active');
        
        // Scroll to top of section
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    // Set home as default active section
    toggleSection('home');
    
    // Add click event to all nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            toggleSection(sectionId);
        });
    });
    
    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
    
    // Animate skills on scroll
    const skillsSection = document.getElementById('skills');
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBars = document.querySelectorAll('.skill-level');
                skillBars.forEach(bar => {
                    bar.style.width = bar.parentElement.getAttribute('data-level');
                });
            }
        });
    }, observerOptions);
    
    if (skillsSection) {
        observer.observe(skillsSection);
    }
    // Dynamic CV Generation (alternative if files don't exist yet)
function generatePDF() {
    // This would use a library like jsPDF in a real implementation
    alert("PDF generation would happen here in a full implementation");
    // In a real app, you would use: window.open('assets/TumiNtela_CV.pdf');
}

function generateDOCX() {
    // This would use a library like docx in a real implementation
    alert("DOCX generation would happen here in a full implementation");
    // In a real app, you would use: window.open('assets/TumiNtela_CV.docx');
}

// Update the HTML links to use these functions instead:
document.querySelector('.cv-download a[href*=".pdf"]').onclick = function(e) {
    e.preventDefault();
    generatePDF();
};

document.querySelector('.cv-download a[href*=".docx"]').onclick = function(e) {
    e.preventDefault();
    generateDOCX();
};
});