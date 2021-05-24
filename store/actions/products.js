export const DELETE_PRODUCT = "DELETE_PRODUCT"
export const CREATE_PRODUCT = "CREATE_PRODUCT"
export const UPDATED_PRODUCT = "UPDATED_PRODUCT"



export const deleteProduct = productId => {
    return {
        type: DELETE_PRODUCT,
        pid: productId
    }
}

export const createProduct = (title, description, imageUrl, price) => {
    return {
        type: CREATE_PRODUCT,
        productData: { title, description, imageUrl, price }
    }
}


export const updatedProduct = (id, title, description, imageUrl) => {
    return {
        type: UPDATED_PRODUCT,
        pid: id,
        productData: { title, description, imageUrl }
    }
}