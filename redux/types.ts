export type IProductsTypes = {
    id?: any,
    title?: string,
    price?: number,
    description?: string,
    category?: string,
    image?: string,
    rating?: any
}
export type NIProductsTypes = {
    qty?: number
} & IProductsTypes