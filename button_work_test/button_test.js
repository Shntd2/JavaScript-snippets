// select the button element by its ID
const button = document.getElementById('ToggleButton');

// add an event listener to the button for the 'click' event
button.addEventListener('click', () => {
    // toggle the 'active' class on the button
    button.classList.toggle('active');

    // check if the 'active' class is present on the button
    if (button.classList.contains('active')) {
        // open a specific URL when the button is toggled to the 'active' state
        window.location.href = 'https://google.com';
    }
});
