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


document.addEventListener("DOMContentLoaded", function () {
    const yesRadio = document.getElementById("yes");
    const noRadio = document.getElementById("no");
    const seamansBookNumber = document.getElementById("seamans_book_number");
    const seamansBookExpiry = document.getElementById("seamans_book_expiry");

    function updateRequired() {
        if (yesRadio.checked) {
            seamansBookNumber.required = true;
            seamansBookExpiry.required = true;
        } else {
            seamansBookNumber.required = false;
            seamansBookExpiry.required = false;
        }
    }

    yesRadio.addEventListener("change", updateRequired);
    noRadio.addEventListener("change", updateRequired);

    updateRequired();
});

document.addEventListener("DOMContentLoaded", function () {
    const yesEndorsement = document.getElementById("yes_endorsement");
    const noEndorsement = document.getElementById("no_endorsement");
    const luxEndorsementNumber = document.getElementById("lux_endorsement_number");
    const luxEndorsementExpiry = document.getElementById("lux_endorsement_expiry");

    function updateEndorsementRequired() {
        if (yesEndorsement.checked) {
            luxEndorsementNumber.required = true;
            luxEndorsementExpiry.required = true;
        } else {
            luxEndorsementNumber.required = false;
            luxEndorsementExpiry.required = false;
        }
    }

    yesEndorsement.addEventListener("change", updateEndorsementRequired);
    noEndorsement.addEventListener("change", updateEndorsementRequired);

    updateEndorsementRequired();
});

document.addEventListener("DOMContentLoaded", function () {
    const updateEndorsementRequired = (yesId, noId, expiryId, levelId = null) => {
        const yes = document.getElementById(yesId);
        const no = document.getElementById(noId);
        const expiry = document.getElementById(expiryId);
        const level = levelId ? document.getElementById(levelId) : null;

        function setRequired() {
            expiry.required = yes.checked;
            if (level) level.disabled = !yes.checked;
        }

        yes.addEventListener("change", setRequired);
        no.addEventListener("change", setRequired);

        setRequired();
    };

    updateEndorsementRequired("yes_opito_bosiet", "no_opito_bosiet", "opito_bosiet_expiry");
    updateEndorsementRequired("yes_gwo_sea_survival", "no_gwo_sea_survival", "gwo_sea_survival_expiry");
    updateEndorsementRequired("yes_gwo_working_heights", "no_gwo_working_heights", "gwo_working_heights_expiry");
    updateEndorsementRequired("yes_gwo_manual_handling", "no_gwo_manual_handling", "gwo_manual_handling_expiry");
    updateEndorsementRequired("yes_stcw_fast_rescue_crafts", "no_stcw_fast_rescue_crafts", "stcw_fast_rescue_crafts_expiry");
    updateEndorsementRequired("yes_certificate_competence", "no_certificate_competence", "certificate_competence_expiry");
    updateEndorsementRequired("yes_helideck_certification", "no_helideck_certification", "helideck_certification_expiry", "helideck_level");
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
  
