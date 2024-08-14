import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {   Route,Routes,Router, Link,Switch } from 'react-router-dom'
import Monumentlist from './Monumentlist'
import Addnewmonument from './Addnewmonument'
import Userlist from './Userlist'
export default function Adminscreen() {
    const userState = useSelector(state => state.loginUserReducer)
    const { currentUser } = userState

    const dispatch = useDispatch();
    useEffect(() => {
        if (!currentUser.isAdmin) {
            window.location.href = '/'
        }
    }, [])
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

        </div>
    )
}
