import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import MockedAccounts from "../../utils/MockedData/user_accounts.json"


// Generates pending, fulfilled, reject actions
export const getUserAccounts = createAsyncThunk('account/getUserAccounts', async () => {
    // Change mocked data by call API
    return MockedAccounts
})


const initialState = {
    accounts: null,
    isError: null,
    isLoading: false,
}


export const accountsSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: () => initialState
    },

    extraReducers: (builder) => {
        builder.addCase(getUserAccounts.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getUserAccounts.fulfilled, (state, action) => {
            state.isLoading = false
            state.isError = null
            state.accounts = action.payload
        })
        builder.addCase(getUserAccounts.rejected, (state, action) => {
            state.isLoading = false
            state.isError = action.error.message
        })

    }
})


export const { reset } = accountsSlice.actions
export default accountsSlice.reducer