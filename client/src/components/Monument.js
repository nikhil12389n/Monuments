import React,{useState} from 'react'
import {Modal} from 'react-bootstrap'
import { useDispatch ,useSelector} from 'react-redux'
import { addToCart } from '../actions/cartAction'
export default function Monument({monument}) {
    const [quan,setquan]=useState(1)
    const [vari,setvari]=useState('child')
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch=useDispatch()
  function addtocart(){
    dispatch(addToCart(monument,quan,vari))
  }
  return (
    <div className='shadow-lg p-3 mb-5 bg-white rounded'
    key={monument._id }>
      <div onClick={handleShow}>
      <h1>{monument.name}</h1>
      <img src={monument.image} className="img-fluid" style={{height:'200px',width:'200px'}}></img>
      </div>
        <div className='flex-container'>
            {/* <div className='w-100 m-1'>
                <p>Visitors</p>
                <select className='form-control' value={vari} onChange={(e)=>{setvari(e.target.value)}}>{monument.varients.map(varient=>{
                    return <option value={varient}>{varient}</option>
                })}
                </select>
            </div> */}
                
            <div className='w-100 m-1'>
                <p style={{textAlign:'left'}}>Tickets</p>
                <select  className='form-control' value={quan} onChange={(e)=>{setquan(e.target.value)}} >
                    {[...Array(10).keys()].map((x,i)=>{
                        return <option value={i+1}>{i+1}</option>
                    })}
                </select>
            </div>
        </div>

        <div className='flex-container'>
            <div className='m-1 w-100'>
                    <h1 className='mt-1'>Price : {monument.prices[0][vari]*quan} Rs/-</h1>
            </div>

            <div className='m-1 w-100'>
                    <button className='btn' onClick={addtocart}>ADD TO CART</button>
            </div>

        </div>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{monument.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={monument.image} className='img-fluid' style={{height:'400px'}}></img>
                    <p>{monument.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className='btn' onClick={handleClose}>CLOSE</button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}
