import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cartReducer } from '../reducers/cartReducer'
import { loginUserReducer } from '../reducers/userReducer'
import {logoutUser} from '../actions/userActions'
export default function Navbar() {
    const dispatch=useDispatch()
    const cartstate = useSelector(state => state.cartReducer)
    const userState = useSelector(state => state.loginUserReducer)
    const { currentUser } = userState
    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
                <a className="navbar-brand" href="/">Tour Box</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav " style={{ marginLeft: 'auto', width: 'auto' }}>
                        {
                            currentUser ? (
                                <>
                                <li className="nav-item active">
                                    <a className="nav-link" href="/">{ currentUser.name } </a>
                                </li>
                                <li className="nav-item">
                            <a className="nav-link" href="/cart">Cart
                                {cartstate.cartItems.length}
                            </a>
                        </li>
                                <li className="nav-item active">
                                    <button className="btn" onClick={()=>{dispatch(logoutUser())}}>Logout</button>
                                </li>
                                </>

                            ) : (
                                <>
                            <li className="nav-item active">
                                <a className="nav-link" href="/login">Login </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/cart">Cart
                                {cartstate.cartItems.length}
                            </a>
                        </li>
                        </>)
                        }

                        

                    </ul>
                </div>
            </nav>
        </div>
    )
}