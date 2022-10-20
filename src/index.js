import {createSlider} from "./create-slider.js";
window.loadSlider = function (json) {
  const questions = JSON.parse(json).data;
  console.log(questions);


  questions.forEach(function(element, index){createSlider(element,index)});

   
}