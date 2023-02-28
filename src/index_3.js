window.addEventListener("load", () => {
    var d_path = document.querySelector("path.path_svg");
    var pathLength = d_path.getTotalLength();
    window.addEventListener("scroll", () => {
        var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        var drawlength = pathLength * scrollPercentage;
        d_path.style.strokeDashoffset = pathLength - drawlength;
        if (scrollPercentage >= .99) {
            d_path.style.strokeDasharray = "none";
        } else {
            d_path.style.strokeDasharray = pathLength;
        };

    });
});