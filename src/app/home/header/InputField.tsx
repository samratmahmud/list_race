import {title} from "process";
import React from "react";

interface inputFieldProps extends React.HTMLProps<HTMLInputElement> {
  icon: string;
  title: string;
}

function InputField(props: inputFieldProps) {
  const {icon, title, ...rest} = props;
  return (
    <label className="flex items-center py-[21px] px-[30px]">
      <span className="text-base font-medium text-gray-800 capitalize">
        {title}
      </span>
      <input
        className="bg-transparent text-sm font-medium focus:outline-none placeholder:text-slate-600 text-gray-600 capitalize px-2.5 w-full placeholder:capitalize"
        {...rest}
      />
      <span>
        <img className="w-7 h-7" src={icon} alt="" />
      </span>
    </label>
  );
}

export default InputField;
