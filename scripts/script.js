const headerLinks = document.querySelector(".header-style__links");

    document.getElementById("headleNavbar").addEventListener("click", ()=>{
        headerLinks.classList.toggle("open")
});
const headerUser = document.querySelector(".header-style__user");
    document.getElementById("headleNavuser").addEventListener("click", ()=>{
        headerUser.classList.toggle("user")
});
// função para setar o tema no local storage do navegador
function setTheme(theme){
    localStorage.setItem("theme", theme)
    document.documentElement.className = theme
}

setTheme()

function getTheme(){
    if(localStorage.getItem("theme") === "theme-dark"){
        document.getElementById("toggle").classList.replace("bi-moon-fill", "bi-brightness-high-fill");
        setTheme("theme-light");
    }else{
        document.getElementById("toggle").classList.replace("bi-brightness-high-fill", "bi-moon-fill");
        setTheme("theme-dark");
    }

}

(function(){
    if(localStorage.getItem("theme")==="theme-dark"){
        setTheme("theme-dark")
    }else{
        setTheme("theme-light")
    }
})();