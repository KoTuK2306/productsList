import { FC } from "react";
import classes from "./GridContainer.module.scss";

export const GridContainer: FC = ({ children }) => {
  return <div className={classes.gridContainer}>{children}</div>;
};
