const initialState = {word:''};
// action es el valor devuelto por el action
// action.payload será el valor que quiero añadir, borrar, etc

export default (state=initialState, action)=>{
    if(action.type === 'UPDATE_WORD'){
        return {
            ...state, 
            word: action.payload
        }
    }
    return state;
};

export const selectActiveWord = state => state.wordReducer.word