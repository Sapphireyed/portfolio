import sapph from '../img/logo.PNG'
import sapphBlue from '../img/logoBlue.png'
import sapphPurp from '../img/logoPurp.png'

let w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
let targetWidth = 1260;

function displaySkills() {
    let canvasSkills = document.getElementById('skills')
    canvasSkills.width = window.innerWidth * 0.39
    canvasSkills.height = window.innerHeight * 0.7

    let ctxSkills = canvasSkills.getContext('2d')

    let logos = [sapph, sapphBlue, sapphPurp]
    let skillsNames = ['CSS', 'JS', 'HTML', 'jQuery', 'Webpack', 'Bootstrap', 'npm', 'github', 'RWD']
    let skillsArr = []

    let canvCenterX = canvasSkills.width / 2
    let canvCenterY = canvasSkills.height / 2

    let zoom = false;
    let frame = 0

    let mouseAbout = {
        x: null,
        y: null,
        radius: 50
    }

    window.addEventListener('mousemove', function (e) {
        mouseAbout.x = e.x - 933
        mouseAbout.y = e.y - 100;
    })
    class Skill {
        constructor(src) {
            this.x = Math.random() * canvasSkills.width
            this.y = Math.random() * canvasSkills.height
            this.size = w < targetWidth ? 25 : 50
            this.orygSize = this.size
            this.speedX = (Math.random() - 0.5) * (this.size / 20)
            this.speedY = (Math.random() - 0.5) * (this.size / 20)
            this.orygSpeedX = this.speedX
            this.orygSpeedY = this.speedY
            this.skill = Math.floor(Math.random() * skillsNames.length)
            this.src = src
        }
        draw() {
            const grr = new Image()
            grr.src = this.src
            let dx = this.x - canvCenterX
            let dy = this.y - canvCenterY
            let dist = Math.sqrt(dx * dx + dy * dy)
            this.size = w < targetWidth ? (Math.random() * 0.4 * (dist / canvasSkills.width)) / 2 : Math.random() * 0.4 * (dist / canvasSkills.width)
            this.size = w < targetWidth ? (this.orygSize * (dist / canvasSkills.width) * 3)/2 : this.orygSize * (dist / canvasSkills.width) * 3
            ctxSkills.drawImage(grr, this.x, this.y, this.size, this.size)
            //   ctxSkills.strokeRect(this.x, this.y, this.size, this.size)
            ctxSkills.fillStyle = 'white'
            ctxSkills.font = this.size * 0.3 + 'px Georgia'
            ctxSkills.fillText(skillsNames[this.skill], this.x + this.size / 4, this.y + this.size / 2, this.size / 2)
        }
        update() {
            this.x += this.speedX
            this.y += this.speedY
            //coliding with canvas boundries
            if (this.x <= 0 || this.x >= canvasSkills.width - this.size) {
                this.speedX *= -1
            }
            if (this.y <= 0 || this.y >= canvasSkills.height - this.size) {
                this.speedY *= -1
            }
            if (this.x <= -100) this.x = 0
            if (this.x >= canvasSkills.width + 100) this.x = canvasSkills.width - this.size
            if (this.y <= -100) this.y = 0
            if (this.y >= canvasSkills.height + 100) this.y = canvasSkills.height - this.size

        }
    }

    let sapphNum = w > targetWidth ? 17 : 25
    function init() {
        for (let i = 0; i < sapphNum; i++) {
            let logosrc = logos[Math.floor(Math.random() * logos.length)]
            skillsArr.push(new Skill(logosrc))
        }
    }
    init()

    var grd = ctxSkills.createRadialGradient(canvasSkills.width / 2, canvasSkills.height / 2, 0, canvasSkills.width / 2, canvasSkills.height / 2, 333);
    grd.addColorStop(0, "#000");
    grd.addColorStop(0.35, "#00022a")
    grd.addColorStop(0.70, '#080a56');
    grd.addColorStop(0.85, '#14166d');
    grd.addColorStop(0.90, '#5858c7')
    grd.addColorStop(0.90, "#3235a7");
    var grd1 = ctxSkills.createRadialGradient(canvasSkills.width / 2, canvasSkills.height / 2, 0, canvasSkills.width / 2, canvasSkills.height / 2, 360);
    grd1.addColorStop(0, "#3235a7");
    grd1.addColorStop(0.1, "#000")
    grd1.addColorStop(0.6, '#00022a');
    grd1.addColorStop(0.70, '#080a56');
    grd1.addColorStop(0.85, '#14166d')
    grd1.addColorStop(0.95, "#5858c7");

    function drawSkills() {
        ctxSkills.fillStyle = grd
        ctxSkills.fillRect(0, 0, canvasSkills.width, canvasSkills.height)
        for (let i = 0; i < skillsArr.length; i++) {
            skillsArr[i].draw()

            //colision between each other
            for (let j = i + 1; j < skillsArr.length; j++) {
                let iCenterX = skillsArr[i].x + skillsArr[i].size / 2;
                let iCenterY = skillsArr[i].y + skillsArr[i].size / 2;
                let jCenterX = skillsArr[j].x + skillsArr[j].size / 2;
                let jCenterY = skillsArr[j].y + skillsArr[j].size / 2;
                let dx = iCenterX - jCenterX
                let dy = iCenterY - jCenterY
                let dist = Math.sqrt(dx * dx + dy * dy)
                let vCollisionNorm = {
                    x: dx / dist,
                    y: dy / dist
                };
                if (dist < (skillsArr[i].size / 2 + skillsArr[j].size / 2)) {
                    skillsArr[i].speedX = vCollisionNorm.x * (skillsArr[i].size) / 30
                    skillsArr[i].speedY = vCollisionNorm.y * (skillsArr[i].size) / 30
                    skillsArr[j].speedX = vCollisionNorm.x * -skillsArr[j].size / 30
                    skillsArr[j].speedY = vCollisionNorm.y * -skillsArr[j].size / 30


                }

            }
            skillsArr[i].update()
            // zoom on mouse hover
            let distMx = skillsArr[i].x - (mouseAbout.x)
            let distMy = skillsArr[i].y - mouseAbout.y
            let distM = Math.sqrt(distMx * distMx + distMy * distMy)
            let zoomed = false
            if (distM < mouseAbout.radius) {
                if (zoomed == false) {
                    zoomed = new Image()
                    const zoomedSize = 120
                    zoomed.src = skillsArr[i].src
                    ctxSkills.drawImage(zoomed, mouseAbout.x - 50, mouseAbout.y - 50, zoomedSize, zoomedSize)
                    ctxSkills.fillStyle = 'white'
                    ctxSkills.font = zoomedSize * 0.3 + 'px Georgia'
                    ctxSkills.fillText(skillsNames[skillsArr[i].skill], mouseAbout.x - 50 + zoomedSize / 4, mouseAbout.y - 50 + zoomedSize / 2, zoomedSize / 2)
                }

            } else {
                zoomed = ''
            }
        }
        requestAnimationFrame(drawSkills)
        frame++;
    }
    if (canvasSkills.style.display !== 'none') {
        drawSkills()
    }
}

export { displaySkills }