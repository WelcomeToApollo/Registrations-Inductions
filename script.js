const surnameInput = document.getElementById("surname");
const firstnameInput = document.getElementById("firstname");

surnameInput.addEventListener("input", function () {
  this.value = this.value.toUpperCase();
});

firstnameInput.addEventListener("input", function () {
  this.value = this.value.toUpperCase();
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const inputs = document.querySelectorAll('input[required]');

    form.addEventListener('submit', function(event) {
        let invalidInputs = false;

        inputs.forEach(input => {
            if (input.checkValidity()) {
                input.style.border = '1px solid black';
            } else {
                input.style.border = '2px solid red';
                invalidInputs = true;
            }
        });

        if (invalidInputs) {
            event.preventDefault();
        }
    });
});

function updateRequiredFields(yesId, noId, field1Id, field2Id = null) {
    const yesRadio = document.getElementById(yesId);
    const noRadio = document.getElementById(noId);
    const field1 = document.getElementById(field1Id);
    const field2 = field2Id ? document.getElementById(field2Id) : null;
  
    function setRequired() {
      field1.required = yesRadio.checked;
      if (field2) field2.required = yesRadio.checked;
    }
  
    yesRadio.addEventListener("change", setRequired);
    noRadio.addEventListener("change", setRequired);
    setRequired();
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    updateRequiredFields("yes_lux_seamans_book", "no_lux_seamans_book", "seamans_book_number", "seamans_book_expiry");
    updateRequiredFields("yes_endorsement", "no_endorsement", "lux_endorsement_number", "lux_endorsement_expiry");
    updateRequiredFields("yes_opito_bosiet", "no_opito_bosiet", "opito_bosiet_expiry");
    updateRequiredFields("yes_gwo_sea_survival", "no_gwo_sea_survival", "gwo_sea_survival_expiry");
    updateRequiredFields("yes_gwo_working_heights", "no_gwo_working_heights", "gwo_working_heights_expiry");
    updateRequiredFields("yes_gwo_manual_handling", "no_gwo_manual_handling", "gwo_manual_handling_expiry");
    updateRequiredFields("yes_stcw_fast_rescue_crafts", "no_stcw_fast_rescue_crafts", "stcw_fast_rescue_crafts_expiry");
    updateRequiredFields("yes_certificate_competence", "no_certificate_competence", "certificate_competence_expiry");
    updateRequiredFields("yes_helideck_certification", "no_helideck_certification", "helideck_certification_expiry", "helideck_level");
  });
  
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const errorMessage = document.getElementById("errorMessage");
  
    form.addEventListener("submit", function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        errorMessage.style.display = "block";
      } else {
        errorMessage.style.display = "none";
      }
    });
  });


      

      
  
