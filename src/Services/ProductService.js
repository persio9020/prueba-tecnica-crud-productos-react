import axios from "axios";

const BASE_URL_PRODUCT = "http://localhost:8080/product"

class ProductService {

    createProduct(product) {
        return axios.post(BASE_URL_PRODUCT, product)
    }

    getProductById(id){
        return axios.get(`${BASE_URL_PRODUCT}/${id}`)
    }

    getAllProducts() {
        return axios.get(BASE_URL_PRODUCT)
    }

    getCombinations(value) {
        return axios.get(`${BASE_URL_PRODUCT}/get-combinations?value=${value}`)
    }

    updateProduct(product) {
        return axios.put(`${BASE_URL_PRODUCT}`, product)
    }

    deleteProduct(id) {
        return axios.delete(`${BASE_URL_PRODUCT}/${id}`)
    }

}

export default new ProductService()