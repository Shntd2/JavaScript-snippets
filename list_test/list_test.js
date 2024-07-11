// DOMContentLoaded ensures that the JavaScript code runs only 
// after the entire DOM has been loaded
document.addEventListener('DOMContentLoaded', function () { 
    const selectElement = document.getElementById('browserSelect');
    const customInputContainer = document.getElementById('customInputContainer');
    
    // ensure the custom input container is hidden initially
    customInputContainer.style.display = 'none';

    // event listener for changes in the select element
    selectElement.addEventListener('change', function () {
        if (this.value === 'Other') {
            customInputContainer.style.display = 'block'; // show the custom input
        } else {
            customInputContainer.style.display = 'none'; // hide the custom input
        }
    });
});