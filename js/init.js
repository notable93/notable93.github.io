
function bgHide(){
    $(".dummy_bg1").stop().fadeOut(300)
    $(".dummy_bg2").stop().fadeOut(300);
    $(".gnb .gnb_2dep").stop().fadeOut(300);   
}

$(".header_inner").on("mouseenter",function(){
    $(".dummy_bg1").stop().fadeIn(300)
}).on("mouseleave",function(){
    bgHide();
})
$(".gnb li a").on("mouseenter",function(){
    $(".gnb .gnb_2dep").stop().fadeIn(300);
    $(".dummy_bg1").stop().fadeIn(300)  
    $(".dummy_bg2").stop().fadeIn(300)  
})
$('.dummy_bg2').on("mouseleave",function(){
    bgHide();
})

$(".main-slider").bxSlider({
    auto:false,
    mode: 'fade',
    pagerCustom:".myPager",
    controls:false,
});
$(".t-main-slider").bxSlider({
    pagerCustom:".myPager",
    controls:false,
    
});
$(".m-main-slider").bxSlider({
    pagerCustom:".myPager",
    controls:false,
    
});
$(".sec_banner").bxSlider({});