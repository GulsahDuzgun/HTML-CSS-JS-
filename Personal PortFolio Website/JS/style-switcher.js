/*______________________ Toggle Style Switcher ______________________*/
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

/*______________________ hide style- switcher on scroll  ______________________*/
window.addEventListener("scroll",() => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

/*______________________ Theme Color setActive  ______________________*/
const alternativeClass = document.querySelectorAll(".alternate-style");
function setActiveStyle (color) {

    alternativeClass.forEach( e => {

        if(e.getAttribute("title") === color)
        {
            e.removeAttribute("disabled")
        }
        else 
        {
            e.setAttribute("disabled", "true")
        }

    })
}

/*______________________ theme light and dark mode  ______________________*/
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    document.body.classList.toggle("dark")
    dayNight.querySelector("i").classList.toggle("fa-moon")
    dayNight.querySelector("i").classList.toggle("fa-sun")
})

window.addEventListener("load", () => {
    if(document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun")
    } 
    else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})