/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
type IProps = {
  children: ReactNode;
};

export default function Button({ children }: IProps) {
  return (
    <button
      className=" hover:bg-orange-600 mb-2 hover:text-white  text-red-700 border border-red-400 cursor-pointer rounded mx-auto "
      onClick={() => (window as any).deleteBook.showModal()}
    >
      {children}
    </button>
  );
}
