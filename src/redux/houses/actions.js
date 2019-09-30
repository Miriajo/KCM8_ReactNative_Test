import * as types from './types'

export const setFetching = value => {
    const action = {
        type: types.HOUSES_SET_FETCHING,
        value: value,
    };
    return action;
};


