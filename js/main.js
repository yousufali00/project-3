
/*=================================
            Preloader
=================================*/
$(window).on('load', function () {
    $('#inner').fadeOut();
    $('#preloader').delay(350).fadeOut();
});

/*=================================
           Slider
=================================*/

var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
    autoplay: {
        delay: 4000,
    },
    
});

/*=================================
            Isotope 
=================================*/

  // images have loaded
    
    
    



$(window).on('load', function () {

//initialize Isotope
    $('#isotope-container').isotope({
        
    });
//    item filter
    $('#isotope-buttons').on('click', 'button', function(){
        
    var Value = $(this).attr('data-filter');
    
    $('#isotope-container').isotope({
        filter: Value
    });
    
    $('#isotope-buttons').find('.active').removeClass('active');
    $(this).addClass('active');
    
    });
});    

/*=================================
            Progress bar
=================================*/

$(function(){
    
    $('.skill-content-wrapper').waypoint(function(){
    
    $('.progress-bar').each(function(){
        $(this).animate({
            width: $(this).attr('aria-valuenow') + '%'
        },2000);
   });
    
    
    this.destroy();
    }, {
        offset: '75%'
    });
 
});

/*=================================
        Counter up
=================================*/

$(function() {
    $('.counter').counterUp({
        delay: 10,
        time: 5000
    });
});


/*=================================
        Owl carousel 
        Review section
=================================*/
$(function() {
    $("#customer-review").owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        callbacks: false,
        nav: true,
        navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>','<i class="fa fa-arrow-right" aria-hidden="true"></i>' ],
    });
  
});


/*=================================
        Owl carousel 
        Client section
=================================*/

$(function() {
    $("#client-slider").owlCarousel({
        margin: 35,
        items: 4,
        dots: false,
        loop: true,
        nav: false,
        responsive : {
        // breakpoint from 0 up
        0 : {
            items: 1
        },
        // breakpoint from 480 up
        480 : {
            items: 2
        },
        767 : {
            item: 3
        }
        
        }
    });
  
});



/*=================================
           Navigation
=================================*/

$(function(){
    
    showhide();
    
    $(window).scroll(function(){
        
    showhide();
    
    });
    
    function showhide() {
      
        if ( $(window).scrollTop() > 70 ){
        
        $('nav.navbar ').addClass('header-bg');
        
        $(".navbar-brand img").attr("src","img/logo/logo.png");
        
        
        
//      fixed to top btn
        $("#fixed-to-top-btn").fadeIn();
    }
    
        else{
        
        $('nav.navbar').removeClass('header-bg');
            
        $(".navbar-brand img").attr("src","img/logo/header-logo.png");
            
       
            
        $("#fixed-to-top-btn").fadeOut();
    }
    };
    
});

//smooth scrolling of navs

$(function(){
    
    $("a.smooth-scroll").click(function(event){
        
        event.preventDefault();
        
        var section_id= $(this).attr("href");
        
        $("html, body").animate({
            
            scrollTop: $(section_id).offset().top 
            
        }, 2250, "easeOutExpo");
    });
    
});


/*=================================
    Navigation bar search
=================================*/

$(function() {
    $('.search-btn').on('click',function(){
        $('.search-box').css('right','12px',);
        $('.search-box').css('opacity','1',);
        
        $('.search-box-input a').css('opacity','1');
    });
    
    $('.search-box-input a').on('click', function(){
        $('.search-box').css('right','-260px');
        $('.search-box').css('opacity','0');
        $('.search-box-input a').css('opacity','0');
    });
    
});

//mobile nav search 

$(function() {
    $('#mobile-navbar-button').on('click',function(){
       $('#mobile-nav').toggleClass('mobile-nav-active');
    });
});


$(function() {
    $('.mobile-search-btn').on('click',function(){
        $('.mobile-search-box').css('right','20px',);
        $('.mobile-search-box').css('opacity','1',);
        $('.mobile-search-box-input a').css('opacity','1');
        $('.mobile-search-box').css('visibility','visible');
        
        $('.mobile-search-btn').css('opacity','0');
        
    });
    
    $('.mobile-search-box-input a').on('click', function(){
        $('.mobile-search-box').css('right','-260px');
        $('.mobile-search-box').css('opacity','0');
        $('.mobile-search-box-input a').css('opacity','0');
        
        $('.mobile-search-btn').css('opacity','1');
    });
    
});





/*=================================
        Wow Js
=================================*/

$(function() {
    new WOW().init();
});











