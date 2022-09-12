import cn from "classnames";
import Container from "./container";

const Alert = ({ preview }: { preview: boolean }) => {
  return (
    <div
      className={cn("border-b", {
        "bg-accent-7 border-accent-7 text-white": preview,
        "bg-accent-1 border-accent-2": !preview,
      })}
    >
      Hello
    </div>
  );
};

export default Alert;
