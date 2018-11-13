import { createStore } from 'redux';

const initialState = {
    songOrder: 0,
    songList: [],
    songId: '',
    songName: ''
}

const NeatMusicReducer = function (state = initialState, action) {
    switch (action.type) {
        case 'CHANGE':
            return Object.assign({}, state, {
                songList: action.songList
            })
        case 'CONTROL':
            return Object.assign({}, state, {
                songOrder: action.songOrder
            })
        case 'ID':
            console.warn('upstore1');
            console.warn(action.songId);
            console.warn('upstore2');
            return Object.assign({}, state, {
                songId: action.songId
            })
        case 'NAME':
            return Object.assign({}, state, {
                songName: action.songName
            })
        default:
            return state;
    }
}

let store = createStore(NeatMusicReducer)

export default store