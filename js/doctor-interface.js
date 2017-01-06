var Doctor = require('./../js/doctor.js').doctorModule;


$(document).ready(function(){
  var currentDoctorObject = new Doctor();
  $('#find-doctor').click(function(){
    var medicalIssue = $('#illness-input').val();
    currentDoctorObject.getDoctor(medicalIssue);
    $('.collection-header').show();
  });

});

// exports.getDoctors("toothache");
