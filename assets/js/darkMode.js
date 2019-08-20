// adds a "dark" class to the body
// in style.css I've added a set of rules for when .dark is applied
// I'm using cookies so that the dark/light preference persists across pages

let darkToggle = document.querySelector(".dark-mode-toggle");
let loading = document.querySelector(".loading");

darkToggle.addEventListener("click", () =>{
    if (document.cookie != "dark=true"){
        document.cookie = "dark=true; path=/";
        darkToggle.textContent = "Light Mode";
    }else{
        document.cookie = "dark=true; expires=Thu, 01 Jan 1970 00:00:00; path=/";
        darkToggle.textContent = "Dark Mode";
    }
    checkDark();
});

let checkDark = () => {
    if (document.cookie == "dark=true"){
        document.body.classList.add("dark");
        darkToggle.textContent = "Light Mode";
    }else{
        document.body.classList.remove("dark");
    }
    
}

checkDark();

window.onload = () => {
    if (!loading.classList.contains("hidden")){
        loading.classList.add("hidden");
    }
}