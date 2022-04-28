import { FC } from "react";
import { Header } from "./components/Header";
import { ProductsList } from "./components/ProductsList";
import classes from "./App.module.scss";

export const App: FC = () => {
  return (
    <div className={classes.app}>
      <Header />
      <ProductsList />
    </div>
  );
};
