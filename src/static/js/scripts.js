$(function(){
	svg4everybody();
		$(".food-content").hide();
	$(".food-item").hover(function() {
		$(this).find($(".food-content")).show();
	}, function() {
		$(this).find($(".food-content")).hide();
	});

  $('ul.foods-tabs').on('click', 'li:not(.food-active)', function(e) {
    e.preventDefault();
    $(this)
      .addClass('food-active').siblings().removeClass('food-active')
      .closest('div.foods').find('div.foods__content').removeClass('active').eq($(this).index()).addClass('active');
  });
});