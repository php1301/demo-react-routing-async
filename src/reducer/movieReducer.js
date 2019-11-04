import * as ActionType from "./action/actionType"
import React, { Component } from 'react'
let initState = {
    listMovies: [], // nho cho gia tri hoac mang trong
    movie: []
}
const movieReducer  = (state = initState, action) => {
    switch(action.type){
        case ActionType.ON_SAVE_LIST_MOVIE: 
            state.listMovies = action.listMovies
            return {...state}
        case ActionType.DETAIL_MOVIE:
            console.log(action);
            state.movie = action.movie
            return {...state}
        default: 
        return {...state};
    }
}
export default movieReducer