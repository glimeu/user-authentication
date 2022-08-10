import React, { ChangeEvent, ReactNode } from "react";

interface LoginProps {
  title: string,
  type: string,
  htmlFor: string,
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
}

interface EventProps {
  event: ChangeEvent,
  target: HTMLInputElement,
  innerHTML: string,
  id: string,
}

export const SectionLoginUser: React.FC<LoginProps> = ({ title, type, htmlFor, setName, setEmail, setPassword }) => {

  function handleGeneric(event: ChangeEvent) {
    switch(event.target.id) {
      case 'name':
        console.log(event.target.value)
        return setName(event.target.value)
      case 'email':
        return setEmail(event.target.value)
      default:
        return setPassword(event.target.value)
    }
  }

  return (
    <section className="w-full flex flex-col">
      <label className="text-gray-900" htmlFor={htmlFor}>
        {title}
      </label>
      <input onChange={(event: ChangeEvent) => handleGeneric(event)} id={htmlFor} className="text-gray-900 rounded p-2 text-md  border-2 border-gray-900" type={type} />
    </section>
  );
};
