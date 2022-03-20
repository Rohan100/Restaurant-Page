import emailSvg from '../assets/svgs/email.svg'
import locationSvg from '../assets/svgs/location.svg'
import mobileSvg from '../assets/svgs/mobile.svg'
import clockSvg from '../assets/svgs/time.svg'
import './contact.css'

export default function contact() {
    const contactDiv = document.createElement("div")
    contactDiv.classList.add("contact")
    const emailContact = document.createElement("div")
    const address = document.createElement("div")
    const opening = document.createElement("div")
    const phoneContact = document.createElement("div")

    emailContact.appendChild(addContactInfo(emailSvg))
    address.appendChild(addContactInfo(locationSvg))
    phoneContact.appendChild(addContactInfo(mobileSvg))
    opening.appendChild(addContactInfo(clockSvg))

    emailContact.appendChild(addElement("Email","noreplay@noreplay.com","help@help.com"))
    address.appendChild(addElement("Contact Address","301 The Greenhouse, Custard","Factory, London, E2 8DY."))
    phoneContact.appendChild(addElement("Call Us Today!","(M) +44 (0) 123 456 7890","(O) +44 (0) 123 456 7890"))
    opening.appendChild(addElement("Opening Hour","Mon to Sat - 9 AM to 11 PM","Sunday 8 AM to 12 PM"))

    contactDiv.appendChild(emailContact)
    contactDiv.appendChild(address)
    contactDiv.appendChild(phoneContact)
    contactDiv.appendChild(opening)
    
    return contactDiv
}

function addContactInfo(svgIcon) {
    const iconDiv = document.createElement('div')
    const icon = document.createElement('object')
    icon.type = "image/svg+xml"
    icon.classList.add("icon")
    icon.data = svgIcon
    iconDiv.classList.add("icon-div")
    iconDiv.appendChild(icon)
    return iconDiv
}

function addElement(heading,text1,text2){
    const div = document.createElement('div')
    div.classList.add('contact-info')
    const headingMsg = document.createElement('h3')
    headingMsg.innerText = heading
    const p1 = document.createElement('p')
    p1.innerText = text1
    const p2 = document.createElement('p')
    p2.innerText = text2
    div.appendChild(headingMsg)
    div.appendChild(p1)
    div.appendChild(p2)
    return div;
}