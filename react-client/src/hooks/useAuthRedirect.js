import { useContext, useEffect } from "react";
import { AuthContext } from "../useAuth";
import { useNavigate } from "react-router-dom";

function useAuthRedirect(auth_login_state = false, redirect_to = "/landing") {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.loading === false && auth.isLoggedIn === auth_login_state) {
      console.log("USING auth redirect!!");
      navigate(redirect_to);
    }
  });
}

export default useAuthRedirect;
