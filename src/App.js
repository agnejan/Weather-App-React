
import './App.css';


export default function App() {
  let weatherData = {
    city: "Vilnius",
    country: "LT",
    temperature: 19,
    date: "9 September, 2020",
    time: "10:00",
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 10,
    wind: 3
  };

  return (
    <div><div class="WeatherApp">
            <form id="search-form">
                <div class="row">
                    <div class ="col-8">
                <input class="form-control form-control-lg shadow-sm border-0 rounded-pill " type="search"
                    placeholder="Enter a city..." id="enter-a-city" />
                    </div>
                    <div class="col-4">
                        <button type="button" class= "btn btn-sucess w-100 rounded-pill border-0 shadow-sm" id="current-location-button">Current location</button>
                    </div>
                </div>
            </form>
            <h1>
                <span id="city">Vilnius</span>, <span id="country">LT</span>
            </h1>
            <h2>
                10:55
            </h2>
            <h3>
                27 September, 2010
            </h3>
            <h4>
               <i class="fas fa-cloud-sun-rain main-icon"></i>
                <span class="temperature">+19 </span><span className="units"><span class="active">°C
                    </span> | <span >°F</span></span>
            </h4>
            <li>
                <ul>
                    <span id="weather-description">Broken clouds</span>
                </ul>
                <ul>
                    Humidity: <span id="humidity">82</span> %
                </ul>
                <ul>
                    Wind: <span id="wind">4 </span> m/s
                </ul>
            </li>
            <div>
                <div class="next-week" id="next-week">
                    <div class="row">
                        <div class="col-2" id="hour1">Mon</div>
                        <div class="col-2" id="hour2">Tue</div>
                        <div class="col-2" id="hour3">Wed</div>
                        <div class="col-2" id="hour4">Thu</div>
                        <div class="col-2" id="hour5">Fri</div>
                        <div class="col-2" id="hour6">Sat</div>
                    </div>
                    <div class="row">
                        <div class="col-2"><span id="forecast1"></span>+10°C</div>
                        <div class="col-2"><span id="forecast2"></span>+10°C</div>
                        <div class="col-2"><span id="forecast3"></span>+10°C</div>
                        <div class="col-2"><span id="forecast4"></span>+10°C</div>
                        <div class="col-2"><span id="forecast5"></span>+10°C</div>
                        <div class="col-2"><span id="forecast6"></span>+10°C</div>
                    </div>
                    <div class="row">
                        <div class="col-2"><i class="fas fa-cloud-sun-rain images"></i></div>
                        <div class="col-2"><i class="fas fa-cloud-sun-rain images"></i></div>
                        <div class="col-2"><i class="fas fa-cloud-sun-rain images"></i></div>
                        <div class="col-2"><i class="fas fa-cloud-sun-rain images"></i></div>
                        <div class="col-2"><i class="fas fa-cloud-sun-rain images"></i></div>
                        <div class="col-2"><i class="fas fa-cloud-sun-rain images"></i></div>
                    </div>
                </div>
                <script src="src/index.js"></script>
            </div> </div><footer><a href="https://github.com/agnejan/Weather-App-Project-2" target="blank">Open-source code</a> by Agne Januskeviciute</footer></div>
    );
}
