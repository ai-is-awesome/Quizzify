import { Box } from "@chakra-ui/react";
import TextInput from "./FormComponents/TextInput/TextInput";

export default function SearchForm() {
  return (
    <Box>
      <TextInput placeholder={"Search for a quiz"} />
    </Box>
  );
}
