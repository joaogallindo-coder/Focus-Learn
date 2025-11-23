document.addEventListener("DOMContentLoaded", () => {
    
    if (document.querySelector('.dynamic-sidebar')) return;
    
    
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
            <a class="dynamic-item item" href="cursos.html">
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
    
    
    document.body.insertBefore(sidebar, document.body.firstChild);
    
    
    const originalSidebar = document.querySelector('.sidebar:not(.dynamic-sidebar)');
    if (originalSidebar) {
        originalSidebar.remove();
    }
    
    
    setActiveMenuItem();
    initializeMenuControl();
});


function setActiveMenuItem() {
    const currentPage = window.location.pathname.split('/').pop();
    const menuItems = document.querySelectorAll('.dynamic-item');
    
    menuItems.forEach(item => {
        
        item.classList.remove('active');
        
       
        const itemHref = item.getAttribute('href');
        if (itemHref && itemHref === currentPage) {
            item.classList.add('active');
        }
    });
}

function initializeMenuControl() {
    const menuBtn = document.querySelector('.menu-btn');
    const sidebar = document.querySelector('.dynamic-sidebar');
    
    if (!menuBtn || !sidebar) return;
    
    
    function setInitialState() {
        if (window.innerWidth <= 760) {
            sidebar.classList.add('sidebar-hidden');
        }
    }
    
    
    menuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        
        
        if (window.innerWidth <= 760) {
            sidebar.classList.toggle('sidebar-hidden');
            
            const overlay = document.querySelector('.sidebar-overlay') || createOverlay();
            overlay.classList.toggle('active');
        }
    });
    
    
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 760) {
            const overlay = document.querySelector('.sidebar-overlay');
            if (overlay && overlay.contains(e.target)) {
                sidebar.classList.add('sidebar-hidden');
                overlay.classList.remove('active');
            }
        }
    });
    
    
    window.addEventListener('resize', function() {
        const overlay = document.querySelector('.sidebar-overlay');
        
        if (window.innerWidth > 760) {
            
            if (overlay) overlay.classList.remove('active');
            sidebar.classList.remove('sidebar-hidden');
        } else {
            
            sidebar.classList.add('sidebar-hidden');
        }
    });
    
    function createOverlay() {
        const overlay = document.createElement('div');
        overlay.className = 'sidebar-overlay';
        document.body.appendChild(overlay);
        return overlay;
    }
    
    
    setInitialState();
}