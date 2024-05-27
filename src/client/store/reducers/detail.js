import * as Types from "../actionTypes/detail";

const initialStatte = {
  count: 0,
};

const detailReducer = (state = initialStatte, action) => {
  switch (action.type) {
    case Types.COUNT_DATA:
      return {
        ...state,
        count: action.payload.number,
      };
    default:
      return state;
  }
};

export default detailReducer;
