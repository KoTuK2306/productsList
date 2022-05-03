import { Statuses } from "../enums/Statuses";
import { ValueOf } from "./ValueOf";

export interface Product {
  amount: number;
  tracking_id: number;
  status: ValueOf<Statuses>;
  date: string;
  customer: string;
  payment_mode: "Transfer Bank" | "Cash on Delivery";
  name: string;
  image: string;
}
