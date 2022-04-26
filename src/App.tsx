import { FC, useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Product } from "./interfaces/Product";
import classes from "./App.module.scss";

export const App: FC = () => {
  const databaseURL = "https://api.npoint.io/ddd6e2a9b98b85c92294";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(databaseURL).then((response) => response.json().then((data) => setProducts(data)));
  }, []);

  return (
    <div className={classes.app}>
      <Header />
      {products.map((product: Product) => (
        <div key={product.tracking_id} className={classes.object}>
          <p>{product.tracking_id}</p>
          <div>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
          </div>
          <p>{product.customer}</p>
          <p>{product.date}</p>
          <p>{product.amount}</p>
          <p>{product.payment_mode}</p>
          <p>{product.status}</p>
        </div>
      ))}
    </div>
  );
};
