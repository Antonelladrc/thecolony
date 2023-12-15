import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Contador from "./TestLibrary";

//Incrementar
test("Deberia renderizar completamente y correctamente el componente", () => {
  const { container } = render(<Contador />);
  expect(container).toMatchSnapshot();
});

test("renderiza el componente, valida que exista el elemento con id contador en el dom", () => {
  render(<Contador />);
  const contadorElement = screen.getByTestId("Contador");
  expect(contadorElement).toBeInTheDocument();
});

test("Inicializa el contador en 0", () => {
  render(<Contador />);
  const contadorElement = screen.getByText(/Contador: 0/i);
  expect(contadorElement).toBeInTheDocument();
});

test("incrementa el contador al hacer click en el boton incrementar", () => {
  render(<Contador />);
  const contadorElement = screen.getByText(/Contador: 0/i); //busca el elemento
  const buttonElement = screen.getByText(/Incrementar/i); //busca el elemento

  //verificamos que el contador inicie en 0
  expect(contadorElement).toBeInTheDocument();  //valida que exista el contador

  //hacemos click en el boton
  fireEvent.click(buttonElement);       //dispara evento al elemento
  expect(screen.getByText(/Contador: 1/i)).toBeInTheDocument();  //verifica que el contador este en 1, y que exista en el documento
});

//Decrementar
test("decrementar el contador al hacer click en el boton de decrementar", () => {
  render(<Contador />);
  const contadorElement = screen.getByText(/Contador: 0/i);
  const buttonElement = screen.getByText(/Decrementar/i);

  expect(contadorElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();

    // fireEvent.click(buttonElement); 
    // expect(screen.getByText(/Contador: -1/i)).toBeInTheDocument();
});

test("ocultar botones cuando el contador sea menor a 0 o mayor a 10", () => {
  render(<Contador counter={10}/>);
 const buttonElement = screen.getByText(/Incrementar/i);
 fireEvent.click(buttonElement);
 expect(screen.getByTestId("texto")).toBeInTheDocument();
})
test('ingresar un nombre y que salga en la alerta al hacer click', () => {
  render (<Contador />);

  const nameElement = screen.getByTestId("name"); //busca el elemento
  const buttonElement = screen.getByTestId("idButton");

  expect(nameElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();

  fireEvent.change(nameElement, {target:{ value:"pepe"}});
  expect(screen.getByText(/pepe/i)).toBeInTheDocument();
})