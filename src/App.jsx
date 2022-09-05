import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    getData();
  }, []);
  const getData =  () => {
      axios
        .get("http://localhost:8080/query")
        .then((res) => setData(res.data.results.channel));

  };
 console.log(data);
  return (
    <div className="col-md-12">
      <div className="weatherBg">
        <h1 className="heading">{`${data.location.city} City ${data.location.region}, ${data.location.country} As of 4:37 EDT `}</h1>
        <h1>{data.item.condition.temp}°C</h1>
        <p>
          Sunrise:{data.astronomy.sunrise} Sunset:{data.astronomy.sunrise}
        </p>

        <p>wind speed:{data.wind.speed}Km/hr</p>
        <p>humidity:{data.atmosphere.humidity}</p>
        <p>Pressure:{data.atmosphere.pressure}</p>
        <p>visibility:{data.atmosphere.visibility}</p>
      </div>
    </div>
  );
}

export default App;
