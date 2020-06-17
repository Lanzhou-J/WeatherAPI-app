// fetch = require('node-fetch');

// const getWeather = () => fetch("http://api.weatherstack.com/current?access_key=a6233c82ea900f0e24d94471cc0df183&query=New York")
//   .then(response=>response.json())
//   .then((data)=>data)

// const promises = [];
// promises.push(getWeather())

// Promise.all(promises).then((response)=>response[0])

const form = document.querySelector("form")
let input = document.querySelector("form input");
var city = ""
form.addEventListener("submit",(event)=>{
  event.preventDefault()
  localStorage.setItem("input",input.value)
  refreshPage()
})

function refreshPage(){
    window.location.reload();
} 
city = localStorage.getItem("input");
city = city.charAt(0).toUpperCase() + city.slice(1);
city = city.replace(" ","_")


const getWeather = async () => {
  try {
    const response = await fetch(`http://api.weatherstack.com/current?access_key=a6233c82ea900f0e24d94471cc0df183&query=${city}`)
    const data = await response.json()
    console.log(data);
    return data
  } catch(err){
    console.log(err)
  }
}

const handlePromise = async () => {
  const result = await getWeather()
  const data = JSON.stringify(result)
  localStorage.setItem("Weather",data)
}

handlePromise()

const weather = JSON.parse(localStorage.getItem("Weather"));

// const paragraph = document.querySelector("p");
const h2 = document.querySelector("h2")
const ol = document.querySelector("ol")



// paragraph.innerText = JSON.stringify(weather.current);
for (const property in weather.current){
  let newDiv = document.createElement("div");
  newDiv.innerText = `${property}: ${weather.current[property]}`;
  ol.prepend(newDiv)
}
h2.innerText = weather.request.query

const button = document.querySelector("button")
button.addEventListener("click",()=>{refreshPage()})




  





