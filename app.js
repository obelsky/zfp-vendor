// ZFP Vendor - JavaScript
// Filters, Modal, Forms

let currentFilters = { level: 'vse', type: 'vse', search: '' };

// Initialize filters on services page
document.addEventListener('DOMContentLoaded', function() {
    // Filters
    if (document.getElementById('servicesGrid')) {
        initializeFilters();
    }
    
    // Modal
    initializeModal();
    
    // Forms
    initializeForms();
});

// Filters
function initializeFilters() {
    const filterPills = document.querySelectorAll('.filter-pill');
    const searchInput = document.getElementById('searchInput');
    
    filterPills.forEach(pill => {
        pill.addEventListener('click', function() {
            const filterType = this.getAttribute('data-filter-type');
            const filterValue = this.getAttribute('data-filter-value');
            
            const group = this.closest('.filter-group');
            group.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            
            currentFilters[filterType] = filterValue;
            applyFilters();
        });
    });
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            currentFilters.search = this.value.toLowerCase();
            applyFilters();
        });
    }
}

function applyFilters() {
    const cards = document.querySelectorAll('.service-card');
    let visibleCount = 0;
    
    cards.forEach(card => {
        const level = card.getAttribute('data-level');
        const type = card.getAttribute('data-type');
        const name = card.getAttribute('data-name').toLowerCase();
        
        const levelMatch = currentFilters.level === 'vse' || level === currentFilters.level;
        const typeMatch = currentFilters.type === 'vse' || type === currentFilters.type;
        const searchMatch = currentFilters.search === '' || name.includes(currentFilters.search);
        
        if (levelMatch && typeMatch && searchMatch) {
            card.style.display = '';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // Show/hide no results message
    let noResultsMsg = document.getElementById('noResultsMessage');
    const servicesGrid = document.getElementById('servicesGrid');
    
    if (visibleCount === 0 && servicesGrid) {
        if (!noResultsMsg) {
            noResultsMsg = document.createElement('div');
            noResultsMsg.id = 'noResultsMessage';
            noResultsMsg.style.gridColumn = '1 / -1';
            noResultsMsg.style.textAlign = 'center';
            noResultsMsg.style.padding = '3rem';
            noResultsMsg.style.color = '#666';
            noResultsMsg.innerHTML = `
                <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
                <h3 style="margin-bottom: 0.5rem;">Žádné výsledky</h3>
                <p>Zkuste upravit filtry nebo hledaný výraz.</p>
            `;
            servicesGrid.appendChild(noResultsMsg);
        }
    } else {
        if (noResultsMsg) {
            noResultsMsg.remove();
        }
    }
}

// Modal
function initializeModal() {
    const modal = document.getElementById('orderModal');
    if (!modal) return;
    
    // Close on overlay click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close on ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

function openModal(serviceName) {
    const modal = document.getElementById('orderModal');
    const modalTitle = document.getElementById('modalServiceName');
    
    if (modal && modalTitle) {
        modalTitle.textContent = serviceName;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('orderModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        
        const form = document.getElementById('orderForm');
        if (form) {
            form.reset();
        }
    }
}

// Forms
function initializeForms() {
    window.setFormLoading = function(formElement, loading) {
        const submitBtn = formElement.querySelector('button[type="submit"]');
        if (submitBtn) {
            if (loading) {
                submitBtn.disabled = true;
                submitBtn.dataset.originalText = submitBtn.textContent;
                submitBtn.textContent = 'Odesílání...';
            } else {
                submitBtn.disabled = false;
                submitBtn.textContent = submitBtn.dataset.originalText || 'Odeslat';
            }
        }
    };
}

function handleOrderSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const serviceName = document.getElementById('modalServiceName').textContent;
    const email = document.getElementById('modalEmail').value;
    
    setFormLoading(form, true);
    
    setTimeout(() => {
        alert(`Děkujeme za zájem!\n\nVaše poptávka na službu "${serviceName}" byla úspěšně odeslána.\n\nOzveme se vám na e-mail ${email} do 24 hodin.`);
        
        closeModal();
        setFormLoading(form, false);
        form.reset();
    }, 1000);
}

function handleContactSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    
    setFormLoading(form, true);
    
    setTimeout(() => {
        alert(`Děkujeme za zprávu, ${name}!\n\nVaše zpráva byla úspěšně odeslána.\n\nOzveme se vám na e-mail ${email} do 24 hodin.`);
        
        setFormLoading(form, false);
        form.reset();
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, 1000);
}
