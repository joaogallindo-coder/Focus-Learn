document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.jtab');
    const cards = document.querySelectorAll('.ck-card');

    const filterMap = {
        'Concluído': 'concluido',
        'Em andamento': 'em-andamento',
        'Premium': 'premium'
    };

    function filterCards(filterType) {
        const targetFilter = filterMap[filterType];

        cards.forEach(card => {
            const cardFilter = card.getAttribute('data-filter');

            card.style.display = 'none';

            if (targetFilter === cardFilter) {
                
                card.style.display = ''; 
            }
        });
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            
            this.classList.add('active'); 
            const filterType = this.textContent.trim();
            filterCards(filterType);
        });
    });

    const activeTab = document.querySelector('.jtab.active');
    if (activeTab) {
        filterCards(activeTab.textContent.trim());
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.journey-menu .jtab');

    const destinations = {
        'Concluído': 'concluido.html',
        'Em andamento': 'andamento.html',
        'Premium': 'premium.html'
    };

    filterButtons.forEach(button => {
        const filterText = button.textContent.trim();
        button.addEventListener('click', () => {
            if (destinations[filterText]) {
                window.location.href = destinations[filterText];
            } else {
                console.error('Destino não encontrado para o filtro:', filterText);
            }
        });
    });
});