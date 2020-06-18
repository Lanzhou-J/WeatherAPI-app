import _ from "./node_modules/lodash-es/lodash.default.js";

export function renderWeather(){
  const weather = JSON.parse(localStorage.getItem("Weather"));

  // const paragraph = document.querySelector("p");
  const h2 = document.querySelector("h2")
  const h3 = document.querySelector("h3")
  const ol = document.querySelector("ol")

  function newTime() {
    this.observation_time = weather.location.localtime;
  }

  _.assign(weather.current, new newTime);


  // paragraph.innerText = JSON.stringify(weather.current);
  for (const property in weather.current){
    let newDiv = document.createElement("div");
    newDiv.innerText = `${property}: ${weather.current[property]}`;
    ol.prepend(newDiv)
  }
  h2.innerText = weather.request.query
  h3.innerText = moment().format('MMMM Do YYYY, h:mm:ss a')
}
