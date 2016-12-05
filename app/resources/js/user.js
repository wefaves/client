/**
 * Created by romain on 2016-12-04.
 */
$(document).ready(function(){
    $('.collapsible').collapsible();


    // Initialize collapse button
    $(".button-collapse").sideNav();

    $('.button-collapse').sideNav({
            menuWidth: 300,
            edge: 'left',
            closeOnClick: true,
            draggable: true
        }
    );
});