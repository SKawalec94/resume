$(document).ready(function () {
    $('#name').css('opacity', '0').css('margin-top', '15vh')
        .animate({ opacity: 1 }, { duration: 800, queue: false })
        .animate({ "margin-top": "10vh" }, { duration: 800, queue: false });

    $('.navigation').css('left', '-100px').css('opacity', '0')
        .animate({ left: 0}, { duration: 800, queue: false })
        .animate({ opacity: 1 }, { duration: 800, queue: false });

    let vh = $(window).innerHeight * 0.01;
    $(document).css('--vh', vh+'px');
});