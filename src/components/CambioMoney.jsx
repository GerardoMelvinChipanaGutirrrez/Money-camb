import { useState, useEffect } from "react";
import tasas from "./ValueMoney.json"; // Asegúrate de tener el archivo tasas.json en la misma carpeta

function CambioMoney() {
  const [valor1, setValor1] = useState(1);
  const [valor2, setValor2] = useState(0);
  const [moneda1, setMoneda1] = useState("USD");
  const [moneda2, setMoneda2] = useState("PEN");

  useEffect(() => {
    const tasa = tasas[moneda1]?.[moneda2] || 1;
    setValor2(parseFloat((valor1 * tasa).toFixed(2)));
  }, [valor1, moneda1, moneda2]);

  return (
    <div className="form-conten">
      <div>
        <select value={moneda1} onChange={(e) => setMoneda1(e.target.value)} id="Money1">
          <option value="USD">Dólar USA</option>
          <option value="PEN">Nuevo Sol</option>
          <option value="EUR">Euro</option>
          <option value="GBP">Libra esterlina</option>
          <option value="CHF">Franco suizo</option>
          <option value="JPY">Yen japonés</option>
          <option value="CNY">Yuan chino</option>
          <option value="CAD">Dólar canadiense</option>
        </select>
        <input
          id="input1"
          type="number"
          value={valor1}
          onChange={(e) => setValor1(Number(e.target.value))}
        />
      </div>
      <div>
        <select value={moneda2} onChange={(e) => setMoneda2(e.target.value)} id="Money2">
          <option value="PEN">Nuevo Sol</option>
          <option value="USD">Dólar USA</option>
          <option value="EUR">Euro</option>
          <option value="GBP">Libra esterlina</option>
          <option value="CHF">Franco suizo</option>
          <option value="JPY">Yen japonés</option>
          <option value="CNY">Yuan chino</option>
          <option value="CAD">Dólar canadiense</option>
        </select>
        <input id="input2" type="number" value={valor2} readOnly />
      </div>
    </div>
  );
}

export default CambioMoney;
