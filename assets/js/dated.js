let dateToggle = document.querySelector(".date-toggle");

dateToggle.addEventListener("click", () =>{
    if (!getCookie("date")){
        document.cookie = "date=true; path=/";
        dateToggle.textContent = "Oldify";
    }else{
        document.cookie = "date=true; expires=Thu, 01 Jan 1970 00:00:00; path=/";
        dateToggle.textContent = "Modernize";
    }
    checkDate();
});

let checkDate = () => {
    if (getCookie("date")){
        document.body.classList.add("twenty-nineteen");
        dateToggle.textContent = "Oldify";
    }else{
        document.body.classList.remove("twenty-nineteen");
    }
    
}
checkDate();






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