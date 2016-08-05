/* globals $ */

//function solve() {
$.fn.gallery = function(columns) {
    // your solution here
    var col = columns || 4,
        $imgContainer = $(".image-container"),
        $gallery = $("#gallery");

    tabularView(col);
    console.log($("[data-info=5]"));

    $(".gallery-list").on("click", "img", onImgClick);
    $(".selected").on("click", "img", onSelectedClick);


    function tabularView(col) {
        var $imgElements;
        $(".selected").css("display", "none");
        $gallery.addClass("gallery");

        $imgElements = $($(".gallery-list").children());
        for (var key in $imgElements) {
            if ($imgElements.hasOwnProperty(key) && (key % col === 0) && key > 0) {
                $($imgElements[key]).addClass("clearfix");
            }
        }

        var $hidden = $("<div>");
        $hidden.addClass("disabled-background").hide();
        $hidden.appendTo($("#gallery"));
    }

    function mod(n, m) {
        return ((n % m) + m) % m;
    }

    function onSelectedClick() {
        var $selected = $(this);
        if ($selected.is("#current-image")) {

        }
    }


    function onImgClick() {
        var $clicked = $(this),
            $parent = $(this).parents(".image-container"),
            $prevImg,
            $nextImg;

        $(".disabled-background").show();
        $(".selected").css("display", "");
        $(".gallery-list").addClass("blurred");


        $("#current-image").attr("src", $clicked.attr("src"));
        $gallery.addClass("blurred");

        if ($parent.prev().hasClass("image-container")) {
            $prevImg = $($parent.prev().children()[0]);
            $("#previous-image").attr("src", $prevImg.attr("src"));
        } else {
            $prevImg = $($($parent.siblings().last()).children());
            $("#previous-image").attr("src", $prevImg.attr("src"));
        }

        if ($parent.next().hasClass("image-container")) {
            $nextImg = $($parent.next().children()[0]);
            $("#next-image").attr("src", $nextImg.attr("src"));
        } else {
            $nextImg = $($($parent.siblings().first()).children());
            $("#next-image").attr("src", $nextImg.attr("src"));
        }
    }
};
//}
//module.exports = solve;