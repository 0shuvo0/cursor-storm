class Cursor{
   constructor(){
    const cursorEl = document.createElement('img')
    cursorEl.setAttribute('src', 'assets/cursor.png')
    cursorEl.classList.add('cursor')

    const posX = parseInt(Math.random() * window.innerWidth)
    const posY = parseInt(Math.random() * window.innerHeight)

    cursorEl.style.top = posY + 'px'
    cursorEl.style.left = posX + 'px'

    this.posX = posX
    this.posY = posY

    const vel = (Math.random() + .5)
    let velX = vel
    let velY = vel
    if(Math.random() > .5) velX = -velX
    if(Math.random() > .5) velY = -velY

    this.velX = velX
    this.velY = velY

    document.body.appendChild(cursorEl)

    this.el = cursorEl
   }

   updatedPos(dx, dy){
    this.posX += dx * this.velX
    this.posY += dy * this.velY

    this.el.style.top = this.posY + 'px'
    this.el.style.left = this.posX + 'px'
   }
}

const cursors = []
const CURSOR_COUNT = 200
for(let i = 0; i < CURSOR_COUNT; i++){
    cursors.push(new Cursor())
}

let mousePos = null
window.addEventListener('mousemove', e => {
    if(!mousePos){
        mousePos = {
            x: e.clientX,
            y: e.clientY
        }
        return
    }
    const prevPos = {...mousePos}
    mousePos =  {
        x: e.clientX,
        y: e.clientY
    }

    const dx = prevPos.x - mousePos.x
    const dy = prevPos.y - mousePos.y

    cursors.forEach(c => {
        c.updatedPos(dx / 2, dy / 2);
    })
})

window.addEventListener('touchmove', t => {
    const e = t.touches[0]
    if(!mousePos){
        mousePos = {
            x: e.clientX,
            y: e.clientY
        }
        return
    }
    const prevPos = {...mousePos}
    mousePos =  {
        x: e.clientX,
        y: e.clientY
    }

    const dx = prevPos.x - mousePos.x
    const dy = prevPos.y - mousePos.y

    cursors.forEach(c => {
        c.updatedPos(dx / 2, dy / 2);
    })
})