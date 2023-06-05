
function sea(){
let value = document.getElementById("Group").value
let num = value.slice(-3,-2)
if(num==="1") {
    document.getElementById("text").innerHTML="Seher qrupu"
    document.getElementById("text").style.color = "blue"

}
else if(num==="2"){
document.getElementById("text").innerHTML="Gunorta qrupu"
document.getElementById("text").style.color = "red"

}
else if(num==="3"){
document.getElementById("text").innerHTML="Axsam qrupu"
document.getElementById("text").style.color = "orange"

}
}

function dark(){
if(document.body.style.backgroundColor==="white"){
    document.body.style.backgroundColor="black"
}
else{
    document.body.style.backgroundColor="white" 
}
}
