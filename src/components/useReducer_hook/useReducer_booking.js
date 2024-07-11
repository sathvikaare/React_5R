import React, { useReducer } from 'react'
const state={
    totalAvailableTickets:100,
    bookedTickets:20,
    holdTickets:20,
};
const reducerFunction=(state,action)=>{
    switch(action.type){
        case "Book_Tickets":
            return {
                ...state,bookedTickets:state.bookedTickets+1, totalAvailableTickets:state.totalAvailableTickets-1,
            };
            case "Hold_Tickets":
            return {
                ...state,holdTickets:state.holdTickets -1,
            }
            default:
                return state;
    }
}
const Reducerbooking = () => {
   const [currentstate,dispatch]= useReducer(reducerFunction,state)
const bookingTicketFun=()=>{
    dispatch({
        type:"Book_Tickets",
        noofTickets:1,
    })
}
const holdTicketFun=()=>{
    dispatch({
        type:"Hold_Tickets",
        noofTickets:1,
    })
}

   return (
    <div>
        <h1>Available Tickets:{currentstate.totalAvailableTickets}</h1>
        <h1>Book Tickets:{currentstate.bookedTickets}</h1>
        <h1>Hold Tickets:{currentstate.holdTickets}</h1>
        <button onClick={bookingTicketFun}>Book Tickets here</button>
        <button onCanPlay={holdTicketFun}>Hold Tickets</button>
    </div>
  );
}
export default Reducerbooking;