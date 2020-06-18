import {refreshPage} from "./refresh.js";

const form = document.querySelector("form")
let input = document.querySelector("form input");
var city = ""
form.addEventListener("submit",(event)=>{
  event.preventDefault()
  localStorage.setItem("input",input.value)
  refreshPage()
  // city = input.value
})


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

export {handlePromise}