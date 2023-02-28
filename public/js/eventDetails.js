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
animateValue("eventsCount", 0, 250, 5000);
animateValue("opporCount", 0, 200, 5000);



// multi-step container

var pastEventsNav = document.getElementById("pastEventsNav");
var upcomingEventsNav = document.getElementById("upcomingEventsNav");
var ongoingEventsNav = document.getElementById("ongoingEventsNav");

var pastEvents = document.getElementById("pastEvents");
var upcomingEvents = document.getElementById("upcomingEvents");
var ongoingEvents = document.getElementById("ongoingEvents");

pastEventsNav.onclick = function(){
    pastEvents.style.left = "0";
    upcomingEvents.style.left = "0";
    ongoingEvents.style.left = "0";
}

upcomingEventsNav.onclick = function(){
    upcomingEvents.style.left = "-33.38%";
    pastEvents.style.left = "-33.38%";
    ongoingEvents.style.left = "-33.38%";
}

ongoingEventsNav.onclick = function(){
    ongoingEvents.style.left = "-66.72%";
    upcomingEvents.style.left = "-66.72%";
    pastEvents.style.left = "-66.72%";
}