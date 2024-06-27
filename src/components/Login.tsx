import { useDispatch } from 'react-redux'
import { login } from '../redux/slices/authSlice'

const Login = () => {

    const dispatch = useDispatch()
    
    console.log("Login rendered!");
    
    const handleLogin = ()=>{
        // got to server, with email and password, and get token as response
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo0LCJmaXJzdE5hbWUiOiJvcmkiLCJsYXN0TmFtZSI6ImJyb29rIiwiZW1haWwiOiJvcmlAYnJvb2suY29tIiwicm9sZSI6IlVzZXIifSwiaWF0IjoxNzE5MjUzMTYxLCJleHAiOjE3MTkyNzExNjF9.ZMN10hNViv9aUCVEG90xMJD7v_wJqzJ5ouBtXI8xDJo"
        dispatch(login(token))
    }
  return (
    <div>
        <button onClick={handleLogin}> Login </button>        
    </div>
  )
}

export default Login