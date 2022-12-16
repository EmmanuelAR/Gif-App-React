import { renderHook, waitFor } from "@testing-library/react";
import { exact } from "prop-types";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Pruebas en el custom hook ", () => {
  test("Debe de regresar el estado inicial", () => {
    const { result } = renderHook(() => useFetchGifs("CheeseBurger"));

    const { images, isLoading } = result.current;
    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("Debe de regresar un arreglo de imagenes y el isLoading en false", async () => {
    const { result } = renderHook(() => useFetchGifs("CheeseBurger"));

    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );
    const { images, isLoading } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
