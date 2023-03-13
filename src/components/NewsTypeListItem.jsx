import React from "react";

const NewsType = ({ children, props }) => {
  return (
    <li {...props} className="cursor-pointer">
      {children}
    </li>
  );
};

export default NewsType;
