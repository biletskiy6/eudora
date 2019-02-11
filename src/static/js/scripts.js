$(function(){
	svg4everybody();
/*		$(".food-content").hide();
	$(".food-item").hover(function() {
		$(this).find($(".food-content")).show();
	}, function() {
		$(this).find($(".food-content")).hide();
	});*/

	  $(".toggle-menu").on("click", function() {
    $(this).toggleClass("toggle-menu--active");
    $(".main-navigation").toggleClass("active");
    $(".intro").toggleClass("layer-change");




  });

  $('ul.foods-tabs').on('click', 'li:not(.food-active)', function(e) {
    e.preventDefault();
    $(this)
      .addClass('food-active').siblings().removeClass('food-active')
      .closest('div.foods').find('div.foods__content').removeClass('active').eq($(this).index()).addClass('active');
  });

     
  	$(".main-menu li a").on("click", function() {
  		 if($(".main-navigation").hasClass("active")) { 
  		 	$(".main-navigation").removeClass("active");
  		 	$(".toggle-menu").removeClass("toggle-menu--active");
  		 	if ($('.intro').hasClass('layer-change')) {
            $('.intro').removeClass('layer-change');
        }
  		 }
  		
  });

  	$(".food-item .secondary-button").on("click", function(e) {
  		e.preventDefault();
  		$(this).parent().find(".food-content").toggleClass("active");
  		$(this).parent().find(".food-img").toggleClass("active");
  	});


});

$(window).on('resize', function() {
    var win = $(this);
    if (win.width() >= 1280) {
        $('.main-menu ul').removeAttr('style');
        if ($('.toggle-menu').hasClass('toggle-menu--active')) {
            $('.toggle-menu').removeClass('toggle-menu--active');
        }
        if ($('.intro').hasClass('layer-change')) {
            $('.intro').removeClass('layer-change');
        }

        if ($('.main-navigation').hasClass('active')) {
            $('.main-navigation').removeClass('active');
        }
    }
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 1) {
    $('.top-line').addClass('top-line--fixed');
  } else {
    $('.top-line').removeClass('top-line--fixed');
  }
});