import { useRef, useState } from "react";

export default function useCardMatchLogic() {
  const [clicked, setClicked] = useState(null);
  const [cards, setCards] = useState([]);
  const incorrectCardRef = useRef(null);

  const handleClick = (idx) => {
    if (clicked !== null) {
      // If the match is correct, update the matched state
      if (cards[idx].matchingId === cards[clicked].matchingId) {
        setCards((prevCards) =>
          prevCards.map((card, i) =>
            i === idx || i === clicked ? { ...card, matched: true } : card
          )
        );
      }
      // If the user matches the wrong card, indicate the incorrect match
      else {
        setCards((prevCards) =>
          prevCards.map((card, i) =>
            i === idx || i === clicked
              ? { ...card, incorrectMatch: true }
              : card
          )
        );
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) => ({ ...card, incorrectMatch: false }))
          );
        }, 800);
      }
      setClicked(null);
    } else {
      setClicked(idx);
    }
  };

  return { cards, handleClick, incorrectCardRef, setCards, clicked };
}
