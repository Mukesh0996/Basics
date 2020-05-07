let mouse = document.getElementById("mouse");

mouse.addEventListener("mouseover", function(event){
    event.target.style.backgroundColor ="purple";
    event.target.style.color ="white"
    console.log("function called")
})
mouse.addEventListener("mouseout", function(event){
    event.target.style.backgroundColor ="";
    event.target.style.color ="";
})