var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctors = function(img, firstName, lastName, title) {
  var image = ('<img src=' + img + '>');
  $('#doctor-ul').append("<li class='collection-item'>" + image + " " + firstName + " " + lastName + ", " + title);
}

$(document).ready(function(){
  var currentDoctorObject = new Doctor();
  $('#find-doctor').click(function(){
    var medicalIssue = $('#illness-input').val();
    currentDoctorObject.getDoctor(medicalIssue, displayDoctors);
    $('.collection-header').show();
  });

});

// exports.getDoctors("toothache");
