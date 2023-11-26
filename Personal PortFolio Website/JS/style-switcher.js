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