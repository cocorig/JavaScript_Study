

const API_KEY = ''
function onGeoOk(position){ //나의 위치를 받음
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    fetch(url).then(response => response.json()).then(data =>{
        const weather = document.querySelector('#weather span:first-child');
        const city = document.querySelector('#weather span:last-child');
        city.innerText =   data.name;
        weather.innerText =  `${data.weather[0].main} @ ${Math.floor(data.main.temp/10 * 10)/10}°C`;
    })
}
function onGeoError(){
    alert('GeoError')
}


navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)