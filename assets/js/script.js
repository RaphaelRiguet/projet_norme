document.addEventListener('DOMContentLoaded', function () {
    console.log('Site chargé avec succès');

    // Animation au scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.card-cuisine, .info-card, .menu-item, .gallery-item, .team-member');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});

function filterGallery(category) {
    const tabs = document.querySelectorAll('.gallery-tab');
    const items = document.querySelectorAll('.gallery-item');

    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    event.target.classList.add('active');

    items.forEach(item => {
        if (category === 'tous' || item.getAttribute('data-category') === category) {
            item.style.display = 'block';
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            }, 10);
        } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });
}

function handleReservation(event) {
    event.preventDefault();

    const form = event.target;
    const inputs = form.querySelectorAll('input, select, textarea');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value && input.type !== 'checkbox') {
            isValid = false;
            input.style.borderColor = '#e74c3c';
            setTimeout(() => {
                input.style.borderColor = '#ddd';
            }, 2000);
        }
    });

    const cgv = document.getElementById('cgv');
    if (!cgv.checked) {
        isValid = false;
        alert('Vous devez accepter les conditions générales');
        return false;
    }

    if (isValid) {
        alert('Merci pour votre réservation ! Vous allez recevoir une confirmation par email.');
        form.reset();
    } else {
        alert('Veuillez remplir tous les champs obligatoires');
    }

    return false;
}

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 6px 30px rgba(0,0,0,0.4)';
    } else {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
    }
});

// Images Unsplash gèrent automatiquement les erreurs
// Pas besoin de placeholder