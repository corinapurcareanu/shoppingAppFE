import { FileHandle } from "./file-handle.model"

export interface Product {
    id: number | null,
    productName: string,
    productDescription: string,
    productDiscountedPrice: number,
    productActualPrice: number,
    productImages: FileHandle[]
    type: string;
}