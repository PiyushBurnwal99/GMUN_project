// function bgchange()
// {
//     document.body.style.backgroundColor="white";
//    document.body.style.color="black";

  
// }
document.getElementById("body").onclick= function(){bgchange()};
function bgchange(){
    document.getElementById("body").classList.toggle("change");
    document.getElementById("mainheading").classList.toggle("change2");
    document.getElementById("names_committee1").classList.toggle("change3");
    document.getElementById("names_committee2").classList.toggle("change3");
    document.getElementById("names_committee3").classList.toggle("change3");
    document.getElementById("names_committee4").classList.toggle("change3");
    document.getElementById("names_committee5").classList.toggle("change3");
    document.getElementById("register").classList.toggle("change4");

}