import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getMonumentById } from '../actions/monuAction'
import { addMonument,editMonument } from '../actions/monuAction'
export default function Editmonument() {
  const { monumentid } = useParams();
  //     console.log(props)
  const [name, setname] = useState('')
  const [child, setchild] = useState('')
  const [adult, setadult] = useState('')
  const [foreigner, setforeigner] = useState('')
  const [image, setimage] = useState('')
  const [description, setdescription] = useState('')

  const getMonumentByIdstate = useSelector(state => state.getMonumentByIdReducer)
  const { monument, error, loading } = getMonumentByIdstate
  const editpizzastate=useSelector(state=>state.editMonumentReducer)
  const {eloading,eerror,esuccess}=editpizzastate
  const dispatch = useDispatch()
  useEffect(() => {

    if(monument){
      if(monument._id==monumentid){
        setname(monument.name)
        setdescription(monument.description)
        setimage(monument.image)
        setforeigner(monument.prices[0]['foreigner'])
        setadult(monument.prices[0]['adult'])
        setchild(monument.prices[0]['child'])
      }
      else{
          dispatch(getMonumentById(monumentid));
        }
      
    }

    else{
    dispatch(getMonumentById(monumentid));
  }

  }, [monument,dispatch]);

  function eformfun(e) {
    e.preventDefault();
    const upmonument = {
      _id:monumentid,
      name, image, description,
      prices: {
        child: child,
        adult: adult,
        foreigner: foreigner
      }
    }
    dispatch(editMonument(upmonument))

  }
  return (
    <div>
      
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



        <h1>Edit Monument</h1>
        <h1>MonumentId : {monumentid}</h1>
        {loading}
        {error}
        {esuccess}
        <form onSubmit={eformfun}>
          <input className='form-control' type="text" placeholder='name' value={name} onChange={(e) => { setname(e.target.value) }} />
          <input className='form-control' type="text" placeholder='child price' value={child} onChange={(e) => { setchild(e.target.value) }} />
          <input className='form-control' type="text" placeholder='adult price' value={adult} onChange={(e) => { setadult(e.target.value) }} />
          <input className='form-control' type="text" placeholder='foreigner price' value={foreigner} onChange={(e) => { setforeigner(e.target.value) }} />

          <input className='form-control' type="text" placeholder='description' value={description} onChange={(e) => { setdescription(e.target.value) }} />
          <input className='form-control' type="text" placeholder='image url' value={image} onChange={(e) => { setimage(e.target.value) }} />
          <button className='btn' type='submit'>Edit Monument</button>
        </form>
      </div>
    </div>
  )
}
