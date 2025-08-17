import {MinusIcon, PlusIcon} from "@radix-ui/react-icons";

export default function CountButton({ type, setCount, locked }) {
  const handleCountBtnClick = (e) => {
    setCount((prev) => {
      if (type === 'add') {
        const newCount = prev + 1;
        if (newCount > 5) {
          return 5;
        }
        return newCount;
      } else {
        const newCount = prev - 1;
        if (newCount < 0) {
          return 0;
        }
        return newCount;
      }
    });

    e.currentTarget.blur();
  };

  return (
    <button className="count-btn" onClick={handleCountBtnClick} disabled={locked}>
      { type === 'add' ? <PlusIcon className="count-btn-icon"/> : <MinusIcon className="count-btn-icon"/> }
    </button>
  )
}