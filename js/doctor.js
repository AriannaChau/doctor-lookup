var apiKey = require('./../.env').apiKey;

function doctorInfo() {
}

doctorInfo.prototype.docInfo = function(condition) {
  var doctors = [];
  $('#output').text("");
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
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
    return doctors;
  })
  .fail(function(error){
  });
};

exports.doctorModule = doctorInfo;
