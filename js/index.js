var elements = $('.modal-overlay, .modal');

$('button').click(function(){
    elements.addClass('active');
});

$('.close-modal').click(function(){
    elements.removeClass('active');
});

$(".promofor").click(function () {
    if($('[name="promo"]')[0].value.toLowerCase() != "skrypin"){
        $(".promofor1").addClass("notpromo");
        console.log($('[name="promo"]')[0]);
    }
    else{
        $(".promofor1").removeClass("notpromo");
        $(".modal-content form").submit();
    }
});

$('[name="promo"]').blur(function () {
    if($('[name="promo"]')[0].value.toLowerCase() == "skrypin"){
        $(".procentspromo").removeClass("invis");
    } else {
        $(".procentspromo").addClass("invis");
    }
});
