
export const TotalPrice = (item) => {
    return item.reduce((acc, a) => {
        return acc += a.price
    },0)
}