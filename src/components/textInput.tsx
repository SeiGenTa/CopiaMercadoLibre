import React from "react";
import "./textInput.css";

const TextInput = ({
  icon,
  placeholder,
  id,
  style,
  onSubmit,
}: {
  icon?: React.JSX.Element;
  placeholder?: string;
  id?: string;
  style?: React.CSSProperties;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}) => {
  return (
    <form className="row" id="row-search" style={style} onSubmit={onSubmit}>
      <input
        type="text"
        className="search-input"
        id={`${id ?? ""}`}
        placeholder={placeholder}
      />

      <div
        style={{
          position: "absolute",
          alignContent: "center",
          right: "10px",
          color: "black",
          borderLeft: "1px solid #ccc",
          paddingLeft: "10px",
        }}
      >
        {icon}
      </div>
    </form>
  );
};

export default TextInput;
