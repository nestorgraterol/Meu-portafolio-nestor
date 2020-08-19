function validateForm() {
    let name = document.querySelector('#name').value
    let submitButton = document.querySelector('button[type=submit]')
    if (validateFullName(name)) {
        submitButton.disabled = false
    } else {
        submitButton.disabled = true
    }
}

document.querySelector('#name').addEventListener('change', validateForm)