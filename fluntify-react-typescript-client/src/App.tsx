// import { useState } from 'react'
import "./App.css";

import { Box, Button, Center, Heading } from "@chakra-ui/react";
import TextInput from "./Components/FormComponents/TextInput/TextInput";
import Timeline from "./Components/Timeline/Timeline";
import Radio from "./Components/Radio/RadioInput";

import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "./services";
import { getThemeObject } from "../theme";
import { AuthContext } from "./useAuth";
import { useNavigate } from "react-router-dom";
import { NewDashboard } from "./Components/NewDashboard";

// const colors = ["#374259", "#116A7B", "#F5EAEA"];
const colors2 = ["#a64a1f", "#35df20", "#00ff87"];

function App({ user }) {
  // const [state, setState] = useState(() => initialState);

  // useEffect(() => {
  //   const url = `${BASE_URL}get_all_quiz`;
  //   axios.get(url).then((resp) =>
  //     setState((initial) => {
  //       return { ...initial, quizzes: { status: "loaded", data: resp.data } };
  //     })
  //   );
  // }, []);

  // return (
  //   <Box
  //     // backgroundColor={themeObject.bgColorPrimary}
  //     minHeight={"100vh"}
  //     minWidth={"100vw"}
  //     // color={themeObject.textColorMain}
  //   >
  //     <Navbar user={user} />
  //     <Dashboard quizzes={state.quizzes} user={initialState.user} />
  //     <Box width={"60%"} margin={"auto"} padding="4rem"></Box>
  //   </Box>
  // );

  return (
    <NewDashboard />

    // <DynamicRenderer sidebar={true}>
    //   <div>
    //     <Box w="50%" m="auto" mb="4rem">
    //       <PillButton bg={"orange.500"} color={"white"} w="max-content">
    //         Progress
    //       </PillButton>
    //     </Box>
    //   </div>
    // </DynamicRenderer>
  );
}

export default App;
