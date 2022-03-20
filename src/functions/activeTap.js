import home from "../Home/home"
import menu from "../Menu/menu"
import contact from "../Contact/contact"
import render from "./render"

export default function eventHandler(e,page){
    const tabs = document.querySelectorAll('.tab > a')
    
    for(let i = 0;i<tabs.length;i++){
        tabs[i].classList.remove("active")
    }
    if(page === "Home")
        render(home)
    else if(page === "Contact") 
        render(contact)
    else if(page === "Menu")
        render(menu)
    e.target.classList.add("active")
}
