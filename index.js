let input = document.querySelector("input")
let button = document.querySelector("button")
let temp= document.querySelector(".tempdata")
let cloud= document.querySelector(".clouddata")
let humid= document.querySelector(".humiddata")
let wind= document.querySelector(".winddata")

button.addEventListener("click" ,()=>{
    let cityname = input.value.trim();
    const apiKey = '358590350c0920cb4477b4dadbf215c9';

if (cityname === "" ) {
        alert("Please enter a city name.");
        return;
    } 
    fetch( `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}` ).then((data)=>{
 return data.json()
 }).then((data)=>{
    console.log(data)

      let temperature= data.main.temp-273.15;
      temp.textContent = `${temperature.toFixed(2)} °C`
      cloud.textContent= `${data.clouds.all}%`
      humid.textContent= `${data.main.humidity}%`;
      wind.textContent= `${data.wind.speed} m/s`; 

 }).catch((er)=>{
    alert("invalid city name")
 })

})


