import './style.scss';
import './home.scss';
import { nav } from './nav/nav.js'
import mainPic from './img/homeBg.png'

window.addEventListener('load', function () {
    document.querySelectorAll('#navContainer nav #nav a')[0].style.color = 'white'
})

let mainSect = document.createElement('section')
mainSect.id = 'mainSect'
mainSect.innerHTML = '<div><img src="' + mainPic + '" alt="main background picture">'

document.body.append(nav, mainSect)