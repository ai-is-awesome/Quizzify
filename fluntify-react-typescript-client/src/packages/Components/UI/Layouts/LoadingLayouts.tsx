import React from "react";
import DynamicRenderer from "../../DynamicRenderer";
import { TopBar } from "../../Dashboard/TopBar";
import { SearchFormContainer } from "../../Dashboard/SearchFormContainer";
import { Box, Spinner } from "@chakra-ui/react";
import Layout from "../../Layout";

interface LoadingLayoutsProps {
  layoutType: "dashboard/spinnerBelowForm";
}

export const LoadingLayouts = (props: LoadingLayoutsProps) => {
  if (props.layoutType === "dashboard/spinnerBelowForm") {
    return (
      <DynamicRenderer sidebar={true}>
        <Box w={"100%"}>
          <Layout mt="0">
            <TopBar />
            <SearchFormContainer />
            <Box display={"flex"} justifyContent={"center"}>
              <Spinner size={"xl"} color="white" />
            </Box>
          </Layout>
        </Box>
      </DynamicRenderer>
    );
  }
};
