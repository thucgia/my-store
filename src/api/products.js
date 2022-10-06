import client from "./client"

const getProducts = () => client.get("/products")
const getProduct = (product_id) => client.get("/products/" + product_id)
const getProducts_Limit = (limit) => client.get("/products?limit=" + limit)
const getProducts_Sort = (sort) => client.get("/products?sort=" + sort)
const getAllCategories = () => client.get('/products/categories')
const getProductsInCategory = (category) => {
    if (category === "") return client.get("/products")
    return client.get('/products/category/' + category)
}

export default { getProducts, getProduct, getProducts_Limit, getProducts_Sort, getAllCategories, getProductsInCategory }
