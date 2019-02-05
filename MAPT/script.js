$(document).ready(function(){

    var imgsToShow = ($(document).width() >= 600) ? 5 : 3; //only show 3 images on mobile

    $('.carousel').slick({
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: imgsToShow,
        infinite: false,
        adaptiveHeight: true,
        asNavFor: '.carousel_text',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: imgsToShow
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
    });
    $('.carousel_text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        fade: true,
        asNavFor: '.carousel'
    });
  });