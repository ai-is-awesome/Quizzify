import { useContext, useEffect } from "react";
import { AuthContext } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function useAuthRedirect(auth_login_state = false, redirect_to = "/landing") {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  // Run the effect everytime the consumer renders since the logic is a simple comparision and not expensive
  useEffect(() => {
    if (auth.loading === false && auth.isLoggedIn === auth_login_state) {
      navigate(redirect_to);
    }
  });
}

export default useAuthRedirect;
