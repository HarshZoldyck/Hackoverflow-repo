const api={
    key: "1f7d2475df0ed4d82cfe7d09c79182e0",
    base: "https://api.openweathermap.org/data/2.5/"
}
const searchbox=document.querySelector(".searchbox");
searchbox.addEventListener('keypress',setquery);

function setquery(e)
{
    if(e.keyCode==13)
    {
       getresults(searchbox.value);
        console.log(searchbox.value);
    }
}
function getresults(qu)
{
    fetch(`${api.base}weather?q=${qu}&units=metric&APPID=${api.key}`).then(weather=>{
        return weather.json();
    }).then(displayresults);
}
function displayresults(weather)
{
    console.log(weather);
    let city=document.querySelector('.location .city');
    city.innerText=`${weather.name},${weather.sys.country}`;

    let now=new Date();
    let date=document.querySelector('.location .date');
    date.innerText=dateBuilder(now);
    let temp = document.querySelector('.current .temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

  let weathernew=document.querySelector('.current .weather');
  weathernew.innerText=weather.weather[0].main;
  let hilow = document.querySelector('.hi-low');
  hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
}
 
function dateBuilder(d){
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;

}