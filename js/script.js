/**
 * Created by Admin on 3/5/2017.
 */
$(document).ready(function() {

    $("#nav li").hover(function(){

        $(this).find('ul:first').css({visibility: "visible",display: "none"}).show(400);
    },function(){
        $(this).find('ul:first').css({visibility: "hidden"});

    });
});