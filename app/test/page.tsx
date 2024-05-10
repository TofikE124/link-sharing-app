"use client";
import { PropsWithChildren } from "react";
import ConfirmAlert from "../components/ConfirmAlert";

const page = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <button className="button-primary">Hello it is me</button>
      <button className="button-primary">Hello it is me</button>
      <button className="button-primary">Hello it is me</button>
      <button className="button-primary">Hello it is me</button>
      <button className="button-primary">Hello it is me</button>
      <ConfirmAlert
        confirmLabel="Confirm"
        cancelLabel="Cancel"
        title="Test"
        message="Test"
      ></ConfirmAlert>
    </div>
  );
};

export default page;
