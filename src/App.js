import React, { useState } from "react";
import Menu from "./Components/Menu.js";
import Categories from "./Components/Categories.js";
import items from "./data";

const CategoryList = ["all", ...new Set(items.map((item) => item.category))];
function App() {
  const [itemList, setItems] = useState(items);
  const [categories, setCategories] = useState(CategoryList);

  const filterItems = (category) => {
    if (category === "all") {
      setItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setItems(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={itemList} />
      </section>
    </main>
  );
}

export default App;
