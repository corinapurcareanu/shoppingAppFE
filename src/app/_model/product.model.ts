import { FileHandle } from "./file-handle.model"

export interface Product {
    id: number | null,
    productName: string,
    productDescription: string,
    productDiscountedPrice: number,
    productActualPrice: number,
    deliveryDays: number,
    productStock: number,
    productImages: FileHandle[]
    type: string;
}