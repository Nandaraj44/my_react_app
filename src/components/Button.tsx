import React from "react";

interface Props {
  children: string;
  onClickfunction: () => void;
}
const CustomButton = ({ children, onClickfunction }: Props) => {
  return (
    <button className="btn btn-primary" onClick={onClickfunction}>
      {children}
    </button>
  );
};
export default CustomButton;
