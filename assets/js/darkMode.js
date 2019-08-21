let darkToggle = document.querySelector(".dark-mode-toggle");

darkToggle.addEventListener("click", () =>{
    if (!getCookie("dark")){
        document.cookie = "dark=true; path=/";
        darkToggle.textContent = "Light Mode";
    }else{
        document.cookie = "dark=true; expires=Thu, 01 Jan 1970 00:00:00; path=/";
        darkToggle.textContent = "Dark Mode";
    }
    checkDark();
});

let checkDark = () => {
    if (getCookie("dark")){
        document.body.classList.add("dark");
        darkToggle.textContent = "Light Mode";
    }else{
        document.body.classList.remove("dark");
    }
    
}
checkDark();






//Disclaimer - stole this function from W3Schools///////////////////////////////
function getCookie(cname) {                                                 ///
    var name = cname + "=";                                                //
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";                                                              //
}                                                                          /////
///////////////////////////////////////////////////////////////////////////////