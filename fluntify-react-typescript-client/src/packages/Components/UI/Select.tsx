import { Select as ChakraSelect, chakra, useTheme } from "@chakra-ui/react";

export const Select = () => {
  return (
    <ChakraSelect
      placeholder="Filter Categories"
      // _placeholder={{ color: "red", background: "blue" }}
      css={{
        "& option[aria-selected='true'][value='']": {
          color: "red", // Change the color as per your preference
        },
      }}
      maxW={"max-content"}
      color={"white"}
      bg="blue.700"
      backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0,0,0,.5))`}
      border="none"
    >
      <SelectOption>Entertainment</SelectOption>
      <SelectOption>Sports</SelectOption>
      <SelectOption>Tech</SelectOption>
      <SelectOption>Option 4</SelectOption>
    </ChakraSelect>
  );
};

type SelectOptionProps = {
  //   value: string;
  children: React.ReactNode;
};

const SelectOption = (props: SelectOptionProps) => {
  const theme = useTheme();
  return (
    <option
      style={{
        background: theme.colors.blue[700],
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0,0,0,.5))",
        padding: "1rem",
      }}
    >
      {props.children}
    </option>
  );
};
