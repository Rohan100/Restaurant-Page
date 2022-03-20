import './navbar.css'
import navIcon from '../assets/nav_icon.png'
import eventHandler from '../functions/activeTap';
function navbar(){
    const nav = document.createElement('nav');
    const tabs = ["Home","Menu","Contact"]
    const brandDiv = document.createElement('div')
    brandDiv.innerText = "Real Restaurant"
    brandDiv.classList.add("brand-name")
    nav.appendChild(brandDiv)
    tabs.forEach(item =>{
        let div = document.createElement('div')
        let tab = document.createElement('a')
        item == "Home" && tab.classList.add('active')
        tab.innerText = item
        tab.addEventListener('click',(e) => eventHandler(e,item))
        div.classList.add('tab')
        div.appendChild(tab)
        nav.appendChild(div)
    })
    const iconDiv = document.createElement('div')
    iconDiv.classList.add('nav-icon')
    const img = new Image()
    img.src = navIcon
    iconDiv.appendChild(img)
    nav.appendChild(iconDiv)
    return nav
}
export default navbar