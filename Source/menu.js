document.addEventListener("DOMContentLoaded", () => {
    // Verifica se o menu já existe para evitar duplicação
    if (document.querySelector('.dynamic-sidebar')) return;
    
    // Cria a estrutura do menu
    const sidebar = document.createElement('aside');
    sidebar.className = 'dynamic-sidebar sidebar';
    sidebar.innerHTML = `
        <div class="dynamic-brand brand">
            <div class="dynamic-brand-badge brand-badge">
                <img src="../images/logo2.png" alt="Logo Focus Learn" />
            </div>
            <span class="dynamic-brand-text brand-text">FOCUS LEARN</span>
        </div>

        <nav class="dynamic-menu menu">
            <a class="dynamic-item item" href="homeAlunos.html">
                <span class="dynamic-ico ico"><img src="../images/home.png" alt="" /></span>
                <span class="dynamic-label label">Home</span>
            </a>
            <a class="dynamic-item item" href="andamento.html">
                <span class="dynamic-ico ico"><img src="../images/minhajornada.png" alt="" /></span>
                <span class="dynamic-label label">Minha Jornada</span>
            </a>
            <a class="dynamic-item item active" href="cursos.html">
                <span class="dynamic-ico ico"><img src="../images/cursos.png" alt="" /></span>
                <span class="dynamic-label label">Cursos</span>
            </a>
            <a class="dynamic-item item" href="#">
                <span class="dynamic-ico ico"><img src="../images/atividades.png" alt="" /></span>
                <span class="dynamic-label label">Atividades</span>
            </a>
            <a class="dynamic-item item" href="#">
                <span class="dynamic-ico ico"><img src="../images/videoaula.png" alt="" /></span>
                <span class="dynamic-label label">Video Aula</span>
            </a>
            <a class="dynamic-item item" href="#">
                <span class="dynamic-ico ico"><img src="../images/turmas.png" alt="" /></span>
                <span class="dynamic-label label">Turmas</span>
            </a>
            <a class="dynamic-item item" href="#">
                <span class="dynamic-ico ico"><img src="../images/downloads.png" alt="" /></span>
                <span class="dynamic-label label">Downloads</span>
            </a>
        </nav>

        <div class="dynamic-settings settings">
            <div class="dynamic-section-title section-title">Ajustes</div>
            <a class="dynamic-item item" href="#">
                <span class="dynamic-ico ico"><img src="../images/config.png" alt="" /></span>
                <span class="dynamic-label label">Configuração</span>
            </a>
            <a class="dynamic-item dynamic-logout item" href="#">
                <span class="dynamic-ico ico"><img src="../images/logout.png" alt="" /></span>
                <span class="dynamic-label label">Sair</span>
            </a>
        </div>
    `;
    
    // Insere o menu no início do body
    document.body.insertBefore(sidebar, document.body.firstChild);
    
    // Remove o menu original se existir
    const originalSidebar = document.querySelector('.sidebar:not(.dynamic-sidebar)');
    if (originalSidebar) {
        originalSidebar.remove();
    }
    
    // Inicializa o controle do menu APENAS para mobile
    initializeMenuControl();
});

function initializeMenuControl() {
    const menuBtn = document.querySelector('.menu-btn');
    const sidebar = document.querySelector('.dynamic-sidebar');
    
    if (!menuBtn || !sidebar) return;
    
    // Configura estado inicial - NO MOBILE inicia oculto
    function setInitialState() {
        if (window.innerWidth <= 760) {
            sidebar.classList.add('sidebar-hidden');
        }
        // No desktop não faz nada - menu fica visível por padrão
    }
    
    // Event listener para o botão do menu (só funciona no mobile)
    menuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        
        // Só funciona no mobile
        if (window.innerWidth <= 760) {
            sidebar.classList.toggle('sidebar-hidden');
            
            const overlay = document.querySelector('.sidebar-overlay') || createOverlay();
            overlay.classList.toggle('active');
        }
    });
    
    // Fechar sidebar ao clicar no overlay (apenas mobile)
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 760) {
            const overlay = document.querySelector('.sidebar-overlay');
            if (overlay && overlay.contains(e.target)) {
                sidebar.classList.add('sidebar-hidden');
                overlay.classList.remove('active');
            }
        }
    });
    
    // Ajustes no redimensionamento
    window.addEventListener('resize', function() {
        const overlay = document.querySelector('.sidebar-overlay');
        
        if (window.innerWidth > 760) {
            // Desktop: remove overlay e garante menu visível
            if (overlay) overlay.classList.remove('active');
            sidebar.classList.remove('sidebar-hidden');
        } else {
            // Mobile: garante que sidebar está escondida
            sidebar.classList.add('sidebar-hidden');
        }
    });
    
    function createOverlay() {
        const overlay = document.createElement('div');
        overlay.className = 'sidebar-overlay';
        document.body.appendChild(overlay);
        return overlay;
    }
    
    // Define estado inicial
    setInitialState();
}