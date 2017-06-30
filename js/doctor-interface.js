var doctorInfo = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  var doctors = new doctorInfo();
  $('#find').click(function(event) {
    event.preventDefault();
    var conditions = $('#search-symptoms').val();
    doctor = doctors.docInfo(conditions);
    $('#search-symptoms').val("");
    $('#search').hide();
    $('#clear').show();
  })
});
