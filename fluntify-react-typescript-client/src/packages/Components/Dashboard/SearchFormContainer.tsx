import React from "react";
import Layout from "../Layout";
import { Box, Text, BoxProps } from "@chakra-ui/react";
import SearchForm from "../SearchForm";
import { useRecoilState } from "recoil";
import { searchQueryAtom } from "../../recoil/atoms/quizListAtom";

interface SearchFormContainerProps extends BoxProps {}

export const SearchFormContainer = (props: SearchFormContainerProps) => {
  const [searchAtom, setSearchAtom] = useRecoilState(searchQueryAtom);
  return (
    <Layout centered={true} {...props} my="0">
      <Box color="white">
        <SearchForm />
      </Box>
      {/* Show the clear results prompt if user searched quizzes */}
      {searchAtom !== "" && (
        <Box display={"flex"} my="1rem">
          <Box
            backgroundColor={"blue.500"}
            color={"white"}
            px="4rem"
            rounded="md"
            cursor={"pointer"}
            onClick={() => {
              setSearchAtom("");
            }}
          >
            <Text>Clear Search Results</Text>
          </Box>
        </Box>
      )}
    </Layout>
  );
};
