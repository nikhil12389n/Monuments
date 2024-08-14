import React,{useState,useEffect} from 'react'

import {Modal} from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartAction';
import { deleteFromCart } from '../actions/cartAction';
import QRCode from 'qrcode.react'; 
export default function CartScreen() {
    const cartState=useSelector(state=>state.cartReducer);
    const cartItems=cartState.cartItems
    const dispatch=useDispatch()
    const [showQRModal, setShowQRModal] = useState(false);
    const [qrData, setQRData] = useState('');
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    var subtot=cartItems.reduce((x,item)=>x+item.price,0)


    
    function qr(){
      // useEffect(()=>{
        if(!localStorage.getItem('currentUser')){
            window.location.href="/login";

        }
        else 
        {
          // Generate QR code data
          const userData = JSON.parse(localStorage.getItem('currentUser'));
          const cartData = cartItems.map(item => `${item.name} : ${item.quantity}\n`);
          const totalPrice = `Total Price: ${subtot}`;
          const qrString = `Name: ${userData.name}\n\nEmail: ${userData.email}\n\nTicket Details:\n${cartData.join('\n')}\n\n${totalPrice}`;
          setQRData(qrString);
          handleShow();
      }
  
    // },[])
    }

    return (
    <div>
      <div className='row justify-content-center'>

        <div className='col-md-6'>
            <h2 style={{fontSize:'40px'}}>My Cart</h2>
            {cartItems && cartItems.map(item=>{
                return <div className='flex-container'>
                <div className='text-left m-1 w-100'>
                    <h1>{item.name} </h1>
                    <h1>Price : {item.quantity}*{item.prices[0][item.varient]} = {item.price}</h1>
                    <h1 style={{display:'inline'}}>Tickets :</h1>
                    <i className="fa fa-plus-circle" aria-hidden="true" onClick={()=>{dispatch(addToCart(item,item.quantity+1,item.varient))}}></i>
                    <b>{item.quantity}</b>
                    <i className="fa fa-minus-circle" aria-hidden="true" onClick={()=>{dispatch(addToCart(item,item.quantity-1,item.varient))}}></i>
                    <hr/>
                </div>

                <div className='m-1 w-100'>
                    <img src={item.image} style={{height:'100px',width:'100px'}}/>
                </div>

                <div className='m-1 w-100 mt-5'>
                <i className="fa fa-trash" aria-hidden="true" onClick={()=>{dispatch(deleteFromCart(item))}}></i>
                </div>

            </div>
            })}
            
        </div>

        <div className='col-md-4 text-right'>
            <h2 style={{fontSize:'45px'}}>SubTotal : {subtot} /-</h2>
            <button className='btn' onClick={qr}>CHECK OUT</button>
            <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>QR Code</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {qrData && 
                                <div className='d-flex justify-content-center' >
                                    <QRCode value={qrData} size={250} />
                                </div>
                            }
                        </Modal.Body>
                        <Modal.Footer>
                            <button className='btn' onClick={handleClose}>CLOSE</button>
                        </Modal.Footer>
                    </Modal>
        
        
      </div>
      </div>
    </div>
  )
}

