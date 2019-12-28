$(document).ready(function () {

    /* image function */
    function ibg() {
        $.each($('.ibg'), function (index, val) {
            if ($(this).find('img').length > 0) {
                $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
            }
        });
    }

    ibg();

    $("a").on('click',function () {
        $('#maincontent').css('display', 'block');
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).parent().offset().top;
            $('html').animate({ scrollTop: destination }, 
                {
                    duration: 1100
                });

        return false; 
    });

});