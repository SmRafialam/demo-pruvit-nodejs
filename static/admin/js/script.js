(function($) {

	"use strict";

	 $(document).ready(function() {
        $('#multiple-checkboxes').multiselect({
          includeSelectAllOption: true,
        });
        $(".table").DataTable({
          order: [0, 'desc']
        });
    });
})(jQuery);
