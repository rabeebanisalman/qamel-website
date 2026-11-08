var btn = document.getElementById("menu-button");
var menu = document.getElementById("menu-bar");

btn.onclick = function () {
    if (menu.style.display === "none") {
        menu.style.display = "block";
    }
    else {
        menu.style.display = "none";
    }
}

var link = menu.getElementsByTagName("a");
for (var i=0; i<links.length; i++) {
    links[i].onclick = function () {
        menu.style.display = "none";
    };
}