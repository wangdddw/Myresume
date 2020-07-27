$(document).ready(function(){
    
    $('.scrollTop').click(function(e){
        e.preventDefault();
        var target = $(this).attr('href');
        var targetPos = $(target).offset().top;
        $('html,body').animate({scrollTop:targetPos},1000);
    });

    $(window).scroll(function(){
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        // console.log(scrollPos);
        //滾動到位置後將nav選項選擇起來
        $('.scrollTop').each(function(){
            var target = $(this).attr('href');
            var targetPos = $(target).offset().top;
            var targetHeight = $(target).outerHeight();
            
            if(targetPos - 1  <= scrollPos && targetPos + targetHeight > scrollPos){
                $('.scrollTop').removeClass('active');
                $(this).addClass('active');
            }else{
                $(this).removeClass('active');
            }
        });
        //animated
        $('.animated').each(function () {
            var thisPos = $(this).offset().top;
            if((windowHeight + scrollPos) >= thisPos){
                $(this).addClass('fadeIn');
            };
        });
    });
});