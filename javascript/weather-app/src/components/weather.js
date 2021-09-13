import { format } from 'date-fns';
import { UI } from './UI';

let weather = class {
  datas;
  weathers;
  static constructor() {
    this.weatherData;
    this.datas;
    this.weathers;
  }
  set setList(data) {
    this.weatherData = data;
  }
  static async getDataFromApi(cityName) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=d5f0ed1631ab787c7e01615643ebb72e`,
        {
          mode: 'cors',
        }
      );
      if (response.status === 200) {
        // 'https://api.openweathermap.org/data/2.5/forecast?q=Arnhem&units=metric&appid=d5f0ed1631ab787c7e01615643ebb72e',
        const data = await response.json();
        return data;
      } else if (response.status === 404) {
        const data = await response.json();
        alert(data.message + '\nPlease Try Again');
        location.reload();
      }
    } catch (error) {
      alert(error);
    }
  }
  static weatherDetails(data) {
    const FeelsLike = data.list[0].main.feels_like;
    const humidity = data.list[0].main.humidity;
    const WindSpeed = data.list[0].wind.speed;
    let changeOfRain = 0;
    if (data.list[0].rain !== undefined) {
      changeOfRain = parseFloat(data.list[0].rain['3h']);
    }
    return { FeelsLike, humidity, changeOfRain, WindSpeed }; //changeOfRain
  }
  static mainData(weatherData) {
    var days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const cityName = weatherData.city.name;
    const description = weatherData.list[0].weather[0].description;
    const date = new Date(
      weatherData.list[0].dt * 1000 - weatherData.city.timezone * 1000
    );
    const dateFormat = format(new Date(date), 'dd/MM/yyyy');
    const hourFormat = format(new Date(date), 'hh:mm');
    const iconNumber = weatherData.list[0].weather[0].icon;
    const strInt = parseInt(weatherData.list[0].main.temp);
    const nameOftheDay = days[date.getDay()];
    return {
      description,
      dateFormat,
      hourFormat,
      iconNumber,
      strInt,
      cityName,
      nameOftheDay,
    };
  }
  static async getCoord(cityName) {
    const weatherApi = await weather.getDataFromApi(cityName);
    const coord = weatherApi.city.coord;
    return coord;
  }
  static async getDailyData(cityName) {
    const coord = await weather.getCoord(cityName);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=minutely,weekly&units=metric&appid=d5f0ed1631ab787c7e01615643ebb72e`,
      {
        mode: 'cors',
      }
    );
    const dailyData = await response.json();
    return dailyData;
  }
};
export { weather };
