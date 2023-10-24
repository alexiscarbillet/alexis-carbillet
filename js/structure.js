(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $(".navbar").addClass("d-none");
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $(".navbar").removeClass("d-none");
  })

})(jQuery); // End of use strict

function Lien() {
	i = document.Choix.Liste.selectedIndex;
	if (i == 0) return;
	url = document.Choix.Liste.options[i].value;
	parent.location.href = url;
}

function showSection(sectionId) {
  // Hide all sections
  document.getElementById('section1').style.display = 'none';
  document.getElementById('section2').style.display = 'none';

  // Show the selected section
  document.getElementById(sectionId).style.display = 'block';
}

function showSection2(sectionId) {
  // Hide all sections
  document.getElementById('section3').style.display = 'none';
  document.getElementById('section4').style.display = 'none';
  document.getElementById('section5').style.display = 'none';

  // Show the selected section
  document.getElementById(sectionId).style.display = 'block';
}

function showSection3(sectionId) {
  // Hide all sections
  document.getElementById('section6').style.display = 'none';
  document.getElementById('section7').style.display = 'none';
  document.getElementById('section8').style.display = 'none';

  // Show the selected section
  document.getElementById(sectionId).style.display = 'block';
}

function showSection4(sectionId) {
  // Hide all sections
  document.getElementById('section9').style.display = 'none';
  document.getElementById('section10').style.display = 'none';

  // Show the selected section
  document.getElementById(sectionId).style.display = 'block';
}