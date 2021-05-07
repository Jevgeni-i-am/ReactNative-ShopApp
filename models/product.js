//here will be defined how a product should look like
// MODELS+STORE/Actions+STORE/Reducers  works TOGETHER!!!!

class Product {
    constructor(id,ownerId,title,imageUrl, description, price){
        this.id=id,
        this.ownerId=ownerId,
        this.title=title,
        this.imageUrl=imageUrl,
        this.description=description,
        this.price=price

    }
}

export default Product