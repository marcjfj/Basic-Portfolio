let loading = document.querySelector(".loading");

let delay = (url) => {
    loading.classList.remove("hidden");
    setTimeout(() => {window.location = url}, 300);
}


window.onload = () => {
    if (!loading.classList.contains("hidden")){
        loading.classList.add("hidden");
    }
}