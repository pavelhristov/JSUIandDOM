/* globals $, module */

/* 

Create a function that takes an id or DOM element and:
  

*/

function solve() {
    return function(selector) {
        var element = selector,
            i,
            buttons,
            lastContent;

        if (typeof element === "string") {
            element = document.getElementById(element);
        }
        if (!element || !(element instanceof HTMLElement)) {
            throw new Error("Invalid HTML element or selector");
        }

        buttons = element.getElementsByClassName("button");
        for (i = 0; i < buttons.length; i += 1) {
            buttons[i].innerHTML = "hide";
        }

        element.addEventListener("click", btnOnClick, false);

        function btnOnClick(ev) {
            var btn = ev.target,
                next;
            if (btn.className.indexOf("button") < 0) {
                return;
            }

            if (btn.innerHTML === "hide") {
                next = btn.nextElementSibling;
                while (next.className.indexOf("button") < 0) {
                    if (next.className === "content") {
                        lastContent = next;
                    }
                    //next.style.display = "none";
                    next = next.nextElementSibling;
                }
                if (lastContent) {
                    lastContent.style.display = "none";
                    btn.innerHTML = "show";
                    lastContent = false;
                }
            } else if (btn.innerHTML === "show") {
                next = btn.nextElementSibling;
                while (next.className.indexOf("button") < 0) {
                    if (next.className === "content") {
                        lastContent = next;
                    }
                    //next.style.display = "";
                    next = next.nextElementSibling;
                }
                if (lastContent) {
                    lastContent.style.display = "";
                    btn.innerHTML = "hide";
                    lastContent = false;
                }
            }
        }
    };
}

module.exports = solve;