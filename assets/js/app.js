
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
$(window).on('load',function(){


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:25,
    nav:true,
    smartSpeed:700,
    responsive:{
        0:{
            items:1
        },
        700:{
            items:2
        },
        1000:{
            items:2
        }
    }
})})