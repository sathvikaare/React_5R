export const initialState={
    todos:["woke up at 8 am","brushing in next 10 mnts"],
};
export const reducer=(state,action)=>{
    switch(action.type){
        case "ADD_TODO":
            return {...state,todos:[...state.todos,action.newTodo,]};
        default :
        return state;
    }
}