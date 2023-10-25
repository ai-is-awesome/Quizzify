import { Box, Img, Text } from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import myTheme from "../../theme";

export default function TextOnImage({ text, link, bg, url, ...props }) {
  const [clicked, setClicked] = useState(false);

  return (
    <Box>
      <Box
        background={bg}
        overflow={"hidden"}
        width={"150px"}
        position={"relative"}
        {...props}
        onClick={() => {
          console.log("clicked");
          setClicked((s) => !s);
        }}
        _hover={{ cursor: "pointer" }}
      >
        <Img
          src={
            url
              ? url
              : "https://unsplash.com/photos/29qzifjmP34/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZnJlbmNofGVufDB8fHx8MTY5MTg4MjU0N3ww&force=true"
          }
          w="150px"
          h="150px"
          rounded={"md"}
          opacity={".6"}
          objectFit={"cover"}
        />
        <Text
          position={"absolute"}
          bottom={"30%"}
          left="20%"
          color="white"
          fontSize={"1.5rem"}
          fontWeight={"black"}
        >
          {text}
        </Text>
      </Box>
      {clicked ? (
        <Box display={"flex"} justifyContent={"center"}>
          <Box bg="gray.100" rounded={"full"} p={".5rem"}>
            <AiOutlineCheck color="green" fontSize={"3rem"} />
          </Box>
        </Box>
      ) : (
        <></>
      )}
    </Box>
  );
}
