import client from "./client"

const getProducts = () => client.get("/products")
const getProducts_Limit = (limit) => client.get("/products?limit=" + limit)
const getProducts_Sort = (sort) => client.get("/products?sort=" + sort)
const getAllCategories = () => client.get('/products/categories')
const getProductsInCategory = (category) => {
    console.log("aaaaaa")
    if (category === "") return client.get("/products")
    return client.get('/products/category/' + category)
}

export default { getProducts, getProducts_Limit, getProducts_Sort, getAllCategories, getProductsInCategory }
