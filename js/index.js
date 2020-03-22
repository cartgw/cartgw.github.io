var elements = $('.modal-overlay, .modal');

$('button').click(function(){
    elements.addClass('active');
});

$('.close-modal').click(function(){
    elements.removeClass('active');
});


$(".promofor").click(function () {
    let lol = $('[name="promo"]')[0].value.toLowerCase();
    if(lol != "skrypin"){
        $(".promofor1").addClass("notpromo");
    }
    else{
        $(".promofor1").removeClass("notpromo");
        $(".modal-content form").submit();
    }
});
