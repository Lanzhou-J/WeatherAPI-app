import {refreshPage} from "./refresh.js";
export function buttonClick(){
  const button = document.querySelector("button")
  button.addEventListener("click",()=>{refreshPage()})
}