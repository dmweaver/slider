

export const createSlider=function(element, index){
  console.log(element);
  const question=element.fieldData.Question;
  const value=element.fieldData.Value;
  const valueDivID = `valueDiv${index+1}`;
  const min= element.fieldData.MinValue;
  const max= element.fieldData.MaxValue;
  const id= element.fieldData.PrimaryKey;
  console.log(question);
    const sliderDiv=document.getElementById("slider");
   
    //Question SDiv
     const slider = document.createElement("input");
     const questionDiv=document.createElement("p");
     questionDiv.innerHTML=`${question}  <span id="${valueDivID}" class=bg-primary text-white p-1">${value}</span>`;
     //Slider Div
     slider.type="range";
     slider.className = "form-range pb-5";
     slider.min = min;
     slider.max = max;
     slider.value = value;
     slider.step = 1;
     slider.id = id;
    
    //  slider.oninput=function(){ const valueDiv=document.getElementById(valueDivID);
    //   valueDiv.innerHTML=this.value;
    //  };
     slider.onchange=function(){ 
  const idOfSlider=this.id;
  const value = this.value;

  const obj={idOfSlider,value};

  FileMaker.PerformScript("Update Slider", JSON.stringify(obj));


    };
    
     //AppendDiv
     sliderDiv.appendChild(questionDiv);
     sliderDiv.appendChild(slider);
   
   };