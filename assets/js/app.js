
// function scroll(){
//     window.addEventListener("scroll",()=>{
        
//     const nav =document.querySelector(".navbar")

//     nav.classList.toggle("sticky",window.scrollY>1000)

        
//     })
// }
// scroll()
function scroll(){ 
    window.addEventListener("scroll",()=>{
         const nav = document.querySelector(".navbar")
         nav.classList.toggle("sticky",window.scrollY>1000)
    })

}
scroll()

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:25,
    nav:true,
    smartSpeed:700,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})