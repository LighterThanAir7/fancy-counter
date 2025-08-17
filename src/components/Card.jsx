import {useEffect, useState} from "react";
import Title from "./Title.jsx";
import Count from "./Count.jsx";
import ResetBtn from "./ResetBtn.jsx";
import ButtonContainer from "./ButtonContainer.jsx";
import CountButton from "./CountBtn.jsx";

export default function Card() {
  const [count, setCount] = useState(0);
  const locked = count === 5;

  useEffect(() => {
    const handleSpaceKeydown = (e) => {
      if (e.code === "Space") {
        const newCount = count + 1;
        if (newCount > 5 ) {
          setCount(count);
          return;
        }
        setCount(count + 1);
      }
    };
    window.addEventListener('keydown', handleSpaceKeydown);

    return () => window.removeEventListener('keydown', handleSpaceKeydown);
  }, [count]);

  return (
    <div className={`card${locked ? ' card--limit' : ''}`}>
      <Title locked={locked}/>
      <Count count={count}/>
      <ResetBtn setCount={setCount}/>
      <ButtonContainer>
        <CountButton type="substract" setCount={setCount} locked={locked}/>
        <CountButton type="add" setCount={setCount} locked={locked}/>
      </ButtonContainer>
    </div>
  )
}