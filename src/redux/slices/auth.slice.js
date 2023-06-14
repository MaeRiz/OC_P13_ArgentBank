import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios";

const BACKEND_API = "http://localhost:3001/api/v1/user";

// Generates pending, fulfilled, reject actions
export const loginUser = createAsyncThunk('auth/loginUser', async (data) => {
    return axios
    .post(`${BACKEND_API}/login`, {
        email: data.username,
        password: data.password,
      })
      .then((response) => response.data.body.token)
})

export const profileUser = createAsyncThunk('auth/profilUser', async (token) => {
    return axios
    .post(`${BACKEND_API}/profile`, {},{
        "headers": {
            'Authorization': `Bearer ${token}`
        }
        
      })
      .then((response) => response.data.body)
})

const initialState = {
    user: {
        firstname:  null,
        lastname: null,
        email: null
    },
    userToken: null,
    isError: null,
    isLoading: false,
}


export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: () => initialState,
        changeName: (state, action) => {
            state.user.firstname = action.payload.firstname
            state.user.lastname = action.payload.lastname

            axios
            .put(`${BACKEND_API}/profile`, {
                firstName: action.payload.firstname,
                lastName: action.payload.lastname
            },{
                "headers": {
                    'Authorization': `Bearer ${state.userToken}`
                }
            })
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.isError = null
            state.userToken = action.payload
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false
            state.isError = action.error.message
        })
        builder.addCase(profileUser.fulfilled, (state, action) => {
            state.user.firstname = action.payload.firstName
            state.user.lastname = action.payload.lastName
            state.user.email = action.payload.email
        })
    }
})


export const { logout, changeName } = authSlice.actions
export default authSlice.reducer