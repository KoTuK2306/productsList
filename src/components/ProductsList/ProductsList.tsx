import { FC, useEffect } from "react";
import classNames from "classnames";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { GridContainer } from "../../layouts/GridContainer";
import { useTypedDispatch } from "../../hooks/useTypedDispatch";
import { fetchProducts } from "../../store/actions/product";
import { Product as ProductComponent } from "./Product";
import { Spinner } from "../Spinner";
import { Pagination } from "../Pagination";
import { Triangle } from "../../tsxIcons/triangle";
import classes from "./ProductsList.module.scss";

export const ProductsList: FC = () => {
  const { error, isLoading, filteredProducts } = useTypedSelector((state) => state.products);
  const { currentPage, productsPerPage } = useTypedSelector((state) => state.pagination);
  const dispatch = useTypedDispatch();

  const lastProductIndex = currentPage * productsPerPage;
  const firstUserIndex = lastProductIndex - productsPerPage;

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <section className={classes.productsList}>
      <GridContainer>
        <div className={classes.columnName}>
          <p className={classes.title}>Tracking ID</p>
        </div>
        <button className={classNames(classes.columnName, classes.sortButton)}>
          <p>Product</p>
          <div className={classes.trianglesWrapper}>
            <div className={classes.triangle}>
              <Triangle />
            </div>
            <div className={classNames(classes.triangle, classes.rotated)}>
              <Triangle />
            </div>
          </div>
        </button>
        <button className={classNames(classes.columnName, classes.sortButton)}>
          <p>Customer</p>
          <div className={classes.trianglesWrapper}>
            <div className={classes.triangle}>
              <Triangle />
            </div>
            <div className={classNames(classes.triangle, classes.rotated)}>
              <Triangle />
            </div>
          </div>
        </button>
        <button className={classNames(classes.columnName, classes.sortButton)}>
          <p>Date</p>
          <div className={classes.trianglesWrapper}>
            <div className={classes.triangle}>
              <Triangle />
            </div>
            <div className={classNames(classes.triangle, classes.rotated)}>
              <Triangle />
            </div>
          </div>
        </button>
        <div className={classes.columnName}>
          <p>Amount</p>
        </div>
        <div className={classes.columnName}>
          <p>Payment Mode</p>
        </div>
        <button className={classNames(classes.columnName, classes.sortButton)}>
          <p>Status</p>
          <div className={classes.trianglesWrapper}>
            <div className={classes.triangle}>
              <Triangle />
            </div>
            <div className={classNames(classes.triangle, classes.rotated)}>
              <Triangle />
            </div>
          </div>
        </button>
        <div className={classes.columnName}>
          <p className={classes.title}>Action</p>
        </div>
      </GridContainer>
      {isLoading && <Spinner />}
      {error && <h1>{error}</h1>}
      {filteredProducts.slice(firstUserIndex, lastProductIndex).map((product) => (
        <ProductComponent
          key={product.tracking_id}
          tracking_id={product.tracking_id}
          image={product.image}
          name={product.name}
          customer={product.customer}
          date={product.date}
          amount={product.amount}
          payment_mode={product.payment_mode}
          status={product.status}
        />
      ))}
      <Pagination />
    </section>
  );
};
