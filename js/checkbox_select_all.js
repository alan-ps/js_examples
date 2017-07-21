(function ($) {

  Drupal.behaviors.swaypointSelectAllCT = {
    attach: function (context, settings) {
      var $context = $(context);

      $('#js-examples-checkbox-select-all-form .form-checkboxes', $context).once(function () {
        $that = $(this);

        if ($(this).find('.form-type-checkbox').length > 0) {
          var $checboxMarkup = $([
            '<div class="form-item form-type-checkbox form-item-select-all">',
            '<input type="checkbox" id="select-all" name="select-all" value="all" class="form-checkbox">',
            '<label style="font-weight: bold;" class="option" for="select-all">' + Drupal.t('Select all') + '</label>',
            '</div>'
          ].join(' '));

          $that.prepend($checboxMarkup);
          var $selectAll = $('input#select-all', $that);

          $selectAll.once('select-all', function () {

            $selectAll.bind('change', function () {
              if ($(this).is(':checked')) {
                $('input', $that).filter(':not(#select-all)').attr('checked', true);
              } else {
                $('input', $that).filter(':not(#select-all)').attr('checked', false);
              }
            });

            $('input', $that).filter(':not(#select-all)').change(function () {
              if (!$('input', $that).filter(':not(#select-all):not(:checked)').length > 0) {
                $selectAll.attr('checked', true);
              } else {
                $selectAll.attr('checked', false);
              }
            });

          });
        }
      });
    }
  };

}(jQuery));
