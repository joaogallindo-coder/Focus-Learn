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




