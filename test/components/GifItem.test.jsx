import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Test del componente GifItem", () => {
  const titulo = "CheeseBurger";
  const url = "https://cheeseburger/cheseeburger.jpg";

  test("Debe de hacer match con el SnapShot", () => {
    const { container } = render(<GifItem title={titulo} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar imagen con el url y titulo indicado", () => {
    render(<GifItem title={titulo} url={url} />);
    screen.debug();
    // expect(screen.getByRole("img").src).toBe(url);
    // expect(screen.getByRole("img").alt).toBe(titulo);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(titulo);
  });
});
