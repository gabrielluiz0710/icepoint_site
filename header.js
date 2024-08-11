function toggleSidebar() {
    const sidebar = document.getElementById('navigation_header');
    const body = document.body;

    sidebar.classList.toggle('active');

    if (sidebar.classList.contains('active')) {
        body.classList.add('no-scroll');
    } else {
        body.classList.remove('no-scroll');
    }
}

document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('navigation_header');
    const btnIcon = document.querySelector('.btn_icon_header');

    if (sidebar.classList.contains('active') && !sidebar.contains(event.target) && !btnIcon.contains(event.target)) {
        sidebar.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
});
