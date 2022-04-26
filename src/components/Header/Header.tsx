import { FC } from "react";
import { Container } from "../../layouts/Container";
import classes from "./Header.module.scss";

export const Header: FC = () => {
  return (
    <header>
      <Container className={classes.header}>
        <div className={classes.entriesWithSearch}>
          <div className={classes.entriesWrapper}>
            <p>Show</p>
            <select className={classes.select} defaultValue={10} name="select">
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
            <p>entries</p>
          </div>
          <input type="search" className={classes.search} placeholder="Search..."></input>
        </div>
        <button className={classes.addCustomer}>
          <img src={`${process.env.PUBLIC_URL}/images/plus.svg`} alt="plusIcon" />
          Add Customer
        </button>
      </Container>
    </header>
  );
};
