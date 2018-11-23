
const   INCREMENTAR = 'CONTADOR/INCREMENTAR';
const   DECREMENTAR = 'CONTADOR/DECREMENTAR';
const   SETEAR = 'CONTADOR/SETEAR';

export const incrementar  = () => ({
    type: INCREMENTAR
})

export const decrementar  = () => ({
    type: DECREMENTAR
})
export const setear  = payload => ({
    payload: payload,
    type: SETEAR
})

const initialState = 0;
export default function(state = initialState, action){

    switch (action.type) {
        case INCREMENTAR :
            return state +  1;
            break;
        case DECREMENTAR:
            return state -  1;
            break;
        case SETEAR:
            return action.payload;
            break;                  
        default:
            return state;
            break;
    }
}