import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMonuments } from '../actions/monuAction'
import Monument from '../components/Monument'
import { getAllMonumentsReducer } from '../reducers/monuReducers'
export default function Homescreen() {

  const dispatch = useDispatch()
  const monustate = useSelector(state => state.getAllMonumentsReducer)
  const { monuments, error, loading } = monustate

  useEffect(() => {
    dispatch(getAllMonuments())
  }, [dispatch])

  return (
    <div>
      <div className='row justify-content-center'>
        {loading ? (<h1>Loading...</h1>) : error ? (<h1>Something went wrong</h1>) : (
       
          monuments.map(monument => {
            return (<div className='col-md-3 m-3' key={monument._id} >
              <div>
                <Monument monument={monument} />
              </div>
            </div>
            );
          })
        )}






      </div>
    </div>
  )
}
