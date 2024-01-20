import { Box, Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Layout from "../Layout";
import { RiPhoneFindLine } from "react-icons/ri";
import { IoIosCreate, IoIosKey, IoIosKeypad } from "react-icons/io";

export const TopBar = () => {
  const [selectedButton, setSelectedButton] = useState(0);

  const selectModeButtonsObect = [
    {
      name: "Explore",
      children: (
        <>
          <Box display={"flex"} alignItems={"center"} gap=".4rem">
            <RiPhoneFindLine />
            <Text>Explore</Text>
          </Box>
        </>
      ),
    },
    {
      name: "Create",
      children: (
        <Box display={"flex"} alignItems={"center"} gap=".2rem">
          <IoIosCreate fontSize="1.2rem" />
          <Text>Create</Text>
        </Box>
      ),
    },
    {
      name: "Enter Code",
      children: (
        <>
          <Box display={"flex"} alignItems={"center"} gap=".4rem">
            <IoIosKeypad />
            Enter Code
          </Box>
        </>
      ),
    },
  ];

  return (
    <Layout my="0" auth={false} centered={false}>
      {/* Button Container */}
      <Box
        display={"flex"}
        justifyContent={"space-around"}
        gap="1"
        mb={"16"}
        // mt="2"
        p="4"
        bg="blue.700"
        boxShadow={"md"}
        backgroundImage={"linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5))"}
        // rounded={"lg"}
      >
        {selectModeButtonsObect.map((btnObj, idx) => {
          return (
            <Button
              bg={selectedButton === idx ? "green.500" : "white"}
              color={selectedButton === idx ? "white" : "black"}
              transform={selectedButton === idx ? "scale(1.2)" : "scale(1)"}
              onClick={() => setSelectedButton(idx)}
            >
              {btnObj.children}
            </Button>
          );
        })}
      </Box>
    </Layout>
  );
};
