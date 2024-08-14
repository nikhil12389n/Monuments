export const addToCart=(monument,quantity,varient)=>(dispatch,getState)=>{

    var cartItem={
        name:monument.name,
        _id:monument._id,
        image:monument.image,
        varient:varient,
        quantity:Number(quantity),
        prices:monument.prices,
        price:monument.prices[0][varient]*quantity
    }
    if(cartItem.quantity>10){
        alert('You cannot book more than 10 tickets')
    }
    else{
        if(cartItem.quantity<1){
            alert('Cart Deleted')
            dispatch({type:'DELETE_FROM_CART',payload:monument})
        }
        else {
            dispatch({type:'ADD_TO_CART',payload:cartItem})
        }
    }
    const cartItems=getState().cartReducer.cartItems
    localStorage.setItem('cartItems',JSON.stringify(cartItems))

}
export const deleteFromCart=(monument)=>(dispatch,getState)=>{
    dispatch({type:'DELETE_FROM_CART',payload:monument})
    const cartItems=getState().cartReducer.cartItems
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
}