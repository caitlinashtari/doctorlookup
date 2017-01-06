var apiKey = require('./../.env').apiKey;

function Doctor (){
}

Doctor.prototype.getDoctor = function(medicalIssue, displayFunction) {
    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then(function(result) {
       for(i =0; i <= 19; i ++){
         displayFunction(result.data[i].profile.image_url, result.data[i].profile.first_name, result.data[i].profile.last_name, result.data[i].profile.title, result.data[i].profile.bio );
       }
      }).fail(function(error){
        console.log(error.message);
      });
  };

exports.doctorModule = Doctor;
