import { FC } from "react";
import classNames from "classnames";
import { GridContainer } from "../../../layouts/GridContainer";
import { Product as ProductType } from "./../../../interfaces/Product";
import { makePathToPublic } from "./../../../utils/makePathToPublic";
import classes from "./Product.module.scss";

enum Statuses {
  delivered = "Delivered",
  canceled = "Canceled",
  process = "Procces",
}

const getColor = (status: string) => {
  if (status === Statuses.delivered) {
    return classes.green;
  }
  if (status === Statuses.canceled) {
    return classes.red;
  }
  if (status === Statuses.process) {
    return classes.orange;
  }
};

export const Product: FC<ProductType> = ({
  tracking_id,
  image,
  name,
  customer,
  date,
  amount,
  payment_mode,
  status,
}) => {
  return (
    <div className={classes.product}>
      <GridContainer>
        <p className={classes.title}>{`#${tracking_id}`}</p>
        <div className={classes.productImageWrapper}>
          <img className={classes.productImage} src={image} alt={name} />
          <p>{name}</p>
        </div>
        <p>{customer}</p>
        <p>{date.replace(/-/g, "/")}</p>
        <p>{`$${amount}`}</p>
        <p>{payment_mode}</p>
        <div className={classNames(classes.status, getColor(status))}>
          <p>{status}</p>
        </div>
        <div className={classes.actionsWrapper}>
          <button className={classes.actionButton}>
            <img src={makePathToPublic("/images/edit.svg")} alt="edit" />
          </button>
          <button className={classes.actionButton}>
            <img src={makePathToPublic("/images/trash.svg")} alt="trash" />
          </button>
        </div>
      </GridContainer>
    </div>
  );
};
