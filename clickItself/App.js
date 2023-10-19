import { useEffect, useState } from "react";
import Car from "./components/Car";
import "./styles.css";

export default function App() {
  const [products, setProducts] = useState([]);
  const clickHandler = (id, val) => {
    const prodCopy = [...products];
    prodCopy.map((prod) => (prod.isClicked = prod.id === id ? val : false));
    if (val) {
      setProducts(prodCopy);
    }
  };

  console.log("products", products);

  useEffect(() => {
    const sampleData = [
      {
        id: 1,
        company: "Maruti",
        year: 2019,
        isClicked: false
      },
      {
        id: 2,
        company: "Kia",
        year: 2020,
        isClicked: false
      },
      {
        id: 3,
        company: "Toyota",
        year: 2021,
        isClicked: false
      }
    ];
    setProducts(sampleData);
  }, []);

  return (
    <div className="App">
      {products.map((item) => (
        <Car carData={item} clickHandler={(val, id) => clickHandler(val, id)} />
      ))}
    </div>
  );
}
