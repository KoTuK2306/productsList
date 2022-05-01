import { FC } from "react";
import classNames from "classnames";
import classes from "./Image.module.scss";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const Image: FC<ImageProps> = ({ src, alt, className }) => {
  return (
    <div className={classNames(classes.imageWrapper, className)}>
      <img className={classes.image} src={src} alt={alt} />
    </div>
  );
};
