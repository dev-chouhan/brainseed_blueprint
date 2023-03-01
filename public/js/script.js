console.log("Js is active");

// For count animaation
function animateValue(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function () {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

var fun = document.getElementById("showoffPage");
fun.addEventListener("mouseenter", funRun);

//ToDo: count will start from loading of a page, we need to start it when user visits on that element
// Calling each id elements to show increasing animation of count.
function funRun(){
    animateValue("membersCount", 0, 50, 3000);
    animateValue("eventsCount", 0, 25, 3000);
    animateValue("opporCount", 0, 20, 3000);
};



// Scroll To Top Function.
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

setTimeout(() => {
    const disapearMe = document.getElementById("disapearMeAfter2Seconds")
    disapearMe.style.display = 'none';
}, 5000);