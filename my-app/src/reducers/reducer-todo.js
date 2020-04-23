
export const initialState = [{
    item: 'bananas',
    completed: false,
    id: 1234
}]

export function reducer(state, action) {

    switch(action.type) {
        case 'ADD_TODO':
            return [ ...state, {item: action.payload, completed: false, id: Date.now()} ];
        case 'COMPLETED':
            return state.map(item => {
                if (item.id === action.payload) {
                item.completed = !item.completed;
                return item;
              } else {
                return item;
              }
            });
        case 'CLEAR':
            return state.filter(item => !item.completed)
        default:
            return state
    }
}
