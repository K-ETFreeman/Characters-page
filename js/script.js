function ibg() {
    $.each($('.ibg'), function (index, val) {
        if ($(this).find('img').length > 0) {
            $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
        }
    });
}
var current;

$(document).ready(function () {

    /* image function */


    ibg();

    
    


    current='none';


    /* Switches Display :D */
    function SwitchDisplay(id) {
        if (current!='none')
             $(current).css('display', 'none');
        $(id).css('display', 'block');
        current = id;
    }


    /* input size control */
    $('input').keydown(function(){
        let input = this;
        setTimeout(function(){
           let a = $('.lineage').first();
           let max = $(input).innerWidth();
           a[0].innerText = $(input).val();
           a.css('font', $(input).css('font'));
           console.log(a.innerWidth());
           while (a.innerWidth() > max) {
              $(input).css('font-size', '-=5%');
              a.css('font-size', '-=5%');
            }
        }, 50);
    });


    /* scroll animation */
    $("a").on('click',function () { 
        $('#maincontent').css('display', 'block');
        
        setTimeout(function() {autosize.update($('textarea'));}, 100);
        
        var elementClick = $(this).attr("href");
        SwitchDisplay(elementClick);
        var destination = $(elementClick).parent().offset().top;
            $('html').animate({ scrollTop: destination }, 
                {
                    duration: 1100
              });

        return false; 
    });


        let a = document.getElementsByTagName('textarea')

        $.each(a, function(index, value){ 
            autosize(value);
        });


});