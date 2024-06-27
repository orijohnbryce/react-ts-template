import React from "react";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

const Welcome = () => {
  const { user } = useSelector((state: RootState) => state.authSlicerDavid);

  return (
    <div>
      {user && <div>Welcome {user?.firstName} </div>}
      {!user && <p> Welcome guest. </p>}
    </div>
  );
};

export default Welcome;
