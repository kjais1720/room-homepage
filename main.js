//Variable Declaration
const nav = document.querySelector("nav");
const menu = document. querySelector(".menu");
const close = document.querySelector(".close");
const home = document.querySelector(".home");
const service = document.querySelectorAll(".service");
const product = [...service]
const arrImg = [
    "./images/desktop-image-hero-1.jpg",
    "./images/desktop-image-hero-2.jpg",
    "./images/desktop-image-hero-3.jpg"
]


//Mobile Header
menu.addEventListener("click", ()=>{
    nav.classList.toggle("mobile-nav")
});
close.addEventListener("click", ()=>{
    nav.classList.toggle("mobile-nav")
});


var activeIndex = 0

document.querySelectorAll(".prev").forEach((prev)=>{
    prev.addEventListener('click', ()=>{
        if( activeIndex === 0){
            activeIndex = service.length-1
            home.style.backgroundImage = `url(${arrImg[activeIndex]})`
            toggle()
        } else{
            activeIndex-=1
            home.style.backgroundImage = `url(${arrImg[activeIndex]})`
            toggle()
        }
    })
})

document.querySelectorAll(".next").forEach((nex)=>{
    nex.addEventListener('click', ()=>{
        if( activeIndex === service.length-1){
            activeIndex = 0
            home.style.backgroundImage = `url(${arrImg[activeIndex]})`
            toggle()
        } else{
            activeIndex+=1
            home.style.backgroundImage = `url(${arrImg[activeIndex]})`
            toggle()
        }
    })
})

function toggle(){
    document.querySelector(".current").classList.remove("current")
    service[activeIndex].classList.add("current")
}

/*
//Image and text changing
let index = 0
const nextin = ()=>{
    index++
    if(index < arrImg.length){
        home.style.backgroundImage = `url(${arrImg[index]})`
        toggle()
        //product[index - 1].classList.remove('current')
        //product[index].classList.add('current')
        
    }
    else{
        home.style.backgroundImage = `url(${arrImg[0]})`
        index = 0
        
    }
    console.log(index)
}

const previous = ()=>{
    index--
    if(index < arrImg.length && index !== -1){
        home.style.backgroundImage = `url(${arrImg[index]})`
        toggle()
    }
    else{
        home.style.backgroundImage = `url(${arrImg[2]})`
        index = 2
        toggle()
    }
}

next.addEventListener("click", nextin)
prev.addEventListener("click", previous)

console.log(product)
console.log(arrImg)
//service[index].style.display = "block"

function toggle(){
    document.querySelector(".current").classList.remove("current")
    service[index].classList.add("current")
}
*/