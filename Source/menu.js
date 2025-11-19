document.addEventListener("DOMContentLoaded",()=>{

    const menuBtn = document.querySelector('.menu-btn');
    const sidebar = document.querySelector('.sidebar');


    menuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        sidebar.classList.toggle('sidebar-hidden');
        
        if (window.innerWidth <= 760) {
            const overlay = document.querySelector('.sidebar-overlay') || createOverlay();
            overlay.classList.toggle('active');
        }
    });
    
    document.addEventListener('click', function(e) {
        const overlay = document.querySelector('.sidebar-overlay');
        if (overlay && overlay.contains(e.target)) {
            sidebar.classList.add('sidebar-hidden');
            overlay.classList.remove('active');
        }
    });
    
    window.addEventListener('resize', function() {
        if (window.innerWidth > 760) {
            const overlay = document.querySelector('.sidebar-overlay');
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

    if (window.innerWidth <= 760) {
        sidebar.classList.add('sidebar-hidden');
    }

})