import { combineReducers } from "redux";
import listMoiveRecuder from "../Store/ListFiml";
import { firestoreReducer } from "redux-firestore";
import {firebaseReducer} from "react-redux-firebase"

const rootRecuder = combineReducers ({
    listMoiveRecuder:listMoiveRecuder,
    firebaseReducer:firebaseReducer,
    firestoreReducer:firestoreReducer

})
export default rootRecuder;