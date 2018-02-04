var date = new Date();
date.setDate(date.getDate());

$(document).ready(function() {
  $(function() {
    $('.datepicker').datepicker({
      format: 'dd-mm-yyyy',
      startDate: date
    });
  });
});