
function updateCity (event){
    let cityTimeZone=event.target.value;
    let cityTime=moment().tz(cityTimeZone);
    let citiesElement=document.querySelector(".cities");
    let cityName=cityTimeZone.replace("_", "").split("/")[1];
    citiesElement.innerHTML=
   
`
<div class="row">
        <div class="cityClock">
      <span class="city" id="amsterdam"value="Europe/Amsterdam">${cityName} </span>
      <span class="time"><strong> ${cityTime.format("HH:mm:ss")}</strong></span>
      </div>
      <span class="date">${cityTime.format("MMMM Do YYYY")}</span>
   </div>`;

}

updateMadridTime();



function updateMadridTime() {
let madridElement=document.querySelector("#madrid");
let madridRow = madridElement.closest(".row");
let madridDateElement=madridRow.querySelector(".date");
let madridTimeElement = madridRow.querySelector(".time");
let madridTime = moment().tz("Europe/Madrid");
madridDateElement.innerHTML= madridTime.format("MMMM Do YYYY");
madridTimeElement.innerHTML = madridTime.format("HH:mm:ss ");
}

setInterval(updateMadridTime,1000);

function updateAmsterdamTime() {
  let amsterdamElement = document.querySelector("#amsterdam");
  let amsterdamRow = amsterdamElement.closest(".row");
  let amsterdamDateElement = amsterdamRow.querySelector(".date");
  let amsterdamTimeElement = amsterdamRow.querySelector(".time");
  let amsterdamTime = moment().tz("Europe/Amsterdam");
  amsterdamDateElement.innerHTML = amsterdamTime.format("MMMM Do YYYY");
  amsterdamTimeElement.innerHTML = amsterdamTime.format("HH:mm:ss ");
}

setInterval(updateAmsterdamTime, 1000);

function updateWarsawTime() {
  let warsawElement = document.querySelector("#warsaw");
  let warsawRow = warsawElement.closest(".row");
  let warsawDateElement = warsawRow.querySelector(".date");
  let warsawTimeElement = warsawRow.querySelector(".time");
  let warsawTime = moment().tz("Europe/Warsaw");
  warsawDateElement.innerHTML = warsawTime.format("MMMM Do YYYY");
  warsawTimeElement.innerHTML = warsawTime.format("HH:mm:ss ");
}

setInterval(updateWarsawTime, 1000);

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);
