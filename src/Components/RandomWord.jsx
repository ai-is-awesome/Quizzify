import { Box, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useRequest from "../hooks/useRequest";
import axios from "axios";

export default function RandomWord() {
  const [flipped, setFlipped] = useState(false);
  const { data, loading, error, fetch } = useRequest(() =>
    axios.post("http://localhost:3001/get_random_word_of_the_day")
  );

  const word = data?.data?.word;
  const translatedWord = data?.data?.translatedWord;

  const orignalJsx = (
    <>
      <Text>What does this mean in French?</Text>
      <Heading>{word ? word : "Loading..."} </Heading>
    </>
  );
  const flippedJsx = (
    <>
      <Text>The meaning of the word "{word}" is : </Text>
      <Heading>{translatedWord}</Heading>
    </>
  );

  useEffect(() => {
    fetch();
  }, []);

  console.log("Data is : ", data);
  console.log("Rando word: ");
  return (
    <>
      <Box
        _hover={{}}
        onClick={() => setFlipped(!flipped)}
        display={"flex"}
        alignItems={"center"}
        flexDir={"column"}
      >
        {!flipped ? orignalJsx : flippedJsx}
      </Box>
    </>
  );
}
