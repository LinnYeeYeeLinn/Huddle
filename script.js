window.addEventListener("scroll", () => {
    if(window.scrollY > 80){
        document.querySelector("nav").classList.add("bg-light");
        document.querySelector(".scrollUp").style.opacity = "1";
    }else{
        document.querySelector("nav").classList.remove("bg-light");
        document.querySelector(".scrollUp").style.opacity = "0";
    }
})
document.querySelector(".submitBtn").addEventListener("click", (e) => {
    if(document.querySelector(".emailInput").value == ""){
        document.querySelector(".emailLabel").style.display = "block";
    }else{
        document.querySelector(".emailLabel").style.display = "none";
    }
    e.preventDefault();
})