function openNav() {

    if (x.matches) {
        document.getElementById("mySidenav").style.width = "300px";
    }
    else{
    document.getElementById("mySidenav").style.width = "1000px";
    }
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


let x = window.matchMedia("(max-width: 500px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes