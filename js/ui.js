const remote = require('electron').remote;

document.getElementById("close-btn").addEventListener("click", function (e) {
    var window = remote.getCurrentWindow();
    window.close();
});

document.querySelector('.tab').addEventListener('click', function() {
    document.querySelector('.settings').classList.toggle('open')
});

document.getElementById('location').addEventListener('click', function() {
    document.getElementById('location').classList.add('hidden');
    document.getElementById('location-form').classList.add('show');
    document.getElementById('user-location').focus();
});


document.querySelector('#submit').addEventListener('click', function(event) {
    event.preventDefault();
    let location = document.getElementById("user-location").value;
    const {ipcRenderer} = require('electron')

    if ( location !== '' ) {
        // send location to main.js
        ipcRenderer.send('asynchronous-message', location)

        // receive message from main.js
        ipcRenderer.on('asynchronous-reply', (event, arg) => {
            // console.log(arg)
        });
    }

    document.getElementById('location-form').classList.remove('show');
    document.getElementById('location').classList.remove('hidden');
    document.getElementById('user-location').value = '';

});