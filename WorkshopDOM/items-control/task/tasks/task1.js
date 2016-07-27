/* globals console, module */

function solve() {
    "use strict";

    return function(selector, isCaseSensitive) {
        let select = selector,
            fragment,
            caseSensitive,

            adding,
            lblAdd,
            tbAdd,
            btnAdd,

            searching,
            lblSearch,
            tbSearch,

            result,
            resultList,
            listItemTemplate,
            textListItem,
            btnDelete,
            listItems;

        caseSensitive = !!isCaseSensitive;

        if (typeof select === 'string') {
            select = document.querySelector(select);
        }
        if (!select || !(select instanceof HTMLElement)) {
            throw new Error("Invalid HTML element or selector");
        }

        fragment = document.createDocumentFragment();

        //adding

        adding = document.createElement("div");
        adding.className = "add-controls";

        lblAdd = document.createElement("label");
        lblAdd.innerHTML = "Enter text: ";

        tbAdd = document.createElement("input");
        lblAdd.appendChild(tbAdd);

        btnAdd = document.createElement("a");
        btnAdd.className = "button";
        btnAdd.style.display = "inline-block";
        btnAdd.innerHTML = "Add";
        btnAdd.addEventListener('click', onClickbtnAdd, false);

        adding.appendChild(lblAdd);
        adding.appendChild(btnAdd);

        //searching

        searching = document.createElement("div");
        searching.className = "search-controls";

        lblSearch = document.createElement("label");
        lblSearch.innerHTML = "Search:";

        tbSearch = document.createElement("input");
        tbSearch.addEventListener('input', onInputlblSearch, false);
        lblSearch.appendChild(tbSearch);

        searching.appendChild(lblSearch);

        //result
        result = document.createElement("div");
        result.className = "result-controls";

        resultList = document.createElement("ul");
        resultList.className = "items-list";

        listItemTemplate = document.createElement("li");
        listItemTemplate.className = "list-item";

        btnDelete = document.createElement("a");
        btnDelete.className = "button";
        btnDelete.innerHTML = "X";

        textListItem = document.createElement("strong");
        listItemTemplate.appendChild(btnDelete);
        listItemTemplate.appendChild(textListItem);

        resultList.addEventListener("click", onClickbtnDelete);

        result.appendChild(resultList);

        listItems = select.getElementsByClassName("list-item");


        fragment.appendChild(adding);
        fragment.appendChild(searching);
        fragment.appendChild(result);
        select.appendChild(fragment);
        select.className += "items-control";

        function onClickbtnAdd() {
            //console.log("adding");
            let itemValue = tbAdd.value;

            textListItem.innerHTML = itemValue;
            resultList.appendChild(listItemTemplate.cloneNode(true));

            tbAdd.value = "";
        }

        function onInputlblSearch() {
            //console.log("searching");
            let text,
                pattern = tbSearch.value;
            if (!isCaseSensitive) {
                pattern = pattern.toLowerCase();
            }

            for (let i = 0, len = listItems.length; i < len; i += 1) {
                text = listItems[i].getElementsByTagName("strong")[0].innerHTML;
                if (!isCaseSensitive) {
                    text = text.toLowerCase();
                }

                if (text.indexOf(pattern) < 0) {
                    listItems[i].style.display = "none";
                } else {
                    listItems[i].style.display = "";
                }
            }
        }

        function onClickbtnDelete(caller) {
            //console.log("deleting");
            let btn = caller.target,
                parent;

            if (btn.className.indexOf("button") < 0) {
                //console.log("not a button");
                return;
            }

            parent = btn;
            while (parent && parent.className.indexOf("list-item") < 0) {
                parent = parent.parentNode;
            }

            if (!parent) {
                return;
            }

            resultList.removeChild(parent);
            //console.log("deleted");
        }
    };
}

solve();