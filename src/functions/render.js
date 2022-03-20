import navbar from "../Navbar/navbar"
import home from '../Home/home'
export default function render(page) {
    const app = document.querySelector('.app')
    if (app.children.length > 1) {
        app.replaceChild(page(), app.children[1])
    }
    else {
        app.appendChild(navbar())
        app.appendChild(page())
    }
}