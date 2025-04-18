let selectedCityInterval = null;

function updateTime(id, timezone) {
  let element = document.querySelector(`#${id}`);
  if (!element) return;

  let row = element.closest(".row");
  let date = row.querySelector(".date");
  let time = row.querySelector(".time");

  let now = moment().tz(timezone);
  date.innerHTML = now.format("MMMM Do YYYY");
  time.innerHTML = `<strong>${now.format("HH:mm:ss")}</strong>`;
}

function updateWarsawTime() {
  updateTime("warsaw", "Europe/Warsaw");
}

function updateAmsterdamTime() {
  updateTime("amsterdam", "Europe/Amsterdam");
}

function updateMadridTime() {
  updateTime("madrid", "Europe/Madrid");
}

updateWarsawTime();
updateAmsterdamTime();
updateMadridTime();

setInterval(() => {
  updateWarsawTime();
  updateAmsterdamTime();
  updateMadridTime();
}, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone=moment.tz.guess();
  }
  if (!cityTimeZone) return;

  if (selectedCityInterval) {
    clearInterval(selectedCityInterval);
  }

  let cityName = cityTimeZone.split("/")[1].replace("_", " ");
  let citiesElement = document.querySelector(".cities");

  citiesElement.innerHTML = `
    <div class="row">
      <div class="cityClock">
        <span class="city" id="custom">${cityName}</span>
        <span class="time"><strong></strong></span>
      </div>
      <span class="date"></span>
      <br>
      <button id="back-button">⬅ </button>
    </div>
  `;

  function updateSelected() {
    let now = moment().tz(cityTimeZone);
    let time = document.querySelector(".time");
    let date = document.querySelector(".date");
    if (time && date) {
      time.innerHTML = `<strong>${now.format("HH:mm:ss")}</strong>`;
      date.innerHTML = now.format("MMMM Do YYYY");
    }
  }

  updateSelected();
  selectedCityInterval = setInterval(updateSelected, 1000);

  document.querySelector("#back-button").addEventListener("click", function () {
    clearInterval(selectedCityInterval);
    location.reload();
  });
}

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);
