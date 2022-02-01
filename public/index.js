const btn = document.getElementById("nav-btn");
const list = document.getElementById("nav");
btn.addEventListener("click", ()=>{
    if(list.classList.contains("hidden")){
        list.classList.remove("hidden");
    }else{
        list.classList.add("hidden");
    }
})