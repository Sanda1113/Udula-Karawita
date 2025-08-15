document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');

    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
        menuToggle.innerHTML = navbar.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

    // Sticky header on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('sticky', window.scrollY > 0);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Video placeholder click handler
    const videoPlaceholder = document.querySelector('.video-placeholder');
    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', () => {
            videoPlaceholder.innerHTML = `
                <video width="100%" height="100%" controls autoplay>
                    <source src="videos/intro-video.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            `;
        });
    }

    // Load timeline data
    const timelineContainer = document.getElementById('timeline-container');
    timelineData.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.className = `timeline-item ${item.position}`;
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <h2>${item.title}</h2>
                <p>${item.content}</p>
            </div>
        `;
        timelineContainer.appendChild(timelineItem);
    });

    // Load career orientation data
    const careerContainer = document.getElementById('career-container');
    careerContainer.innerHTML = `
        <div class="career-content">
            <h3>My Professional Philosophy</h3>
            ${careerData.philosophy}
            
            <div class="references">
                <h4>References:</h4>
                <ul>
                    ${careerData.references.map(ref => `<li>${ref}</li>`).join('')}
                </ul>
            </div>
            
            <h3>Career Assessments & Planning</h3>
            ${careerData.assessment}
            
            <div class="plan-list">
                ${careerData.plans.map(plan => `<div class="plan-item">${plan}</div>`).join('')}
            </div>
            
            <h3>Test Results</h3>
            <div class="test-results">
                ${careerData.tests.map(test => `
                    <div class="test-card">
                        <h4>${test.name}</h4>
                        ${test.score ? `<p>Score: <strong>${test.score}</strong></p>` : ''}
                        <p>${test.description}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    // Load values data
    const valuesContainer = document.getElementById('values-container');
    valuesData.forEach(value => {
        const valueCard = document.createElement('div');
        valueCard.className = 'value-card';
        valueCard.innerHTML = `
            <i class="${value.icon}"></i>
            <h3>${value.title}</h3>
            <p>${value.description}</p>
        `;
        valuesContainer.appendChild(valueCard);
    });

    // Load projects data
    const projectsContainer = document.getElementById('projects-container');
    projectsData.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <div class="project-img">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" class="project-link" target="_blank">View Project</a>
            </div>
        `;
        projectsContainer.appendChild(projectCard);
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', { name, email, subject, message });
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }
});