import { ResetIcon } from "@radix-ui/react-icons";

export default function ResetBtn({ setCount}) {
  const handleResetBtnClick = (e) => {
    setCount(0);
    e.currentTarget.blur();
  };

  return (
    <button className="reset-btn" onClick={handleResetBtnClick}>
      <ResetIcon className="reset-btn-icon" />
    </button>
  )
}