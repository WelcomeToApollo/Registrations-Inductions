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
        event.preventDefault();

        inputs.forEach(input => {
            if (input.checkValidity()) {
                input.style.border = '1px solid black';
            } else {
                input.style.border = '2px solid red';
            }
        });
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




