console.log("Js is active");

// For transversing carousel in right in every 2 sec.
const rightSwipe = document.getElementById("nextBTN");
function yourFunction(){
    setInterval(function(){
        rightSwipe.click();
    }, 2000);
}
yourFunction();