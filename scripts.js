var nav_time;
let stateCheck = setInterval(() => {
    if (document.readyState === 'complete') {
        // document ready
        $('#loader-wrapper').css('display','none');
        clearInterval(stateCheck);
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


//nav bar will hide itself
window.addEventListener("scroll", function(){
    if(window.scrollY===0){
        $(".navlist").css("background","transparent");
        $(".navop").css("color","var(--deeporange)");
        $(".cust-nav").slideDown(500,function(){ clearTimeout(nav_time)});
    }
    else{
        $(".navlist").css("background","var(--black)");
        $(".navop").css("color","whitesmoke");
        if(window.innerWidth>725){
            $(".cust-nav").show(300);
            clearTimeout(nav_time);
            nav_time = setTimeout(function(){ $(".cust-nav").slideUp(800); }, 7000);
        }
    }
});
/* Intersection observer API doc //formyref- https://usefulangle.com/post/118/javascript-intersection-observer */
var observer = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){
		console.log('Element is fully visible in screen');
        const vb1 = document.querySelector("#bar1").dataset.percentage * 0.9;
        const vb2 = document.querySelector("#bar2").dataset.percentage * 0.9;
        const vb3 = document.querySelector("#bar3").dataset.percentage * 0.9;
        const vb4 = document.querySelector("#bar4").dataset.percentage * 0.9;
        const vb5 = document.querySelector("#bar5").dataset.percentage * 0.9;
        $('#bar1').css("width",`${vb1}vw`);
        $('#bar2').css("width",`${vb2}vw`);
        $('#bar3').css("width",`${vb3}vw`);
        $('#bar4').css("width",`${vb4}vw`);
        $('#bar5').css("width",`${vb5}vw`);
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