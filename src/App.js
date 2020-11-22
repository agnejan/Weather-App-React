import './App.css';
import ReactAnimatedWeather from "react-animated-weather";


export default function App() {
  return (
    <div><div className="WeatherApp">
            <form className="search-form">
                <div className="row">
                    <div class ="col-8">
                <input className="form-control form-control-lg shadow-sm border-0 rounded-pill " type="search"
                    placeholder="Enter a city..." />
                    </div>
                    <div className="col-4">
                        <button type="button" className= "btn btn-sucess w-100 rounded-pill border-0 shadow-sm current-location-button">Current location</button>
                    </div>
                </div>
            </form>
            <h1>
                <span>Vilnius</span>, <span>LT</span>
            </h1>
            <h2>
                10:55
            </h2>
            <h3>
                27 September, 2010
            </h3>
            <h4>
               <i className="main-icon"><ReactAnimatedWeather
        icon="RAIN"
        color="grey"
        size={64}
        animate={true}
      /></i>
                <span className="temperature">+19 </span><span className="units"><span className="active">°C
                    </span> | <span >°F</span></span>
            </h4>
            <li>
                <ul>
                    <span>Broken clouds</span>
                </ul>
                <ul>
                    Humidity: <span>82</span> %
                </ul>
                <ul>
                    Wind: <span>4 </span> m/s
                </ul>
            </li>
            <div>
                <div className="next-week" id="next-week">
                    <div className="row">
                        <div className="col-2" >Mon</div>
                        <div className="col-2" >Tue</div>
                        <div className="col-2" >Wed</div>
                        <div className="col-2" >Thu</div>
                        <div className="col-2" >Fri</div>
                        <div className="col-2" >Sat</div>
                    </div>
                    <div className="row">
                        <div className="col-2"><span ></span>+10°C</div>
                        <div className="col-2"><span ></span>+10°C</div>
                        <div className="col-2"><span ></span>+10°C</div>
                        <div className="col-2"><span ></span>+10°C</div>
                        <div className="col-2"><span ></span>+10°C</div>
                        <div className="col-2"><span ></span>+10°C</div>
                    </div>
                    <div className="row">
                        <div className="col-2 images"><i><ReactAnimatedWeather
        icon="RAIN"
        color="grey"
        size={64}
        animate={true}
      /></i></div>
                         <div className="col-2 images"><i><ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="grey"
        size={64}
        animate={true}
      /></i></div>
                        <div className="col-2 images"><i><ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="grey"
        size={64}
        animate={true}
      /></i></div>
                         <div className="col-2 images"><i><ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="grey"
        size={64}
        animate={true}
      /></i></div>
                         <div className="col-2 images"><i><ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="grey"
        size={64}
        animate={true}
      /></i></div>
                         <div className="col-2 images"><i><ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="grey"
        size={64}
        animate={true}
      /></i></div>
                    </div>
                </div>
                <script src="src/index.js"></script>
            </div> </div><footer><a href="https://github.com/agnejan/Weather-App-React" target="blank">Open-source code</a> by Agne Januskeviciute</footer></div>
    );
};
