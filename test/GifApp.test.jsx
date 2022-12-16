import { render, screen } from "@testing-library/react";
import { GifApp } from "../src/GifApp";

describe("Pruebas sobre el GifApp", () => {
  test("Componente incial cargando", () => {
    render(<GifApp />);
    expect(screen.getByText("Cargando..."));
  });

  test("Componente con datos validos", () => {
    render(<GifApp />);
    screen.debug();
    expect(screen.getByText("Cargando..."));
  });
});
