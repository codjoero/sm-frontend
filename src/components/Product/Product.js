/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
    Card, Icon,
} from 'semantic-ui-react';
import '../../assets/productCard.css';

const product = props => (
    <Card>
        <Card.Content>
            <Card.Header>{props.prod_name}</Card.Header>
            <Card.Meta>{props.category}</Card.Meta>
            <Card.Description floated="right">
                Stock:
                {' '}
                {props.stock}
            </Card.Description>
            <Card.Description>
                $
                {props.prod_price}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a href="#">
                <Icon name="cart" color="teal" />
                Add to cart
            </a>
        </Card.Content>
    </Card>
);

export default product;
