import React from "react";
import "./textInput.css";

const TextInput = ({
  icon,
  placeholder,
  id,
  style,
}: {
  icon?: React.JSX.Element;
  placeholder?: string;
  id?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div className="row" id="row-search" style={style}>
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
    </div>
  );
};

export default TextInput;
