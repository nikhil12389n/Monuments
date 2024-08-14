import React, { useState,useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { addMonument } from '../actions/monuAction'
export default function Addnewmonument() {
  const [name,setname]=useState('')
  const [child,setchild]=useState('')
  const [adult,setadult]=useState('')
  const [foreigner,setforeigner]=useState('')
  const [image,setimage]=useState('')
  const [description,setdescription]=useState('')
  const dispatch=useDispatch()
  const addmonustate = useSelector(state => state.addMonumentReducer)
  const {success,error,loading}=addmonustate
  console.log(success)
  function formfun(e){
    e.preventDefault();
    const monument={
      name,image,description,
      prices:{
        child:child,
        adult:adult,
        foreigner:foreigner
      }
    }
    console.log(monument)
    dispatch(addMonument(monument))
    alert("Monument added Successfully")
    window.location.href='/admin/monumentlist'
  }
  

  return (
    <div className='text-left'>
      <div className='row justify-content-center'>
                <div className='col-md-10'>
                    <h2 style={{ fontSize: '35px' }}>Admin Panel</h2>

                    <ul className='adminfunction'>
                        <li><a href="/admin/userlist">Users List</a></li>
                        <li><a href="/admin/monumentlist">Monuments List</a></li>
                        <li><a href="/admin/addnewmonumentlist">Add New Monument</a></li>
                    </ul>
                

            
            </div>

            </div>


        
      <h1>Add Monument</h1>
      {loading}
      {error}
      {success}
      
      <form onSubmit={formfun}>
        <input className='form-control' type="text" placeholder='name' value={name} onChange={(e)=>{setname(e.target.value)}} />
        <input className='form-control' type="text" placeholder='child price' value={child} onChange={(e)=>{setchild(e.target.value)}} />
        <input className='form-control' type="text" placeholder='adult price' value={adult} onChange={(e)=>{setadult(e.target.value)}} />
        <input className='form-control' type="text" placeholder='foreigner price' value={foreigner} onChange={(e)=>{setforeigner(e.target.value)}} />
        
        <input className='form-control' type="text" placeholder='description' value={description} onChange={(e)=>{setdescription(e.target.value)}} />
        <input className='form-control' type="text" placeholder='image url' value={image} onChange={(e)=>{setimage(e.target.value)}} />
        <button className='btn' type='submit'>Add Monument</button>
      </form>
    </div>
  )
}
