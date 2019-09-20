let menuBtn =  document.querySelector('.menu-btn')
let mobileMenu = document.querySelector('.mobile-menu')



menuBtn.addEventListener('click',function (e) {
    mobileMenu.classList.toggle('active')
    console.log(menuBtn)
})


console.log(menuBtn)
