import * as types from '../constants/actionTypes';

const itinitialState = {
    ERList: [],
    ERIDs: [],
    location: '',
    address: '',
    waitTime: '',
    _id: ''
}

const ERReducer = (state = initialState, action) => {
    let ERList, ERIDs;
    switch(action.type) {
        case types.ADD_ER: {
            const newER = {
                location: state.location,
                address: state.address,
                waitTime: state.waitTime,
                _id: state._id
            };
            ERList = state.ERList.slice();
            ERList.push(newER);

            const newID = {
                _id: state._id
            }
            ERIDs = state.ERIds.slice();
            ERIDs.push(newID);

            return {
                ERList,
                ERIDs,
                location: '',
                address: '',
                waitTime: '',
                _id: ''
            };
        }
        default: {
            return state;
        }
    }
};

export default ERReducer;
