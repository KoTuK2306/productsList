import classNames from "classnames";
import { FC } from "react";
import { Container } from "../../layouts/Container/Container";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useTypedDispatch } from "../../hooks/useTypedDispatch";
import { setCurrentPage } from "../../store/actions/pagination";
import classes from "./Pagination.module.scss";

type NavPage = "previous" | "next";

export const Pagination: FC = () => {
  const { filteredProducts } = useTypedSelector((state) => state.products);
  const { currentPage, productsPerPage } = useTypedSelector((state) => state.pagination);
  const dispatch = useTypedDispatch();
  const lastPageNumber = Math.ceil(filteredProducts.length / productsPerPage);

  const navPage = (howScroll: NavPage, currentPage: number) => {
    if (howScroll === "previous") {
      if (currentPage === 1) {
        dispatch(setCurrentPage(lastPageNumber));
        return;
      }
      dispatch(setCurrentPage(currentPage - 1));
    }
    if (howScroll === "next") {
      if (currentPage === lastPageNumber) {
        dispatch(setCurrentPage(1));
        return;
      }
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  return (
    <Container className={classes.pagination}>
      <button onClick={() => navPage("previous", currentPage)} className={classes.navButton}>
        Previous
      </button>
      {[...filteredProducts].slice(0, lastPageNumber).map(({ tracking_id }, index) => (
        <button
          key={tracking_id}
          className={classNames(classes.pageButton, currentPage === index + 1 ? classes.activePage : "")}
          onClick={() => dispatch(setCurrentPage(index + 1))}
        >
          {index + 1}
        </button>
      ))}
      <button onClick={() => navPage("next", currentPage)} className={classes.navButton}>
        Next
      </button>
    </Container>
  );
};
