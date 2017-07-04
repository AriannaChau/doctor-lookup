var DoctorInfo = require('./../js/doctor.js').doctorModule;


var displayDoc = function(doctors) {
  if (doctors.length === 0) {
    $('#result-li').append("<h4>No results. Try getting a little more specific!");
  } else {
    doctors.forEach(function(doc) {
        if (doc.title != undefined) {
          doc.title = doc.title;
        } else {
          doc.title = "n/a";
        }

        if (doc.bio != "") {
          doc.bio = doc.bio;
        } else {
          doc.bio = "No bio available.";
        }

      $('#result-li').append(
        "<li><h3>" + doc.firstName + " " + doc.lastName + ", " + doc.title + "</h3><p>" + doc.bio + "</p></li>"
      );
    });
  }
};

$(document).ready(function() {
  $('ul').hide();
  var doctors = new DoctorInfo();
  $('#find').click(function(event) {
    event.preventDefault();
    var conditions = $('#search-symptoms').val();
    var doctorArray = doctors.docInfo(conditions);
    setTimeout(function() {
      displayDoc(doctorArray);
    }, 1500);
    $('#search-symptoms').val("");
    $('#filler').hide();
    $('ul').show();
  })

});
