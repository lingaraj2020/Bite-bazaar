import React from "react";
import { CARD_IMG_URL,  } from "../../utils/Constants";

const Carousal1 = ({ restData }) => {
  return (
    <div className="slider__item">
      <img
        className="slider__image"
        src={CARD_IMG_URL + restData.imageId}
        alt={restData.accessibility.altText}
      />
    </div>
  );
};

export default Carousal1;