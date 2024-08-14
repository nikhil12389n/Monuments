import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getAllUsers,deleteUser } from '../actions/userActions'
export default function Userlist() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getAllUsers())
  },[dispatch])
  const userstate=useSelector(state=>state.getAllUsersReducer)
  const {error,loading,users}=userstate
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
      
          <h1>Users List</h1>
          {loading}
          {error}
          <table className='table table-striped table-bordered'>
            <thead className='thead-dark'>
              <tr>
                <th>User Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Delete</th>
              </tr>

            </thead>
            <tbody>
              {users && users.map(user=>{
                return <tr>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td><i className='fa fa-trash' onClick={()=>dispatch(deleteUser(user._id))}></i></td>
                </tr>
              })}
            </tbody>
          </table>









    </div>
  )
}
