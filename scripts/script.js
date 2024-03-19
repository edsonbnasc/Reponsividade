const headerLinks = document.querySelector(".header-style__links");

    document.getElementById("headleNavbar").addEventListener("click", ()=>{
        headerLinks.classList.toggle("open")
})
const headerUser = document.querySelector(".header-style__user");
    document.getElementById("headleNavuser").addEventListener("click", ()=>{
        headerUser.classList.toggle("user")
    })