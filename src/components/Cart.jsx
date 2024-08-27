import React from 'react'
import { useSelector } from 'react-redux'
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { remove } from '../store/slices/CartSlice';

function Cart() {
  const dispatch=useDispatch()

  const handleremove=(id)=>{
    dispatch(remove(id))
  }

  const cartitem = useSelector((state) => state.cart)
  const card = cartitem.map((product) => (
    <div className='col-md-3 mb-4 ' key={product.id}>
      
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
            <Button onClick={()=>handleremove(product.id)} variant="danger">remove</Button>
          </Card.Footer>
        </Card>
      
    </div>
  ))
  return (
    <div className='row'>
      {card}
    </div>
  )
}

export default Cart