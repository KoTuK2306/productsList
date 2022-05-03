import { FC } from "react";
import classNames from "classnames";
import classes from "./Container.module.scss";

interface ContainerProps {
  className?: string;
}

export const Container: FC<ContainerProps> = ({ className, children }) => {
  return <div className={classNames(classes.container, className)}>{children}</div>;
};
