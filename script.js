    
    function checkMe() {
    var cb = document.getElementById("kurs1");
    var text = document.getElementById("text1");

    var cb2 = document.getElementById("kurs2");
    var text2 = document.getElementById("text2")

    var cb3 = document.getElementById("kurs3");
    var text3 = document.getElementById("text3")

    var cb4 = document.getElementById("kurs4");
    var text4 = document.getElementById("text4")

    var cb5 = document.getElementById("kurs5");
    var text5 = document.getElementById("text5")

    var cb6 = document.getElementById("kurs6");
    var text6 = document.getElementById("text6")

    var cb7 = document.getElementById("kurs7");
    var text7 = document.getElementById("text7");
    
    if (cb.checked == true) {
        text.style.display = "block";
    }
    else {
        text.style.display = "none";
    }
    if (cb2.checked == true) {
        text2.style.display = "block"; 
    }
     else {
        text2.style.display = "none";
    }
    if (cb3.checked == true) {
        text3.style.display = "block"; 
    }
     else {
        text3.style.display = "none";
    }
    if (cb4.checked == true) {
        text4.style.display = "block"; 
    }
     else {
        text4.style.display = "none";
    }
    if (cb5.checked == true) {
        text5.style.display = "block"; 
    }
     else {
        text5.style.display = "none";
    }
    if (cb6.checked == true) {
        text6.style.display = "block"; 
    }
     else {
        text6.style.display = "none";
    }
    if (cb7.checked == true) {
        text7.style.display = "block";
    }
    else {
        text7.style.display = "none";
    }
    
} 

