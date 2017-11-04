$(document).ready(function () {

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        if($("#wrapper").hasClass("toggled")){
            $("#menuIcon i").toggleClass("fa-bars fa-times");
        } else {
            $("#menuIcon i").toggleClass("fa-times fa-bars");
        };
    });
    
});

