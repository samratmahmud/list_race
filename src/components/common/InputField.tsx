import {title} from "process";
import React from "react";

interface inputFieldProps extends React.HTMLProps<HTMLInputElement> {
  icon?: string;
  title?: string;
}

function InputField(props: inputFieldProps) {
  const {icon, title, className, ...rest} = props;
  return (
    <label className="flex items-center px-[30px]">
      {title && (
        <span className="text-base font-medium text-gray-800 py-[25px] capitalize">
          {title}
        </span>
      )}
      <input
        className={`bg-transparent ${className} font-medium focus:outline-none placeholder:text-slate-600 text-slate-600 px-2.5 w-full`}
        {...rest}
      />
      {icon && (
        <span>
          <img className="w-7 h-7" src={icon} alt="" />
        </span>
      )}
    </label>
  );
}

export default InputField;
