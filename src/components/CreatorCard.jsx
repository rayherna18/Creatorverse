import React from "react";
import { SocialIcon } from "react-social-icons";

const CreatorCard = () => {
  return (
    <div>
      <h1>Creator Name</h1>
      <div>
        <SocialIcon url="https://www.youtube.com/" />
        <SocialIcon url="https://twitter.com/" />
        <SocialIcon url="https://www.instagram.com/" />
      </div>
      <p>Description</p>
    </div>
  );
};

export default CreatorCard;
