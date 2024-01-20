import { Box, Button } from "@chakra-ui/react";
import TextInput from "./FormComponents/TextInput/TextInput";
import { useState } from "react";
import { searchQueryAtom } from "../../packages/recoil/atoms/quizListAtom";
import { useRecoilState } from "recoil";

export default function SearchForm() {
  const [search, setSearch] = useState<string>("");
  const [searchAtom, setSearchAtom] = useRecoilState(searchQueryAtom);

  return (
    <Box
      bg="blue.700"
      backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url()`}
      rounded={"md"}
      pt="3rem"
      px="1rem"
      pb="1rem"
      // border="white 1px solid"
    >
      <Box display={"flex"} flexDir={"column"} gap="2rem" w="70%" mx="auto">
        <TextInput
          placeholder={"Search for a quiz"}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          rounded={"md"}
        />
        <Box display={"flex"} justifyContent={"center"}>
          <Button
            bg={"green.500"}
            color={"white"}
            maxW={"fit-content"}
            onClick={() => setSearchAtom(search)}
          >
            Search
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
