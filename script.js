const cars=[
  {name:"Toyota",year:"1937" },
  {name:"Honda",year:"1948" },
  {name:"Mazda",year:"1920" },
  {name:"Nissan",year:"1933" },
  
];
  DisplayCars(cars);

///////search
let searchValue="";
let search = document.getElementById("search");
function myFunction(event) {
  let carsS = cars;
  searchValue = event.target.value;
    if(searchValue){
carsS=carsS.filter((car)=>car.name.toLowerCase().includes(searchValue.toLowerCase()));
    document.getElementById("myUl").innerHTML="";
        DisplayCars(carsS);
    }  
  else{
    document.getElementById("myUl").innerHTML="";
    DisplayCars(cars);
  }
}

/////sort
const ascBtn = document.getElementById("ascBtn");
ascBtn.addEventListener("click", ascOrder);
function ascOrder() {
  let SAcars= cars;
  SAcars = SAcars.sort((a, b) => {
  return a.year - b.year;
});
   document.getElementById("myUl").innerHTML="";
  
  DisplayCars(SAcars);
}

const descBtn = document.getElementById("descBtn");
descBtn.addEventListener("click", descOrder);
function descOrder() {
  let SDcars= cars;
  SDcars = SDcars.sort((a, b) => {
  return b.year - a.year;
});
  console.log("desc",SDcars);
    document.getElementById("myUl").innerHTML="";
  
  DisplayCars(SDcars);
  
}


///////// filter
let filterValue="";
function filterC(event) {
  let carsM = cars;
  console.log(event.target.value)
  filterValue=event.target.value;
  if(filterValue){
    if(filterValue=="all"){
    document.getElementById("myUl").innerHTML="";
      DisplayCars(cars);
    }
    else{
      carsM = carsM.filter(
            (car) => car.name.toLowerCase() == filterValue.toLowerCase()
          );
      
      document.getElementById("myUl").innerHTML="";
    DisplayCars(carsM);
    }
    
    
  }
  else{
      DisplayCars(cars)
  }
}


function DisplayCars(array) {
  array.forEach(function(item) {
  // document.getElementById("myUl").innerHTML="";
  var li = document.createElement("li");
  var span1 = document.createElement("span");
  var span2 = document.createElement("span");
  var carName = document.createTextNode(item.name);
  span1.appendChild(carName);
  var carYear= document.createTextNode(item.year);
  span2.appendChild(carYear);
  li.appendChild(span1);
  li.appendChild(span2);
  document.getElementById("myUl").appendChild(li);
});
}