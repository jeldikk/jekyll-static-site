// $(function(){
//     $(".header").backstretch("/assets/images/header_background_y2.JPG");
// });
$(function(){
    $(".header").height($(window).height());
    $(".header").width($(window).width());

    $(window).on('resize',function(){
        //console.log("resize event invoked");
        //console.log(`New height ${$(window).height()}`);
        //console.log(`New width ${$(window).width()}`);
        $(".header").height($(window).height());
        $(".heade").width($$(window).width());
    });

    AOS.init();

    $("#aboutCarousel").on("slide.bs.carousel",function(event){
        //console.log("slide instance method invoked");
        //console.log(event);
        let to_node = `#about-${event.to}`;
        let from_node = `#about-${event.from}`;
        $(from_node).removeClass("aboutme_active_nav");
        $(to_node).addClass("aboutme_active_nav");

    });

    $(".navbar-nav > li").on('click',function(e){
        //console.log("navbar link clicked");
        $(".navbar-collapse").collapse('hide');
    })

    // $("#aboutCarousel").on("slid.bs.carousel",function(event){
    //     console.log(event);
    // })
})
