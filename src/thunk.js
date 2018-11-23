
const FETCH_START = 'start';
const FETCH_SUCCESS = 'success';
const FETCH_ERROR = 'error';

const fetchStart = () =>({
    type: FETCH_START
});
const fetchSuccess = (payload) =>({
    payload,
    type: FETCH_SUCCESS,
});
const fetchError = (error) =>({
    error,
    type: FETCH_ERROR   
});
const uri = 'https://jsonplaceholder.typicode.com/users';

const initialState = {
    data:[],
    error: null,
    fetching: false,
}
function reducer ( state=initialState , action ){
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                fetching: true
            }
        case FETCH_SUCCESS:
        return {
            ...state,
            data: action.payload
        }    
        case FETCH_ERROR:
        return {
            ...state,
            error: action.error
        }  
        default:
            return state;
    }
}
export default payload => 
    async (dispatch, getState ) => {
        try {
            const result = await fetch(uri);
            const json = await result.json();
            dispatch(fetchSuccess(json));

            // tslint:disable-next-line:no-console
            console.log(json);
        } catch (error) {

            dispatch(fetchError(error));
            // tslint:disable-next-line:no-console
            console.log(error);
        }
    }