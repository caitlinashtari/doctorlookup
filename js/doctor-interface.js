var Doctor = require('./../js/doctor.js').doctorModule;

var allDoctors = [];

var displayDoctors = function(img, firstName, lastName, title, specialty, rating) {
  allDoctors.push({img, firstName, lastName, title, specialty, rating});
  var image = ('<img src=' + img + '>');
  $('#doctor-ul').append("<li class='collection-item'>" + image + " " + firstName + " " + lastName + ", " + title + " " + specialty);
};

$(document).ready(function(){

  $('#find-doctor').click(function(){
    $('#doctor-ul').empty();
    var currentDoctorObject = new Doctor();
    var medicalIssue = $('#illness-input').val();
    currentDoctorObject.getDoctor(medicalIssue, displayDoctors);
    $('.collection-header').show();
    medicalIssue = $('#illness-input').val("");
    console.log(allDoctors);
  });

});
