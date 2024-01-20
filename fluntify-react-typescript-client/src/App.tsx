// import { useState } from 'react'
import "./App.css";

import { Box, Button, Center, Heading } from "@chakra-ui/react";
import TextInput from "./Components/FormComponents/TextInput/TextInput";
import Timeline from "./Components/Timeline/Timeline";
import Radio from "./Components/Radio/RadioInput";

import { Suspense, useContext, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "./services";
import { getThemeObject } from "../theme";
import { AuthContext } from "./useAuth";
import { useNavigate } from "react-router-dom";
import { NewDashboard } from "./packages/Components/NewDashboard";
import { LoadingLayouts } from "./packages/Components/UI/Layouts/LoadingLayouts";

// const colors = ["#374259", "#116A7B", "#F5EAEA"];
const colors2 = ["#a64a1f", "#35df20", "#00ff87"];

function App({ user }) {
  const fallback = <LoadingLayouts layoutType="dashboard/spinnerBelowForm" />;
  return (
    <Suspense fallback={fallback}>
      <NewDashboard />
    </Suspense>
  );
}

export default App;
