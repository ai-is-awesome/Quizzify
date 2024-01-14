import React, { useState } from "react";
import { IconContext } from "react-icons";
import { useColorModeValue } from "@chakra-ui/react";
import { BiDownvote, BiUpvote } from "react-icons/bi";

interface UpvoteProps {
  voted: boolean;
}

export const Upvote = (props: UpvoteProps) => {
  const [upvoted, setUpvoted] = useState(false);

  return (
    <>
      <IconContext.Provider
        value={{
          style: { cursor: "pointer", color: upvoted ? "green" : "white" },
        }}
      >
        <BiUpvote
          fontSize={props.voted ? "1.5rem" : "1.5rem"}
          onClick={() => {
            setUpvoted(!upvoted);
          }}
        />
      </IconContext.Provider>
    </>
  );
};
