import axios from "axios";
import {API_URL} from "../../config";

export const fetchProducts = {
    async getProducts() {
        const {data} = await axios.get(`${API_URL}/products`)
        return data
    }
}
export const fetchProductsId = {
    async getProductsId(id: string) {
        const {data} = await axios.get(`${API_URL}/products/${id}`)
        return data
    }
}
export {}