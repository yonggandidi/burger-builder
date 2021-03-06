import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }

    async componentDidMount() {
        try {
            const { data } = await axios.get('/orders.json');
            const fetchedOrders = [];
            for (let key in data) {
                fetchedOrders.push({
                    ...data[key],
                    id: key
                });
            }
            this.setState({ loading: false, orders: fetchedOrders });
        } catch (e) {
            this.setState({ loading: false });
        }
    }

    render() {
        return (
            <div>
                {this.state.orders.map(order => (
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price} />
                ))}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);