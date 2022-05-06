import { FC, useEffect } from "react";
import classNames from "classnames";
import cnBind from "classnames/bind";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { GridContainer } from "../../layouts/GridContainer";
import { useTypedDispatch } from "../../hooks/useTypedDispatch";
import { fetchProducts } from "../../store/actions/product";
import { Product as ProductComponent } from "./Product";
import { Spinner } from "../Spinner";
import { Pagination } from "../Pagination";
import { Triangle } from "../../tsxIcons/triangle";
import { sort } from "./../../store/actions/product";
import { SortTypes } from "../../enums/SortTypes";
import { SortFields } from "../../enums/SortFields";
import classes from "./ProductsList.module.scss";

const cx = cnBind.bind(classes);

type FieldNames = "Tracking ID" | "Product" | "Customer" | "Date" | "Amount" | "Payment Mode" | "Status" | "Action";
type ExcludedFieldNames = Exclude<FieldNames, "Tracking ID" | "Amount" | "Payment Mode" | "Action">;

const fieldNames: FieldNames[] = ["Product", "Customer", "Date", "Status"];
const columnNames: FieldNames[] = [
  "Tracking ID",
  "Product",
  "Customer",
  "Date",
  "Amount",
  "Payment Mode",
  "Status",
  "Action",
];

export const ProductsList: FC = () => {
  const { error, isLoading, filteredProducts, sortField, sortType } = useTypedSelector((state) => state.products);
  const { currentPage, productsPerPage } = useTypedSelector((state) => state.pagination);

  const getSortField = (columnName: ExcludedFieldNames): SortFields => {
    if (columnName === "Product") {
      return SortFields.PRODUCT;
    }
    if (columnName === "Customer") {
      return SortFields.CUSTOMER;
    }
    if (columnName === "Date") {
      return SortFields.DATE;
    }
    if (columnName === "Status") {
      return SortFields.STATUS;
    }
    return columnName;
  };

  const getActiveSortType = (setSortType: SortTypes, name: ExcludedFieldNames) => {
    return `${sortField === getSortField(name) && cx({ activeSort: sortType === setSortType })}`;
  };

  const dispatch = useTypedDispatch();

  const lastProductIndex = currentPage * productsPerPage;
  const firstUserIndex = lastProductIndex - productsPerPage;

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <section className={classes.productsList}>
      <GridContainer>
        {columnNames.map((name) => {
          if (fieldNames.includes(name)) {
            return (
              <button
                key={name}
                onClick={() => dispatch(sort(getSortField(name as ExcludedFieldNames)))}
                className={classNames(classes.columnName, classes.sortButton)}
              >
                <p>{name}</p>
                <div className={classes.trianglesWrapper}>
                  <div
                    className={classNames(
                      classes.triangle,
                      getActiveSortType(SortTypes.DESC, name as ExcludedFieldNames)
                    )}
                  >
                    <Triangle />
                  </div>
                  <div
                    className={classNames(
                      classes.triangle,
                      classes.rotated,
                      getActiveSortType(SortTypes.ASC, name as ExcludedFieldNames)
                    )}
                  >
                    <Triangle />
                  </div>
                </div>
              </button>
            );
          }
          return (
            <div key={name} className={classes.columnName}>
              <p className={classes.title}>{name}</p>
            </div>
          );
        })}
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
