import { OrderQuantity } from "./order.quantity.model";

export interface OrderInput {
    orderFullName: string;
    orderFullAddress: string;
    orderContactNumber: string;
    orderAlternateContactNumber: string;
    deliveryCost: number;
    cart: any[];
}