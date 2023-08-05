let API_KEY = "9e632c24fc993f6c55c5949921d62ef6";
let baseUrl = `https://api.openweathermap.org/data/2.5/`;

/**
 * @param {String} fetchString
 *  */

const addButton = document.getElementById("addCity");
const fetchInput = document.getElementById("fetch-input");
const container = document.getElementById("container1");

let arr = [];




addButton.addEventListener("click",() => {
    let fetchString = fetchInput.value.trim();
    //console.log(searchString);
    if(fetchString ===""){
        alert("Enter a city name");
        return;
    }
    getFetchResult(fetchString);
})



async function getFetchResult(fetchString){
    let url = `${baseUrl}/weather?&q=${fetchString}&appid=${API_KEY}&units=metric`
    //console.log(url);
    const response = await fetch(url, {method:"GET"});
    const result = await response.json();
    
    let div = document.createElement("div");
    div.className="card";
    div.innerHTML = `
                        <div class="top">
                            <div class="left">${Math.floor(result.main.temp)}°
                            <div class="cloudpercent">cloudPercentage:${result.clouds.all}%</div>
                            </div>
                            
                            <div class="right">
                                <img src= "http://openweathermap.org/img/w/${result.weather[0].icon}.png">
                                <div class="weather">${result.weather[0].main}</div>
                                
                            </div>
                        </div>
                        <div class="bottom">
                            <div class="left">
                                <div class="hmdty">H:${result.main.humidity} P:${result.main.pressure}</div>
                                <div>${result.name},${result.sys.country}</div>
                            </div>
                            <div class="right">
                                <div>Sunrise:${result.sys.sunrise}</div>
                                <div>Sunset:${result.sys.sunset}</div>
                        </div>
                        </div>`;

if(arr.includes(result.name)){
alert("city already exixts");
return;
}


container.appendChild(div);

arr.push(result.name);


}








/* <div class="card">
<div class="top">
    <div class="left">13°</div>
    <div class="right">
        <div>Showers</div>
        <div>cloudPercentage:90%</div>
    </div>
</div>
<div class="bottom">
    <div class="left">
        <div>H:16° l:8°</div>
        <div>Hyderabad,IN</div>
    </div>
    <div class="right">
        <div>Sunrise:6:00AM</div>
        <div>Sunset:5:40PM</div>
    </div>
</div
</div>  */

// function addDataToUI(cardsList){
    

