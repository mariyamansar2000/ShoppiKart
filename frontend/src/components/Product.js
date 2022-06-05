import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const format = num => {
    const n = String(num),
          p = n.indexOf('.')
    return n.replace(
        /\d(?=(?:\d{3})+(?:\.|$))/g,
        (m, i) => p < 0 || i < p ? `${m},` : m
    )
}

const Product = (props) => {
    return (
        <Card className= 'my-3 p-3 rounded product-card d-flex align-items-center position-relative'>
            
            <Link to={`/product/${props.product._id}`}>

                <img src={props.product.image} alt={props.product.name} variant='top'
                     style={{maxWidth: '200px', maxHeight: '200px', paddingTop: '5px'}}/>
            
            </Link>
            
            <Card.Body style={{position: 'absolute', bottom: '0', right: '0'}}>
                <Link to={`/product/${props.product._id}`} style={{color:'#101010' , textDecoration: 'none'}}>

                    <Card.Title as='div'><strong>{props.product.name}</strong></Card.Title>
    
                </Link>

                <Card.Text as='div' className='d-flex flex-column align-self-end' >
                
                    <Rating rating={props.product.rating} numReviews={props.product.numReviews} />
                
                </Card.Text>

                <Card.Text as='div'><span style={{fontSize: '27px' , fontWeight: 'bold'}}>₹{format(props.product.price)}</span></Card.Text>

            </Card.Body>
        
        </Card>
    )
}

export default Product
