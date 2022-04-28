import classNames from "classnames";
import { FC } from "react";
import classes from "./Spinner.module.scss";

export const Spinner: FC = () => {
  return (
    <div className={classes.spinnerWrapper}>
      <div className={classes.spinner}>
        <div className={classNames(classes.spinner, classes.spinnerInner)} />
      </div>
    </div>
  );
};
