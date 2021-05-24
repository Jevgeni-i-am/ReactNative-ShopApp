//here will be defined how a product should look like
// MODELS+STORE/Actions+STORE/Reducers  works TOGETHER!!!!
import moment from 'moment'

class Order {
    constructor(id, items, totalAmount, date) {
        this.id = id;
        this.items = items;
        this.totalAmount = totalAmount;
        this.date = date;
    }

    // GET "npm i moment" for better date  
    get readableDate() {
        // return this.date.toLocaleDateString('ru-RU', {
        //     year: 'nemric',
        //     month: 'long',
        //     day: 'muneric',
        //     hour: '2-digit',
        //     minute: '2-digit'
        //  })

        return moment(this.date).format('MMMM Do YYYY, hh:mm')
    }
}

export default Order;
