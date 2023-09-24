let form2 =  document.querySelector("#form2")
let form1 = document.querySelector("#form1")



function hide(){
    document.querySelectorAll("form").forEach((e)=>{
        e.style.display="none"
    })
}

document.querySelector("#create-file").addEventListener("click",function(){
    hide()
   form1.style.display="initial"
   
})
document.querySelector("#create-folder").addEventListener("click",function(){
    hide()
    form2.style.display="initial"
 })
 