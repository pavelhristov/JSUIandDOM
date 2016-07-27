/* globals $ */

/* 

Create a function that takes an id or DOM element and an array of contents

* if an id is provided, select the element
* Add divs to the element
  * Each div's content must be one of the items from the contents array
* The function must remove all previous content from the DOM element provided
* Throws if:
  * The provided first parameter is neither string or existing DOM element
  * The provided id does not select anything (there is no element that has such an id)
  * Any of the function params is missing
  * Any of the function params is not as described
  * Any of the contents is neight `string` or `number`
    * In that case, the content of the element **must not be** changed   
*/

module.exports = function() {

    return function(element, contents) {
        var selector = element,
            content = contents,
            div,
            fragment;


        if (typeof selector === "string") {
            selector = document.getElementById(selector);
        }
        if (!selector || !(selector instanceof HTMLElement)) {
            throw new Error("Invalid HTML element or selector");
        }

        //x => (typeof x !== "string" && typeof x !== "number")
        if (!content || content.some(function(item) {
                return typeof item !== "string" && typeof item !== "number";
            })) {
            throw new Error("Invalid contents");
        }

        selector.innerHTML = '';

        fragment = document.createDocumentFragment();
        div = document.createElement("div");

        for (var i = 0; i < content.length; i += 1) {
            var elementToAdd = div.cloneNode(true);
            elementToAdd.innerHTML = content[i];
            fragment.appendChild(elementToAdd);
        }

        selector.appendChild(fragment);
    };
};