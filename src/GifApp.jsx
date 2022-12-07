import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifApp = () => {
  const [categories, setCategories] = useState(["CheeseBurger"]);

  // Funcion para agregar nuevo valos al lists
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>Gif App</h1>

      {/* Input */}
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {/* Listado de gif */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
