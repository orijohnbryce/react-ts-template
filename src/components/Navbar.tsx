import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { login, logout } from "../redux/slices/authSlice";

const Navbar = () => {
  const { user } = useSelector((state: RootState) => state.authSlicerDavid);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  const handleLogin = () => {
    // token of default user (northwind)
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdE5hbWUiOiJMaXNhIiwibGFzdE5hbWUiOiJTaW1wc29uIiwiZW1haWwiOiJsaXNhQGdtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiJ9LCJpYXQiOjE3MTk0ODE3ODMsImV4cCI6MTcxOTQ5OTc4M30.tECyeaqOplCv6PpSBI9gSHbMjP8mvCZT6YVqAMxs0K0";
    dispatch(login(token));
  };

  return (
    <div>
      {user && (
        <div>
          <button onClick={handleLogout}> Logout </button>
        </div>
      )}

      {!user && (
        <div>
          <button onClick={handleLogin}> Login </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
