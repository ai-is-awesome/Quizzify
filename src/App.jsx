// import { useState } from 'react'
import "./App.css";

import { Box, Button, Center, Heading } from "@chakra-ui/react";
import TextInput from "./Components/FormComponents/TextInput/TextInput";
import Timeline from "./Components/Timeline/Timeline";
import Radio from "./Components/Radio/RadioInput";
import CardMatch from "./Components/CardMatch/CardMatch";
import Dashboard from "./Dashboard/Dashboard";
import { useEffect, useState } from "react";
import axios from "axios";
import { backIn } from "framer-motion";

const colors = ["#374259", "#116A7B", "#F5EAEA"];
const colors2 = ["#a64a1f", "#35df20", "#00ff87"];

function App() {
  const initialState = {
    quizzes: { status: "loading", data: [] },
  };

  const [state, setState] = useState(() => initialState);

  useEffect(() => {
    const url = "http://localhost:3001/get_all_quiz";
    axios.get(url).then((resp) =>
      setState((initial) => {
        return { ...initial, quizzes: { status: "loaded", data: resp.data } };
      })
    );
  }, []);

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
      backgroundColor={colors[1]}
      minHeight={"100vh"}
      width={"100vw"}
      color="white"
    >
      <Box width={"60%"} margin={"auto"} padding="4rem">
        <Box display={"flex"} gap="8" mb={"12"}>
          <Button bg={"green.400"} color={"white"}>
            Learn Language
          </Button>
          <Button background={"orange.400"} color={"white"}>
            Review your Progress
          </Button>
          <Button color={"white"} bg={"red.400"}>
            View Statistics
          </Button>
          <Button background={"magenta"} color={"white"}>
            Improve mistakes
          </Button>
        </Box>
        <Dashboard quizzes={state.quizzes} />
      </Box>
    </Box>
  );
}

export default App;
