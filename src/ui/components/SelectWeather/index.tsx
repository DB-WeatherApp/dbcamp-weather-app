import "./style.css";
import "../../styles/colors.css";
import "../../styles/global.css";

enum WeatherOptions {
  SUN = "Sol",
  RAIN = "Chuva",
}

function SelectWeather() {
  const options = Object.keys(WeatherOptions);
  const optionsName = Object.values(WeatherOptions);

  return (
    <div className="selectsArea">
      <div className="selectsArea_selects">
        <span className="label">Tempo</span>
        <select className="inputField">
          {options.map((value, key) => (
            <option value={value}>{optionsName[key]}</option>
          ))}
        </select>
        <select className="inputField">
          {options.map((value, key) => (
            <option value={value}>{optionsName[key]}</option>
          ))}
        </select>
      </div>
      <div className="selectsArea_inputs">
        <span className="label">Turno</span>
        <input className="inputField" type="text" value="Manhã" disabled />
        <input className="inputField" type="text" value="Noite" disabled />
      </div>
    </div>
  );
}

export default SelectWeather;
