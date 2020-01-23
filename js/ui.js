const remote = require('electron').remote;

document.getElementById("close-btn").addEventListener("click", function (e) {
    var window = remote.getCurrentWindow();
    window.close();
});

document.querySelector('.tab').addEventListener('click', function() {
    document.querySelector('.settings').classList.toggle('open')
})