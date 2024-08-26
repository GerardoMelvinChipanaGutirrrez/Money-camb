import React, { useState, useEffect } from "react";

function CambioMoney() {
  const [valor1, setValor1] = useState(1);
  const [valor2, setValor2] = useState(0);
  const [moneda1, setMoneda1] = useState("USD");
  const [moneda2, setMoneda2] = useState("PEN");

  useEffect(() => {
    // Definir la URL con los parámetros de moneda
    const url = `https://api.fastforex.io/fetch-one?from=${moneda1}&to=${moneda2}`;

    // Opciones para la solicitud
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'api-key': 'YOUR_API_KEY' // Reemplaza con tu clave de API si es necesario
      }
    };

    // Hacer la solicitud a la API
    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        // Extraer la tasa de cambio
        const rate = data.results[moneda2];

        // Actualizar valor2 usando la tasa de cambio
        setValor2(valor1 * rate);
      })
      .catch(err => console.error(err));
  }, [valor1, moneda1, moneda2]);

  return (
    <div>
      <div>
        <select value={moneda1} onChange={(e) => setMoneda1(e.target.value)} id="Money1">
          <option value="USD">Dólar USA</option>
          <option value="PEN">Soles S/</option>
          <option value="EUR">Euro</option>
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
          <option value="PEN">Soles S/</option>
          <option value="USD">Dólar USA</option>
          <option value="EUR">Euro</option>
        </select>
        <input id="input2" type="number" value={valor2} readOnly />
      </div>
    </div>
  );
}

export default CambioMoney;
