import { useState } from "react";

export default function Contador({ counter = 0 }) {
  const [count, setCount] = useState(counter);
  const [name, setName] = useState();

  const handleClick = (e) => {
    e.preventDefault();
    alert("hola " + name);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      <div>
        {count < 0 || count > 10 ? (
          <p data-testid="texto">DEJA DE HACER CLICK URA</p>
        ) : (
          <>
            <p data-testid="Contador">Contador: {count}</p>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
            <button onClick={() => setCount(count - 1)}>Decrementar</button>
          </>
        )}
      </div>
      <br></br>
      <form>
        <label>
          <span>Tu nombre: {name} </span>
          <input
            type="text"
            name="name"
            data-testid="name"
            value={name}
            onChange={handleInputChange}
          />
        </label>
        <button
         onClick={handleClick} 
         data-testid="idButton">
          Click aqui
        </button>
      </form>
    </>
  );
}

//Crea un formulario simple con un campo de entrada y un botón.
//Escribe una prueba que simule el usuario ingresando texto y haciendo clic en el botón.
//Verifica que la acción del usuario produce el resultado esperado.
