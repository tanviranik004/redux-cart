const { ADD_TO_CART, REMOVE_FROM_CART } = require("../actions/cartActions");

const initialState = {
    cart: [],
    products: [

        {name: 'Lenovo Laptop', id: 1},
        {name: 'Asus Laptop', id: 2},
        {name: 'DELL Laptop', id: 3},
        {name: 'Tushiba Laptop', id: 4},
        {name: 'Walton Laptop', id: 5},
        {name: 'APPLE Laptop', id: 6},
        {name: 'Xaomi Laptop', id: 7},
    ]
}

const cartReducers = (state=initialState,action) =>{
    switch(action.type){
        case ADD_TO_CART:
           // console.log(action);
            //const newId=action.id;
            const newItem = {
                productId: action.id, 
                name: action.name, 
                cartId: state.cart.length + 1
            }
            const newCart = [...state.cart ,newItem];
            return{...state, cart: newCart};

            case REMOVE_FROM_CART:
                 const id=action.id;
                 const remainingCart=state.cart.filter(item=>item.cartId!==id)
                 return{...state,cart: remainingCart}

        default:
            return state;
            //Anik
    }
}

export default cartReducers;