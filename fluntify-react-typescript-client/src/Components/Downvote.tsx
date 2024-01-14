import React, { useState } from "react";
import { IconContext } from "react-icons";
import { BiDownvote } from "react-icons/bi";

interface DownvoteProps {
  voted: boolean;
}

export const DownVote = (props: DownvoteProps) => {
  const [upvoted, setUpvoted] = useState(false);

  return (
    <>
      <IconContext.Provider
        value={{
          style: { cursor: "pointer", color: upvoted ? "red" : "white" },
        }}
      >
        <BiDownvote
          fontSize={props.voted ? "1.5rem" : "1.5rem"}
          onClick={() => {
            setUpvoted(!upvoted);
          }}
        />
      </IconContext.Provider>
    </>
  );
};
