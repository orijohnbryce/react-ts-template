import {useSelector} from "react-redux"
import { RootState } from "../redux/store"
import Logout from "./Logout";

const Welcome = () => {
    const authState = useSelector((state: RootState)=> state.authSlice);

  return (
    <div>
        {authState.user && <p> Welcome {authState.user?.firstName}.  <Logout/>  </p>}
        {!authState.user && <p> Welcome Guest!  </p>}
        
    </div>
  )
}

export default Welcome