import { useState, useEffect } from "react";
import MonedaVal from "./ValueMoney.json"; // Asegúrate de tener el archivo MonedaVal.json en la misma carpeta

function CambioMoney() {
  const [valor1, setValor1] = useState(1);
  const [valor2, setValor2] = useState(0);
  const [moneda1, setMoneda1] = useState("USD");
  const [moneda2, setMoneda2] = useState("PEN");
  const [tasa, setTasa] = useState(1); // Agregado para almacenar la tasa de cambio

  useEffect(() => {
    const nuevaTasa = MonedaVal[moneda1]?.[moneda2] || 1; // Obtenemos la tasa de cambio
    setTasa(nuevaTasa); // Actualizamos la tasa
    setValor2(parseFloat((valor1 * nuevaTasa).toFixed(2))); // Calculamos el valor2 en base a la tasa
  }, [valor1, moneda1, moneda2]); // Dependemos de las monedas y valor1

  return (
    <div className="content-divisas">
      <div className="form-conten">
        <div>
          <select value={moneda1} onChange={(e) => setMoneda1(e.target.value)} id="Money1">
            <option value="PEN">PEN Nuevo Sol</option>
            <option value="USD">USD Dólar USA</option>
            <option value="EUR">EUR Euro</option>
            <option value="GBP">GBP Libra esterlina</option>
            <option value="CHF">CHF Franco suizo</option>
            <option value="JPY">JPY Yen japonés</option>
            <option value="CNY">CNY Yuan chino</option>
            <option value="CAD">CAD Dólar canadiense</option>
          </select>
          <input
            id="input1"
            type="number"
            value={valor1}
            onChange={(e) => setValor1(Math.max(0, Number(e.target.value)))}
            min="0"
          />
        </div>
        <div>
          <select value={moneda2} onChange={(e) => setMoneda2(e.target.value)} id="Money2">
            <option value="PEN">PEN Nuevo Sol</option>
            <option value="USD">USD Dólar USA</option>
            <option value="EUR">EUR Euro</option>
            <option value="GBP">GBP Libra esterlina</option>
            <option value="CHF">CHF Franco suizo</option>
            <option value="JPY">JPY Yen japonés</option>
            <option value="CNY">CNY Yuan chino</option>
            <option value="CAD">CAD Dólar canadiense</option>
          </select>
          <input id="input2" type="number" value={valor2} readOnly />
        </div>
      </div>
      <div className="val-cambio">
        <h4>Hoy {MonedaVal.updated}</h4>
        <h3>1 {MonedaVal[moneda1]?.traducion} es igual a</h3>
        <h2>{tasa} {MonedaVal[moneda2]?.traducion}</h2>
      </div>
    </div>
  );
}

export default CambioMoney;
