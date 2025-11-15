import type { IButtonProps } from "../../interfaces/IButtonProps";
const AButton: React.FC<IButtonProps> = ({
  btnName,
  action,
  icon,
  bgColor,
}) => {
  return (
    <button
      onClick={action}
      className={` group h-14 md:h-8 pl-2 pr-2 m-2 min-w-28 flex flex-row items-center justify-between gap-1 rounded-tl-lg rounded-br-lg ${bgColor} dark:${bgColor} text-light-text dark:text-dark-text border-2 border-light-border dark:border-dark-border font-bold transition md:hover:shadow-light md:dark:hover:shadow-dark`}
      type="button"
    >
      <i className=" md:group-hover:scale-105 text-2xl">{icon} </i> {btnName}
    </button>
  );
};

export default AButton;
