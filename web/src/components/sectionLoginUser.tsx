import React, { ReactNode } from "react";

interface LoginProps {
  title: string,
  type: string,
  htmlFor: string,
}

export const SectionLoginUser: React.FC<LoginProps> = ({ title, type, htmlFor }) => {
  return (
    <section className=" p-4 w-full flex flex-col">
      <label className="text-white" htmlFor={htmlFor}>
        {title}
      </label>
      <input className="w-full" type={type} />
    </section>
  );
};
