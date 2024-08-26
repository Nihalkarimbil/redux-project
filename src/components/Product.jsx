import React from 'react'
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
function Product() {
    const [products, setProduct] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(data => data.json())
            .then(result => setProduct(result))
    }, [])
    const card = products.map((product) => (
        <div className='col-md-3 mb-4 ' key={product.id}>
           <div className='col-md-3 mb-4' key={product.id}>
            <Card style={{ width: '18rem', height: '400px' }}>
                <Card.Img 
                    variant="top" 
                    src={product.image} 
                    alt={product.title} 
                    style={{ height: '180px', objectFit: 'cover' }} 
                />
                <Card.Body className='d-flex flex-column'>
                    <Card.Title style={{ fontSize: '12px' }}>{product.title}</Card.Title>
                    <Card.Text className='flex-grow-1'>
                        {product.description.substring(0, 70)}...
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='text-center'>
                    <Button variant="primary">Add to cart</Button>
                </Card.Footer>
            </Card>
        </div>
    </div>
    ))

    return (
        <div className='row' >
            <h1 className='text-center'>products</h1>
            {card}
        </div>
    )
}

export default Product