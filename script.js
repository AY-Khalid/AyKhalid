console.log(
    "it's working fine"
)

let theme = localStorage.getItem("theme");
if(theme == null){
    setTheme("original");
} else{
    setTheme(theme);
}

let themeDots = document.getElementsByClassName("theme-dot");

for(var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener("click", function(){
        let mode = this.dataset.mode;
        console.log("click:", mode);
        setTheme(mode);
    })
}

function setTheme(mode){ 
    if(mode == "original") {
        document.getElementById("theme-style").href= "style.css";
    }
    if(mode == "dark") {
        document.getElementById("theme-style").href= "dark.css";
    }
    if(mode == "light") {
        document.getElementById("theme-style").href= "light.css";
    }
    if(mode == "blue") {
        document.getElementById("theme-style").href= "blue.css";
    }
    if(mode == "red") {
        document.getElementById("theme-style").href= "red.css";
    }

    localStorage.setItem("theme", mode);

}