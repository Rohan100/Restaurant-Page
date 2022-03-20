import "./home.css"
import bugerimg from '../assets/burger.png'
function home(){
    const homeDiv = document.createElement('div')
    homeDiv.classList.add('home')
    const backImgae = document.createElement('img')
    backImgae.classList.add('back-image')
    backImgae.src = bugerimg
    homeDiv.appendChild(backImgae)
    const contendDiv = document.createElement('div')
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    p1.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore reiciendis deleniti eligendi ullam explicabo natus accusamus similique quo, ut laboriosam mollitia dolores veniam labore necessitatibus libero velit aperiam recusandae harum."
    p2.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore reiciendis deleniti eligendi ullam explicabo natus accusamus similique quo, ut laboriosam mollitia dolores veniam labore necessitatibus libero velit aperiam recusandae harum."
    const heading = document.createElement('h1')
    heading.innerText = "The best food in town at one of the best locations!!!"
    heading.classList.add('content-heading')
    contendDiv.appendChild(heading)
    contendDiv.appendChild(p1)
    contendDiv.appendChild(p2)
    contendDiv.classList.add('content')
    homeDiv.appendChild(contendDiv)

    return homeDiv
}
export default home