var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctors = function(img, firstName, lastName, title) {
  var image = ('<img src=' + img + '>');
  $('#doctor-ul').append("<li class='collection-item'>" + image + " " + firstName + " " + lastName + ", " + title);
};

$(document).ready(function(){

  $('#find-doctor').click(function(){
    $('#doctor-ul').empty();
    var currentDoctorObject = new Doctor();
    var medicalIssue = $('#illness-input').val();
    currentDoctorObject.getDoctor(medicalIssue, displayDoctors);
    $('.collection-header').show();
    medicalIssue = $('#illness-input').val("");
  });

});

// exports.getDoctors("toothache");
