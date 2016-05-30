document.getElementById("button").onclick = function() {
    confirm("Great to see you," + " " + prompt("What's Your Name"));
};
confirm("I am ready to play!")
var age = prompt("What's your age?"); 
if (age <= 13) {
    console.log("You are allowed to play, but we take no responsibility of your actions");
}
else { 
    console.log("You're in! Let's begin!");
}
