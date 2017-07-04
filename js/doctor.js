var apiKey = require('./../.env').apiKey;

function DoctorInfo() {
}

DoctorInfo.prototype.docInfo = function(condition) {
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
  })
  .fail(function(error){
    console.log("Getting doctors failed")
  });
  return doctors;
};

exports.doctorModule = DoctorInfo;
