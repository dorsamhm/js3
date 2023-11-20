let menu = document.getElementById('menu')
let toggle = document.getElementById('toggleButton')

let i = 1;
toggle.addEventListener('click', function(){
    if(i%2){
        menu.style.top = '0px'
    }
    else{
        menu.style.top = '-100vh'
    }
    i++
})
let about = document.getElementsByClassName('about')[0]
let cardNext = document.querySelectorAll('.cardNext')
let mainCard = document.getElementById('mainCard')
// console.log(about);
let aboutSt =  about.offsetTop
let sec33 = document.getElementsByClassName('sec33')[0]
let sec33st =  sec33.offsetTop
// console.log(aboutSt);
let _event = document.getElementsByClassName('event')[0]
let _svg = document.querySelector('.event svg')
let eventBox = document.getElementsByClassName('eventBox')[0]
// console.log(_svg);
let eventSt = _event.offsetTop
let foot = document.getElementsByClassName('foot')[0]
let footSt = foot.offsetTop
// console.log(footSt);
let spanFoot = document.querySelectorAll('.will span')
let footImg = document.getElementsByClassName('footImg')[0]
// console.log(eventSt);
window.addEventListener('scroll', ()=>{
    let temp = window.scrollY
    cardNext[0].style.top = -temp + 'px'
    cardNext[4].style.top = -temp + 'px'
    cardNext[1].style.top = -temp/2 + 'px'
    cardNext[3].style.top = -temp/2 + 'px'
    about.style.top = -temp/5 + 'px'
    let mainCardTop = mainCard.computedStyleMap().get('top').value
    let mainCardLeft = mainCard.computedStyleMap().get('left').value
    if(temp*2.5 >= aboutSt){
        if(temp*2 > sec33st){
            mainCard.style.top = mainCardTop+ 'px'
            mainCard.style.left = mainCardLeft + 'px'
            if(temp >= eventSt){
                _svg.style.transform= 'rotateX(0deg)'
                if(temp*.8 >= eventSt){
                    eventBox.style.transform= 'rotateX(0deg)'
                    if(temp*1.1 >= footSt){
                        spanFoot[1].style.left = '-5%'
                        spanFoot[2].style.left = '-10%'
                        spanFoot[1].style.top = '30%'
                        spanFoot[2].style.top = '50%'
                        spanFoot[1].style.color = '#315686'
                        spanFoot[2].style.color = '#223d61'
                        if(temp*.9 >= footSt){
                            footImg.style.transform = 'rotate(-20deg) translateX(-18%)'
                        }
                        else{
                            footImg.style.transform = 'rotate(20deg) translateX(10%)'
                        }
                    }
                    else{
                        spanFoot[1].style.top = '0'
                        spanFoot[2].style.top = '0'
                        spanFoot[1].style.left = '0'
                        spanFoot[2].style.left = '0'
                    }
                }else{
                    eventBox.style.transform= 'rotateX(50deg)'
                }
            }
            else{
                _svg.style.transform= 'rotateX(90deg)'
            }
        }
        else{
            mainCard.style.top = mainCardTop + temp/2 + 'px'
            mainCard.style.left = mainCardLeft - temp/13 + 'px'
            mainCard.classList.add('mainCard')
        }
    }
    else{
        mainCard.classList.remove('mainCard')
        mainCard.style.top = '2vh'
        mainCard.style.left = '30vw'
    }
})

let pics = document.querySelectorAll('.fontCards')
// console.log(pics);
for(let i = 0; i<pics.length; i++){
    pics[i].setAttribute('data-status', true)
}
pics.forEach(function(val){
    val.addEventListener('click', ()=>{
        let status = val.getAttribute('data-status')
        for(i = 0; i<pics.length; i++){
            pics[i].style.transform = 'rotateY(0deg)'
            pics[i].setAttribute('data-status', true)
        }
        if(status == 'true'){
            val.style.transform = 'rotateY(180deg)'
            val.setAttribute('data-status', false) 
        }
        else{
            // alert('correct')
            val.style.transform = 'rotateY(0deg)'
            val.setAttribute('data-status', true)
        }
    })
})