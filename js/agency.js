/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
// $('.navbar-collapse ul li a').click(function() {
//     $('.navbar-toggle:visible').click();
// });


// MixItUp

// We will be using MixItUp's 'changeLayout' API method to add and remove a 'list' class to the container. This class changes the styling of our target elements (see CSS).
  
 // NB: Changing layout doesn't have to be between grid/list only, we can add any class we want and use it to affect the styling of our elements.

$(function(){

  var layout = 'list', // Store the current layout as a variable
      $container = $('#Container'), // Cache the MixItUp container
      $changeLayout = $('#ChangeLayout'); // Cache the changeLayout button
  
  // Instantiate MixItUp with some custom options:
  
  $container.mixItUp({
    animation: {
      animateChangeLayout: true, // Animate the positions of targets as the layout changes
      animateResizeTargets: true, // Animate the width/height of targets as the layout changes
      effects: 'fade'
    },
    layout: {
      containerClass: 'list' // Add the class 'list' to the container on load
    }
  });
  
  // MixItUp does not provide a default "change layout" button, so we need to make our own and bind it with a click handler:
  
  $changeLayout.on('click', function(){
    
    // If the current layout is a list, change to grid:
    
    if(layout == 'list'){
      layout = 'grid';
      
      $changeLayout.text('List'); // Update the button text
      
      $container.mixItUp('changeLayout', {
        containerClass: layout // change the container class to "grid"
      });
      
    // Else if the current layout is a grid, change to list:  
    
    } else {
      layout = 'list';
      
      $changeLayout.text('Grid'); // Update the button text
      
      $container.mixItUp('changeLayout', {
        containerClass: layout // Change the container class to 'list'
      });
    }
  });
  
});