function showNavMenu(){
    $('#sidnav').toggleClass('hidden');
}
function sideNav(){
    $('#sidenav').toggleClass('toggle-sidenav');
}
$('#btn-sidenav').click(function(){
    $('svg.toggle-icon').toggleClass('toggle-icon-direction');
});


function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
  
        if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
  
window.addEventListener("scroll", reveal);



$(window).on('resize scroll', function() {
    if ($('#work').isInViewport()) {        
        $('#work').find('.work-content').css('animation-play-state', 'running');
        $('#work').find('.w').css('animation-play-state', 'running');
        $('#work').find('.o').css('animation-play-state', 'running');
        $('#work').find('.r').css('animation-play-state', 'running');
        $('#work').find('.k').css('animation-play-state', 'running');
    }
    else{
        $('#work').find('.work-content').css('animation-play-state', 'paused');
        $('#work').find('.w').css('animation-play-state', 'paused');
        $('#work').find('.o').css('animation-play-state', 'paused');
        $('#work').find('.r').css('animation-play-state', 'paused');
        $('#work').find('.k').css('animation-play-state', 'paused');
    }

    if ($('#about').isInViewport()) {
        $('#about').find('div.div-image').css('animation-play-state', 'running');
        $('#about').find('img.profile-picture').css('animation-play-state', 'running');
        $('#about').find('.layer-1').css('animation-play-state', 'running');
        $('#about').find('.layer-2').css('animation-play-state', 'running');
        $('#about').find('.layer-3').css('animation-play-state', 'running');
        $('#about').find('.cover-1').css('animation-play-state', 'running');
        $('#about').find('.cover-2').css('animation-play-state', 'running');
    }
    /* else{
        $('#about').find('div.div-image').css('animation-play-state', 'paused');
        $('#about').find('img.profile-picture').css('animation-play-state', 'paused');
        $('#about').find('.layer-1').css('animation-play-state', 'paused');
        $('#about').find('.layer-2').css('animation-play-state', 'paused');
        $('#about').find('.layer-3').css('animation-play-state', 'paused');
        $('#about').find('.cover-1').css('animation-play-state', 'paused');
        $('#about').find('.cover-2').css('animation-play-state', 'paused');
    } */

    if ($('#contact').isInViewport()) {
        $('#contact').find('.contact').css('animation-play-state', 'running');
        $('#contact').find('.contact-cover').css('animation-play-state', 'running');
        $('#contact').find('.contact-1').css('animation-play-state', 'running');
        $('#contact').find('.contact-2').css('animation-play-state', 'running');
        $('#contact').find('.contact-3').css('animation-play-state', 'running');
        $('#contact').find('.contact-4').css('animation-play-state', 'running');
        $('#contact').find('.contact-5').css('animation-play-state', 'running');
        $('#contact').find('.contact-6').css('animation-play-state', 'running');
    }
    /* else{
        $('#contact').find('.contact').css('animation-play-state', 'paused');
        $('#contact').find('.contact-cover').css('animation-play-state', 'paused');
        $('#contact').find('.contact-1').css('animation-play-state', 'paused');
        $('#contact').find('.contact-2').css('animation-play-state', 'paused');
        $('#contact').find('.contact-3').css('animation-play-state', 'paused');
        $('#contact').find('.contact-4').css('animation-play-state', 'paused');
        $('#contact').find('.contact-5').css('animation-play-state', 'paused');
        $('#contact').find('.contact-6').css('animation-play-state', 'paused');
    } */
});

$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

/* $('#work').on("scroll", function(){
    alert("work");
}) */

/* var isInViewport = function(elem) {
    var distance = elem.getBoundingClientRect();
    return (
      distance.top >= 0 &&
      distance.left >= 0 &&
      distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  // read the link on how above code works
  
  var findMe = document.querySelectorAll('#work *');
  
  
  window.addEventListener('scroll', function(event) {
  // add event on scroll

    findMe.forEach(page => {
        //for each .page
        if (isInViewport(page)) {
            //if in Viewport
            this.alert(page.parentElement.id);
        }
    });
  }, false); */