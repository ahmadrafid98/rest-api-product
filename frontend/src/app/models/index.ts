export interface ApiResponse<T> {
    code: number;
    status: string;
    data: Array<T>;
}

export interface ProductTransaction {
    uuid: string;
    amountSold: number;
    previousStockQuantity: number;
    date: string;
    product: Product;
}

export interface ProductType {
    type: string;
    totalSold: number;
}

export interface ProductTransactionTable {
    uuid: string;
    name: string;
    type: string;
    stock: number;
    amountSold: number;
    previousStockQuantity: number;
    date: string;
}

export interface ProductTransactionRequest {
    productId: string;
    date: string;
    amountSold: number;
    previousStockQuantity?: number;
}

export interface ProductRequest {
    name: string;
    type: string;
    stock: number;
}

export interface Product {
    uuid: string;
    name: string;
    type: string;
    stock: number;
    transactions?: Array<ProductTransaction>
}

