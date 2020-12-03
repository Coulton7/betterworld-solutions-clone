$(document).ready(function() {
  $('#createPDF').click(function validation() {
    var orgName = document.getElementById('orgName');
    var orgPhone = document.getElementById('orgPhone');
    var orgEmail = document.getElementById('orgEmail');
    var orgWorkers = document.getElementById('orgWorkers');
    var roi = document.getElementById('roi');
    var jobRole = document.getElementById('jobRole');
    var name = document.getElementById('name');
    var orgType = document.getElementById('orgType');
    var type1 = document.getElementById('type1');
    var type2 = document.getElementById('type2');
    var type3 = document.getElementById('type3');
    var error = document.getElementById('error');

    if (orgName.value == "") {
      $(orgName).addClass("is-invalid");
      $(error).show();  
      return false;
    }

    if (orgEmail.value == "") {
      $(orgName).removeClass("is-invalid");
      $(orgEmail).addClass("is-invalid");
      $(error).show();  
      return false;
    }

    if (orgPhone.value == "") {
      $(orgEmail).removeClass("is-invalid");
      $(orgPhone).addClass("is-invalid");
      $(error).show(); 
      return false;
    }

    if (orgWorkers.value == "") {
      $(orgPhone).removeClass("is-invalid");  
      $(orgWorkers).addClass("is-invalid");
      $(error).show(); 
      return false;
    }

    if (roi.value == "") {
      $(orgWorkers).removeClass("is-invalid");
      $(roi).addClass("is-invalid");
      $(error).show(); 
      return false;
    }

    if (jobRole.value == "") {
      $(roi).removeClass("is-invalid");
      $(jobRole).addClass("is-invalid");
      $(error).show(); 
      return false;
    }

    if (name.value == "") {
      $(jobRole).removeClass("is-invalid");
      $(name).addClass("is-invalid");
      $(error).show(); 
      return false;
    }

    if ($('input[name=orgType]:checked').length == 0) {
      window.alert("Please select a business type");
      $(name).removeClass("is-invalid");
      $(type1).addClass("is-invalid");
      $(type2).addClass("is-invalid");
      $(type3).addClass("is-invalid");
      $(error).show(); 
      return false;
    } else {
      $('#createPDF').hide();
      $('#downloadPDF').show();
    }
  })
});
