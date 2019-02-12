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



 $(".dropdown dt a").on('click', function(e) {
  e.preventDefault();
  $(".dropdown dd ul").slideToggle('fast');
});

 $(".dropdown dd ul li a").on('click', function() {
  $(".dropdown dd ul").hide();
});

 function getSelectedValue(id) {
  return $("#" + id).find("dt a span.value").html();
}

$(document).bind('click', function(e) {
  var $clicked = $(e.target);
  if (!$clicked.parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
});





var caloriesSum = 0;
var fatsSum = 0;
var proteinSum = 0;
var carbohydratesSum = 0;
var calories = 0;
var fats = 0;
var protein = 0;
var carbohydrates = 0;
var quantity = 0;
var elementName = '';

$(".calculate").on("click", function(e) {
  e.preventDefault();
  $(".user-items .user-item").remove();
  $(".user-items .user-item__separator").remove();
  var carbohydratesResult__span = $(".carbohydrates .result-value");
  var caloriesResult__span = $(".calories .result-value");
  var proteinResult__span = $(".protein .result-value");
  var fatsResult__span = $(".fats .result-value");

  $('.mutliSelect input[type="checkbox"]').each(function(){ 

    if(this.checked) {
      $(".user-choise").addClass('active');

    
     calories = parseInt($(this).data('calories'));
     fats = parseInt($(this).data('fats'));
     protein = parseInt($(this).data('protein'));
     carbohydrates = parseInt($(this).data('carbohydrates'));
     quantity = $(this).closest("li").find("input[type=number]").val();



     elementName = $(this).attr("value");
     caloriesSum += calories * quantity;
     fatsSum += fats * quantity;
     proteinSum += protein * quantity;
     carbohydratesSum += carbohydrates * quantity;


      var selectedFoodItem = $("<div></div");
      var foodItemSeparator = $("<span>+</span>");


      selectedFoodItem.addClass('user-item');
      selectedFoodItem.html(elementName);


      foodItemSeparator.addClass('user-item__separator');

      $(".user-items").append(selectedFoodItem);
      $(".user-items").append(foodItemSeparator);

}
  });
  
  carbohydratesResult__span.text(carbohydratesSum);
  caloriesResult__span.text(caloriesSum);
  proteinResult__span.text(proteinSum);
  fatsResult__span.text(fatsSum);
  
  caloriesSum = 0;
  fatsSum = 0;
  proteinSum = 0;
  carbohydratesSum = 0;
  quantity = 0;



})









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