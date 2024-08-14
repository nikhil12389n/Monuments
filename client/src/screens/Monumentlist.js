import React from 'react'
import { Link } from 'react-router-dom';
import  { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getAllMonuments,deleteMonument} from "../actions/monuAction"
export default function Monumentlist() {
  const dispatch = useDispatch()
  const monustate = useSelector(state => state.getAllMonumentsReducer)
  const { monuments, error, loading } = monustate
  useEffect(() => {
    dispatch(getAllMonuments())
  }, [dispatch])
  return (
    <div>
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
      
      <h2>Monuments List</h2>
      {loading}
      {error}
      <table className='table table-bordered table-dark'>
        <thead className='thead-dark'>
          <tr>
            <th>Name</th>
            <th>Price</th>
          
            <th>Actions</th>
          </tr>
        </thead>
      <tbody>
      {monuments && monuments.map(monu=>{
        return <tr>
          <td>{monu.name}</td>
          <td>Person : {monu.prices[0]['child']}</td>
        
          <td>
            <i className='fa fa-trash m-1' onClick={()=>dispatch(deleteMonument(monu._id))}></i>
            <Link to={`/admin/editmonument/${monu._id}`}><i className='fa fa-edit m-1'></i></Link>
          </td>
        </tr>
      })}
      </tbody>
      </table>
    </div>
  )
}
