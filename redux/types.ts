export type IProductsTypes = {
    id?: any,
    title?: string,
    price?: number,
    description?: string,
    category?: string,
    image?: string,
    rating?: {}
}
export type NIProductsTypes = {
    qty?: number
} & IProductsTypes