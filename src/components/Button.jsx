import React from "react";

/**
 * @description A button component
 * @param {String} children - text or nodes to render inside the button
 * @param {String} type - type of button, accepts "yellow" or "transparent" (default is "yellow")
 * @param {String} padding - padding of the button
 * @param {String} className - additional class name to add to the button
 * @param {String} color - additional color for text inside the button
 * @returns {ReactElement} a button element
 */
const Button = ({ children, type = "yellow", padding, className, color }) => {
  return (
    <button
      className={`btn ${className}`}
      style={{
        backgroundColor:
          type == "yellow"
            ? "var(--colorYellow)"
            : "var(--colorYellowTransparent)",
        padding: padding,
        border: type == "transparent" ? "1px solid var(--colorYellow)" : "none",
        color: color
          ? color
          : type == "transparent"
          ? "var(--colorWhite)"
          : "var(--colorBlack)",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
