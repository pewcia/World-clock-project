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