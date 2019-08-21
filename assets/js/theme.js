let colors = ["#4aaaa5", "#f06d06", "#eb3d34", "#dd30e3", "#3492eb", "#222"];
let themeBtn = document.querySelector(".theme-toggle");
let expanded = false;
themeBtn.addEventListener("click", () =>{
    if (!expanded){
        colors.forEach(color => {

            let colorBtn = document.createElement("button");
            colorBtn.style.background = color;
            themeBtn.appendChild(colorBtn);

            colorBtn.addEventListener("click", () => {
                document.cookie = `theme=${color}; path=/`;
                checkTheme();
            });
            
        });
        expanded = true;
    }else{
        themeBtn.innerHTML = "Theme";
        expanded = false;
    }
    
})

let checkTheme = () => {
    if (getCookie("theme")){
        let theme = getCookie("theme");

        document.querySelectorAll("h1").forEach(h => {
            h.style.color = theme;
        });
        document.querySelector(".logo").style.background = theme;
        document.querySelector(".loading").style.background = theme;
        document.querySelector("footer").style.borderColor = theme;
        document.querySelectorAll("figcaption").forEach(f => {
            f.style.background = theme;
        });
        document.querySelectorAll("button").forEach(b => {
            b.style.background = theme;
        });
    }
    
}

checkTheme();