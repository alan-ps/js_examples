(function ($) {

  Drupal.behaviors.checkboxCheckLimit = {
    attach: function (context, settings) {
      var $context = $(context);

      $('#js-examples-checkbox-check-limit-form .form-checkboxes', $context).once(function () {

        $(this).once('check-limit', function() {
          var limit = 5;
          var $allItems = $(this).find('.form-checkbox');

          if ($allItems.length > limit) {

            // Initial behaviour.
            if ($allItems.filter(':checked').length >= limit) {
              $allItems.filter(':not(:checked)').attr('disabled', 'disabled');
              $allItems.filter(':not(:checked)').parent().addClass('item-disabled');
            }

            // Disable all unchecked checkboxes if number of checked items is
            // >= of allowed count.
            $allItems.bind('change', function() {
              var numChecked = $allItems.filter(':checked').length;

              if (numChecked >= limit) {
                $allItems.filter(':not(:checked)').attr('disabled', 'disabled');
                $allItems.filter(':not(:checked)').parent().addClass('item-disabled');
              }
              else {
                $allItems.filter(':not(:checked)').attr('disabled', false);
                $allItems.filter(':not(:checked)').parent().removeClass('item-disabled');
              }
            });
          }
        });
      });
    }
  };

}(jQuery));
