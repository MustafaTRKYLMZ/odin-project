import { weather } from './weather';
import { format } from 'date-fns';

class UI {
  static setHTMLMain(header, weatherData) {
    const {
      description,
      dateFormat,
      hourFormat,
      iconNumber,
      strInt,
      cityName,
      nameOftheDay,
    } = weather.mainData(weatherData);
    header.innerHTML += `
                 <div id="headerId" class="weather-info">
                        <div class="weather-info-descriptionCls"> <p  id="weather-info-description">${description}</p> </div>
                        <div class="weather-info-city"><p id="weather-name">${cityName}</p> </div>
                        <div class="weather-info-date">${nameOftheDay} ${dateFormat} </div>
                        <div class="weather-info-time"> ${hourFormat}</div>
                        <div class="weather-info-temperature">${strInt} °C</div>
                        <div class="weather-info-icon">
                            <img src="http://openweathermap.org/img/wn/${iconNumber}@2x.png"/>
                         </div>
                         <div class="weather-info-search" id="weather-info-searchId">
                            <input id="location-input" placeholder="search location"></input>
                            <i class="fa fa-search"></i>
                          </div>
                         <div class="weather-info-error" style="display:none">error handle</div>
                </div>
                `;
  }
  static async createDetail(header, cityName) {
    const data = await weather.getDataFromApi(cityName);
    const { FeelsLike, humidity, changeOfRain, WindSpeed } =
      weather.weatherDetails(data);
    header.innerHTML += `
      <div id="headerId" class="weather-details-continer">
             <div class="weather-details"> 
                <div class="weather-details-icon">
                <img src="icons/cold-temperature-icon-0.jpg" id="img-feelsLike"/>  
                  </div>
                  <div class="weather-details-info">
                      <div class="weather-details-info-title">Feels Like</div>
                      <div class="weather-details-info-value">${parseInt(
                        FeelsLike
                      )} °C</div>
                  </div>
             </div>
             <div class="weather-details"> 
                <div class="weather-details-icon">
                <img src="icons/humid-icon-5.jpg" id="img-humidity"/>
                  </div>
                  <div class="weather-details-info">
                      <div class="weather-details-info-title">Humidity</div>
                      <div class="weather-details-info-value">${humidity} %</div>
                  </div>
             </div>

             <div class="weather-details"> 
                <div class="weather-details-icon">  
                <img src="icons/rain-icon-png-20.jpg" id="img-rain"/>
                  </div>
                  <div class="weather-details-info">
                      <div class="weather-details-info-title">Chance of Rain</div>
                      <div class="weather-details-info-value">${changeOfRain} %</div>
                  </div>
             </div>
             <div class="weather-details"> 
                <div class="weather-details-icon">
                <i class='fas fa-wind' style='font-size:24px;color:rgb(41, 206, 228)'></i>
                  </div>
                  <div class="weather-details-info">
                      <div class="weather-details-info-title">Wind Speed</div>
                      <div class="weather-details-info-value">${WindSpeed} km/h</div>
                  </div>
             </div>
     </div>
     
     `;
  }
  static async createMain(header, cityName) {
    const weatherData = await weather.getDataFromApi(cityName);
    UI.setHTMLMain(header, weatherData);
    document.body.appendChild(header);
    //    return header;
  }
  static async createHeader(cityName) {
    const header = document.createElement('HEADER');
    header.setAttribute('id', 'headerId');
    await UI.createMain(header, cityName);

    await UI.createDetail(header, cityName);
    UI.getLocationData();
  }
  static createDailyHTML(element, dailyContainer) {
    var days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const dateTime = new Date(element.dt * 1000);
    const nameOftheDay = days[dateTime.getDay()];

    dailyContainer.innerHTML += `
    <div class="forecast-daily">
           <div class="forecast-daily-day"> 
             ${nameOftheDay}
           </div>
           <div class="forecast-daily-temperature"> 
              <div class="forecast-daily-temperature-high">
              ${parseInt(element.temp.max)} °C
                </div>
                <div class="forecast-daily-temperature-low">
                ${parseInt(element.temp.min)} °C
                </div>
           </div>
           <div class="forecast-daily-icon"> 
              <img src="http://openweathermap.org/img/wn/${
                element.weather[0].icon
              }@2x.png"/>
           </div>
   </div>`;
    return dailyContainer;
  }
  static async createDailyWeather(cityName) {
    const forecastContainer = document.createElement('div');
    forecastContainer.classList.add('forecastContainer');

    const dailyWeather = await weather.getDailyData(cityName);
    const dailyContainer = document.createElement('div');
    dailyContainer.classList.add('forecast-daily-container');

    const dailyTitle = document.createElement('div');
    dailyTitle.classList.add('forecast-daily-title');
    dailyTitle.innerText = 'Daily';
    forecastContainer.appendChild(dailyTitle);
    document.body.appendChild(forecastContainer);
    dailyWeather.daily.forEach((element) => {
      forecastContainer.appendChild(
        UI.createDailyHTML(element, dailyContainer)
      );
    });
  }
  static getLocationData() {
    const inputLocation = document.getElementById('location-input');
    inputLocation.addEventListener('click', (e) => {
      e.preventDefault();
      const cityName = e.target.value;
      if (e.target.value !== '') {
        UI.loadHomePage(cityName);
        document.body.innerHTML = '';
      }
      inputLocation.value = '';
    });
  }
  static loadHomePage(cityName) {
    UI.createHeader(cityName);
    UI.createDailyWeather(cityName);
  }
}
export { UI };
