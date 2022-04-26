import { FC, useEffect } from "react";
import { Header } from "./components/Header";
import { useTypedDispatch, useTypedSelector } from "./hooks/useTypedSelector";
import { fetchProducts } from "./store/actionCreators/product";
import { Product } from "./interfaces/Product";
import { Spinner } from "./components/Spinner";
import classes from "./App.module.scss";

export const App: FC = () => {
  const { error, loading, products } = useTypedSelector((state) => state.products);
  const dispatch = useTypedDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const showLoadOrError = () => {
    if (loading) {
      return <Spinner />;
    }
    if (error) {
      <h1>{error}</h1>;
    }
  };

  return (
    <div className={classes.app}>
      <Header />
      {showLoadOrError()}
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
