import "./style.css";
import "../../ui/styles/colors.css";
import "../../ui/styles/global.css";
import FormInput from "../../ui/components/FormInput";
import SelectWeather from "../../ui/components/SelectWeather";

function Register() {
  return (
    <main className="register">
      <h1 className="title">Cadastro Metereológico</h1>
      <form className="form">
        <div className="city">
          <FormInput id="city" type="text" label="Cidade" />
          <FormInput id="date" type="date" label="Data" />
        </div>
        <div className="informations container">
          <SelectWeather />
          <div className="inputs">
            <div className="inputs_temperatures">
              <FormInput id="max" type="number" label="Temperatura Máxima" />
              <FormInput id="min" type="number" label="Temperatura Mínima" />
            </div>
            <div className="inputs_informations">
              <FormInput
                id="precipitation"
                type="number"
                label="Precipitação"
              />
              <FormInput id="humidity" type="number" label="Humidade" />
              <FormInput
                id="windSpeed"
                type="number"
                label="Velocidade do vento"
              />
            </div>
          </div>
        </div>
        <div className="buttons">
          <button className="container button">Cancelar</button>
          <button className="container button">Salvar</button>
        </div>
      </form>
    </main>
  );
}

export default Register;
