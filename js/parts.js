var Select = document.getElementById("select");
var cHek = document.querySelector(".checkbox")
var cHeki = cHek.querySelectorAll(".ckbx")
console.log(cHeki)
console.log(cHek)
Select.onclick = function(ev){
    var e = ev || window.event;
    var target = e.target || window.event.srcElement;
    if(target.className == "ckbx"){
        target.className = "active"
    }if(target.className == "active"){
        target.style.backgroundPosition = "0 -148px"
    }
}