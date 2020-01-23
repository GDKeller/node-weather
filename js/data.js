const request = require('request');
const {ipcMain} = require('electron');

let apiKey = 'ef84cb715e7bfae835b8185d5d349780';
var city = 'los angeles,us';
let currentWeather = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
var dataTemp = '';
var dataLocation = '';




const {ipcRenderer} = require('electron')
// receive message from index.html
ipcRenderer.on('asynchronous-reply', (event, arg) => {
    city = arg;
    currentWeather = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    fetchData();
});

fetchData()
window.setInterval(function() {
    fetchData()
}, 5000);
function fetchData() {
    request(currentWeather, function (err, response, body) {
        if(err){
            console.log('error:', error);
        } else {
            let weather = JSON.parse(body);
            // console.log(weather);
            dataDesc = weather.weather["0"].main;
            dataTemp = Math.round(weather.main.temp);
            dataLocation = weather.name;
            renderData();
        }
    });
}

function renderData() {
    var elTemp = document.querySelector('.temp');
    var elDesc = document.querySelector('.description');
    var elLocation = document.getElementById('location');
    elDesc.innerHTML = dataDesc;
    elTemp.innerHTML = dataTemp;
    elLocation.innerHTML = dataLocation;
}


