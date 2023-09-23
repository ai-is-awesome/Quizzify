import { Box, Button } from "@chakra-ui/react";
import classNames from "classnames";

import { useEffect } from "react";
import Question from "../Question/Question";
import data from "../../mockData";
import useCardMatchLogic from "../../hooks/useCardMatchLogic";
import Layout from "../Layout";
import CustomBox from "../CustomBox";
import Container from "../Container";
import Navbar from "../Navbar";
import myTheme from "../../../theme";

export default function CardMatch({ d, mode }) {
  const { cards, handleClick, setCards, clicked } = useCardMatchLogic();

  useEffect(() => {
    setCards(data.wordPairData);
  }, []);

  if (mode === "fullScreen") {
    return (
      <>
        <Box
          backgroundColor={myTheme.primaryColor}
          width={"100vw"}
          color="white"
        >
          {" "}
          <Navbar user={{ status: "loggedout" }} />
        </Box>
        <Layout>
          <Container>
            <CustomBox>
              <Question questionText={"Match the following pairs of cards"} />
              {cards.map((obj, idx) => (
                <Button
                  key={obj.id}
                  bg="orange.100"
                  color="black"
                  marginRight="1rem"
                  marginBottom="2rem"
                  className={classNames(
                    idx === clicked && "card-pair-clicked",
                    obj.matched && "card-pair-matched",
                    obj.incorrectMatch && "card-pair-incorrect"
                  )}
                  onClick={() => handleClick(idx)}
                >
                  {obj.content}
                </Button>
              ))}
            </CustomBox>
          </Container>
        </Layout>
      </>
    );
  } else {
    return (
      <>
        <Question
          questionText={"Match the following pairs of cards"}
          fontSize="1.5rem"
          textAlign="center"
        />

        <Box
          display={"flex"}
          flexDirection={"row"}
          flexWrap={"wrap"}
          justifyContent={"center"}
        >
          {cards.map((obj, idx) => (
            <Button
              key={obj.id}
              bg="orange.100"
              color="black"
              marginRight="1rem"
              marginBottom="2rem"
              className={classNames(
                idx === clicked && "card-pair-clicked",
                obj.matched && "card-pair-matched",
                obj.incorrectMatch && "card-pair-incorrect"
              )}
              onClick={() => handleClick(idx)}
            >
              {obj.content}
            </Button>
          ))}
        </Box>
      </>
    );
  }
}
