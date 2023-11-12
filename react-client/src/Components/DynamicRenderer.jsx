import React, { useContext } from "react";
import { AuthContext } from "../useAuth";

export default function DynamicRenderer({ children, forceOnboard = false }) {
  const authContext = useContext(AuthContext);
  const onBoarded = true;
  if (authContext.loading) {
    return <>LOading</>;
  }

  if (!onBoarded) {
    return <>Form</>;
  }

  return <>{children}</>;
}
