$(function(){
    $('section[data-type="background"]').each(function(){
        var section = $(this);
        $(window).scroll(function() {
            var yPos = - ($(window).scrollTop() / 10);
            var coords = '50% '+ yPos + 'px';
            section.css('background-position', coords);
        });         
    });
})