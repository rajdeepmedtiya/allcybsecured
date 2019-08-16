// HEADING AND MENU FUNCTIONALITIES //

$(document).ready(function(){
  $("#logo").click(function(){
    $("html,body").animate({scrollTop:0},1000);
  });
});

$(document).ready(function(){
  $(".product-sub-menu, .tools-sub-menu, .pricing-sub-menu, .resources-sub-menu").hide();

  $("#product-services").click(function(){
    $(".product-sub-menu").slideToggle("fast");
  })
  $("#free-tools").click(function(){
    $(".tools-sub-menu").slideToggle("fast");
  })
  $("#pricing").click(function(){
    $(".pricing-sub-menu").slideToggle("fast");
  })
  $("#resources").click(function(){
    $(".resources-sub-menu").slideToggle("fast");
  })
});

// END HEADING AND MENU FUNCTIONALITIES. //

// FADES // [body]

$(document).ready(function(){
  $("#hidden").fadeIn(3000);
})

// FADES AND ANIMATIONS [index.html] //

$(document).ready(function(){
  $(".first-content-para, #second-content-cards, .third-content-para, #infrastructure-side-para, #behavioral-side-para, #resilient-side-para, #readiness-side-para, #connected-side-para, #description-heading, #subscriber-email, #mail-button, .social-media").fadeOut();
});

$(window).scroll(function(){
  if($(this).scrollTop()>400){
    $("#first-content-heading").animate({ left: '485px'},750);
    $(".first-content-para").fadeIn(1500);
  }
  if($(this).scrollTop()>1150){
    $("#second-content-heading").animate({ right: '85px'},750);
    $("#second-content-cards").fadeIn(1500);
  }
  if($(this).scrollTop()>2050){
    $("#third-content-heading").animate({ left: '485px'},750);
    $(".third-content-para").fadeIn(1500);
  }
  if($(this).scrollTop()>2750){
    $("#infrastructure-side-heading").animate({ right: '85px'},750);
    $("#infrastructure-side-para").fadeIn(1500);
  }
  if($(this).scrollTop()>3700){
    $("#behavioral-side-heading").animate({ left: '585px'},750);
    $("#behavioral-side-para").fadeIn(1500);
  }
  if($(this).scrollTop()>5000){
    $("#resilient-side-heading").animate({ right: '85px'},750);
    $("#resilient-side-para").fadeIn(1500);
  }
  if($(this).scrollTop()>5700){
    $("#readiness-side-heading").animate({ left: '585px'},750);
    $("#readiness-side-para").fadeIn(1500);
  }
  if($(this).scrollTop()>6800){
    $("#connected-side-heading").animate({ right: '85px'},750);
    $("#connected-side-para").fadeIn(1500);
  }
  if($(this).scrollTop()>8000){
    $("#email-subscription-heading").animate({ left: '585px'},750);
    $("#description-heading, #subscriber-email, #mail-button").fadeIn(1500);
  }
  if($(this).scrollTop()>8900){
    $("#follow-us").animate({ right: '125px'},750);
    $(".social-media").fadeIn(1500);
  }
});

// END FADES AND ANIMATIONS [index.html] //

// FADES AND ANIMATIONS [about-us.html] //

$(document).ready(function(){
  $("#about-us-first-content-para, #about-us-second-content-para, #about-us-third-content-para, #about-us-fourth-content-awards, #about-us-fifth-content-para").fadeOut();
});

$(window).scroll(function(){
  if($(this).scrollTop()>500){
    $("#about-us-first-content-heading").animate({ left: '350px'},750);
    $("#about-us-first-content-para").fadeIn(1500);
  }
  if($(this).scrollTop()>1000){
    $("#about-us-second-content-heading").animate({ right: '105px'},750);
    $("#about-us-second-content-para").fadeIn(1500);
  }
  if($(this).scrollTop()>2000){
    $("#about-us-third-content-heading").animate({ left: '500px'},750);
    $("#about-us-third-content-para").fadeIn(1500);
  }
  if($(this).scrollTop()>3400){
    $("#about-us-fourth-content-heading").animate({ right: '275px'},750);
    $("#about-us-fourth-content-awards").fadeIn(1500);
  }
  if($(this).scrollTop()>4100){
    $("#about-us-fifth-content-heading").animate({ left: '900px'},750);
    $("#horizontal-rule").css('width','100%');
    $("#about-us-fifth-content-para").fadeIn(1500);
  }
});

// END FADES AND ANIMATIONS [about-us.html] //

// FADES AND ANIMATIONS [contact-us.html] //

$(document).ready(function(){
  $("#contact-us-first-content-para, #branch-map, #contact-us-form").fadeOut();
});

$(window).scroll(function(){
  if($(this).scrollTop()>650){
    $("#contact-us-first-content-heading").animate({ left: '320px'},750);
    $("#contact-us-first-content-para").fadeIn(1500);
    $("#branch-map").fadeIn(2000);
  }
  if($(this).scrollTop()>2050){
    $("#contact-form-heading").animate({ right: '75px'},750);
    $("#contact-us-form").fadeIn(1500);
  }
});

// END FADES AND ANIMATIONS [contact-us.html] //

// FADES AND ANIMATIONS [kevin-mitnick-... .html] //

$(document).ready(function(){
  $("#security-awareness-first-content-para, #security-awareness-second-content-para, #security-awareness-third-content-para, #security-awareness-fourth-content-para").fadeOut();
})

$(document).scroll(function(){
  if($(this).scrollTop()>200){
    $("#gartner_logo").animate({ left: '15%' },750);
    $("#security-awareness-first-content-para").fadeIn(1500);
  }
  if($(this).scrollTop()>850){
    $("#security-awareness-second-content-heading").animate({ right: '95px' },750);
    $("#security-awareness-second-content-para").fadeIn(1500);
  }
  if($(this).scrollTop()>2600){
    $("#security-awareness-third-content-heading").animate({ left: '350px' },750);
    $("#security-awareness-third-content-para").fadeIn(1500);
  }
  if($(this).scrollTop()>5500){
    $("#security-awareness-fourth-content-heading").animate({ right: '85px' },750);
    $("#security-awareness-fourth-content-para").fadeIn(1500);
  }
});
// END FADES AND ANIMATIONS [kevin-mitnick-.... .html] //

// FADES AND ANIMATIONS [AllCybSecured-awareness... .html]//
/*$(document).ready(function(){

});*/

$(window).scroll(function(){
  if($(this).scrollTop()>1000){
    $("#enterprise-awareness-second-content-heading").animate({ right:'10px' },750);
  }
});
// END FADES AND ANIMATIONS [AllCybSecured-awareness... .html]//
