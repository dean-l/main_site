$(document).ready(function() {
    
    $('body').scrollspy({target: "body", offset: 50});   


      $(".page_nav a").on('click', function(event) {

        if (this.hash !== "") {
    
          event.preventDefault();

          var hash = this.hash;

          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
              
            window.location.hash = hash;
          });
        }
      });
    
    $(function() {
        
        $('#mail_link').mouseenter(function() {
   
            $('#mail_ol').fadeIn(200);
            $('#li_ol').fadeOut(200);
            $('#gh_ol').fadeOut(200);
 
        });
        
        $('#li_link').mouseenter(function() {
   
            $('#li_ol').fadeIn(200);
            $('#mail_ol').fadeOut(200);
            $('#gh_ol').fadeOut(200);
 
        });
        
        $('#gh_link').mouseenter(function() {
   
            $('#gh_ol').fadeIn(200);
            $('#mail_ol').fadeOut(200);
            $('#li_ol').fadeOut(200);
 
        });

    });
});