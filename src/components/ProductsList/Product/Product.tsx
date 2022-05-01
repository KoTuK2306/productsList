import classNames from "classnames";
import dayjs from "dayjs";
import { FC } from "react";
import { GridContainer } from "../../../layouts/GridContainer";
import { Product as ProductType } from "../../../interfaces/Product";
import { makePathToPublic } from "../../../utils/makePathToPublic";
import { Statuses } from "../../../enums/Statuses";
import { ValueOf } from "../../../interfaces/ValueOf";
import { Image } from "../../Image";
import classes from "./Product.module.scss";
import { Image } from "../../Image";

const getColor = (status: ValueOf<Statuses>) => {
  if (status === Statuses.DELIVERED) {
    return classes.green;
  }
  if (status === Statuses.CANCELED) {
    return classes.red;
  }
  if (status === Statuses.PROCESS) {
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
        <div data-title={name} className={classes.productImageWrapper}>
          <Image src={image} alt={name} className={classes.productImage} />
          <p className={classes.productName}>{name}</p>
        </div>
        <p>{customer}</p>
        <p>{dayjs(date).format("DD/MM/YYYY")}</p>
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
