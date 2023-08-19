$(document).ready(function(){
    $(window).scroll(function () {
        100 < $(this).scrollTop() ? $(".scroll-top").fadeIn() : $(".scroll-top").fadeOut();
    })
    $(".scroll-top").on("click", function () {
        return (
            $("html, body").animate(
                {
                    scrollTop: 0,
                },
                600
            ),
            !1
        );
    }),
    $(".scroll-top").on("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
    $('.mc3_2 .realtime-trans').easyTicker({
        direction: 'up',
        easing: 'swing',
        speed: 'slow',
        interval: 1000,
        visible: 0,
        mousePause: true,
        autoplay: true,
        controls: {
            up: '',
            down: '',
            toggle: '',
            playText: 'Play',
            stopText: 'Stop'
        },
        callbacks: {
            before: false,
            after: false,
            finish: false
        }
    });
    $('.tits.center a').click(function(){
        $(this).siblings('a').removeClass('active')
        $(this).addClass('active')
        
        let val = $(this).data('val')
        
        $(`.realtime-trans .${val}`).removeClass('hide')
        $(`.realtime-trans .${val}`).siblings('ul').addClass('hide')
    })
    $('.button-menu button').click(function(){
        $(this).siblings('button').removeClass('active')
        $(this).addClass('active')
        
        let val = $(this).data('value')

        $(`.mc2 .${val}`).removeClass('hide')
        $(`.mc2 .${val}`).siblings('ul').addClass('hide')

         if(val=== 'casino'){
            $('.title .tits').text('라이브카지노')
         }else{
            $('.title .tits').text('슬롯게임')
         }
        
    })
    $(function() {
        // Owl Carousel
        var owl = $(".owl-carousel");
        owl.owlCarousel({
          items: 1,
          margin: 10,
          loop: true,
          nav: false,
          autoplay:true,
          autoplayTimeout:3000,
          autoplayHoverPause:true,
          dots: false,
        });
    });
    $('.mobile-toggle .menu-toggle').click(function(){
        $('.side-nav').addClass('active')
        $('.overlay').fadeIn()
    })
    $('.mobile-toggle .user-toggle').click(function(){
        $('.mobile-user').addClass('active')
        $('.overlay').fadeIn()
    })
    $('.overlay').click(function(){
        $('.overlay').fadeOut()
        $('.side-nav, .mobile-user').removeClass('active')
    }) 
})