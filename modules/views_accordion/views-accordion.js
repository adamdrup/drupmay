(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.views_accordion =  {
    attach: function(context) {
      if(drupalSettings.views_accordion){
        $.each(drupalSettings.views_accordion, function(id) {

          var $display = $(this.display +':not(.ui-accordion)');

          /* Prepare our markup for jquery ui accordion */
          $(this.header, $display).each(function(i){
            // Wrap the accordion content within a div if necessary
            if (!this.usegroupheader) {
              $(this).siblings().wrapAll('<div></div>');
            }
          });

          // The settings for the accordion.
          var accordionSettings = {
            header: this.header,
            animate: {
              'easing' : this.animated,
              'duration' : parseInt(this.duration),
            },
            active: this.rowstartopen,
            collapsible: this.collapsible,
            heightStyle: this.heightStyle,
            event: this.event,
            icons: false
          }
          if (this.useHeaderIcons) {
            accordionSettings.icons = {
              'header': this.iconHeader,
              'activeHeader': this.iconActiveHeader
            }
          }

          /* jQuery UI accordion call */
          $display.accordion(accordionSettings);
        });
      }
    }
  };
})(jQuery, Drupal, drupalSettings);
