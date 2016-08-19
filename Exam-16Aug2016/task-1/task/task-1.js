/* globals document, window, console */

function solve() {
    return function(selector, initialSuggestions) {
        var root = selector,
            suggestions = initialSuggestions || [],
            fragment = document.createDocumentFragment(),
            suggestionsList = document.getElementsByClassName('suggestions-list')[0],
            isCaseSensitive = false,
            caseInsentisveSuggestions = [];

        //suggestions = ["Apples", "Orange", "Bananas", "Bananas", "bananas", "Peaches", "Peaches"];

        //nowhere is mentoned that elements should be case insensitive, only searching
        // suggestions = suggestions.filter(function(item, pos) {
        //     return suggestions.indexOf(item) == pos;
        // })

        String.prototype.capitalizeFirstLetter = function() {
            return this.charAt(0).toUpperCase() + this.slice(1);
        };

        function removeDuplicates(num) {
            var x,
                len = num.length,
                out = [],
                obj = {};

            for (x = 0; x < len; x++) {
                obj[num[x]] = 0;
            }
            for (x in obj) {
                out.push(x);
            }
            return out;
        }
        suggestions = removeDuplicates(suggestions);
        console.log(suggestions);

        if (typeof root === 'string') {
            root = document.querySelector(root);
        }
        if (!root || !(root instanceof HTMLElement)) {
            throw new Error("Invalid HTML element or selector");
        }
        //suggestion ListItem Template
        var suggestionListItemTemplate = document.createElement('li'),
            suggestionLink = document.createElement('a');

        suggestionLink.className = "suggestion-link";
        suggestionLink.setAttribute('href', "#");


        suggestionListItemTemplate.className = "suggestion";
        suggestionListItemTemplate.appendChild(suggestionLink);
        suggestionListItemTemplate.style.display = 'none';

        //inital suggestions create 

        suggestions.forEach(function(item) {
            if (caseInsentisveSuggestions.indexOf(item) < 0) {
                caseInsentisveSuggestions.push(item.toLowerCase());
                suggestionLink.innerHTML = item.capitalizeFirstLetter();
                // document.createElement('li'),
                //     suggestionLink = document.createElement('a');

                // suggestionLink.innerHTML = item;
                // suggestionLink.className = "suggestion-link";
                // suggestionLink.setAttribute('href', "#");


                // suggestionLi.className = "suggestion";
                // suggestionLi.appendChild(suggestionLink);
                // suggestionLi.style.display = 'none';
                fragment.appendChild(suggestionListItemTemplate.cloneNode(true));
            }
        }, this);

        suggestionsList.appendChild(fragment);

        // button Add
        var btnAdd = document.getElementsByClassName('btn-add')[0];
        btnAdd.addEventListener('click', onBtnAddClick, false);

        // searching
        var tbSearch = document.getElementsByClassName('tb-pattern')[0];
        tbSearch.addEventListener('input', onInputlblSearch, false);

        listItems = suggestionsList.getElementsByClassName('suggestion');

        //on suggestion click
        suggestionsList.addEventListener('click', onSuggestionClick);


        console.log(document.getElementsByClassName('suggestion').length);
        console.log(document.getElementsByClassName('suggestion'));

        function onSuggestionClick(ev) {
            var target = ev.target;

            // if it is requared to click on <a> only

            if (target.className.indexOf("suggestion-link") < 0) {
                return;
            }

            tbSearch.value = target.text;

            // if it is requared to click on the whole <li>

            // if (target.className.indexOf("suggestion") < 0) {
            //     target = target.parent;
            // }
            // var suggestionValue = target.querySelector('a');
            // tbSearch.value = suggestionValue.text;
        }

        function onBtnAddClick(ev) {
            var itemValue = tbSearch.value;
            if (itemValue.length <= 0) {
                return;
            }

            if (caseInsentisveSuggestions.indexOf(itemValue.toLowerCase()) >= 0) {
                return;
            }

            caseInsentisveSuggestions.push(itemValue.toLowerCase());

            suggestionLink.innerHTML = itemValue.toLowerCase().capitalizeFirstLetter();
            suggestionsList.appendChild(suggestionListItemTemplate.cloneNode(true));

            tbSearch.value = "";
        }

        function onInputlblSearch() {
            var text,
                pattern = tbSearch.value;
            if (!isCaseSensitive) {
                pattern = pattern.toLowerCase();
            }

            for (var i = 0, len = listItems.length; i < len; i += 1) {
                text = listItems[i].getElementsByTagName("a")[0].innerHTML;
                if (!isCaseSensitive) {
                    text = text.toLowerCase();
                }

                if (text.indexOf(pattern) < 0) {
                    listItems[i].style.display = "none";
                } else {
                    if (pattern.length > 0) {
                        listItems[i].style.display = "";
                    } else {
                        listItems[i].style.display = "none";
                    }
                }
            }
        }
    };
}


module.exports = solve;