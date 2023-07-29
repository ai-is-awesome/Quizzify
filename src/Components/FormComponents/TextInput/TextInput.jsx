import { Input } from "@chakra-ui/react";
import React from "react";

export default function TextInput({ props }) {
  return (
    <>
      <Input
        placeholder="Basic usage"
        padding={"2rem"}
        border="0px"
        borderBottom={"2px white solid"}
        color={"white"}
        borderRadius={"0"}
        fontSize={"1.5rem"}
        {...props}
      />
    </>
  );
}
