// Weather data
const forecastData = [
  {
    date: "Mon",
    temperature: "28°C",
    condition: "Sunny",
    hourlyForecast: [
      { time: "06:00", temp: "24°C" },
      { time: "09:00", temp: "26°C" },
      { time: "12:00", temp: "28°C" },
    ],
  },
  {
    date: "Tue",
    temperature: "25°C",
    condition: "Cloudy",
    hourlyForecast: [
      { time: "06:00", temp: "22°C" },
      { time: "09:00", temp: "23°C" },
      { time: "12:00", temp: "25°C" },
    ],
  },
  {
    date: "Wed",
    temperature: "22°C",
    condition: "Rainy",
    hourlyForecast: [
      { time: "06:00", temp: "20°C" },
      { time: "09:00", temp: "21°C" },
      { time: "12:00", temp: "22°C" },
    ],
  },
];

const carousel = document.getElementById("weatherCarousel");
const details = document.getElementById("weatherDetails");

let selectedDay = forecastData[0];
renderCarousel();
renderDetails(selectedDay);

function renderCarousel() {
  forecastData.forEach((day, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div><strong>${day.date}</strong></div>
      <div>${day.temperature}</div>
      <div>${day.condition}</div>
    `;
    card.onclick = () => {
      selectedDay = day;
      renderDetails(day);
    };
    carousel.appendChild(card);
  });
}

function renderDetails(day) {
  details.innerHTML = `
    <h2>${day.date} - ${day.condition}</h2>
    <p>Temperature: ${day.temperature}</p>
    <h3>Hourly Forecast</h3>
    <div class="hourly">
      ${day.hourlyForecast.map(
        hour => `
          <div class="hour-block">
            <div>${hour.time}</div>
            <div>${hour.temp}</div>
          </div>
        `
      ).join('')}
    </div>
  `;
}