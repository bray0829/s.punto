export function Objeto() {
    const [visible, setVisible] = useState(false);
    const datos = { nombre: "Ana", edad: 30, ciudad: "Barcelona" };
  
    return (
      <div>
        <button onClick={() => setVisible(!visible)}>
          {visible ? "Ocultar Datos" : "Mostrar Datos"}
        </button>
        {visible && (
          <pre>{JSON.stringify(datos, null, 2)}</pre>
        )}
      </div>
    );
  }

  export default Objeto;