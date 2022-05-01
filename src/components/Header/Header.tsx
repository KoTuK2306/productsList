import { FC } from "react";
import { Container } from "../../layouts/Container";
import { searchProducts } from "../../store/actions/product";
import { makePathToPublic } from "../../utils/makePathToPublic";
import { useTypedDispatch } from "../../hooks/useTypedDispatch";
import classes from "./Header.module.scss";

export const Header: FC = () => {
  const dispatch = useTypedDispatch();

  return (
    <header>
      <Container className={classes.header}>
        <div className={classes.headerItem}>
          <div className={classes.entriesWrapper}>
            <p>Show</p>
            <select className={classes.select} defaultValue={10} name="select">
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
            <p>entries</p>
          </div>
          <input
            type="text"
            onChange={(event) => {
              dispatch(searchProducts(event.currentTarget.value));
            }}
            className={classes.search}
            placeholder="Search by customer..."
          />
        </div>
        <button className={classes.addCustomer}>
          <img src={makePathToPublic("/images/plus.svg")} alt="plusIcon" />
          Add Customer
        </button>
      </Container>
    </header>
  );
};
