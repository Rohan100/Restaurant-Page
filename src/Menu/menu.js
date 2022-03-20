import data from './data'
import './menu.css'

function menu(){
    const menuDiv = document.createElement('div')
    menuDiv.classList.add("menu")
    data.map(i => {
        menuDiv.appendChild(menuElement(i.name,i.discription,i.img))
    })
    return menuDiv
}

function menuElement(name , discription_,imgSrc){
    const div = document.createElement('div')
    div.classList.add('menu-item')
    const imgDiv = document.createElement('div')
    
    const img = document.createElement('img')
    img.alt = name
    img.src = imgSrc
    imgDiv.appendChild(img)
    imgDiv.classList.add('item-img')
    const discription = document.createElement('div')
    discription.classList.add('discription')
    const nameHeading = document.createElement('h2')
    nameHeading.innerText = name
    discription.appendChild(nameHeading)
    const discriptionText = document.createElement('p')
    discriptionText.innerText = discription_
    discription.appendChild(discriptionText)
    div.appendChild(imgDiv)
    div.appendChild(discription)
    return div
}

export default menu