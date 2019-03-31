import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Dimmer, Loader, Card,
} from 'semantic-ui-react';

import Product from '../components/Product/Product';
import * as actions from '../redux/actions/index';
import '../assets/prodContainer.css';

export class Products extends Component {
    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        this.products = (
            <div className="ProductsLoader">
                <Dimmer active inverted>
                    <Loader size="massive">Loading</Loader>
                </Dimmer>
            </div>
        );
        if (this.props.products !== null) {
            this.products = this.props.products.products.map(product => (
                <Product
                    key={product.prod_id}
                    prod_name={product.prod_name}
                    category={product.category}
                    prod_price={product.price}
                    stock={product.stock}
                />
            ));
        }
        return (
            <div className="AllProducts">
                <Card.Group itemsPerRow={7}>
                    {this.products}
                </Card.Group>
            </div>
        );
    }
}

export const mapStateToProps = state => ({
    products: state.products.products,
    loading: state.products.loading,
});

export const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch(actions.getAllProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
