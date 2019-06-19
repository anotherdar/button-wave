let btns = document.querySelectorAll('.button-wave') || document.querySelector('.button-wave')
let button = Array.from(btns)

const createEffect = function(e) {
    
    let circle = document.createElement('div')
    this.appendChild(circle)
    
    circle.classList.add('ripple')

    
    let num = Math.max(this.clientWidth,this.clientHeight)
    circle.style.width = circle.style.height = num + 'px'

   
    let rect = this.getBoundingClientRect();
    circle.style.left = e.clientX - rect.left - num/2 + 'px';
    circle.style.top = e.clientY - rect.top - num/2 + 'px';
    
    
    circle.addEventListener('animationend', ()=> {
        button.forEach((el, index) => {
           try {
               el.removeChild(circle)
           } catch (error) {
               
           }
        })
    })
}

!!button ? button.forEach(el => { 
    el.addEventListener('click', createEffect)

}) : button.addEventListener('click', createEffect)
