export interface Product {
  amount: number;
  tracking_id: number;
  status: "Delivered" | "Canceled" | "Procces";
  date: string;
  customer: string;
  payment_mode: "Tranfer Bank" | "Cash on Delivery";
  name: string;
  image: string;
}
