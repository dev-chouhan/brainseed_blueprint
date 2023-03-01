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
animateValue("eventsCount", 0, 10, 3000);
animateValue("opporCount", 0, 15, 3000);



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
    pastEventsNav.style.backgroundColor = "#f3f9f3";
    upcomingEventsNav.style.backgroundColor = "#fff";
    ongoingEventsNav.style.backgroundColor = "#fff"
    pastEventsNav.style.borderBottom = "2px solid #dff3df";
    upcomingEventsNav.style.borderBottom = "none";
    ongoingEventsNav.style.borderBottom = "none";
}

upcomingEventsNav.onclick = function(){
    upcomingEvents.style.left = "-33.38%";
    pastEvents.style.left = "-33.38%";
    ongoingEvents.style.left = "-33.38%";
    upcomingEventsNav.style.backgroundColor = "#f3f9f3";
    pastEventsNav.style.backgroundColor = "#fff";
    ongoingEventsNav.style.backgroundColor = "#fff";
    pastEventsNav.style.borderBottom = "none";
    upcomingEventsNav.style.borderBottom = "2px solid #dff3df";
    ongoingEventsNav.style.borderBottom = "none";
}

ongoingEventsNav.onclick = function(){
    ongoingEvents.style.left = "-66.72%";
    upcomingEvents.style.left = "-66.72%";
    pastEvents.style.left = "-66.72%";
    ongoingEventsNav.style.backgroundColor = "#f3f9f3";
    pastEventsNav.style.backgroundColor = "#fff";
    upcomingEventsNav.style.backgroundColor = "#fff";
    pastEventsNav.style.borderBottom = "none";
    upcomingEventsNav.style.borderBottom = "none";
    ongoingEventsNav.style.borderBottom = "2px solid #dff3df";
}