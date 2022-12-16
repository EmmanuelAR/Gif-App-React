import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Test sobre el obj GifGrid", () => {
  const category = "CheeseBurger";

  test("Debe de mostrar el Loading...", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("Deben de mostrar items cuando se carga las imagenes useFetchGifs", () => {
    const gifs = [
      {
        id: "xxx",
        title: "xxx",
        url: "xxx",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);

    expect(screen.getAllByRole("img").length).toBe(1);
  });
});
