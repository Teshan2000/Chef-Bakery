(function ($) {
    "use strict";

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });

    
    // Tabbed Menu      
    function openCity(item, FoodsName) {
        
    // Declare all variables
    var i, tabcontent, tablinks;
      
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
      
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
      
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(FoodsName).style.display = "block";
    item.currentTarget.className += " active";
    };
    
})(jQuery);

