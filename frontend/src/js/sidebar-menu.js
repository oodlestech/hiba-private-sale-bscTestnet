import $ from 'jquery';


// function SideBarToggle () {
  var menu = $('.sidebar-menu');
  var animationSpeed = 300,
  subMenuSelector = '.sidebar-submenu';
  $(menu).on('click', 'li a', function(e) {
    var $this = $(this);
    var checkElement = $this.next();
    if (checkElement.is(subMenuSelector) && checkElement.is(':visible')) {
      checkElement.slideUp(animationSpeed, function() {
        checkElement.removeClass('menu-open');
      });
      checkElement.parent("li").removeClass("active");
    }
    else if ((checkElement.is(subMenuSelector)) && (!checkElement.is(':visible'))) {
      var parent = $this.parents('ul').first();
      var ul = parent.find('ul:visible').slideUp(animationSpeed);
      ul.removeClass('menu-open');
      var parent_li = $this.parent("li");
      checkElement.slideDown(animationSpeed, function() {
        checkElement.addClass('menu-open');
        parent.find('li.active').removeClass('active');
        parent_li.addClass('active');
      });
    }
  });
// }


// responsive sidebar
var $window = $(window);
var widthwindow = $window.width();
if(widthwindow+17 <= 991) {
   $('#sidebar-toggle').addClass("open");
  $('.page-sidebar').addClass("open");
  $('.page-main-header').addClass('open');
}


$( window ).resize(function() {
  var widthwindaw = $window.width();
  if(widthwindaw+17 <= 991){
     $('#sidebar-toggle').addClass("open");
    $('.page-sidebar').addClass("open");
    $('.page-main-header').addClass('open');
  }else{
     $('#sidebar-toggle').removeClass("open");
    $('.page-sidebar').removeClass("open");
    $('.page-main-header').removeClass('open');
  }
});