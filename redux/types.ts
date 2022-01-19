export type IIProductsTypes = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {}
}
export type NIProductsTypes = {
    qty: number
} & IIProductsTypes