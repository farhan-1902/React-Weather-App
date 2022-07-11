import React from "react";
import Weather from "./displayWeather";
import axios from "axios";
import Header from "./Header";

function App() {
  const [city, setCity] = React.useState("");
  const [weather, setWeather] = React.useState([]);
  
  async function postCity(e) {
    e.preventDefault();

    try {
      await axios.post("/", {
        city
      }).then((response) => {
        console.log(response.data);
        setWeather(response.data);
      })
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
      <Header />
      <form onSubmit={postCity}>
        <div className="form-group">
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City Name"></input>
        </div>       
        <button type="submit">Submit</button>
      </form>
      {weather.length === 0 ? null : <Weather details={weather} />}
    </div>
  );
}

export default App;
