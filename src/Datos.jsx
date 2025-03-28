import React, { useState } from "react";

export function Datos() {
    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false);
  
    const fetchData = () => {
      setData(["Manzana", "Banana", "Cereza", "Durazno", "Uva"]);
      setLoaded(true);
    };
  
    return (
      <div>
        <button onClick={fetchData} disabled={loaded}>
          {loaded ? "Datos Cargados" : "Cargar Lista"}
        </button>
        <ul>
          {data.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }

  export default Datos;
  