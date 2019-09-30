import * as types from './types';

const initialState = {
    list: [],
    item: null,
    isFetching: false,
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case types.HOUSES_UPDATE_LIST:
            return {
                // update the list
                ...state,
                list: action.value,
            };

        case types.HOUSES_UPDATE_ITEM:
            return {
                ...state,
                item: action.value,
            };

        case types.HOUSES_SET_FETCHING:
            return {
                ...state,
                isFetching: action.value,
            };

        default:
            return state;
    }
};

export default reducer