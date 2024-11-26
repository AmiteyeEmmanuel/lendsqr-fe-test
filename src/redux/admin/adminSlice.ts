import { createSlice } from '@reduxjs/toolkit'

export interface UserState {
  user: string | null
}

const initialState: UserState = {
    user: null
}

export const adminSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        clearUser: (state) => {
            state.user = null
        }
    }
})

export const { setUser, clearUser } = adminSlice.actions
