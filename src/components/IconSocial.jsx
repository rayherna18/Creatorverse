import React from "react";

export const IconSocial = ({iconURL, url}) => {
  return (
    <>
      <a href={url}>
        <img src={iconURL} alt="icon" />
      </a>
    </>
  );
};
