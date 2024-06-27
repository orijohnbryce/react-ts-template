import { jwtDecode } from "jwt-decode";
import { UserModel } from "../../models/userModel";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface AuthStateInterface {
    token: string | null;
    user: UserModel | null;
}

const initState: AuthStateInterface = {
    token: localStorage.getItem("token"),
    user: null,
}

if (initState.token){
    // JS:
    // initState.user = jwtDecode(initState.token).user

    // TS
    initState.user = (jwtDecode(initState.token) as {user: UserModel}).user
}


const authSlice = createSlice({
    name: 'auth',
    initialState: initState,  // {user: .., token: ..}
    reducers: {
        login: (state: AuthStateInterface, action: PayloadAction<string>)=>{
            
            // extract token from action
            const token = action.payload;

            // save token
            localStorage.setItem("token", token);

            // add token to state
            state.token = token;

            // parse the token
            state.user = (jwtDecode(token) as {user: UserModel}).user                        
        },

        logout: (state: AuthStateInterface) =>{
            state.token = null;
            state.user = null;
            localStorage.removeItem("token");
        },
        // register: ()=>{}
    }
})

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;
