import { getGif } from "../../../src/helpers/getGif";

describe("Pruebas sobre el helper getGif", () => {
  test("Debe devolver un arreglo de gif", async () => {
    const gifs = await getGif("Emmanuel");
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
