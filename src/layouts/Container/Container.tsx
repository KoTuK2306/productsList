import { FC } from "react";
import classes from "./Container.module.scss";

interface ContainerProps {
  className?: string;
}

export const Container: FC<ContainerProps> = ({ className, children }) => {
  return <div className={`${classes.container} ${className}`}>{children}</div>;
};
