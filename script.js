const menu = document.querySelector('#menu-btn')
const navbar = document.querySelector('.navbar')

menu.onclick = ()=>{
    navbar.classList.toggle('popup')
    menu.classList.toggle('fa-times')
}