
window.addEventListener('DOMContentLoaded', function () {
       

    let array1=[{title : "Amelia, New York", tempFah:"53 F",wind:"4.00 mph",tempCel:"61C",description : "Silo Ridge",location : "35.828904° N / -86.679158° W"},
                {title : "Westlake, Texas ",tempFah:"53 F",wind:"4.00 mph",tempCel:"61C",description : "Vaquero",location : "32.965190° N / -97.194715° W"},
                {title : "CostaTerra Discovery's 23rd property",description : "Discovery Land Company, the world’s leading developer of luxury private residential communities, clubs and resorts, has announced its 23rd property and first in Europe."},
                {title : "Troubadour To Open Golf Course Fall 2019",description : "Troubadour Golf & Field Club, a Discovery Land Company community, is pleased to announce the opening of its 18-hole Tom Fazio-designed golf course this fall."}]

   
    let count = 0;
    let next = document.getElementById('nextB');
    let title = document.querySelector('.actualName')
    let description = document.querySelector('.contentDescription');
    let prev = document.getElementById('prevB')
   let location = document.querySelector('.hLocation');
   let tempC = document.querySelector('.tempC')
   let tempF = document.querySelector('.tempF')
   let wind = document.querySelector('.wind')

    console.log(next.innerHTML)
    console.log(title)
    
    


    title.innerHTML = array1[0].title;
    description.innerHTML = array1[0].description;
    location.innerHTML = array1[0].location;

    tempF.innerHTML = array1[0].tempFah;
    wind.innerHTML = array1[0].wind;
    tempC.innerHTML = array1[0].tempCel;

    next.addEventListener('click', function () {
            if(count < 3) {
               
                count = count +1;
                console.log(count)
               
            }
        
            title.innerHTML = array1[count].title;
            description.innerHTML = array1[count].description;

                    
           
           
    })



    prev.addEventListener('click', function () {
        if(count>0) {
            count = count -1;
        }
        
      
        title.innerHTML = array1[count].title;
        description.innerHTML = array1[count].description;

       

    })



}
)


