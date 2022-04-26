import { FC } from "react";
import { Header } from "./components/Header";
import classes from "./App.module.scss";

export const App: FC = () => {
  return (
    <div className={classes.app}>
      <Header />
    </div>
  );
};
