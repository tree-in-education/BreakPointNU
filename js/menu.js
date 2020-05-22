const sidebarEl = document.getElementById('theSidebar');
const menuCloseCtrl = document.querySelector('.close-button');
const menuCtrl = document.getElementById('menu-toggle');

menuCtrl.addEventListener('click', function() {
    if( !classie.has(sidebarEl, 'sidebar--open') ) {
        classie.add(sidebarEl, 'sidebar--open');	
    }
});

menuCloseCtrl.addEventListener('click', function() {
    if( classie.has(sidebarEl, 'sidebar--open') ) {
        classie.remove(sidebarEl, 'sidebar--open');
    }
});