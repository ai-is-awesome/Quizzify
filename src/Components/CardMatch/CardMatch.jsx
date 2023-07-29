import { Button } from "@chakra-ui/react";
import classNames from "classnames";

import { useEffect } from "react";
import Question from "../Question/Question";
import data from "../../mockData";
import useCardMatchLogic from "../../hooks/useCardMatchLogic";

export default function CardMatch({ d }) {
  const { cards, handleClick, setCards, clicked } = useCardMatchLogic();

  useEffect(() => {
    setCards(data.wordPairData);
  }, []);

  return (
    <>
      <Question questionText={"Match the following pairs of cards"} />
      {cards.map((obj, idx) => (
        <Button
          key={obj.id}
          bg="white"
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
    </>
  );
}
