// import { useState } from 'react'
import "./App.css";

import { Box, Button, Center, Heading } from "@chakra-ui/react";
import TextInput from "./Components/FormComponents/TextInput/TextInput";
import Timeline from "./Components/Timeline/Timeline";
import Radio from "./Components/Radio/RadioInput";
import CardMatch from "./Components/CardMatch/CardMatch";
import Dashboard from "./Dashboard/Dashboard";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { backIn } from "framer-motion";
import Navbar from "./Components/Navbar";
import { BASE_URL } from "./services";
import { getThemeObject } from "../theme";
import { AuthContext } from "./useAuth";
import { useNavigate } from "react-router-dom";

const colors = ["#374259", "#116A7B", "#F5EAEA"];
const colors2 = ["#a64a1f", "#35df20", "#00ff87"];

function App({ user }) {
  const initialState = {
    quizzes: { status: "loading", data: [] },
    user: user,
    themeName: "white",
  };

  const auth = useContext(AuthContext);
  const navigate = useNavigate("/landing");

  useEffect(() => {
    if (!auth.isLoggedIn) {
      navigate("/landing");
    }
  }, []);
  const [state, setState] = useState(() => initialState);

  useEffect(() => {
    const url = `${BASE_URL}get_all_quiz`;
    axios.get(url).then((resp) =>
      setState((initial) => {
        return { ...initial, quizzes: { status: "loaded", data: resp.data } };
      })
    );
  }, []);

  const themeObject = getThemeObject(state.themeName);

  const jsx1 = (
    <>
      <Box marginBottom={"1rem"}>
        <Timeline />
        <Heading marginBottom={"1rem"}>
          Question: What is the meaning of{" "}
        </Heading>
        <Heading>
          <span style={{ color: colors2[2] }}>"WORD"</span>
        </Heading>
      </Box>
      <Center marginBottom={"1rem"}>
        <TextInput placeholder="Enter answer here" />
      </Center>
      <Radio choices={["Hello", "there"]} />
      <Button color="white" backgroundColor={colors2[2]}>
        Submit
      </Button>
    </>
  );

  return (
    <Box
      backgroundColor={themeObject.bgColorPrimary}
      minHeight={"100vh"}
      minWidth={"100vw"}
      color={themeObject.textColorMain}
    >
      <Navbar user={user} />
      <Dashboard quizzes={state.quizzes} user={initialState.user} />
      <Box width={"60%"} margin={"auto"} padding="4rem"></Box>
    </Box>
  );
}

export default App;
