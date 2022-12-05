$('.contact__button').click(function(e){
    e.preventDefault();
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    if(name.length == 0 || email.length==0){
        alert("Please fill name and email before submitting!");
    }else {
        alert("Form submitted succesfully!");
    }
})


const hamburger =document.querySelector(".hamburger");
const navMenu =document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})


