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


//ToDo: count will start from loading of a page, we need to start it when user visits on that element
// Calling each id elements to show increasing animation of count.
animateValue("membersCount", 0, 500, 5000);
animateValue("eventsCount", 0, 250, 5000);
animateValue("opporCount", 0, 200, 5000);


