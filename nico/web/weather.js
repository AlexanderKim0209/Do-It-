const API_KEY = "4caa469b13da7efdd381bdb4de70a9e8" 
const weather = document.querySelector("#weather span:first-child")
const city = document.querySelector("#weather span:last-child");


 function onGeoOk(position) {
   const lat = position.coords.latitude
   const lon = position.coords.longitude
  // console.log("your location is",lat , "," , lon )
   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; //백틱 조심
   //console.log(url);

   fetch(url)
   .then((response) => response.json())
   .then((data) => {
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main}/${data.main.temp} `
    //console.log(data.name, data.weather[0].main)
   }) //사용자 대신 자바스크립트가 url을 불러줌
 }

 function onGeoError(){
  alert("Can't find you. No weather for you.");
 }

 




navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);