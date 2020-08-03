const aosTypes = ['fade-up', 'fade-down', 'fade-right', 'fade-left', 'fade-up-right', 'fade-up-left', 'fade-down-right', 'fade-down-left', 'flip-left', 'flip-right', 'flip-up', 'flip-down', 'zoom-in', 'zoom-in-up', 'zoom-in-down', 'zoom-in-left', 'zoom-in-left', 'zoom-in-right', 'zoom-out', 'zoom-out-up', 'zoom-out-down', 'zoom-out-right', 'zoom-out-left']
const allElements1 = document.querySelectorAll('section')
const allElements2 = document.querySelectorAll('section *')
const allElements = [...allElements1, ...allElements2]

const navBtns = document.querySelectorAll('.nav-list .nav-link')

navBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        toggle()
    })
})

console.log(navBtns)

function toggle() {
    const menu = document.querySelector('.menu-icon')
    const navList = document.querySelector('ul.nav-list')
    navList.classList.toggle('open')
    const children = menu.querySelectorAll('span')
    children.forEach(ele => {
        ele.classList.toggle('open')
    });
}

allElements.forEach(ele => {
    const offset = "aos-offset"
    ele.setAttribute("data-aos", aosTypes[Math.round(Math.random() * aosTypes.length - 1)])
    ele.setAttribute("data-aos-offset", 0)
    console.log(Math.round(Math.random() * aosTypes.length))
})

AOS.init()