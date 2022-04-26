import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Header } from "./components/Header";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { fetchProducts } from "./store/actionCreators/product";
import { Product } from "./interfaces/Product";
import classes from "./App.module.scss";

export const App: FC = () => {
  const { error, loading, products } = useTypedSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (loading) {
    return <h1>Загрузка</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

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
