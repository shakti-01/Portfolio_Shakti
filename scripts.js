var nav_time;
let stateCheck = setInterval(() => {
    if (document.readyState === 'complete') {
        $('#loader-wrapper').css('display','none');
        clearInterval(stateCheck);
        // document ready
    }
  }, 100);
/* let scrollbar = window.scrollbar;
const options={
    'damping': 0.1,
}
scrollbar.init(document.querySelector('body'),options); */
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '90px',
    duration: 3000,
    reset: false,
});

sr.reveal('.subtitle');
sr.reveal('.qualification');
sr.reveal('.qua_stick',{origin:'left',distance:'800px',reset:true,duration:2000});

/* window.addEventListener("scroll", function(){
    if(window.scrollY===0){
        document.querySelector('.nav').style.zIndex ="0";
        document.querySelector('.navlist').style.background="transparent";
        if(nav_is_visible===0){
            document.querySelector('.nav').style.display ="block";
            nav_is_visible=1;
            clearTimeout(nav_time);
        }
    }
    else{
        document.querySelector('.nav').style.zIndex ="2";
        document.querySelector('.navlist').style.background="var(--black)";
        if(nav_is_visible===1){
            nav_time = setTimeout(function(){ document.querySelector('.nav').style.display ="none"; }, 6000);
            nav_is_visible=0;
        }
        else{
            nav_is_visible=1;
            document.querySelector('.nav').style.display ="block";
            clearTimeout(nav_time);
            nav_time = setTimeout(function(){ document.querySelector('.nav').style.display ="none"; }, 6000);
            nav_is_visible=0;
        }
    }
}); */
//nav bar will hide itself??
window.addEventListener("scroll", function(){
    if(window.scrollY===0){
        $(".navlist").css("background","transparent");
        $(".navop").css("color","var(--deeporange)");
        $(".nav").slideDown(500,function(){ clearTimeout(nav_time)});
    }
    else{
        $(".navlist").css("background","var(--black)");
        $(".navop").css("color","var(--grey)");
        $(".nav").show(300);
        clearTimeout(nav_time);
        nav_time = setTimeout(function(){ $(".nav").slideUp(800); }, 5000);
    }
});
/* Intersection observer API doc //formyref- https://usefulangle.com/post/118/javascript-intersection-observer */
var observer = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){
		console.log('Element is fully visible in screen');
        $('#bar1').css("width","65vw");
        $('#bar2').css("width","46vw");
        $('#bar3').css("width","23vw");
        $('#bar4').css("width","53vw");
        $('#bar5').css("width","46vw");
        observer.disconnect();
    }
}, { threshold: [0.8] });

observer.observe(document.querySelector(".skillbar"));
/* API usage ends */
//--------contact overlay-----
$('.contact_sec').hide();
$('.navmenu-contact').click(()=>{
    $('.contact_sec').slideDown(300);
})
$('#close_contact').click(()=>{
    $('.contact_sec').hide();
})
//------------ham menu 

$('.menu-wrapper').on('click', function() {
	$('.hamburger-menu').toggleClass('animate');
    if($('.dropdown-content').css('display')=='none'){
        $('.dropdown-content').css('display','block');
    }
    else{
        $('.dropdown-content').css('display','none');
    }
})