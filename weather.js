let apiKey = "dcd8ea94f7668638bd143ab67cfb4efe";

let btn =document.querySelector("#search");
let input = document.querySelector("#city");
let ul = document.querySelector("#listData");
let div = document.querySelector("#weather");
let h3 = document.querySelector("#cityName");

btn.addEventListener("click", async ()=>{
    let result = await  getWeather();
    show(result);
})

async function show(result){
    h3.innerText = input.value;
    let li = document.createElement("li");
    li.innerText = `Temperature: ${result.main.temp}°C 
    Humidity: ${result.main.humidity}% 
    Description: ${result.weather[0].description}
     Wind Speed: ${result.wind.speed}m/s`;
    ul.append(li);
    div.style.display = "block";
    input.value = "";
}

async function getWeather(){
    try {  
        let city =input.value;
        let url  = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
       let res = await axios.get(url);
       return res.data;       
    } catch (err) {
        return "No data found-",err;
    } 
}
