import { Product } from "./product.model";

export interface MyOrderDetails {
    id: number;
    orderFullName: string;
    orderFullAddress: string;
    orderContactNumber: string;
    orderAlternateContactNumber: string;
    orderStatus: string;
    orderAmount: number;
    orderDatePlaced: string;
    deliveryMethod: string;
    products: Product[];
    user: any;
}