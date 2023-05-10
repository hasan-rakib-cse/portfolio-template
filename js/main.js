$(document).ready(function(){

	// **********sticky nav-bar**********//
	$(".js--services-section").waypoint(function(direction){
		if(direction == "down")
		{
			$("nav").addClass("sticky");
		}
		else
		{
			$("nav").removeClass("sticky");
		}
	});



	// **********Browser Compability************//

	 // Smooth Scrool For IE/ Edge/ Safari

	$("a").on('click', function(event){
		if (this.hash !== "") 
		{
			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scroolTop: $(hash).offset().top
			}, 800, function(){
				window.location.hash = hash;
			});
		}
	});
});


// ****************For Nav-bar icon*****************//

// It will work to popup window and window wide become 100%
function openNav() {
	document.getElementById("myNav").style.width = "100%";
}

// It will work to popdown window and window wide become 0%
function closeNav() {
	document.getElementById("myNav").style.width = "0%";
}




	// ********** isotope.pkgd.min.js (portfolio section) **********//

    /* Filter - Isotope */
    var $grid = $('.grid').isotope({
        // options
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
    });
    
    // filter items on button click
    $('.filters-button-group').on( 'click', 'a', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
    
    // change is-checked class on buttons
    $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'a', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
        });	
    });
	
   // for owl-carousel 

$(".carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
          0:{
            items:1,
            nav: false
          },
          600:{
            items:2,
            nav: false
          },
          1000:{
            items:3,
            nav: false
          }
        }
      });