import { SortFields } from "../enums/SortFields";
import { SortTypes } from "../enums/SortTypes";
import { Product } from "../interfaces/Product";

export const sortProducts = (products: Product[], sortType: SortTypes, sortField: SortFields): Product[] => {
  const fields: Record<SortFields, keyof Product> = {
    [SortFields.PRODUCT]: "name",
    [SortFields.CUSTOMER]: "customer",
    [SortFields.DATE]: "date",
    [SortFields.STATUS]: "status",
  };
  const field = fields[sortField];
  switch (sortType) {
    case SortTypes.ASC:
      return products.sort((prev, next) => (prev[field] > next[field] ? -1 : 1));
    case SortTypes.DESC:
      return products.sort((prev: any, next: any) => (prev[field] > next[field] ? 1 : -1));
    default:
      return products;
  }
};
