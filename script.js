// ------------scroll up/sticky navbar------------------- //
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");

        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 300){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show")
        }
    });

    // ---------move to top script ------------
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    })

// ------------ toggle menu script ------------

$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
})

// ----------- AOS instance------------------------
AOS.init();

});


// ----------Read more button --------------
function myFunction(){
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("moreBtn");
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    }else{
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

//------------form script -------------
