

function mouseScroll(){
    $("#mouse").animate({
        bottom: "-25"
    },"swing",function(){
        $("#mouse").animate({
            bottom: "-5"
        });
    })};