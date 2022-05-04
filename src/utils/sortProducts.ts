import { SortFields } from "../enums/SortFields";
import { SortTypes } from "../enums/SortTypes";
import { Product } from "../interfaces/Product";
import { ValueOf } from "../interfaces/ValueOf";

export const sortProducts = (
  products: Product[],
  sortType: ValueOf<SortTypes>,
  sortField: ValueOf<SortFields>
): Product[] => {
  if (sortField === SortFields.PRODUCT) {
    if (sortType === SortTypes.ASC) {
      return products.sort((prev, next) => (prev.name > next.name ? -1 : 1));
    }
    return products.sort((prev, next) => (prev.name > next.name ? 1 : -1));
  }

  if (sortField === SortFields.CUSTOMER) {
    if (sortType === SortTypes.ASC) {
      return products.sort((prev, next) => (prev.customer > next.customer ? -1 : 1));
    }
    return products.sort((prev, next) => (prev.customer > next.customer ? 1 : -1));
  }

  if (sortField === SortFields.DATE) {
    if (sortType === SortTypes.ASC) {
      return products.sort((prev, next) => (prev.date > next.date ? -1 : 1));
    }
    return products.sort((prev, next) => (prev.date > next.date ? 1 : -1));
  }

  if (sortField === SortFields.STATUS) {
    if (sortType === SortTypes.ASC) {
      return products.sort((prev, next) => (prev.status > next.status ? -1 : 1));
    }
    return products.sort((prev, next) => (prev.status > next.status ? 1 : -1));
  }
  return products;
};
