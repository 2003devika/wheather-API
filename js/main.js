

function getData(city){
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&&appid=c99f4e98e32f7e0845caabc181315075`)

    .then((response)=>{
       return response.json()
    })
    .then((data)=>{
        console.log(data)
       latLon(data)
    })
    .catch((err)=>{
        console.log(err)
    })
}

getData("nagpur")

function latLon(location){
    location.forEach((loc,index)=>{
        console.log(loc.lat)
        console.log(loc.lon)

        weather(loc.lat,loc.lon)
       
    })
}


                

// ------------------------------------------------------------------------------------------------------


function weather(latitude,longitude){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=c99f4e98e32f7e0845caabc181315075&units=metric`)
    
    .then((res)=>{
        return res.json()
     })
     .then((data2)=>{
         console.log(data2)
         console.log(data2.name)
     
        let displayname=document.getElementById("weather")
        displayname.innerHTML=('Weather in ' + data2.name )

        let displaytempreature=document.getElementById("temp")
        displaytempreature.innerHTML=(data2.main.temp+'°C')

        let displayhumidity=document.getElementById("humidity")
        displayhumidity.innerHTML=('Humidity : ' + data2.main.humidity)

        let displayspeed=document.getElementById("wind-speed")
        displayspeed.innerHTML=('Wind Speed : ' + data2.wind.speed + ' Km/h') 
    
     })
     .catch((err)=>{
         console.log(err)
     })
}

function readData(){
   let selectCity= document.getElementById("input").value;
   console.log(selectCity)
    getData(selectCity)
}



setInterval(() => {
   
    let displayday=document.getElementById("day")
    let displaydate=document.getElementById("time")
    
    let d= new Date
    let pdate= d.toLocaleTimeString()
    let pday=d.toDateString()
    console.log(pday)
     
    switch (pday) {
            case 0:
            pday = "Sun"
            break;
    
            case 1:
            pday = "Mon"
            break;
    
            case 2:
            pday = "Tue"
            break;
    
            case 3:
            pday = "Wed"
            break;
    
            case 4:
            pday = "Thu"
            break;
    
            case 5:
            pday = "Fri"
            break;
    
            case 6:
            pday = "Sat"
            break;
    
        default:
            break;
    }

displaydate.innerHTML=(pdate)
displayday.innerHTML=(pday)
    
    },1000 );