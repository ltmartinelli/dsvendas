import { Seller } from "./seller";

export type SaleSum = {
    sellerName: string;
    sum: number;
}

export type SaleSuccess = {
    sellerName: string;
    visited: number;
    deals: number;
}

export type Sale = {
    id: number;
    visited: number;
    deals: number;
    amount: number;
    saleDate: string,
    seller: Seller,
}

export type SalePage = {
    content?: Sale[];
    totalPages: number;
    totalElements: number;
    last: boolean;
    size?: number;
    number: number;
    numberOfElements?: number;
    first: boolean;
    empty?: boolean;
}