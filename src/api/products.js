import client from "./client"

const getProducts = () => client.get("/products")

export default { getProducts }
