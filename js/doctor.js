var apiKey = require('./../.env').apiKey;

function doctorInfo() {
}

doctorInfo.prototype.docInfo = function(condition) {
  var doctors = [];
  $('#result-li').text("");
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ condition+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
  .then(function(results) {
    results.data.forEach(function(doctor) {
      doctors.push({
        firstName: doctor.profile.first_name,
        lastName: doctor.profile.last_name,
        title: doctor.profile.title,
        bio: doctor.profile.bio,
      });
    });

    doctors.forEach(function(doctor) {
      if (doctor.title != undefined) {
        doctor.title = doctor.title;
      } else {
        doctor.title = "n/a";
      }
    });

    doctors.forEach(function(doctor) {
      if (doctor.bio != "") {
        doctor.bio = doctor.bio;
      } else {
        doctor.bio = "No bio available.";
      }
    });
    if (doctors.length === 0) {
      $('#result-li').append("<h4>No results. Try getting a little more specific!");
    } else {
      doctors.forEach(function(doc) {
        $('#result-li').append(
          "<li>" + doc.firstName + " " + doc.lastName + ", " + doc.title + "<p>" + doc.bio + "</p></li>"
        );
      });
    }
  })
  .fail(function(error){
  });
};

exports.doctorModule = doctorInfo;
