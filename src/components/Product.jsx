import React from 'react'
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import {useDispatch} from 'react-redux'
import { add } from '../store/slices/CartSlice';
import { getProducts } from '../store/slices/ProductSlice';
import { useSelector } from 'react-redux';


function Product() {
    
    const dispatch=useDispatch()
    const {data:products,status}=useSelector((state)=>state.product)

    useEffect(() => {
       dispatch(getProducts()) 
        // fetch('https://fakestoreapi.com/products')
        //     .then(data => data.json())
        //     .then(result => setProduct(result))
    },[])
    
    const addtoCart=(item)=>{
        dispatch(add(item))
    }
    if(status==='Loading'){
        return <p> Loading... </p>
    }

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
                    <Button onClick={()=>addtoCart(product)}  variant="primary">Add to cart</Button>
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