$(document).ready(function () {
    
    var width = $(window).width();
        if (width <= '768') {
            $('#products .item').addClass('list-group-item');
            $('#products .item').removeClass('grid-group-item');
        }

    $('#list').click(function (event) {
        event.preventDefault();
        $('#products .item').addClass('list-group-item');
    });
    $('#grid').click(function (event) {
        event.preventDefault();
        $('#products .item').removeClass('list-group-item');
        $('#products .item').addClass('grid-group-item');
    });
});
