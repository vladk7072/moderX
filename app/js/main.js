$(document).ready(function(){
    // toggle responsive menu
    $('.js-header-dropdown-toggle').click(function(){
        $(this).toggleClass('is-active');
        $('body').toggleClass('is-overflow-hidden');
        $('.header__dropdown').toggleClass('is-active');
    });


    // toggle filter
    $('.js-filter-toggle').click(function(){
        $(this).toggleClass('is-open');
    });


    $('.js-filter-item').click(function(){
        $(this).parent().find('.js-filter-item').not(this).removeClass('is-active');
        $(this).toggleClass('is-active');
    });


    // toggle favorite
    $('.js-goods-card-favorite-toggle').click(function(){
        $(this).toggleClass('is-active');
    });


    // img svg convert inline code
    jQuery('.js-svg-inline').each(function(){
       var $img = jQuery(this);
       var imgID = $img.attr('id');
       var imgClass = $img.attr('class');
       var imgURL = $img.attr('src');
       var imgWidth = $img.attr('width');

       jQuery.get(imgURL, function(data) {

           var $svg = jQuery(data).find('svg');

           if(typeof imgID !== 'undefined') {
               $svg = $svg.attr('id', imgID);
           }

           if(typeof imgClass !== 'undefined') {
               $svg = $svg.attr('class', imgClass+' replaced-svg');
           }

           if(typeof imgWidth) {
               $svg = $svg.attr('width', imgWidth);
           }

           $svg = $svg.removeAttr('xmlns:a');

           $img.replaceWith($svg);

       }, 'xml');
    });


    // init slick slider
    if ($('.js-intro-slider-init')[0]){
        $('.js-intro-slider-init').slick({
            slidesToShow: 1,
            autoplay: false,
            arrows: false,
            dots: true,
            infinite: true,
            speed: 600
        });
    }
    
    if ($('.js-intro-slider-init')[0]){
        $('.js-catalog-slider-init').slick({
            arrows: false,
            dots: true,
            speed: 600,
            slidesToShow: 1,
            infinite: true,
            variableWidth: true
        });
    }
        
    if ($('.js-intro-slider-init')[0]){
        $('.js-promotions-slider-init').slick({
            slidesToShow: 1,
            autoplay: true,
            arrows: false,
            dots: true,
            infinite: true,
            speed: 600
        });
    }
    
    if ($('.js-intro-slider-init')[0]){
        $('.js-style-slider-init').slick({
            arrows: false,
            dots: true,
            speed: 600,
            slidesToShow: 1,
            infinite: true,
            variableWidth: true
        });
    }


    // init price range slider
    var $range = $('.js-slider-range-catalog-price-init'),
        $inputFrom = $('.js-slider-range-catalog-price-min'),
        $inputTo = $('.js-slider-range-catalog-price-max'),
        instance,
        min = 0,
        max = 12000,
        from = 0,
        to = 0;

    $range.ionRangeSlider({
        type: 'double',
        min: min,
        max: max,
        from: 2000,
        to: 6000,
        step: 50,
        onStart: updateInputs,
        onChange: updateInputs
    });
    instance = $range.data('ionRangeSlider');

    function updateInputs (data) {
      from = data.from;
        to = data.to;
        
        $inputFrom.prop('value', from);
        $inputTo.prop('value', to); 
    }

    $inputFrom.on('input', function () {
        var val = $(this).prop('value');
        
        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }
        
        instance.update({
            from: val
        });
    });

    $inputTo.on('input', function () {
        var val = $(this).prop('value');
        
        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }
        
        instance.update({
            to: val
        });
    });


    // plus/minus modal product
    $('.js-counter-product-minus').click(function () {
        var $input = $(this).siblings('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });

    $('.js-counter-product-plus').click(function () {
        var $input = $(this).siblings('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    
});