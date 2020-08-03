const navBtns = document.querySelectorAll('.nav-list .nav-link')
navBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        toggle()
    })
})
function toggle() {
    const menu = document.querySelector('.menu-icon')
    const navList = document.querySelector('ul.nav-list')
    navList.classList.toggle('open')
    const children = menu.querySelectorAll('span')
    children.forEach(ele => {
        ele.classList.toggle('open')
    });
}