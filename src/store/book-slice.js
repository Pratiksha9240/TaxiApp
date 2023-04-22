import {createSlice} from '@reduxjs/toolkit';

const initialBookState = {bookings: {}}

const bookSlice = createSlice({
    name: 'book',
    initialState: initialBookState,
    reducers: {
        book(state,action){
            state.bookings = {
                email: action.payload.email,
                pickup: action.payload.pickup,
                dropoff: action.payload.dropoff,
                additional:action.payload.additional,
                date: action.payload.date,
                time: action.payload.time
            }
        }
    }
})


export const bookActions = bookSlice.actions;

export default bookSlice.reducer