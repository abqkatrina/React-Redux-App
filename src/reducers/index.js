import { FETCH_CAT_START, FETCH_CAT_WIN, FETCH_CAT_LOSE } from '../actions';

const initialState = {
  cat: [],
  error: '',
  isFetching: false
};

function reducer(state = initialState, action) {
  // console.log('reducer', action);
  switch (action.type) {
    case FETCH_CAT_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
      case FETCH_CAT_WIN:
      return {
        ...state,
        cat: action.payload,
        isFetching: false,
        error: ''
      };
      case FETCH_CAT_LOSE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
}
export default reducer;