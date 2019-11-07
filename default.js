$(document).ready(function () {
    $('#name').css('opacity', '0').css('margin-top', '15vh')
        .animate({ opacity: 1 }, { duration: 800, queue: false })
        .animate({ "margin-top": "10vh" }, { duration: 800, queue: false });

    $('.navigation').css('left', '-100px').css('opacity', '0')
        .animate({ left: 0}, { duration: 800, queue: false })
        .animate({ opacity: 1 }, { duration: 800, queue: false });

    let nH1 = parseInt($('h1').css('font-size'));
    let nH2 = parseInt($('h2').css('font-size'));
    let scrollIcon = parseInt($('#scrollSvg').css('width'));

    $('#scrollIcon').css('margin-left', -(scrollIcon / 2))
        .css('margin-bottom', -(scrollIcon / 2));

    if(/Mobi|Android/i.test(navigator.userAgent)) {
        $('.top').css('padding-top', '15vh');
        let mobH1 = nH1 * 2;
        let mobH2 = nH2 * 1.5;
        $('h1').css('font-size', mobH1);
        $('h2').css('font-size', mobH2);
        let mobScrollIcon = scrollIcon * 1.5;
        $('#scrollSvg').css('width', mobScrollIcon);

        $('#scrollIcon').css('margin-left', -(mobScrollIcon / 2))
            .css('margin-bottom', -(mobScrollIcon / 2));

        $('.aboutMe').css('width', '75%').css('padding', '40px');

        let portraitW = parseInt($('.aboutMe > img').css('width'));
        let portraitH = parseInt($('.aboutMe > img').css('height'));
        $('.aboutMe > img').css('width', portraitW * 1.5)
            .css('height', portraitH * 1.5);
    }


});