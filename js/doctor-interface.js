var doctorInfo = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  $('ul').hide();
  var doctors = new doctorInfo();
  $('#find').click(function(event) {
    event.preventDefault();
    var conditions = $('#search-symptoms').val();
    doctor = doctors.docInfo(conditions);
    $('#search-symptoms').val("");
    $('#filler').hide();
    $('ul').show();
  })
});
