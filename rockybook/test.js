$(document).ready(function () {
    console.log("hello");
    $(".top-burger-icon,.sidenav-close-icon").on("click", function () {
      console.log("burger-menu");
      $(".drd-sidenav-bar").toggle();
    });
  });





$(document).ready(function() {

  // remove language url slug form links in payment-profile section
  $('.payment-profile-section li a').each(function(index, element){
    let dataHref =  $(element).attr('href').split('/').splice(2).join('/');
    let dataRoute = $(element).attr('href').split('=').pop();
    if(dataRoute){
      $(element).attr('href', 'javascript:void(0)');
      $(element).attr('data-href', dataHref);
      $(element).attr('popup-with-href','' );
      if(dataRoute!=='profile'){
        $(element).attr('data-popup', 'profile');
      }
      $(element).attr('data-route', dataRoute);
    }
    // $(element).attr('href', $(element).attr('href').split('/').splice(2).join('/'))        
  })
  // remove language url slug form links in payment-profile section

  // remove /en-us/ from logout button's hyperlink
  var href = '/' + $('.policy-and-support li a:has(>.logout-icon)').attr('href').split('/').splice(2).join('/')
  $('.policy-and-support li a:has(>.logout-icon)').attr('href', href)
  // remove /en-us/ from logout button's hyperlink

  // submenu items accordion
  var allPanels = $('.payment-profile-section li:has(a > .sub-menu-item)').hide();
  $(".payment-profile-section li > a:has(> .sub-menu-accordion)").click(function(e) {    
    e.preventDefault();
    e.stopPropagation();
    allPanels.slideToggle();
    return false;
  });
  // submenu items accordion

});




  /* menu-active-icon */
  $(document).ready(function(){
    var menu = {'':0, 'home':0, 'casino':1, 'sport-exchange': 2, 'bonus': 3, 'menu': 4};
    var currentURL = $(location).attr('href').split('/').pop();
    $('.mobile-bottom-navbar .Item svg').each(function(index, element){
      if(menu[currentURL] === index){
          $(element).parentsUntil('.mobile-navbar-items-wrapper').addClass('active')
      }else{
          // element.removeClass('active');
          $(element).parentsUntil('.mobile-navbar-items-wrapper').removeClass('active')
      }
    })
    /* Auth Guard Script */
      if(parseInt(BalanceUpdater.PlayerId) === 0){
        $('.auth-guard a:first-child').each(function(index, element){
          let url = $(element).attr("href");
          $(element).attr("href", "#login").attr("data-href", url)
        })       
      }
    /* Auth Guard Script */
  })
  /* menu-active-icon */








$(document).ready(function() {

  // remove language url slug form links in paymen-profile section
  $('.payment-profile-section li a').each(function(index, element){
    $(element).attr('href', $(element).attr('href').split('/').splice(2).join('/'))        
  })
  // remove language url slug form links in paymen-profile section

  // remove /en-us/ from logout button's hyperlink
  var href = '/' + $('.policy-and-support li a:has(>.logout-icon)').attr('href').split('/').splice(2).join('/')
  $('.policy-and-support li a:has(>.logout-icon)').attr('href', href)
  // remove /en-us/ from logout button's hyperlink

  // submenu items accordion
  var allPanels = $('.payment-profile-section li:has(a > .sub-menu-item)').hide();
  // $(".payment-profile-section li > a:has(> .sub-menu-accordion)").click(function(e) {    
  //   e.preventDefault();
  //   e.stopPropagation();
  //   allPanels.slideToggle();
  //   return false;
  // });
  // submenu items accordion

});

$('.search-fixed a i').removeClass('las la-search').addClass('search-icon').css({'width':'20px','height':'20px'});
$('.search-fixed a span').text("Search");

$(document).ready(function() {
  let src = $('.video-player-test img').attr('src')
  $('.video-player-test img').remove()
  $('.video-player-test').append('<img src="https://rockybook.fun/content/img/gifs/ricon.gif?v=1710793720" width="auto" height="240"/>')
  setTimeout(() => {
    $('.video-player-test img').remove()
    $('.video-player-test a').append('<video width="auto" height="240" class="border-radius-12" src='+src+' autoplay="" muted="" loop=""></video>')
  }, 1500); 
});




//  href="#login" data-href="/real/frame/24131/Aviator"

  $(document).ready(function() {
    $('.header-balance-button #totalBonus span:first').replaceWith('<img class="balance-arrow-icon" src="https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/d7b105bd-1e3a-4c88-9e9d-9b0568966f00/public">')
    $('.header-balance-button div:first i').replaceWith('<img class="bonus-balance-icon" src="https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/3f0a2cd9-f81a-488d-9d4a-d7ebc11a4f00/public">')
    $('.header-balance-button #menu-button-balance span:nth-child(2)').replaceWith('<span>₹ </span>')
    $('.header-balance-button #menu-play-balance span:nth-child(2)').replaceWith('<span>₹</span>')
    $('.header-balance-button #menu-button-balance').wrap('<a class="menu-button-balance-link" href="?h=profile&r=deposit"></a>')
    $('.header-balance-button #menu-play-balance').wrap('<a class="menu-button-balance-link" href="?h=profile&r=deposit"></a>')
    $('.header-balance-button div:first').on("click", function () {
      $('.header-balance-button div:first').toggleClass('active');
      $('.header-balance-button .bonus-balance-icon').toggleClass('rotate-180');
      $('.header-balance-button .Menu--user').toggle()
    })

    if(parseInt(BalanceUpdater.PlayerId) > 0){
      $('.header-mobile-update .Widget--user').hide();
    }
  });


  /* Auth Screen Update */
    $(document).ready(function(){
      $('.registration #popupLoginBtn').text('Login Now');
      $('#loginPopup .modal-title-text').text('Login now to play');
      $('#divLoginWithUsername form .row').first().hide();
      $('#divLoginWithUsername form .row').last().after('<p class="register-text">Don’t have an account? <a style="color: #039BE5;" href="#register" popup-with-href="" class="Button--outlined Button--sign-up" aria-label="Register">Register</a></p>')
      $('#loginPopup .modal-header img').attr('src','https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/3d2a4770-c6c2-4ff7-4c71-c077ee158e00/public');
      $('#registrationPopup .modal-header img').attr('src','https://imagedelivery.net/u45V04IDk2961F7ANAiDUw/3d2a4770-c6c2-4ff7-4c71-c077ee158e00/public');
      $('#registrationPopup .modal-title-text').text('Register now to play');
      $('#registerContainer #regNextBtn').text('Send Code');
      $("#registerContainer .row:has('#regNextBtn') div").removeClass('text-right').addClass('send-code-button')
      $("#registerContainer .row:has('#regNextBtn') div").removeClass('text-right').addClass('send-code-button').after('<p class="register-text">By clicking on "send code", you accepting <a href="/terms-conditions">terms and conditions</a></p><p class="register-text">Have an account? <a href="#login" popup-with-href="" aria-label="Login">Log in</a></p>')
    });
  /* Auth Screen Update */




// FAQ
  $( document ).ready(function() {
    var allPanels = $('.accordion-section > dd').hide();
    $('.accordion-section > dt > a').click(function(e) {
        e.preventDefault();
        allPanels.slideUp();
        $('.accordion-section > dt').removeClass('active')
        $(this).parent().next().slideDown();
        $(this).parent().addClass('active')
        return false;
    });
  });

// FAQ





  $(document).ready(function () {
    $(".providers-slider-wrapper .article-cards")
      .not(".slick-initialized")
      .slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
  });













  $(document).ready(function() {

    // remove language url slug form links in paymen-profile section
    $('.payment-profile-section li a').each(function(index, element){
      const url = $(element).attr('href');
      if (url.indexOf("/en-us/") > -1) {
        $(element).attr("href", url.replace("/en-us/", ""));
      }      
    })
    // remove language url slug form links in paymen-profile section
  
    // remove /en-us/ from logout button's hyperlink
    const logOutUrl = $('.policy-and-support li a:has(>.logout-icon)').attr('href');
    if (logOutUrl.indexOf("/en-us/") > -1) {
      $('.policy-and-support li a:has(>.logout-icon)').attr('href', logOutUrl.replace('/en-us/', '/'))
    }
    // remove /en-us/ from logout button's hyperlink
  
    // submenu items accordion
    var allPanels = $('.payment-profile-section li:has(a > .sub-menu-item)').hide();
    // $(".payment-profile-section li > a:has(> .sub-menu-accordion)").click(function(e) {    
    //   e.preventDefault();
    //   e.stopPropagation();
    //   allPanels.slideToggle();
    //   return false;
    // });
    // submenu items accordion
  
  });



